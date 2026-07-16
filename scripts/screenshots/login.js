'use strict';

/**
 * login.js
 * Handles authentication with the DevOps Loop platform.
 *
 * Exports:
 *   authenticate(browser, config) → page
 *     Returns a Playwright Page in an authenticated state, either by restoring
 *     a saved session or performing a fresh login.
 *
 * Session persistence:
 *   Saves cookies + localStorage to scripts/screenshots/.session.json via
 *   Playwright storageState. On subsequent runs the saved state is loaded and
 *   verified — if the app redirects back to login, a fresh login is performed
 *   and the session file is overwritten.
 *
 * Usage: called by capture.js — not invoked directly.
 */

const fs   = require('fs');
const path = require('path');

const SESSION_FILE = path.join(__dirname, '.session.json');

/**
 * Authenticate against LOOP_URL.
 *
 * @param {import('playwright').Browser} browser
 * @param {{ url: string, teamspace: string, loop: string, user: string, pass: string }} config
 * @returns {Promise<{ page: import('playwright').Page, context: import('playwright').BrowserContext }>}
 */
async function authenticate(browser, config) {
  const { url, user, pass } = config;

  // --- Try restoring saved session ---
  if (fs.existsSync(SESSION_FILE)) {
    console.log('  [login] Restoring saved session...');
    const context = await browser.newContext({ storageState: SESSION_FILE });
    const page    = await context.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });

    // Verify we are authenticated — if the URL changed to a login page, session has expired
    const currentUrl = page.url();
    const isLoginPage = currentUrl.includes('login') || currentUrl.includes('signin');
    if (!isLoginPage) {
      console.log('  [login] Session restored successfully.');
      return { page, context };
    }

    console.log('  [login] Session expired — performing fresh login.');
    await page.close();
    await context.close();
  }

  // --- Fresh login ---
  console.log('  [login] Starting fresh login...');
  const context = await browser.newContext();
  const page    = await context.newPage();

  await page.goto(url, { waitUntil: 'networkidle' });

  // The loop-list page may show a sign-in button before credentials are entered.
  // Try common selectors — adjust if the 2.0.2 UI differs.
  const signInSelectors = [
    'button:has-text("Sign in")',
    'button:has-text("Log in")',
    'a:has-text("Sign in")',
    '[data-testid="sign-in-btn"]',
  ];

  for (const sel of signInSelectors) {
    const el = page.locator(sel).first();
    if (await el.isVisible({ timeout: 3_000 }).catch(() => false)) {
      await el.click();
      break;
    }
  }

  // Fill credentials — try standard field selectors
  await page.waitForSelector('input[type="text"], input[name="username"], input[name="email"]', { timeout: 10_000 });
  const usernameField = page.locator('input[type="text"], input[name="username"], input[name="email"]').first();
  const passwordField = page.locator('input[type="password"]').first();

  await usernameField.fill(user);
  await passwordField.fill(pass);

  // Submit — try Enter key first, then look for a submit button
  const submitSelectors = [
    'button[type="submit"]',
    'button:has-text("Sign in")',
    'button:has-text("Log in")',
    '[data-testid="login-submit-btn"]',
  ];

  let submitted = false;
  for (const sel of submitSelectors) {
    const el = page.locator(sel).first();
    if (await el.isVisible({ timeout: 2_000 }).catch(() => false)) {
      await el.click();
      submitted = true;
      break;
    }
  }
  if (!submitted) await passwordField.press('Enter');

  // Wait for authenticated state — loop-list page has a loop card or known container
  const authSelectors = [
    '[data-testid="loop-card"]',
    '.loop-list',
    '.automation-list',
    'h1:has-text("Loops")',
    'h1:has-text("Automation")',
  ];

  let authenticated = false;
  for (const sel of authSelectors) {
    try {
      await page.waitForSelector(sel, { timeout: 15_000 });
      authenticated = true;
      break;
    } catch (_) { /* try next */ }
  }

  if (!authenticated) {
    throw new Error(
      'Login may have failed — could not detect authenticated page after submit. ' +
      'Check credentials in .env or update login selectors for the 2.0.2 UI.'
    );
  }

  // Save session for next run
  await context.storageState({ path: SESSION_FILE });
  console.log(`  [login] Login successful. Session saved to ${SESSION_FILE}`);

  return { page, context };
}

module.exports = { authenticate };
