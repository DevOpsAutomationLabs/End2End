#!/usr/bin/env node
/**
 * update-switcher-text.js
 * WS5c: Update app switcher location text from "top left" to "right side".
 *
 * Standard replace (10 files):
 *   "central app switcher on the top left of your screen"
 *   -> "central app switcher on the right side of your screen"
 *
 * Manual reword (introduction/index.md line 72 only):
 *   "central app switcher on the top left Central Solution/App Switcher"
 *   -> "central app switcher on the right side of your screen"
 *
 * Excluded: docs/learn/plan/newproject/index.md
 *   ("top left" there refers to the Edit button, not the app switcher)
 *
 * Usage:
 *   node scripts/update-switcher-text.js --dry-run
 *   node scripts/update-switcher-text.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const ROOT    = path.resolve(__dirname, '..');

// Files receiving the standard pattern replace
const STANDARD_FILES = [
  'docs/learn/plan/index.md',
  'docs/learn/code/index.md',
  'docs/learn/control/index.md',
  'docs/learn/build/index.md',
  'docs/learn/deploy/index.md',
  'docs/learn/measure/index.md',
  'docs/learn/release/index.md',
  'docs/learn/test/index.md',
  'docs/demo/demo_classic.md',
  'docs/setup.md',
];

const STANDARD_FROM = 'central app switcher on the top left of your screen';
const STANDARD_TO   = 'central app switcher on the right side of your screen';

// Manual reword for introduction/index.md (redundant label removed)
const INTRO_FILE = 'docs/learn/introduction/index.md';
const INTRO_FROM = 'central app switcher on the top left Central Solution/App Switcher';
const INTRO_TO   = 'central app switcher on the right side of your screen';

let totalFiles = 0;
let totalChanges = 0;

function applyReplace(relPath, from, to) {
  const absPath = path.join(ROOT, relPath);
  if (!fs.existsSync(absPath)) {
    console.warn(`  WARN: file not found: ${relPath}`);
    return;
  }
  const original = fs.readFileSync(absPath, 'utf8');
  const updated  = original.split(from).join(to);   // literal replace, all occurrences
  if (updated === original) {
    console.log(`  (no match) ${relPath}`);
    return;
  }
  const count = original.split(from).length - 1;
  console.log(`${DRY_RUN ? '[DRY] ' : ''}${relPath}  (${count} occurrence(s))`);
  if (!DRY_RUN) fs.writeFileSync(absPath, updated, 'utf8');
  totalFiles++;
  totalChanges += count;
}

console.log('--- Standard switcher text replace ---');
for (const f of STANDARD_FILES) applyReplace(f, STANDARD_FROM, STANDARD_TO);

console.log('\n--- Manual reword: introduction/index.md ---');
applyReplace(INTRO_FILE, INTRO_FROM, INTRO_TO);

console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}Done — ${totalFiles} file(s), ${totalChanges} occurrence(s) updated.`);
if (DRY_RUN) console.log('Run without --dry-run to apply.');
