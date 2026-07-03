#!/usr/bin/env node
/**
 * check-orphan-images.js
 * WS6: Find all image files in media/ folders that are not referenced in any .md file.
 *
 * Usage:
 *   node scripts/check-orphan-images.js
 *   node scripts/check-orphan-images.js --summary   # counts only, no per-file list
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const SUMMARY_ONLY = process.argv.includes('--summary');
const ROOT         = path.resolve(__dirname, '..');
const DOCS         = path.join(ROOT, 'docs');
const IMAGE_EXTS   = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);

// ---------------------------------------------------------------------------
// Step 1: collect all image files under docs/
// ---------------------------------------------------------------------------
function* walkAll(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkAll(full);
    else yield full;
  }
}

const allImages = [];  // absolute paths
for (const f of walkAll(DOCS)) {
  if (IMAGE_EXTS.has(path.extname(f).toLowerCase())) allImages.push(f);
}

// ---------------------------------------------------------------------------
// Step 2: collect all .md content
// ---------------------------------------------------------------------------
const allMdContent = [];  // raw strings concatenated
for (const f of walkAll(DOCS)) {
  if (f.endsWith('.md')) allMdContent.push(fs.readFileSync(f, 'utf8'));
}
const megaContent = allMdContent.join('\n');

// ---------------------------------------------------------------------------
// Step 3: for each image check if its basename appears anywhere in .md files
// We use basename matching (not full path) to stay robust against relative path
// variations. This may produce a small number of false negatives (same-named
// files in different folders) — acceptable for an orphan check.
// ---------------------------------------------------------------------------

let orphanCount   = 0;
let referencedCount = 0;

for (const imgPath of allImages.sort()) {
  const basename = path.basename(imgPath);
  const isReferenced = megaContent.includes(basename);

  if (!isReferenced) {
    orphanCount++;
    if (!SUMMARY_ONLY) {
      console.log(`  ORPHAN  ${path.relative(ROOT, imgPath)}`);
    }
  } else {
    referencedCount++;
  }
}

console.log('\n' + '='.repeat(60));
console.log(`  Total images   : ${allImages.length}`);
console.log(`  Referenced     : ${referencedCount}`);
console.log(`  Orphans        : ${orphanCount}`);
if (orphanCount === 0) {
  console.log('\n  ✓ No orphan images found.');
} else {
  console.log(`\n  ℹ  ${orphanCount} orphan image(s) — safe to delete if no longer needed.`);
}
