#!/usr/bin/env node
/**
 * check-image-refs.js
 * WS6: Find all image references in .md files and verify the target file exists on disk.
 *
 * Checks:
 *   - Markdown image syntax:      ![alt](path/to/image.png)
 *   - Reference-style definition: [label]: path/to/image.png
 *   - MkDocs attr-list images:    { .class } (skipped — not path refs)
 *
 * Usage:
 *   node scripts/check-image-refs.js
 *   node scripts/check-image-refs.js --errors-only   # suppress OK lines
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ERRORS_ONLY = process.argv.includes('--errors-only');
const ROOT        = path.resolve(__dirname, '..');
const DOCS        = path.join(ROOT, 'docs');
const IMAGE_EXTS  = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);

// Regex patterns for image path extraction
const PATTERNS = [
  // ![alt text](relative/path.png)  or  ![alt](relative/path.png "title")
  /!\[.*?\]\(([^)"\s]+)/g,
  // [LABEL]: relative/path.png
  /^\s*\[[^\]]+\]:\s+(\S+)/gm,
];

function* walkMd(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkMd(full);
    else if (entry.name.endsWith('.md')) yield full;
  }
}

function extractImageRefs(content) {
  const refs = [];
  for (const re of PATTERNS) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(content)) !== null) {
      const ref = m[1].trim();
      // Only consider image extensions; skip http(s) external links
      const ext = path.extname(ref).toLowerCase();
      if (!IMAGE_EXTS.has(ext)) continue;
      if (ref.startsWith('http://') || ref.startsWith('https://')) continue;
      refs.push(ref);
    }
  }
  return refs;
}

let totalRefs   = 0;
let brokenRefs  = 0;
let checkedFiles = 0;

for (const mdPath of walkMd(DOCS)) {
  const content  = fs.readFileSync(mdPath, 'utf8');
  const mdDir    = path.dirname(mdPath);
  const refs     = extractImageRefs(content);
  if (refs.length === 0) continue;
  checkedFiles++;

  for (const ref of refs) {
    totalRefs++;
    const absRef = path.resolve(mdDir, ref);
    const exists = fs.existsSync(absRef);

    if (!exists) {
      const rel = path.relative(ROOT, mdPath);
      console.log(`  ✗  ${rel}  →  ${ref}  (FILE NOT FOUND)`);
      brokenRefs++;
    } else if (!ERRORS_ONLY) {
      // Uncomment to see OK lines (verbose):
      // console.log(`  ✓  ${path.relative(ROOT, mdPath)}  →  ${ref}`);
    }
  }
}

console.log('\n' + '='.repeat(60));
console.log(`  Files checked  : ${checkedFiles}`);
console.log(`  Image refs     : ${totalRefs}`);
console.log(`  Broken refs    : ${brokenRefs}`);
if (brokenRefs === 0) {
  console.log('\n  ✓ All image references resolve to existing files.');
} else {
  console.log(`\n  ⚠  ${brokenRefs} broken reference(s) found — fix before building.`);
  process.exit(1);
}
