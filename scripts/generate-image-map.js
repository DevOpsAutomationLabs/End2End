#!/usr/bin/env node
/**
 * generate-image-map.js
 * Scans all docs/[section]/media/ directories and produces a draft scripts/image-map.json
 * applying kebab-case naming rules automatically.
 * Human reviews and corrects the output before running rename-images.js.
 *
 * Usage: node scripts/generate-image-map.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Folder → capability prefix mapping
// ---------------------------------------------------------------------------
const PREFIX_MAP = {
  'docs/media':                               'common-',
  'docs/demo/media':                          'demo-',
  'docs/learn/introduction/media':            'intro-',
  'docs/learn/introduction/about/media':      'intro-about-',
  'docs/learn/introduction/genie/media':      'intro-genie-',
  'docs/learn/introduction/loops/media':      'intro-loops-',
  'docs/learn/introduction/teamspace/media':  'intro-teamspace-',
  'docs/learn/plan/media':                    'plan-',
  'docs/learn/plan/ai_assistant/media':       'plan-ai-',
  'docs/learn/plan/boards/media':             'plan-boards-',
  'docs/learn/plan/newapp/media':             'plan-newapp-',
  'docs/learn/plan/newproject/media':         'plan-newproject-',
  'docs/learn/plan/queries/media':            'plan-queries-',
  'docs/learn/plan/setup/media':              'plan-setup-',
  'docs/learn/plan/workitems/media':          'plan-workitems-',
  'docs/learn/code/media':                    'code-',
  'docs/learn/control/media':                 'control-',
  'docs/learn/build/media':                   'build-',
  'docs/learn/deploy/media':                  'deploy-',
  'docs/learn/deploy/applications/media':     'deploy-app-',
  'docs/learn/deploy/components/media':       'deploy-comp-',
  'docs/learn/deploy/processes/media':        'deploy-proc-',
  'docs/learn/deploy/resources/media':        'deploy-res-',
  'docs/learn/deploy/settings/media':         'deploy-settings-',
  'docs/learn/measure/media':                 'measure-',
  'docs/learn/test/media':                    'test-',
  'docs/learn/secure/media':                  'secure-',
  'docs/learn/release/media':                 'release-',
};

// Static diagram images in deploy/media that should not be recaptured by Playwright
const NO_CAPTURE_DEPLOY = new Set([
  'process_diagram.png', 'deployment_process.png', 'navigate.png',
  'jenkins_pipeline.png', 'install_component.png', 'edit_pull_docker.png',
  'edit_process.png', 'deploy_environment.png', 'dashboard.png',
  'control_email.png', 'applications_run_page.png', 'add_component.png',
]);

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Walk a directory recursively, yield file paths. */
function* walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkDir(full);
    else yield full;
  }
}

/** Find all media/ directories under docs/. */
function findMediaDirs(root) {
  const results = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const sub = path.join(root, entry.name);
    if (entry.name === 'media') {
      results.push(sub);
    } else {
      results.push(...findMediaDirs(sub));
    }
  }
  return results;
}

/**
 * Convert a filename stem to kebab-case.
 * - capabilityWord: the bare prefix word derived from the folder prefix (e.g. "control", "measure")
 *   so we can strip a redundant leading word from the stem before adding the prefix.
 * - Converts CamelCase / PascalCase / underscores / spaces → dashes
 * - Detects trailing numeric → zero-pads to 2 digits
 */
function toKebab(stem, capabilityWord) {
  let s = stem;

  // Remove leading ALL_CAPS prefix separated by _ (e.g. CONTROL_, DEPLOY_, BUILD_)
  s = s.replace(/^[A-Z]{2,}_/, '');

  // Remove leading word that is all-caps followed by underscore (edge cases)
  s = s.replace(/^[A-Z]+_/, '');

  // Replace underscores and spaces with dashes
  s = s.replace(/[_ ]+/g, '-');

  // Insert dash before transitions: lowercase→uppercase, digit→letter, letter→digit
  s = s.replace(/([a-z])([A-Z])/g, '$1-$2');
  s = s.replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2');
  s = s.replace(/([a-zA-Z])(\d)/g, '$1-$2');
  s = s.replace(/(\d)([a-zA-Z])/g, '$1-$2');

  // Lowercase everything
  s = s.toLowerCase();

  // Strip leading word if it duplicates the capability prefix
  // e.g. stem "control-sidebar-home" with capabilityWord "control" → "sidebar-home"
  if (capabilityWord) {
    const word = capabilityWord.toLowerCase().replace(/-$/, '');  // strip trailing dash
    const wordRe = new RegExp('^' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '-');
    s = s.replace(wordRe, '');
  }

  // Collapse multiple dashes
  s = s.replace(/-+/g, '-').replace(/^-|-$/g, '');

  // Zero-pad trailing numeric suffix  e.g. -1 → -01, -2 → -02 (but leave -01 alone)
  s = s.replace(/-(\d)$/, '-0$1');

  return s;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(__dirname, 'image-map.json');

const mediaFolders = findMediaDirs(path.join(ROOT, 'docs'));
const result = {};
let totalImages = 0;
let deleteCount = 0;
let reviewCount = 0;

for (const absFolder of mediaFolders) {
  const relFolder = path.relative(ROOT, absFolder).replace(/\\/g, '/');
  const prefix    = PREFIX_MAP[relFolder] || 'unknown-';
  const isUnknownPrefix = prefix === 'unknown-';
  // Derive the first word of the prefix for double-prefix stripping (e.g. "control-" -> "control")
  const capabilityWord  = prefix.split('-')[0];

  const folderMap = {};

  const files = fs.readdirSync(absFolder).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return IMAGE_EXTS.has(ext);
  });

  if (files.length === 0) continue;

  for (const filename of files.sort()) {
    const ext  = path.extname(filename).toLowerCase();
    const stem = path.basename(filename, ext);
    totalImages++;

    // Auto-DELETE: files with " copy" in the name
    if (stem.toLowerCase().includes(' copy')) {
      folderMap[filename] = 'DELETE';
      deleteCount++;
      continue;
    }

    const newExt = ext === '.jpg' || ext === '.jpeg' ? '.png' : ext;  // normalise jpg→png

    // Detect files that are already in correct kebab-case format (all lowercase + dashes + digits).
    // These need no rename — only emit metadata flags when relevant.
    const alreadyKebab = /^[a-z0-9]+(-[a-z0-9]+)*$/.test(stem);
    if (alreadyKebab && ext === newExt) {
      // File is already correctly named — record only if it needs a noCapture flag
      const entry = { newName: filename };
      let hasFlag = false;

      if (relFolder === 'docs/media' && filename.startsWith('common-desktop-')) {
        entry.noCapture = true; hasFlag = true;
      }
      if (relFolder === 'docs/learn/deploy/media' && NO_CAPTURE_DEPLOY.has(filename)) {
        entry.noCapture = true; hasFlag = true;
      }

      // Always emit the entry so rename-images.js can still update .md refs if needed
      folderMap[filename] = entry;
      continue;
    }

    const kebab   = toKebab(stem, capabilityWord);
    const newName = prefix + kebab + newExt;

    const entry = { newName };

    // noCapture: Desktop_* files in docs/media (may not be kebab yet)
    if (relFolder === 'docs/media' && filename.startsWith('Desktop_')) {
      entry.noCapture = true;
    }

    // noCapture: known static diagrams in deploy/media
    if (relFolder === 'docs/learn/deploy/media' && NO_CAPTURE_DEPLOY.has(filename)) {
      entry.noCapture = true;
    }

    // REVIEW flag: unknown prefix or name looks ambiguous
    if (isUnknownPrefix || kebab.startsWith('unknown')) {
      entry.review = 'REVIEW — prefix not recognised, verify new name';
      reviewCount++;
    }

    folderMap[filename] = entry;
  }

  if (Object.keys(folderMap).length > 0) {
    result[relFolder] = folderMap;
  }
}

fs.writeFileSync(OUTPUT, JSON.stringify(result, null, 2) + '\n');

console.log(`✓ image-map.json written to ${OUTPUT}`);
console.log(`  Images scanned : ${totalImages}`);
console.log(`  Auto-DELETE    : ${deleteCount}`);
console.log(`  Needs REVIEW   : ${reviewCount}`);
console.log('');
console.log('Next steps:');
console.log('  1. Review scripts/image-map.json — correct any auto-generated names');
console.log('  2. Run: node scripts/rename-images.js --dry-run');
console.log('  3. Run: node scripts/rename-images.js');
