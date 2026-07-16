# DevOps Loop End-to-End Tutorial — Version 2.0.2 Update Plan

> **Status:** Ready for implementation  
> **Created:** 2025  
> **New version:** `2.0.2`  
> **Scope:** Nav fixes, kebab-case image renaming, Playwright screenshot automation, shared image consolidation, content updates, validation

---

## Context & Decisions Log

All decisions were made interactively before this plan was written. Do not re-ask these questions.

| #  | Question                           | Decision                                                                     |
|----|------------------------------------|------------------------------------------------------------------------------|
| 1  | New version number                 | `2.0.2`                                                                      |
| 2  | Screenshot automation approach     | Fully automated Playwright (login → navigate → capture per element/viewport) |
| 3  | Screenshot capture tool            | Playwright (Chrome/Edge, 1280px viewport)                                    |
| 4  | Small image (icon/button) handling | Script as element screenshots via CSS selector                               |
| 5  | PNG vs WebP                        | Keep PNG for now                                                             |
| 6  | DevOps Loop access                 | Remote, username/password login (no SSO)                                     |
| 7  | Image naming convention            | kebab-case, single dash throughout                                           |
| 8  | Demo image prefix                  | Flow-specific: `ai-first-*`, `classic-*`, `mcp-*`                            |
| 9  | Sequential numbering               | Zero-padded suffix: `-01`, `-02`                                             |
| 22 | Loop base URL                      | `https://platform-staging.us-east.containers.appdomain.cloud/automation/`    |
| 23 | Teamspace / Loop context           | Teamspace: `DEMOZ`, Loop: `Bike`                                             |
| 24 | App switcher icon                  | SVG: `dots-9-svgrepo-com.e01b32902dc912e4b9a408884d907a3c.svg` (9-dot grid)  |
| 25 | Screenshot strategy                | Option A — full recapture of all 739 images                                  |
| 26 | Session persistence                | Standard userid/password; session persists — verify in `login.js`            |
| 27 | `Desktop_*` files                  | Rename to kebab-case; exclude from Playwright recapture                      |
| 28 | `introduction/index.md` switcher   | Reword entire line (not just pattern match) — see WS5c                       |
| 10 | `learn/code/index.md` in nav       | Yes — add as sibling to Plan/Control/Build etc. (was forgotten)              |
| 11 | Deploy sub-pages in nav            | Add `processes/`, `resources/`, `settings/`                                  |
| 12 | Demo overview in nav               | Add `demo/index.md` as "Overview" entry                                      |
| 13 | Common/shared images               | Move to `docs/media/`, prefix `common-`                                      |
| 14 | Introduction sub-section media     | Leave in-place (do not consolidate)                                          |
| 15 | Plan sub-pages in nav              | Add `newapp/`, `newproject/`, `queries/`, `setup/`, `workitems/`             |
| 16 | IBM docs version links             | Update `2.0.0` → `2.0.2` everywhere (IBM Docs is updated)                    |
| 17 | Loop Genie tech-preview status     | Removed — Genie is GA in 2.0.2                                               |
| 18 | App switcher location              | Moved to the right side; icons updated but widget looks similar              |
| 19 | UI color scheme change             | Purely visual — same structure, new color scheme, updated icons              |
| 20 | `bob_*.md` files in root           | Ignore — not part of this update                                             |
| 21 | Standard viewport width            | 1280px                                                                       |

---

## Repository Structure (at time of planning)

```dir
End2End/
├── mkdocs.yml                  # Main nav + site config (inherits base.yml)
├── base.yml                    # Theme, plugins, markdown extensions
├── docs/
│   ├── index.md                # Homepage
│   ├── ai_setup.md             # AI integration setup (snippet aggregator)
│   ├── setup.md                # Manual setup guide
│   ├── tags.md                 # Tags index
│   ├── media/                  # Shared/common images → target for WS4
│   ├── javascripts/
│   │   └── lazyload.js
│   ├── includes/
│   │   └── abbreviations.md
│   ├── demo/
│   │   ├── index.md            # Demo overview (missing from nav — fix in WS1)
│   │   ├── demo_ai_first.md
│   │   ├── demo_classic.md
│   │   ├── mcp_setup.md
│   │   ├── media/              # Demo screenshots
│   │   └── templates/
│   └── learn/
│       ├── index.md            # Learning labs overview
│       ├── introduction/
│       │   ├── index.md        # Main introduction page (snippet aggregator)
│       │   ├── media/          # Introduction screenshots
│       │   ├── about/
│       │   │   ├── index.md
│       │   │   └── media/
│       │   ├── genie/
│       │   │   ├── index.md
│       │   │   └── media/
│       │   ├── loops/
│       │   │   ├── index.md
│       │   │   └── media/
│       │   └── teamspace/
│       │       ├── index.md
│       │       └── media/
│       ├── plan/
│       │   ├── index.md
│       │   ├── media/
│       │   ├── ai_assistant/
│       │   ├── boards/
│       │   ├── newapp/         # Missing from nav — add in WS1
│       │   ├── newproject/     # Missing from nav — add in WS1
│       │   ├── queries/        # Missing from nav — add in WS1
│       │   ├── setup/          # Missing from nav — add in WS1
│       │   └── workitems/      # Missing from nav — add in WS1
│       ├── code/
│       │   ├── index.md        # Missing from nav entirely — add in WS1
│       │   └── media/
│       ├── control/
│       │   ├── index.md
│       │   └── media/
│       ├── build/
│       │   ├── index.md
│       │   └── media/
│       ├── deploy/
│       │   ├── index.md
│       │   ├── media/
│       │   ├── applications/
│       │   ├── components/
│       │   ├── processes/      # Missing from nav — add in WS1
│       │   ├── resources/      # Missing from nav — add in WS1
│       │   └── settings/       # Missing from nav — add in WS1
│       ├── test/
│       ├── secure/
│       ├── measure/
│       │   └── media/
│       └── release/
└── scripts/                    # Create this directory for WS2 + WS3
```

---

## Workstream 1 — Fix `mkdocs.yml` Navigation

**File:** `mkdocs.yml`  
**Dependencies:** None  
**Implement first** — unblocks everything else.

### Target nav (complete, corrected)

```yaml
nav:
  - Home: index.md
  - Introduction: learn/introduction/index.md
  - Demo Flows:
    - Overview: demo/index.md
    - AI-First Demo: demo/demo_ai_first.md
    - Classic Demo: demo/demo_classic.md
    - MCP Setup: demo/mcp_setup.md
  - Learning Labs:
    - Overview: learn/index.md
    - Plan:
      - Overview: learn/plan/index.md
      - AI Assistant: learn/plan/ai_assistant/index.md
      - Boards: learn/plan/boards/index.md
      - New Application: learn/plan/newapp/index.md
      - New Project: learn/plan/newproject/index.md
      - Queries: learn/plan/queries/index.md
      - Setup: learn/plan/setup/index.md
      - Work Items: learn/plan/workitems/index.md
    - Code: learn/code/index.md
    - Control: learn/control/index.md
    - Build: learn/build/index.md
    - Deploy:
      - Overview: learn/deploy/index.md
      - Applications: learn/deploy/applications/index.md
      - Components: learn/deploy/components/index.md
      - Processes: learn/deploy/processes/index.md
      - Resources: learn/deploy/resources/index.md
      - Settings: learn/deploy/settings/index.md
    - Test: learn/test/index.md
    - Secure: learn/secure/index.md
    - Measure: learn/measure/index.md
    - Release: learn/release/index.md
  - Setup Guides:
    - Manual Setup: setup.md
    - AI Integration: ai_setup.md
```

---

## Workstream 2 — Kebab-case Image Renaming

### Naming convention rules

| Rule                 | Specification                                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------------------------|
| Case                 | All lowercase                                                                                                  |
| Word separator       | Single dash `-`                                                                                                |
| Capability prefix    | Matches section: `intro`, `plan`, `code`, `control`, `build`, `deploy`, `test`, `secure`, `measure`, `release` |
| Demo sub-prefix      | `ai-first-`, `classic-`, `mcp-`                                                                                |
| Common/shared prefix | `common-`                                                                                                      |
| Sequential suffix    | `-01`, `-02` (zero-padded, only when multiple shots share same context)                                        |
| Extension            | `.png`                                                                                                         |
| Spaces               | Never — use dashes                                                                                             |
| "copy" duplicates    | Remove — these are artefacts e.g. `Deploy_ResourceTree_3Dots_addAgentPool copy.png`                            |

### Capability prefix mapping

| Folder                                | Prefix                                                   |
|---------------------------------------|----------------------------------------------------------|
| `docs/media/`                         | `common-`                                                |
| `demo/media/`                         | `demo-` (overview only), `ai-first-`, `classic-`, `mcp-` |
| `learn/introduction/media/`           | `intro-`                                                 |
| `learn/introduction/about/media/`     | `intro-about-`                                           |
| `learn/introduction/genie/media/`     | `intro-genie-`                                           |
| `learn/introduction/loops/media/`     | `intro-loops-`                                           |
| `learn/introduction/teamspace/media/` | `intro-teamspace-`                                       |
| `learn/plan/media/`                   | `plan-`                                                  |
| `learn/plan/ai_assistant/media/`      | `plan-ai-`                                               |
| `learn/plan/boards/media/`            | `plan-boards-`                                           |
| `learn/plan/newapp/media/`            | `plan-newapp-`                                           |
| `learn/plan/newproject/media/`        | `plan-newproject-`                                       |
| `learn/plan/queries/media/`           | `plan-queries-`                                          |
| `learn/plan/setup/media/`             | `plan-setup-`                                            |
| `learn/plan/workitems/media/`         | `plan-workitems-`                                        |
| `learn/code/media/`                   | `code-`                                                  |
| `learn/control/media/`                | `control-`                                               |
| `learn/build/media/`                  | `build-`                                                 |
| `learn/deploy/media/`                 | `deploy-`                                                |
| `learn/deploy/applications/media/`    | `deploy-app-`                                            |
| `learn/deploy/components/media/`      | `deploy-comp-`                                           |
| `learn/deploy/processes/media/`       | `deploy-proc-`                                           |
| `learn/deploy/resources/media/`       | `deploy-res-`                                            |
| `learn/deploy/settings/media/`        | `deploy-settings-`                                       |
| `learn/measure/media/`                | `measure-`                                               |
| `learn/test/media/`                   | `test-`                                                  |
| `learn/secure/media/`                 | `secure-`                                                |
| `learn/release/media/`                | `release-`                                               |

**Note:** `docs/learn/secure/` currently has no `media/` subfolder. Create it as part of WS3 setup (before populating `screenshot-map.js`). The `generate-image-map.js` script will skip it until it exists.

### Naming examples

| Old filename                                      | New filename                                                              |
|---------------------------------------------------|---------------------------------------------------------------------------|
| `CONTROL_PersonalAccessToken1.png`                | `control-personal-access-token-01.png`                                    |
| `Control_SidebarHome.png`                         | `control-sidebar-home.png`                                                |
| `CONTROL_ProfileAndSettings3.png`                 | `control-profile-and-settings-03.png`                                     |
| `Deploy_App_CreateApp_Dialog1.png`                | `deploy-app-create-app-dialog-01.png`                                     |
| `DEPLOY_Components_CreateDialog2.png`             | `deploy-comp-create-dialog-02.png`                                        |
| `BUILD_Templates_Process_JobStepDetail.png`       | `build-templates-process-job-step-detail.png`                             |
| `Build_3Buttons.png`                              | `build-3-buttons.png`                                                     |
| `CODE_DevContainer_HomePage.png`                  | `code-dev-container-home-page.png`                                        |
| `Code_VSCode_Enter_PAT.png`                       | `code-vscode-enter-pat.png`                                               |
| `Loop_Login_Page.png`                             | `intro-login-page.png`                                                    |
| `Loop_Home_Page.png`                              | `intro-home-page.png`                                                     |
| `INIT_1_NoTeamspace.png`                          | `intro-no-teamspace.png`                                                  |
| `Loop_central_app_control.png`                    | `common-app-switcher.png`                                                 |
| `Loop_whatwouldyouliketodotoday.png`              | `common-what-today-menu.png`                                              |
| `Button_NEXT.png`                                 | `common-button-next.png`                                                  |
| `Button_Save.png`                                 | `common-button-save.png`                                                  |
| `Button_ADD.jpg`                                  | `common-button-add.png`                                                   |
| `Demo_MCP_Server_List_View.png`                   | `mcp-server-list-view.png`                                                |
| `Demo_AI_asks_for_User_response_to_step.png`      | `ai-first-user-response-step-01.png`                                      |
| `Demo_AI_asks_for_User_response_to_step2.png`     | `ai-first-user-response-step-02.png`                                      |
| `demoflow.png`                                    | `demo-overview-flow.png`                                                  |
| `Loop_Genie_Dialog.png`                           | `intro-genie-dialog.png`                                                  |
| `Loop_Teamspace_01_Menue.png`                     | `intro-teamspace-menu-01.png`                                             |
| `Deploy_ResourceTree_3Dots_addAgentPool copy.png` | DELETE — duplicate of `deploy-res-resource-tree-3dots-add-agent-pool.png` |
| `Deploy_ResourceTree_3Dots_addCompTag copy.png`   | DELETE — duplicate                                                        |
| `Deploy_ResourceTree_3Dots_addGroup copy.png`     | DELETE — duplicate                                                        |
| `Measure_Emerald_Gates_Prod.png`                  | `measure-emerald-gates-prod.png`                                          |
| `VSM_Tabs.png`                                    | `measure-vsm-tabs.png`                                                    |

### Scripts to create: `scripts/`

#### `scripts/rename-images.js`

```text
Purpose: Rename all image files on disk and update all .md references atomically.

Algorithm:
1. Read scripts/image-map.json
2. For each entry: rename file on disk (fs.renameSync)
3. For each .md file under docs/: replace all occurrences of old name with new name
4. Output report: renamed count, .md files touched, any old names still found (unresolved)
5. Dry-run mode: --dry-run flag prints changes without writing

Usage:
  node scripts/rename-images.js --dry-run
  node scripts/rename-images.js
```

#### `scripts/image-map.json`

```json
Format:
{
  "docs/learn/control/media": {
    "CONTROL_PersonalAccessToken1.png": "control-personal-access-token-01.png",
    "Control_SidebarHome.png": "control-sidebar-home.png",
    ...
  },
  "docs/media": {
    "Button_NEXT.png": "common-button-next.png",
    ...
  }
}

Note: This file must be generated by scanning the filesystem and then
human-reviewed before running the rename script. The rename script is the
executor; this JSON is the reviewed spec.
```bash

#### `scripts/generate-image-map.js`

```text
Purpose: Scan all media/ folders, generate a draft image-map.json applying
the naming rules automatically. Human reviews and corrects before running
rename-images.js.

Algorithm:
1. Walk all docs/**/media/ directories
2. For each image file, determine its capability prefix from the folder path
3. Apply kebab-case transformation:
   - Strip capability prefix (ALL_CAPS or PascalCase)
   - Convert remaining words to kebab-case
   - Detect and append zero-padded numeric suffix
4. Write scripts/image-map.json (draft)
5. Auto-mark: files with " copy" in name → value set to "DELETE" (no human review needed)
6. Auto-mark: files matching Desktop_* in docs/media/ → rename to kebab-case, set noCapture: true
7. Auto-mark: known static diagram files in deploy/media/ → set noCapture: true
   (list: process_diagram.png, deployment_process.png, navigate.png, jenkins_pipeline.png,
    install_component.png, edit_pull_docker.png, edit_process.png, deploy_environment.png,
    dashboard.png, control_email.png, applications_run_page.png, add_component.png)
8. Flag: files where auto-name is uncertain → mark with "REVIEW" comment

The noCapture flag is read by screenshot-map.js population logic to skip Playwright entry generation.
```

---

## Workstream 3 — Playwright Screenshot Automation

### Directory structure to create

```dir
scripts/
  screenshots/
    capture.js            # Main runner — iterates screenshot-map.js
    login.js              # Login + session save/restore
    screenshot-map.js     # Full mapping: name → URL + selector + type + outputDir
    viewport.js           # Shared browser/viewport config
    helpers.js            # save, waitForSelector, elementScreenshot, viewportScreenshot
    .env.example          # Template for credentials
```

### `.env.example`

```env
LOOP_URL=https://platform-staging.us-east.containers.appdomain.cloud/automation
LOOP_TEAMSPACE=DEMOZ
LOOP_LOOP=Bike
LOOP_USER=your-username
LOOP_PASS=your-password
```

`.env` is gitignored. Copy `.env.example` to `.env` and fill in real credentials.

**URL structure:** After login the app routes via `/automation/` → loop list page. Capability URLs follow the pattern `/plan`, `/build`, `/control` etc. — verify exact path format during `login.js` authoring by inspecting the browser address bar after navigating to Plan.

### `viewport.js` config

```js
module.exports = {
  browser: 'chromium',   // Use Chromium (covers Chrome + Edge)
  viewport: { width: 1280, height: 900 },
  headless: false,       // Set true for CI, false for interactive debugging
  slowMo: 50,            // ms between actions — helps with dynamic UI
};
```

### Screenshot entry types

```js
// Element screenshot — tight crop around a DOM element
{
  name: 'control-sidebar-home',
  url: '/control',
  selector: '[data-testid="sidebar-home-btn"]',  // or any reliable CSS selector
  type: 'element',
  waitFor: '.sidebar.loaded',
  outputDir: 'docs/learn/control/media',
}

// Viewport screenshot — full 1280px width, cropped to a region
{
  name: 'intro-home-page',
  url: '/',
  selector: null,
  type: 'viewport',
  clip: { x: 0, y: 0, width: 1280, height: 720 },
  waitFor: '.dashboard.loaded',
  outputDir: 'docs/learn/introduction/media',
}

// Dialog screenshot — waits for dialog, screenshots its container
{
  name: 'control-create-pat-dialog',
  url: '/control/user/settings/applications',
  triggerSelector: '[data-testid="generate-token-btn"]',  // click to open dialog
  selector: '.dialog-container',
  type: 'dialog',
  waitFor: '.dialog-container.visible',
  outputDir: 'docs/learn/control/media',
}
```

### `login.js` design

```text
URL flow:
  1. Navigate to LOOP_URL (redirects to /automation/)
  2. The loop-list page appears — locate and click the login/sign-in button
  3. Fill username + password fields, submit
  4. Wait for the loop-list page to load (presence of a loop card or known selector)
  5. Save session state: context.storageState({ path: '.session.json' })
  6. On subsequent runs: if .session.json exists, load it via
       browser.newContext({ storageState: '.session.json' })
     then navigate to LOOP_URL and check if we land on the authenticated page
     (not redirected to login) — if redirected, do fresh login and overwrite .session.json

Session persistence: the app uses standard cookie/localStorage session.
Playwright storageState captures both — this is sufficient for most SPAs.
Verify: after saving storageState, close browser, reopen with saved state,
navigate to LOOP_URL — should land on loop list without login prompt.
```

### `capture.js` algorithm

```text
1. Load .env (dotenv)
2. Launch browser (Chromium, 1280px viewport)
3. Call login.js — restore session or authenticate fresh, returns page in authenticated state
4. Navigate into teamspace DEMOZ → loop Bike to establish loop context
   (required before capability URLs resolve correctly)
5. For each entry in screenshot-map.js (filtered by --section if flag provided):
   a. Navigate to resolved URL (base + teamspace/loop prefix + entry.url)
   b. Wait for entry.waitFor selector (timeout 15s)
   c. If type === 'dialog': click entry.triggerSelector, wait for dialog selector
   d. Capture:
      - 'element': page.locator(entry.selector).screenshot({ path })
      - 'viewport': page.screenshot({ clip: entry.clip, path })
      - 'dialog': page.locator(entry.selector).screenshot({ path })
   e. Save to entry.outputDir/entry.name.png
   f. Log: ✓ name.png or ✗ name.png (error message)
   g. On navigation error or timeout: log failure, continue to next entry (do not abort run)
6. Close browser
7. Print summary: X captured, Y failed — list all failures
```

### `screenshot-map.js` — population strategy

**Strategy: Option A — full recapture of all 739 images.**

Population approach:

1. Start with `image-map.json` from WS2 (all new kebab-case names + source folders)
2. For each image determine: which URL shows it + what CSS selector targets it
3. **Excluded from recapture** (rename only, no Playwright entry):
   - `Desktop_*` files in `docs/media/` — these are desktop browser screenshots, not Loop UI
   - Diagram/flow images in `docs/learn/deploy/media/`: `process_diagram.png`, `deployment_process.png`, `navigate.png`, `jenkins_pipeline.png`, `install_component.png`, `edit_pull_docker.png`, `edit_process.png`, `deploy_environment.png`, `dashboard.png`, `control_email.png`, `applications_run_page.png`, `add_component.png`
4. Populate iteratively by capability section (Introduction → Plan → Code → Control → Build → Deploy → Test → Measure → Release)
5. Run `capture.js` with `--section=control` flag to capture one section at a time

**URL pattern** (verify in browser after first login):

```text
Base loop context: /automation/
Plan:    /plan
Control: /control
Build:   /build
Deploy:  /deploy
Code:    /code
Test:    /test
Measure: /measure
Release: /release
```

Note: exact path format must be verified on first run — adjust the prefix in `viewport.js` or `.env` if different.

### CSS selector strategy (for new 2.0.2 UI)

Since the UI has updated icons and color scheme:

- Prefer `data-testid` attributes if present
- Fall back to `aria-label` attributes
- Fall back to stable class names (avoid generated hashes)
- For dialogs: use the dialog role or a stable wrapper class
- Document each selector in a comment in `screenshot-map.js` so it can be updated when UI changes again

**App switcher selector:**

```js
// The 9-dot grid app switcher icon — identified by its SVG filename embedded in the src
// selector: 'img[src*="dots-9-svgrepo-com"]'
// or if rendered as inline SVG, fall back to its parent button aria-label
```

---

## Workstream 4 — Shared Image Consolidation

### Images to move to `docs/media/`

These images are referenced in 3+ pages and should live in one place:

| Current path                           | Current filename                     | New path      | New filename                             |
|----------------------------------------|--------------------------------------|---------------|------------------------------------------|
| `docs/learn/introduction/media/`       | `Loop_central_app_control.png`       | `docs/media/` | `common-app-switcher.png`                |
| `docs/learn/introduction/media/`       | `Loop_whatwouldyouliketodotoday.png` | `docs/media/` | `common-what-today-menu.png`             |
| `docs/media/`                          | `Button_NEXT.png`                    | `docs/media/` | `common-button-next.png`                 |
| `docs/media/`                          | `Button_ADD.jpg`                     | `docs/media/` | `common-button-add.png` (convert to PNG) |
| *(find in deploy/media or root media)* | `Button_Save.png`                    | `docs/media/` | `common-button-save.png`                 |

**Note on `Button_ADD.jpg`:** This is the only `.jpg` in the set. Convert to `.png` during the move for consistency.

### How the rename script handles moved files

The `image-map.json` format supports cross-folder moves:

```json
{
  "docs/learn/introduction/media": {
    "Loop_central_app_control.png": {
      "newName": "common-app-switcher.png",
      "newFolder": "docs/media"
    }
  }
}
```

The rename script will move the file AND update all `.md` references to the new path.

---

## Workstream 5 — Content Updates

### 5a — IBM docs version links: `2.0.0` → `2.0.2`

Files to update (confirmed by grep):

| File                                         | Line(s)  | Current URL fragment | Action                |
|----------------------------------------------|----------|----------------------|-----------------------|
| `docs/ai_setup.md`                           | 66       | `devops-loop/2.0.0`  | → `devops-loop/2.0.2` |
| `docs/learn/code/index.md`                   | 126      | `devops-loop/2.0.0`  | → `devops-loop/2.0.2` |
| `docs/learn/introduction/index.md`           | 150, 165 | `devops-loop/2.0.0`  | → `devops-loop/2.0.2` |
| `docs/learn/introduction/loops/index.md`     | 55       | `devops-loop/2.0.0`  | → `devops-loop/2.0.2` |
| `docs/learn/introduction/genie/index.md`     | 36       | `devops-loop/2.0.0`  | → `devops-loop/2.0.2` |
| `docs/learn/introduction/teamspace/index.md` | 52       | `devops-loop/2.0.0`  | → `devops-loop/2.0.2` |
| `docs/learn/introduction/about/index.md`     | 125      | `devops-loop/2.0.0`  | → `devops-loop/2.0.2` |
| `docs/demo/mcp_setup.md`                     | 44       | `devops-loop/2.0.1`  | → `devops-loop/2.0.2` |

**Script:** `node scripts/update-version-links.js` — single sed-style replacement across all docs.

### 5b — Remove Loop Genie "tech-preview" label

**Confirmed from IBM Docs 2.0.2 TOC:** The page title still reads "AI provider integration for Loop Genie - Tech Preview" but the topic slug changed to `integrations.html`. The old slugs `loop-genie-tech-preview` and `loop-ai-provider-integration-genie-tech-preview` no longer exist at 2.0.2.

Files to update:

| File                                     | Line | Old URL fragment                                                          | New URL fragment                       |
|------------------------------------------|------|---------------------------------------------------------------------------|----------------------------------------|
| `docs/learn/introduction/genie/index.md` | 36   | `devops-loop/2.0.0?topic=loop-genie-tech-preview`                         | `devops-loop/2.0.2?topic=integrations` |
| `docs/learn/introduction/about/index.md` | 125  | `devops-loop/2.0.0?topic=loop-ai-provider-integration-genie-tech-preview` | `devops-loop/2.0.2?topic=integrations` |
| `docs/ai_setup.md`                       | 66   | `devops-loop/2.0.0?topic=loop-ai-provider-integration-genie-tech-preview` | `devops-loop/2.0.2?topic=integrations` |

**Note:** The version change (`2.0.0` → `2.0.2`) is already handled by WS5a. The slug replacement (`loop-genie-tech-preview` → `integrations`) requires a separate targeted pass — add it to `update-version-links.js` as a second replacement or handle it in a dedicated `update-genie-slug.js` script.

### 5c — App switcher location update

The central app switcher has moved from **top-left** to the **right side** of the screen in 2.0.2.

Every capability page has a "How to switch to X from Home Page" section referencing this widget. Text to update:

**Standard pattern replace** (10 files — simple find-replace):

| Find                                                  | Replace                                                 |
|-------------------------------------------------------|---------------------------------------------------------|
| `central app switcher on the top left of your screen` | `central app switcher on the right side of your screen` |

Files:

- `docs/learn/plan/index.md`
- `docs/learn/code/index.md`
- `docs/learn/control/index.md`
- `docs/learn/build/index.md`
- `docs/learn/deploy/index.md`
- `docs/learn/measure/index.md`
- `docs/learn/release/index.md`
- `docs/learn/test/index.md`
- `docs/demo/demo_classic.md`
- `docs/setup.md`

**Manual reword** — `docs/learn/introduction/index.md` line 72:

Current text:

```text
by using the central app switcher on the top left Central Solution/App Switcher
```

Replace with:

```text
by using the central app switcher on the right side of your screen
```

(The trailing "Central Solution/App Switcher" label was redundant and is removed.)

**Excluded:** `docs/learn/plan/newproject/index.md` — "top left" there refers to the **Edit button**, not the app switcher.

**Script:** `node scripts/update-switcher-text.js` — runs the pattern replace on the 10 standard files, then applies the manual reword to `introduction/index.md` as a targeted string replacement.

### 5d — New screenshots replace old ones

After WS3 automation runs:

1. New kebab-case named files land in the correct `media/` folders
2. WS2 rename script will already have updated all `.md` references to point to the new names
3. No manual `.md` editing needed — just confirm new files are present

---

## Workstream 6 — Validation

### Validation scripts to create

#### `scripts/check-image-refs.js`

```text
Purpose: Find all image references in .md files and verify the target file exists on disk.

Output:
  ✗ docs/learn/control/index.md:45 → media/control-old-name.png (FILE NOT FOUND)
  ✓ docs/learn/control/index.md:46 → media/control-sidebar-home.png
```

#### `scripts/check-orphan-images.js`

```text
Purpose: Find all image files in media/ folders that are not referenced in any .md file.

Output:
  ORPHAN: docs/learn/deploy/media/deploy-old-unused-screenshot.png
  (referenced: 0 times)
```

### Validation checklist

Run these in order after all workstreams are complete:

```bash
# 1. Check for remaining old version strings
grep -r "2\.0\.0" docs/
grep -r "2\.0\.1" docs/

# 2. Check for remaining old-style image names (ALLCAPS prefix)
grep -rE "\b[A-Z]{3,}_[A-Z]" docs/ --include="*.md"

# 3. Check for dead image references
node scripts/check-image-refs.js

# 4. Check for orphan images
node scripts/check-orphan-images.js

# 5. Check for " copy" files still present
find docs -name "* copy*"

# 6. Build the site (strict mode catches missing nav pages, broken includes)
mkdocs build --strict

# 7. Serve locally and spot-check nav
mkdocs serve
```

---

## Implementation Order (Step-by-Step)

| Step | Workstream | Task                                                | File(s)                  | Notes                                                                                   |
|------|------------|-----------------------------------------------------|--------------------------|-----------------------------------------------------------------------------------------|
| 1    | WS1        | Update `mkdocs.yml` nav                             | `mkdocs.yml`             | Fully self-contained, do first                                                          |
| 2    | WS2        | Create `scripts/` directory                         | —                        |                                                                                         |
| 3    | WS2        | Write `scripts/generate-image-map.js`               | new file                 | Scans filesystem, outputs draft JSON                                                    |
| 4    | WS2        | Run generate script → review `image-map.json`       | `scripts/image-map.json` | Human review gate                                                                       |
| 5    | WS4        | Add cross-folder move entries to `image-map.json`   | `scripts/image-map.json` | Common images → `docs/media/`                                                           |
| 6    | WS2        | Write `scripts/rename-images.js`                    | new file                 | Dry-run first                                                                           |
| 7    | WS2        | Run rename script dry-run, review output            | —                        |                                                                                         |
| 8    | WS2        | Run rename script for real                          | all `media/` + all `.md` | Point of no return — commit after                                                       |
| 9    | WS3        | Write `scripts/screenshots/viewport.js`             | new file                 |                                                                                         |
| 10   | WS3        | Write `scripts/screenshots/login.js`                | new file                 |                                                                                         |
| 11   | WS3        | Write `scripts/screenshots/helpers.js`              | new file                 |                                                                                         |
| 12   | WS3        | Write `scripts/screenshots/capture.js`              | new file                 |                                                                                         |
| 13   | WS3        | Populate `scripts/screenshots/screenshot-map.js`    | new file                 | One entry per screenshot, by section                                                    |
| 14   | WS3        | Create `.env` from `.env.example`, fill credentials | `.env`                   | Gitignored                                                                              |
| 15   | WS3        | Run capture script section by section               | —                        | Verify output after each section                                                        |
| 16   | WS5        | Run `scripts/update-version-links.js`               | 8 `.md` files            | `2.0.0`/`2.0.1` → `2.0.2`                                                               |
| 17   | WS5        | Run Genie slug replacement                          | 3 `.md` files            | Slug: `loop-genie-tech-preview` → `integrations` (confirmed)                            |
| 18   | WS5        | Run `scripts/update-switcher-text.js`               | 11 `.md` files           | top-left → right side; also fix `[AppSwitcher]` label in `code/index.md` and `setup.md` |
| 19   | WS6        | Run all validation checks                           | —                        | Fix any issues found                                                                    |
| 20   | WS6        | `mkdocs build --strict`                             | —                        | Must pass clean                                                                         |
| 21   | WS6        | `mkdocs serve` — spot-check nav and images          | —                        | Final visual check                                                                      |

---

## Known Risks & Notes

| Risk                                                             | Mitigation                                                                                                                                                                                       |
|------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CSS selectors in `screenshot-map.js` may not match 2.0.2 UI      | Use `data-testid` > `aria-label` > stable class names. Run capture with `headless: false` first to debug selectors interactively                                                                 |
| IBM Docs `loop-genie-tech-preview` slug — **RESOLVED**           | Confirmed: new slug is `?topic=integrations` (page title still says "Tech Preview" in 2.0.2 TOC)                                                                                                 |
| `docs/learn/secure/media/` does not exist                        | Create folder before WS3 screenshot capture; `generate-image-map.js` will skip until it exists                                                                                                   |
| `Button_ADD.jpg` is JPEG, not PNG                                | Convert during WS4 move step                                                                                                                                                                     |
| `" copy"` duplicate files (3 found in `deploy/resources/media/`) | Marked as DELETE in `image-map.json` — do not rename, just delete                                                                                                                                |
| Session expiry during long screenshot capture runs               | `login.js` should detect 401/redirect and re-authenticate mid-run                                                                                                                                |
| `mkdocs-toggle-sidebar` plugin                                   | Verify it's still compatible after nav additions                                                                                                                                                 |
| `[AppSwitcher]` vs `[CentralAppSwitcher]` label inconsistency    | `code/index.md` and `setup.md` use `[AppSwitcher]`; all others use `[CentralAppSwitcher]`. After WS4 moves the image to `docs/media/`, update both reference label paths — handle as part of WS4 |
| 739 images across 31 folders — WS3 scope is large                | Populate `screenshot-map.js` iteratively by section; static UI elements (button icons etc.) that haven’t changed in 2.0.2 do not need recapture                                                  |

---

## Files Created by This Plan

```dir
scripts/
  generate-image-map.js       # WS2 — generates draft image-map.json
  image-map.json              # WS2 — reviewed rename mapping spec
  rename-images.js            # WS2 — executes renames + .md ref updates
  update-version-links.js     # WS5a — updates IBM docs version strings
  update-switcher-text.js     # WS5c — updates app switcher location text
  check-image-refs.js         # WS6 — validates .md → image file refs
  check-orphan-images.js      # WS6 — finds unreferenced image files
  screenshots/
    .env.example              # WS3 — credentials template
    capture.js                # WS3 — main screenshot runner
    login.js                  # WS3 — Playwright login + session
    screenshot-map.js         # WS3 — full URL+selector mapping
    viewport.js               # WS3 — browser/viewport config
    helpers.js                # WS3 — shared capture utilities
```

---

*Plan file: `bob_v202-update-plan.md` | Ready for implementation in a new chat session.*
