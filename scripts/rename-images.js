#!/usr/bin/env node
/**
 * rename-images.js
 * Reads scripts/image-map.json — renames image files on disk and updates all
 * .md references atomically.
 *
 * Usage:
 *   node scripts/rename-images.js --dry-run   # preview only, no writes
 *   node scripts/rename-images.js             # apply changes
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const DRY_RUN  = process.argv.includes('--dry-run');
const ROOT     = path.resolve(__dirname, '..');
const MAP_FILE = path.join(__dirname, 'image-map.json');
const DOCS_DIR = path.join(ROOT, 'docs');

if (!fs.existsSync(MAP_FILE)) {
  console.error(`ERROR: ${MAP_FILE} not found. Run generate-image-map.js first.`);
  process.exit(1);
}

const imageMap = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));

// ---------------------------------------------------------------------------
// Step 1: Build flat list of rename operations
// ---------------------------------------------------------------------------

const renameOps  = [];   // { oldAbs, newAbs, oldName, newName, folder }
const deleteOps  = [];   // { absPath, filename }
const mdRewrites = {};   // oldBasename → newBasename (for .md search-replace)

for (const [relFolder, files] of Object.entries(imageMap)) {
  const absFolder = path.join(ROOT, relFolder);

  for (const [oldName, entry] of Object.entries(files)) {
    const oldAbs = path.join(absFolder, oldName);

    if (entry === 'DELETE') {
      deleteOps.push({ absPath: oldAbs, filename: oldName, folder: relFolder });
      continue;
    }

    const { newName, newFolder } = typeof entry === 'string' ? { newName: entry } : entry;

    if (!newName || newName === oldName) continue;  // nothing to do

    const targetFolder = newFolder ? path.join(ROOT, newFolder) : absFolder;
    const newAbs       = path.join(targetFolder, newName);

    renameOps.push({
      oldAbs, newAbs, oldName, newName,
      folder: relFolder,
      newFolder: newFolder || null,
    });

    // Track for .md rewriting — both the bare filename and relative path variants
    mdRewrites[oldName] = { newName, newFolder };
  }
}

// ---------------------------------------------------------------------------
// Step 2: Collect all .md files under docs/
// ---------------------------------------------------------------------------

function* walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkDir(full);
    else if (entry.name.endsWith('.md')) yield full;
  }
}

const mdFiles = [...walkDir(DOCS_DIR)];

// ---------------------------------------------------------------------------
// Step 3: Determine .md files that need changes (build a patch set)
// ---------------------------------------------------------------------------

/** Escape special regex chars in a string */
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const mdPatches = [];  // { filePath, oldContent, newContent, replacements }

for (const mdPath of mdFiles) {
  let content = fs.readFileSync(mdPath, 'utf8');
  let updated = content;
  const replacements = [];

  for (const [oldName, { newName, newFolder }] of Object.entries(mdRewrites)) {
    if (!updated.includes(oldName)) continue;

    if (newFolder) {
      // Cross-folder move: also rewrite the path segment
      // Match any path ending with /oldName or just oldName
      const re = new RegExp(`([./a-zA-Z0-9_-]*/)?${escapeRegex(oldName)}`, 'g');
      const relNewFolder = newFolder;  // e.g. docs/media
      // Convert to relative path from the .md file's location
      const mdDir   = path.dirname(mdPath);
      const newAbs  = path.join(ROOT, newFolder, newName);
      const relPath = path.relative(mdDir, newAbs).replace(/\\/g, '/');
      const before  = updated;
      updated = updated.replace(re, relPath);
      if (updated !== before) replacements.push(`${oldName} → ${relPath} (moved)`);
    } else {
      // Same-folder rename: replace just the filename
      const re = new RegExp(escapeRegex(oldName), 'g');
      const before = updated;
      updated = updated.replace(re, newName);
      if (updated !== before) replacements.push(`${oldName} → ${newName}`);
    }
  }

  if (updated !== content) {
    mdPatches.push({ filePath: mdPath, oldContent: content, newContent: updated, replacements });
  }
}

// ---------------------------------------------------------------------------
// Step 4: Report plan
// ---------------------------------------------------------------------------

console.log(`\n${ DRY_RUN ? '[DRY RUN] ' : ''}Image rename plan`);
console.log('='.repeat(60));
console.log(`  Files to rename : ${renameOps.length}`);
console.log(`  Files to DELETE : ${deleteOps.length}`);
console.log(`  .md files to update : ${mdPatches.length}`);
console.log('');

if (DRY_RUN) {
  console.log('--- RENAMES ---');
  for (const op of renameOps) {
    const note = op.newFolder ? ` (→ ${op.newFolder})` : '';
    console.log(`  ${op.folder}/${op.oldName}  →  ${op.newName}${note}`);
  }
  console.log('\n--- DELETES ---');
  for (const op of deleteOps) {
    console.log(`  DELETE  ${op.folder}/${op.filename}`);
  }
  console.log('\n--- .md patches ---');
  for (const p of mdPatches) {
    const rel = path.relative(ROOT, p.filePath);
    console.log(`  ${rel}  (${p.replacements.length} replacement(s))`);
    for (const r of p.replacements) console.log(`    ${r}`);
  }
  console.log('\nRun without --dry-run to apply.');
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Step 5: Apply — renames first, then .md rewrites, then deletes
// ---------------------------------------------------------------------------

let renamed  = 0;
let errors   = 0;

for (const op of renameOps) {
  if (!fs.existsSync(op.oldAbs)) {
    console.warn(`  WARN  source not found: ${op.oldAbs}`);
    errors++;
    continue;
  }
  const dir = path.dirname(op.newAbs);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  try {
    fs.renameSync(op.oldAbs, op.newAbs);
    console.log(`  ✓ ${path.relative(ROOT, op.oldAbs)}  →  ${path.relative(ROOT, op.newAbs)}`);
    renamed++;
  } catch (e) {
    console.error(`  ✗ ${op.oldAbs}: ${e.message}`);
    errors++;
  }
}

let mdTouched = 0;
for (const p of mdPatches) {
  try {
    fs.writeFileSync(p.filePath, p.newContent, 'utf8');
    console.log(`  ✓ updated ${path.relative(ROOT, p.filePath)} (${p.replacements.length} ref(s))`);
    mdTouched++;
  } catch (e) {
    console.error(`  ✗ ${p.filePath}: ${e.message}`);
    errors++;
  }
}

let deleted = 0;
for (const op of deleteOps) {
  if (!fs.existsSync(op.absPath)) {
    console.warn(`  WARN  delete target not found: ${op.absPath}`);
    continue;
  }
  try {
    fs.unlinkSync(op.absPath);
    console.log(`  🗑  deleted ${op.folder}/${op.filename}`);
    deleted++;
  } catch (e) {
    console.error(`  ✗ delete failed ${op.absPath}: ${e.message}`);
    errors++;
  }
}

// ---------------------------------------------------------------------------
// Step 6: Verify — scan .md files for any old names that were not replaced
// ---------------------------------------------------------------------------

console.log('\n--- Verification: checking for unresolved old names in .md files ---');
let unresolved = 0;

for (const mdPath of mdFiles) {
  const content = fs.readFileSync(mdPath, 'utf8');
  for (const oldName of Object.keys(mdRewrites)) {
    if (content.includes(oldName)) {
      console.warn(`  WARN  ${path.relative(ROOT, mdPath)} still references: ${oldName}`);
      unresolved++;
    }
  }
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

console.log('\n' + '='.repeat(60));
console.log(`  Renamed  : ${renamed}`);
console.log(`  Deleted  : ${deleted}`);
console.log(`  .md updated : ${mdTouched}`);
console.log(`  Unresolved refs : ${unresolved}`);
console.log(`  Errors   : ${errors}`);
if (errors === 0 && unresolved === 0) {
  console.log('\n✓ All done — no issues.');
} else {
  console.log('\n⚠  Completed with warnings — review output above.');
}
