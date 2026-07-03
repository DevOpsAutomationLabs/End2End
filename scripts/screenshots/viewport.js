'use strict';

/**
 * viewport.js
 * Shared browser and viewport configuration for the Playwright screenshot runner.
 * Consumed by login.js, capture.js, and helpers.js.
 *
 * To run headless (e.g. CI): set headless: true, or set env var HEADLESS=1
 */
module.exports = {
  browser:  'chromium',                         // Chromium covers Chrome + Edge
  viewport: { width: 1280, height: 900 },       // Standard capture width per decision #21
  headless: process.env.HEADLESS === '1' ? true : false,
  slowMo:   50,                                 // ms between actions — helps dynamic UI settle
  timeout:  15_000,                             // Default waitFor timeout (ms)
};
