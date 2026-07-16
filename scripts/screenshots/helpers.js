'use strict';

/**
 * helpers.js
 * Shared utility functions for the Playwright screenshot runner.
 */

const fs   = require('fs');
const path = require('path');

/**
 * Ensure the output directory exists, then save a screenshot buffer.
 * @param {Buffer} buffer  - PNG buffer from Playwright
 * @param {string} outDir  - relative path from repo root (e.g. 'docs/learn/control/media')
 * @param {string} name    - filename without extension (e.g. 'control-sidebar-home')
 * @param {string} rootDir - absolute repo root
 */
function saveScreenshot(buffer, outDir, name, rootDir) {
  const dir  = path.resolve(rootDir, outDir);
  const file = path.join(dir, `${name}.png`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, buffer);
  return file;
}

/**
 * Wait for a CSS selector with a configurable timeout.
 * Throws with a descriptive message on timeout.
 * @param {import('playwright').Page} page
 * @param {string} selector
 * @param {number} [timeout=15000]
 */
async function waitForSelector(page, selector, timeout = 15_000) {
  try {
    await page.waitForSelector(selector, { state: 'visible', timeout });
  } catch (e) {
    throw new Error(`Timed out waiting for selector "${selector}" after ${timeout}ms`);
  }
}

/**
 * Capture a tight element screenshot.
 * @param {import('playwright').Page} page
 * @param {string} selector  CSS selector for the element
 * @returns {Promise<Buffer>}
 */
async function elementScreenshot(page, selector) {
  const locator = page.locator(selector).first();
  return locator.screenshot();
}

/**
 * Capture a viewport (full-width) screenshot, optionally clipped to a region.
 * @param {import('playwright').Page} page
 * @param {{ x:number, y:number, width:number, height:number } | null} clip
 * @returns {Promise<Buffer>}
 */
async function viewportScreenshot(page, clip) {
  return page.screenshot(clip ? { clip } : {});
}

/**
 * Capture a dialog by clicking a trigger element first, then screenshotting the dialog container.
 * @param {import('playwright').Page} page
 * @param {string} triggerSelector  Element to click to open the dialog
 * @param {string} dialogSelector   Container selector that becomes visible
 * @param {number} [timeout=15000]
 * @returns {Promise<Buffer>}
 */
async function dialogScreenshot(page, triggerSelector, dialogSelector, timeout = 15_000) {
  await page.click(triggerSelector);
  await waitForSelector(page, dialogSelector, timeout);
  return elementScreenshot(page, dialogSelector);
}

module.exports = { saveScreenshot, waitForSelector, elementScreenshot, viewportScreenshot, dialogScreenshot };
