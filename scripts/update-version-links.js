#!/usr/bin/env node
/**
 * update-version-links.js
 * WS5a + WS5b: Update IBM Docs version links and Genie slug.
 *
 * Pass 1 — version bump:
 *   devops-loop/2.0.0  ->  devops-loop/2.0.2
 *   devops-loop/2.0.1  ->  devops-loop/2.0.2
 *
 * Pass 2 — Genie slug replacement (confirmed new slug for 2.0.2):
 *   ?topic=loop-genie-tech-preview                         ->  ?topic=integrations
 *   ?topic=loop-ai-provider-integration-genie-tech-preview ->  ?topic=integrations
 *
 * Usage:
 *   node scripts/update-version-links.js --dry-run
 *   node scripts/update-version-links.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const ROOT    = path.resolve(__dirname, '..');
const DOCS    = path.join(ROOT, 'docs');

function* walkMd(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkMd(full);
    else if (entry.name.endsWith('.md')) yield full;
  }
}

const replacements = [
  // Pass 1: version bump
  { from: /devops-loop\/2\.0\.0/g, to: 'devops-loop/2.0.2', label: '2.0.0 -> 2.0.2' },
  { from: /devops-loop\/2\.0\.1/g, to: 'devops-loop/2.0.2', label: '2.0.1 -> 2.0.2' },
  // Pass 2: Genie slug (after version is already 2.0.2 in the string)
  { from: /\?topic=loop-ai-provider-integration-genie-tech-preview/g, to: '?topic=integrations', label: 'Genie AI-provider slug -> integrations' },
  { from: /\?topic=loop-genie-tech-preview/g,                         to: '?topic=integrations', label: 'Genie tech-preview slug -> integrations' },
];

let totalFiles = 0;
let totalChanges = 0;

for (const mdPath of walkMd(DOCS)) {
  const original = fs.readFileSync(mdPath, 'utf8');
  let updated = original;

  const fileChanges = [];
  for (const r of replacements) {
    const before = updated;
    updated = updated.replace(r.from, r.to);
    if (updated !== before) {
      const count = (before.match(r.from) || []).length;
      fileChanges.push(`  ${count}x ${r.label}`);
    }
  }

  if (updated !== original) {
    const rel = path.relative(ROOT, mdPath);
    console.log(`${DRY_RUN ? '[DRY] ' : ''}${rel}`);
    fileChanges.forEach(c => console.log(c));
    if (!DRY_RUN) fs.writeFileSync(mdPath, updated, 'utf8');
    totalFiles++;
    totalChanges += fileChanges.length;
  }
}

console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}Done — ${totalFiles} file(s), ${totalChanges} replacement type(s) applied.`);
if (DRY_RUN) console.log('Run without --dry-run to apply.');
