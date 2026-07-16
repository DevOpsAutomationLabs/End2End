'use strict';

/**
 * screenshot-map.js
 * Maps every image in the docs/ tree to its capture configuration.
 *
 * Each entry:
 *   name       - output filename (no extension)
 *   section    - used with --section=<name> flag in capture.js to run one section
 *   url        - path appended to LOOP_URL (after loop context is established)
 *   type       - 'viewport' | 'element' | 'dialog'
 *   selector   - CSS selector (required for element/dialog; null for viewport)
 *   clip       - { x, y, width, height } for viewport crops (optional)
 *   waitFor    - selector to wait for before capturing (null = just networkidle)
 *   triggerSelector - (dialog only) element to click to open the dialog
 *   outputDir  - relative path from repo root where the PNG is saved
 *
 * Population status: stubs generated from current image inventory.
 * TODO items are marked in each entry — fill in selectors before running capture.js.
 *
 * Sections: introduction | plan | code | control | build | deploy | test | secure | measure | release | common | demo
 *
 * Usage:
 *   node scripts/screenshots/capture.js                    # all
 *   node scripts/screenshots/capture.js --section=control  # one section
 *   node scripts/screenshots/capture.js --dry-run          # list without browser
 */

module.exports = [
  // ────────────────────────────────────────────────────────
  // Section: introduction — docs/learn/introduction/media
  // ────────────────────────────────────────────────────────
  {
    name:      'intro-1-no-teamspace',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-home-page-with-no-data',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-central-app-control',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-home-build-metrics',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-home-control-metrics',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-home-cycle-time',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-home-deploy-metrics',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-home-lead-time',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-home-page-side-bar',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-home-page-solutions',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-home-page',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-home-plan-metrics',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-login-page',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-sidebar-switch-team-space',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-sign-in-button',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-switch-to-build',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-switch-to-code',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-switch-to-control',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-switch-to-deploy',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-switch-to-measure',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-switch-to-plan',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-switch-to-release',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-switch-to-test',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },
  {
    name:      'intro-loop-whatwouldyouliketodotoday',
    section:   'introduction',
    url:       '/',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: introduction — docs/learn/introduction/about/media
  // ────────────────────────────────────────────────────────
  {
    name:      'intro-about-loop-about-box',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-about-button',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-ai-setup-empty-list',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-ai-setup-name',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-ai-setup-page-02',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-ai-setup-select-provider',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-logged-out',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-logout-button',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-settings-integrations-new-dialog-01',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-settings-integrations-new-dialog-02',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-settings-integrations-new-dialog-03',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-settings-integrations',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-settings-new-integrations-button',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-settings-user-admin-users',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-settings-user-admin',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-sidebar-expand-button',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-sidebar-expanded',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-sidebar-plugins',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-sidebar-settings',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },
  {
    name:      'intro-about-loop-sidebar-small',
    section:   'introduction',
    url:       '/about',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/about/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: introduction — docs/learn/introduction/genie/media
  // ────────────────────────────────────────────────────────
  {
    name:      'intro-genie-loop-genie-button',
    section:   'introduction',
    url:       '/genie',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/genie/media',
  },
  {
    name:      'intro-genie-loop-genie-dialog-focus-selection',
    section:   'introduction',
    url:       '/genie',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/genie/media',
  },
  {
    name:      'intro-genie-loop-genie-dialog',
    section:   'introduction',
    url:       '/genie',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/genie/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: introduction — docs/learn/introduction/loops/media
  // ────────────────────────────────────────────────────────
  {
    name:      'intro-loops-create-new-loop-dialog',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-create-new-loop-with-learning-data',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-loop-create-new-loop-button',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-loop-teamspace-07-create-new-loop-home',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-loop-teamspace-08-create-new-loop-dialog',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-loop-teamspace-09-create-new-loop-search-member',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-loop-teamspace-10-create-new-loop-member-added',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-loop-teamspace-11-create-new-loop-creation',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-loop-teamspace-12-create-new-loop-success',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-loops-go-to-my-loops-button',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-new-loop-creation-progress',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-new-loop-creation-success',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },
  {
    name:      'intro-loops-no-loops-inthis-team-space',
    section:   'introduction',
    url:       '/loops',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/loops/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: introduction — docs/learn/introduction/teamspace/media
  // ────────────────────────────────────────────────────────
  {
    name:      'intro-teamspace-loop-create-team-space',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-create-ts-button',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-initial-create-ts-button',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-team-space-icon',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-teamspace-01-menue',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-teamspace-02-create-new-dialog',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-teamspace-03-create-new-search-member',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-teamspace-04-create-new-member-added',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-teamspace-05-create-new-creation',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-teamspace-06-create-new-success',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-ts-initial-ts',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },
  {
    name:      'intro-teamspace-loop-ts-team-space-icon',
    section:   'introduction',
    url:       '/teamspace',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/introduction/teamspace/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: plan — docs/learn/plan/media
  // ────────────────────────────────────────────────────────
  {
    name:      'plan-lets-go-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-app-view-details',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-app-view-flow',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-application-items',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-applications-page',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-copy-link',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-create-new-component',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-create-new-sprint',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-created-by-me',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-eco-logic-app',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-edit-record',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-editor-bar',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-editprojec-list-releases',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-home-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-home-page',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integration-add-group',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integration-final',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integration-llm-settings',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integration-new-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integration-new-created-no-groups',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integration-new-created',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integration-new-dialog-01',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integration-new-dialog-02',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integration-select-ai-model',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integration-select-groups',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-integrations-view',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-list-created-by-me',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-member-access-integrations-checked',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-member-access-integrations-not-checked',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-member-access-view',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-my-applications-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-new-component-main',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-new-item-button-select-project',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-new-item-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-new-release-main',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-new-release',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-new-sprint-main',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-plus-symbol',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-profile-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-profile-member-access',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-profile-menue',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-profile-modify',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-project-config-add-new-tag',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-refresh',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-releases-list-details',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-releases-project-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-releases-sprint-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-releases-test-plans-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-save-and-create-another',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-save-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-show-scm-entry-details',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-side-bar-profile-member-access-selected',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-side-bar-user-management',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-sidebar-agile-icon',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-sidebar-agile-projects',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-sidebar-config-integrations',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-sidebar-project-boards',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-sidebar-projects',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-three-dotsmenue',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-user-management-groups',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-usermanagement-create-group-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-usermanagement-group-add-user',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-usermanagement-group-add-users-list-button-add',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-usermanagement-group-add-users-list-updated',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-usermanagement-group-add-users-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-usermanagement-new-group-name',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-welcome-introduction-screen',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-plan-welcome-screen',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-show-git-commit',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-sidebar-configuration-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },
  {
    name:      'plan-sidebar',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: plan — docs/learn/plan/ai_assistant/media
  // ────────────────────────────────────────────────────────
  {
    name:      'plan-ai-accept-terms',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-assistant-icon',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-create-records-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-dialog-01',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-done',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-enter-prompt',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-generate-action-items',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-next-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-records-created',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-recordtype-dialog-01',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-recordtype-dialog-02',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-recordtype-workitem',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-select-button-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-select-items-02',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-select-items-simple',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-select-items',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-select-record-type',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-to-create-items',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },
  {
    name:      'plan-ai-user-input-type',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/ai_assistant/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: plan — docs/learn/plan/boards/media
  // ────────────────────────────────────────────────────────
  {
    name:      'plan-boards-boards-select-wi',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-clear-filter-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-filterbar-uncheck-epic',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-filterbar',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-icon',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-my-board-with-imported-data',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-my-board',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-releases',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-select-project',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-sprint-backlog',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-sprint-board',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-work-items-filtered',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },
  {
    name:      'plan-boards-plan-project-board-work-items',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/boards/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: plan — docs/learn/plan/newapp/media
  // ────────────────────────────────────────────────────────
  {
    name:      'plan-newapp-tenant-add-app-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newapp/media',
  },
  {
    name:      'plan-newapp-tenant-app-list-final',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newapp/media',
  },
  {
    name:      'plan-newapp-tenant-create-new-app',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newapp/media',
  },
  {
    name:      'plan-newapp-tenant-how-to-switch-01',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newapp/media',
  },
  {
    name:      'plan-newapp-tenant-how-to-switch-02',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newapp/media',
  },
  {
    name:      'plan-newapp-tenant-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newapp/media',
  },
  {
    name:      'plan-newapp-tenant-new-app-creation',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newapp/media',
  },
  {
    name:      'plan-newapp-tenant-new-app-dialog',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newapp/media',
  },
  {
    name:      'plan-newapp-tenant-new-app-finish',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newapp/media',
  },
  {
    name:      'plan-newapp-tenant-new-app-next',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newapp/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: plan — docs/learn/plan/newproject/media
  // ────────────────────────────────────────────────────────
  {
    name:      'plan-newproject-plan-new-project-configure',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-new-project-main',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-new-wi-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-new-work-item',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-add-releases',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-admins',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-attachments',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-component-create-02',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-component-create',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-component-list-withdata',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-component-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-configure',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-edit-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-list-details',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-new-release-save',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-new-with-data',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-new',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-releases-new-release',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-releases-search',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-releases-section',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-releaseslist',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-save',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-saved',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-sprint-list-added',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-sprint-list-moreadded',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-sprint-list-new',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-sprint-new-dialog',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },
  {
    name:      'plan-newproject-plan-project-sprintlist',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/newproject/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: plan — docs/learn/plan/queries/media
  // ────────────────────────────────────────────────────────
  {
    name:      'plan-queries-plan-new-query',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-personal-queries-add-new-expanded',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-personal-queries-add-new',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-personal-queries-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-queries-filter-current-user',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-queries-filter',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-queries-icon',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-queries-menu-expanded',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-queries-menue-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-query-editor-add-field',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-query-editor-field-three-dots',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-query-editor-r-esult-field-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-query-editor-run-back-to-edit',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-query-editor-switch-types',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-query-editor',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-query-result',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-query-run',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-query-save-close',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },
  {
    name:      'plan-queries-plan-query-save-expanded',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/queries/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: plan — docs/learn/plan/setup/media
  // ────────────────────────────────────────────────────────
  {
    name:      'plan-setup-download-plan-demo-data-file',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-import-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-import-close-dialog',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-import-dialog-01',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-import-dialog-02',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-import-dialog-choose-file',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-import-finished',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-import-icon',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-import-running',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-import-select-zip-file',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-import-started',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-copy-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-create-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-create-pat-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-create-pat-dialog',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-database-id',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-home-view-with-sidebar',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-pat-copied',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-pat-created',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-pat-list-updated',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-pat-list',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-profile-menue',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-profile-pat-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-tenant-management-details-switch',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-tenant-management-details',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-tenant-management-link',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-plan-tenant-management-view',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },
  {
    name:      'plan-setup-upload-plan-demo-data-file',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/setup/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: plan — docs/learn/plan/workitems/media
  // ────────────────────────────────────────────────────────
  {
    name:      'plan-workitems-board-show-wi-detail',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/workitems/media',
  },
  {
    name:      'plan-workitems-plan-wi-exploratory-generate-button',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/workitems/media',
  },
  {
    name:      'plan-workitems-plan-wi-exploratory-generated',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/workitems/media',
  },
  {
    name:      'plan-workitems-plan-wi-exploratory-in-edit-mode',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/workitems/media',
  },
  {
    name:      'plan-workitems-plan-wi-exploratory-view',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/workitems/media',
  },
  {
    name:      'plan-workitems-plan-wi-link-open-detail',
    section:   'plan',
    url:       '/plan',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/plan/workitems/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: code — docs/learn/code/media
  // ────────────────────────────────────────────────────────
  {
    name:      'code-code-changes-view',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-check-trust-authors',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-cloned-repository-view',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-commit-and-push',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-commit-changes-menu',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-commit-stage-changes-popup',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-dev-container-lets-go',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-dev-container-overview-page',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-dev-container-terminate',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-dev-container-two-tabs',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-do-you-trust-authors',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-first-entry',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-git-clone-success',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-git-fetch-question',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-git-graph-view',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-git-stage-question',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-logout-icon',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-new-file-changes',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-no-running-dev-containers',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-open-folder',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-open-pizza-app-folder',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-panel-view',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-pizza-app-first-view',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-pizza-app-view-image',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-primary-sidebar-view',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-running-dev-containers',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-secondary-sidebar-view',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-setting-up-environment',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-source-control-icon',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-terminal-clone-repo',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-terminal-set-git-settings',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-terminate-environment',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-toggle-bar',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-toggle-panel',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-toggle-primary-sidebar',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-toggle-secondary-sidebar',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-trust-authors',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-vs-code-clone-targetfolder',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-vs-code-enter-git-user',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-vs-code-enter-pat',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-vs-code-open-repo',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-code-watson-x-dev-container-no-rep',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-commit-with-wi',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-dev-container-home-page-starter',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-dev-container-home-page',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-setting-up-environment-message',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-terminal-set-userdetails',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-wc-ax-explain-01',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },
  {
    name:      'code-wc-ax-explain-02',
    section:   'code',
    url:       '/code',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/code/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: control — docs/learn/control/media
  // ────────────────────────────────────────────────────────
  {
    name:      'control-control-accesstoken',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-allow-open-vs-code',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-code-button-expanded',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-code-button',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-code-clone-button',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-create-access-token',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-dev-container-select-from-list-02',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-dev-container-select-from-list',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-fork-detail',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-fork',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-home-page-activity-report',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-learning-data-repo',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-list-explore-repo-orgs-etc',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-list-pulls',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-list-repo-and-org',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-new-activity',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-new-button',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-new-forked-repo',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-new-pat-created',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-new-pat-generate-button',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-new-pat-name',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-new-pat-select-access-type-permissions',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-new-pat-setpermissions-minimal',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-open-with-dev-ops-code',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-open-with-vs-code',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-select-pizza-app-repo',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-sidebar-home',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-sidebar-pull',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-sidebar-repos',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-control-user-profile',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-home-page-of-demo-echo-logic',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-personal-access-token-01',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-personal-access-token-02',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-personal-access-token-03',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-personal-access-token-04',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-profile-and-settings-01',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-profile-and-settings-02',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-profile-and-settings-03',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-repo-new-data',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-select-repo-01',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-select-repo-02',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-select-repo-3-copy-url',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-show-git-commit',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-show-last-commit',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-1-open',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-2-cd-documents',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-3-clone-target-repo-01',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-3-clone-target-repo-02',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-3-clone-target-repo-03',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-3-clone-target-repo-4-cloned',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-3-clone-target-repo-5-empty',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-4-clone-source-repo-01',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-4-clone-source-repo-02',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-5-copy-to-target',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-6-target-new-data',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-7-git-add-commit',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },
  {
    name:      'control-terminal-8-git-push',
    section:   'control',
    url:       '/control',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/control/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: build — docs/learn/build/media
  // ────────────────────────────────────────────────────────
  {
    name:      'build-build-3-buttons',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-auth-token-list-updated',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-auth-token-list',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-create-auth-token-button',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-create-auth-token-dialog',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-metrics-time-periodfilter',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-metrics',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-new-authtoken-details',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-process-link-in-projects-view',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-process-runs-details-metrics-and-filter',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-save-button',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-security-auth-token-settings',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-sidebar-system-link',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-sidebar',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-system-security-settings',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-build-system-settings',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-process-runs-details',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-process-runs-results',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-template-jobs',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-template-process',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-template-source',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-templates-process-def',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-templates-process-detail',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-templates-process-job-step-detail',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-templates-process-job-steps',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },
  {
    name:      'build-templates-projects',
    section:   'build',
    url:       '/build',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/build/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: deploy — docs/learn/deploy/media
  // ────────────────────────────────────────────────────────
  {
    name:      'deploy-add-component',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-app-comp-create-process-button',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-app-env-dev',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-app-process-finished-success',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-app-run-select-failing-deployment',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-environment-create-snapshot-detail-01',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-environment-create-snapshot-detail-02',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-environment-create-snapshot-dialog',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-environment-create-snapshot',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-environment-result-versions',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-environment-snapshot-applied',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-environmentlist',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-request-process-withcomponents',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-request-process-withsnapshot',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-request-process',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-runappprocessdialog-1-select-deployment-process',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-runappprocessdialog-2-select-comp-version-or-snapshot',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-runappprocessdialog-3-only-changed',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-runappprocessdialog-4-choose-comp-version-button',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-runappprocessdialog-5-select-comp-version',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-runappprocessdialog-6-select-comp-version',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-application-runappprocessdialog-7-submit',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-applications-run-page',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-components-list',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-components-menuebar',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-control-email',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-dashboard',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-3-dots',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-app-process-ai-analysis',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-app-process-failing-deployment',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-app-run-result-failed-step-3-dots',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-app-run-result-failed',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-app-run-selected-comp-versions',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-comp-process-fail-deploy',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-environment',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-import-apps-button',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-import-apps-dialog',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-import-apps-select-file',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-run-proc-failing-deploy',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-side-bar-1-resources-icon-with-text',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-side-bar-1-resources-icon',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-sidebar-app-icon-with-text',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-sidebar-app-icon',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-sidebar-components-icon-with-text',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-sidebar-components-icon',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deploy-sidebar',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-deployment-process',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-edit-process',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-edit-pull-docker',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-install-component',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-jenkins-pipeline',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-navigate',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-plugin-list-3-dots-menue',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-process-diagram',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-resource-tree',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-running-process-01',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-running-process-2-expand-all',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-running-process-3-stepdetails',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-running-process-4-step-details',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },
  {
    name:      'deploy-settings-icon',
    section:   'deploy',
    url:       '/deploy',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: deploy — docs/learn/deploy/applications/media
  // ────────────────────────────────────────────────────────
  {
    name:      'deploy-app-deploy-app-app-comps-button',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-create-app-button',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-create-app-dialog-01',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-create-app-dialog-02',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-create-app-menue',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-create-env-button',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-create-env-dialog-01',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-create-env-dialog-02',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-create-env-dialog-03',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-deployment-process',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-environment-list',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-environment-select',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-process-list-final',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-processes-view-empty',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-app-processes-view',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-application-import-process-button',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-application-processes-tab',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-application-view-with-env',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-application-view',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-applications-view-else',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-applications-view-empty',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-applications-view',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-apps-add-components-button',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-apps-add-components-dialog',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-apps-components-tab',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-apps-components-view-final',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-apps-components-view',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-apps-processes-import-process-button',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-env-add-base-res-button',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-env-add-res-dialog',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-env-add-res-selected',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-env-linked-resources',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-env-view',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-import-app-process-dialog-01',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-import-app-process-dialog-02',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-import-app-process-dialog-03',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },
  {
    name:      'deploy-app-deploy-import-app-process-dialog-04',
    section:   'deploy',
    url:       '/deploy/applications',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/applications/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: deploy — docs/learn/deploy/components/media
  // ────────────────────────────────────────────────────────
  {
    name:      'deploy-comp-component-config',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-import-components-button',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-import-dialog-choose-file',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-import-dialog-file-chosen',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-import-dialog-with-file-chosen',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-import-dialog',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-import-files',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-import-submit-button',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-imported',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-processlist-withentries',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-tabbar-processes',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-component-versions-view-empty',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-components-create-component-button',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-components-create-dialog-01',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-components-create-dialog-02',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-components-create-dialog-03',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-components-create-dialog-04',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },
  {
    name:      'deploy-comp-components-view-empty',
    section:   'deploy',
    url:       '/deploy/components',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/components/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: deploy — docs/learn/deploy/processes/media
  // ────────────────────────────────────────────────────────
  {
    name:      'deploy-proc-component-create-new-process',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-create-process-button',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-create-process-dialog',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-add-step',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-editor-sidebar-add-status',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-editor-sidebar',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-editor-step-added-add-status',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-editor-step-added',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-editor-step-edit',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-editor',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-empty',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-final-with-failing-test',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-final-with-passing-test',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-final',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-list',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-step-add-status-properties',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-step-properties-01',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-step-properties-02',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-step-shell-script-01',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-process-step-shell-script-02',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-version-list-with-status',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },
  {
    name:      'deploy-proc-component-with-process-list',
    section:   'deploy',
    url:       '/deploy/processes',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/processes/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: deploy — docs/learn/deploy/resources/media
  // ────────────────────────────────────────────────────────
  {
    name:      'deploy-res-deploy-agent-pool-select-from-list-of-agents',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-3-dots-add-agent-pool',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-3-dots-add-comp-tag',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-3-dots-add-group',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-3-dots-menu',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-add-agent-pool-dialog',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-agent-pool-added',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-create-dialog-enter-name',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-create-dialog',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-create-resouce-dialog-component-tag',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-final',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-sub-group-name',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-sub-groups',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-top-level-created',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resource-tree-view',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resources-agent-pool-list',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resources-agent-pools-create-agent-pool-button',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resources-agent-pools-create-dialog',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resources-agent-pools-tab',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resources-agent-pools-view',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resources-agentand-pools-3-dots-menu',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resources-all-tab-view',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resources-create-top-level',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },
  {
    name:      'deploy-res-deploy-resources-resource-tree-tab',
    section:   'deploy',
    url:       '/deploy/resources',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/resources/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: deploy — docs/learn/deploy/settings/media
  // ────────────────────────────────────────────────────────
  {
    name:      'deploy-settings-deploy-ai-settings-ai-provider-selection',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-ai-settings-dialog',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-ai-settings-model-available-list',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-ai-settings-model-name-selected',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-ai-settings-model-name',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-close-button',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-create-token-button',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-create-token-dialog',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-new-pat-message',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-pat-list-updated',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-pat-list',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-security-settings',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-settings-system-section',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-settings',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-system-section-ai-settings',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-deploy-tokens-link',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-plugin-install-confirmation',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-plugin-install-success',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-plugin-upgrade',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-plugins-install',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-plugins-list',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-settings-automation-section',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },
  {
    name:      'deploy-settings-settings-statuses-version-statuses',
    section:   'deploy',
    url:       '/deploy/settings',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/deploy/settings/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: measure — docs/learn/measure/media
  // ────────────────────────────────────────────────────────
  {
    name:      'measure-measure-all-vsm-list',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-create-pat-dialog',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-create-pat-result-message',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-create-user-access-key-button',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-emerald-gates-prod',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-emerald-gates-qa',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-emerald-item-details',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-emerald-pipeline',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-emerald-swimlanes',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-emerald-vsm-dot-view',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-insight-all-dashboards',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-insight-delivery-performance',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-insight-home',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-insight-icon',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-insights-delivery-quality',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-my-profile-link',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-pat-list',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-pat-newly-created',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-pipeline-actions',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-pipeline-env-3-dotsmenue',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-pipeline-env-create-gatedialog-01',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-pipeline-env-create-gatedialog-02',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-pipeline-run-deployment',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-pipeline-tab',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-pipeline-view',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-pizza-item-details',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-profile-settings-help-bar',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-release-icon',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-settings-menue',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-swimlane-selected-tab',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-swimlane-tab',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-swimlane-view',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-vsm-echo-logic',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-vsm-emerald',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-measure-vsm-icon',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-tabs',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-view-dot-details-01',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-view-dot-details-02',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },
  {
    name:      'measure-view-dot',
    section:   'measure',
    url:       '/measure',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/measure/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: test — docs/learn/test/media
  // ────────────────────────────────────────────────────────
  {
    name:      'test-test-3-rd-party-accepted',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-accept-3-rd-party',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-analyze-result-overview-clickscript',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-analyze-result-overview',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-author-data-def-view',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-author-data-icon',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-author-schema-view',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-author-schemas',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-create-pat-dialog',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-data-downloaded-files',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-data-downloaded-unzipped',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-data-generate-dialog-01',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-data-generate-dialog-02',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-data-generate-dialog',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-data-generate-icon',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-data-generated-data',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-data-preview-icon',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-data-preview',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-execute-button',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-execute-script-list-running-script',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-execute-script-list',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-message-job-successfully-submited',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-plan-wi-dialog-01',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-plan-wi-dialog-02',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-profile-menue',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-profile-notification-settings-help-links',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-project-homepage',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-project-tile',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-result-details-with-plan-link',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-result-details',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-result-view-failed-test-create-ticket',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-result-view-failed-test',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-run-button',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-run-dialog',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-running-link',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-running-script-3-dot-menue',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-running-script-info',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-running-script-test-log',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-show-project-list',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-sidebar-analyze-menue',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-sidebar-analyze-section',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-sidebar-author-section',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-sidebar-execute-section',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-sidebar',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-switch-ts',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-test-editor-script-opened',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-test-editor-step-details',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-test-editor-view',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },
  {
    name:      'test-test-wrong-ts',
    section:   'test',
    url:       '/test',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/test/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: release — docs/learn/release/media
  // ────────────────────────────────────────────────────────
  {
    name:      'release-release-switch-to-tiles-view',
    section:   'release',
    url:       '/release',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/release/media',
  },
  {
    name:      'release-release-view-as-list',
    section:   'release',
    url:       '/release',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/release/media',
  },
  {
    name:      'release-release-view-as-tiles',
    section:   'release',
    url:       '/release',
    type:      'viewport',             // TODO: change to 'element' for small UI elements
    selector:  null,                    // TODO: add CSS selector for element captures
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/learn/release/media',
  },

  // ────────────────────────────────────────────────────────
  // Section: common — docs/media
  // ────────────────────────────────────────────────────────
  {
    name:      'common-3-dots',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-add',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-cancel',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-choose-file',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-close',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-create',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-deploy',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-download',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-next',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-open',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-save',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-settings',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  {
    name:      'common-button-submit',
    section:   'common',
    url:       '/',                    // TODO: verify page where this element appears
    type:      'element',
    selector:  null,                    // TODO: add CSS selector
    waitFor:   null,
    outputDir: 'docs/media',
  },
  // SKIP (desktop screenshot, no Playwright capture): common-desktop-browser-downloads-icon.png
  // SKIP (desktop screenshot, no Playwright capture): common-desktop-browser-downloads-open-file.png
  // SKIP (desktop screenshot, no Playwright capture): common-desktop-browser-save-to-downloads.png
  // SKIP (desktop screenshot, no Playwright capture): common-desktop-downloads-echo-logic-app-zip-plan-folder.png
  // SKIP (desktop screenshot, no Playwright capture): common-desktop-downloads-echo-logic-demo-app-zip.png
  // SKIP (desktop screenshot, no Playwright capture): common-desktop-echo-logic-demo-app-latest-version-assets.png
  // SKIP (desktop screenshot, no Playwright capture): common-desktop-echo-logic-demo-app-latest-version-source-code-zip.png
  // SKIP (desktop screenshot, no Playwright capture): common-desktop-echo-logic-demo-app-latest-version-view.png

  // ────────────────────────────────────────────────────────
  // Section: demo — docs/demo/media
  // ────────────────────────────────────────────────────────
  {
    name:      'demo-demo-ai-asks-for-user-response-to-step-02',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-ai-asks-for-user-response-to-step-03',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-ai-asks-for-user-response-to-step-04',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-ai-asks-for-user-response-to-step',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-git-asks-for-user-accesskey',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-git-asks-for-username',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-mcp-json-view',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-mcp-server-list-view',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-vs-code-add-mcp-server-step-01',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-vs-code-add-mcp-server-step-02',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-vs-code-add-mcp-server-step-03',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-vs-code-add-mcp-server-step-04',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-vs-code-command-add-mcp-server',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demo-vs-code-command-palette',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },
  {
    name:      'demo-demoflow',
    section:   'demo',
    url:       '/',                    // TODO: verify demo URL
    type:      'viewport',
    selector:  null,
    clip:      { x: 0, y: 0, width: 1280, height: 720 },
    waitFor:   null,                    // TODO: add stable waitFor selector
    outputDir: 'docs/demo/media',
  },

];
