'use strict';

/**
 * capture.js
 * Main runner — iterates screenshot-map.js and captures each image.
 *
 * Usage:
 *   node scripts/screenshots/capture.js                   # capture all
 *   node scripts/screenshots/capture.js --section=control # capture one section
 *   node scripts/screenshots/capture.js --dry-run         # list entries, no browser
 *
 * Requirements:
 *   npm install playwright dotenv
 *   npx playwright install chromium
 *
 *   Copy scripts/screenshots/.env.example to scripts/screenshots/.env and fill in credentials.
 */

const path = require('path');

// Load .env only when actually running (not dry-run) — avoids requiring dotenv for list-only mode
const DRY_RUN_EARLY = process.argv.includes('--dry-run');
if (!DRY_RUN_EARLY) {
  try {
    require('dotenv').config({ path: path.join(__dirname, '.env') });
  } catch (_) {
    // dotenv not installed — will fail later with a clear message if credentials missing
  }
}

let chromium;
if (!DRY_RUN_EARLY) {
  try {
    ({ chromium } = require('playwright'));
  } catch (e) {
    console.error('ERROR: playwright not installed. Run: cd scripts/screenshots && npm install && npx playwright install chromium');
    process.exit(1);
  }
}

const { authenticate }           = require('./login');
const { saveScreenshot, waitForSelector, elementScreenshot, viewportScreenshot, dialogScreenshot } = require('./helpers');
const ENTRIES                    = require('./screenshot-map');
const { viewport: viewportCfg, headless, slowMo, timeout: DEFAULT_TIMEOUT } = require('./viewport');

const ROOT     = path.resolve(__dirname, '..', '..');
const DRY_RUN  = DRY_RUN_EARLY;
const SECTION  = (() => {
  const flag = process.argv.find(a => a.startsWith('--section='));
  return flag ? flag.split('=')[1].toLowerCase() : null;
})();

const LOOP_URL       = process.env.LOOP_URL;
const LOOP_TEAMSPACE = process.env.LOOP_TEAMSPACE;
const LOOP_LOOP      = process.env.LOOP_LOOP;
const LOOP_USER      = process.env.LOOP_USER;
const LOOP_PASS      = process.env.LOOP_PASS;

if (!DRY_RUN && (!LOOP_URL || !LOOP_USER || !LOOP_PASS)) {
  console.error('ERROR: LOOP_URL, LOOP_USER, LOOP_PASS must be set in scripts/screenshots/.env');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Filter entries
// ---------------------------------------------------------------------------

let entries = ENTRIES;
if (SECTION) {
  entries = ENTRIES.filter(e => (e.section || '').toLowerCase() === SECTION);
  if (entries.length === 0) {
    console.error(`No entries found for --section=${SECTION}. Check section values in screenshot-map.js.`);
    process.exit(1);
  }
}

console.log(`\nCapture run${DRY_RUN ? ' [DRY RUN]' : ''}`);
console.log(`  Entries : ${entries.length}${SECTION ? ` (section: ${SECTION})` : ''}`);
console.log('');

if (DRY_RUN) {
  for (const e of entries) {
    console.log(`  [${e.type.padEnd(8)}] ${e.outputDir}/${e.name}.png  ← ${e.url}`);
  }
  console.log(`\n${entries.length} entries would be captured.`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Build the loop-context URL prefix
// ---------------------------------------------------------------------------
// After login the app is at LOOP_URL (/automation/).
// Navigating into a teamspace+loop establishes context for capability paths.
// Adjust LOOP_CONTEXT_PATH if the URL format differs in 2.0.2.
const baseUrl    = LOOP_URL.replace(/\/$/, '');   // strip trailing slash

/**
 * Resolve an entry URL to a fully-qualified URL.
 * entry.url is either:
 *   - an absolute path starting with / (e.g. '/plan')
 *   - a full https:// URL
 */
function resolveUrl(entryUrl) {
  if (entryUrl.startsWith('http')) return entryUrl;
  return `${baseUrl}${entryUrl}`;
}

// ---------------------------------------------------------------------------
// Main capture loop
// ---------------------------------------------------------------------------

(async () => {
  const browser = await chromium.launch({ headless, slowMo });

  let page, context;
  try {
    ({ page, context } = await authenticate(browser, {
      url: baseUrl,
      teamspace: LOOP_TEAMSPACE,
      loop: LOOP_LOOP,
      user: LOOP_USER,
      pass: LOOP_PASS,
    }));
  } catch (e) {
    console.error(`\n✗ Authentication failed: ${e.message}`);
    await browser.close();
    process.exit(1);
  }

  // Navigate into teamspace → loop to establish URL context
  // This is required so capability paths like /plan, /control etc. resolve correctly.
  // NOTE: verify this URL pattern matches 2.0.2 in the browser after first login.
  const loopContextUrl = `${baseUrl}/teamspace/${LOOP_TEAMSPACE}/loop/${LOOP_LOOP}`;
  try {
    await page.goto(loopContextUrl, { waitUntil: 'networkidle', timeout: 20_000 });
    console.log(`  [nav] Established loop context: ${loopContextUrl}`);
  } catch (e) {
    console.warn(`  [nav] Warning: could not navigate to loop context (${e.message})`);
    console.warn('        Capability URLs may not resolve correctly — verify LOOP_TEAMSPACE and LOOP_LOOP.');
  }

  const results = { captured: 0, failed: 0, failures: [] };

  for (const entry of entries) {
    const outFile = `${entry.outputDir}/${entry.name}.png`;
    try {
      // Navigate to entry URL
      const url = resolveUrl(entry.url);
      await page.goto(url, { waitUntil: 'networkidle', timeout: DEFAULT_TIMEOUT });

      // Wait for stable state
      if (entry.waitFor) {
        await waitForSelector(page, entry.waitFor, DEFAULT_TIMEOUT);
      }

      // Capture
      let buffer;
      switch (entry.type) {
        case 'element':
          buffer = await elementScreenshot(page, entry.selector);
          break;
        case 'viewport':
          buffer = await viewportScreenshot(page, entry.clip || null);
          break;
        case 'dialog':
          buffer = await dialogScreenshot(page, entry.triggerSelector, entry.selector, DEFAULT_TIMEOUT);
          break;
        default:
          throw new Error(`Unknown type "${entry.type}"`);
      }

      // Save
      saveScreenshot(buffer, entry.outputDir, entry.name, ROOT);
      console.log(`  ✓  ${outFile}`);
      results.captured++;

    } catch (err) {
      console.error(`  ✗  ${outFile}  — ${err.message}`);
      results.failed++;
      results.failures.push({ entry: outFile, error: err.message });
    }
  }

  await browser.close();

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log(`  Captured : ${results.captured}`);
  console.log(`  Failed   : ${results.failed}`);
  if (results.failures.length > 0) {
    console.log('\n  Failures:');
    for (const f of results.failures) {
      console.log(`    ✗ ${f.entry}`);
      console.log(`      ${f.error}`);
    }
  } else {
    console.log('\n  ✓ All screenshots captured successfully.');
  }
})();
