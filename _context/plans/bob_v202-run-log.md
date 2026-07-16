# DevOps Loop End-to-End Tutorial — v2.0.2 Update Run Log

> **Branch:** `40-update-to-202`  
> **Started:** 2025  
> **Status:** Workstreams 1–6 complete. Playwright capture (WS3 execution) and post-capture content wiring (WS5d) remain.

---

## What Was Done (Completed)

### WS1 — Navigation Fix ✅

**File:** `mkdocs.yml`

Applied the complete corrected nav. Additions vs prior state:

| Section       | Added entries                                                      |
|---------------|--------------------------------------------------------------------|
| Demo Flows    | `Overview: demo/index.md`                                          |
| Plan          | `New Application`, `New Project`, `Queries`, `Setup`, `Work Items` |
| Learning Labs | `Code: learn/code/index.md` (was missing entirely)                 |
| Deploy        | `Processes`, `Resources`, `Settings`                               |

All 10 referenced pages confirmed present on disk before commit.

---

### WS2 — Kebab-case Image Renaming Scripts ✅

**Files created:**

| File                            | Purpose                                                                                         |
|---------------------------------|-------------------------------------------------------------------------------------------------|
| `scripts/generate-image-map.js` | Scans all `docs/**/media/` folders, applies naming rules, writes draft `scripts/image-map.json` |
| `scripts/rename-images.js`      | Reads `image-map.json`, renames files on disk, rewrites all `.md` refs atomically               |
| `scripts/image-map.json`        | Generated draft — 709 images scanned                                                            |

**Current state of image-map.json:** All 709 images on this branch are already correctly named (kebab-case). Zero renames needed. The scripts are ready for any new images added by WS3 Playwright capture.

**To regenerate after adding new images:**

```bash
node scripts/generate-image-map.js
# Review scripts/image-map.json
node scripts/rename-images.js --dry-run
node scripts/rename-images.js
```

---

### WS3 — Playwright Screenshot Automation Scripts ✅

**Files created:**

| File                                    | Purpose                                                                                            |
|-----------------------------------------|----------------------------------------------------------------------------------------------------|
| `scripts/screenshots/viewport.js`       | Browser config — Chromium, 1280×900, `HEADLESS=1` for CI                                           |
| `scripts/screenshots/.env.example`      | Credentials template                                                                               |
| `scripts/screenshots/helpers.js`        | `saveScreenshot`, `waitForSelector`, `elementScreenshot`, `viewportScreenshot`, `dialogScreenshot` |
| `scripts/screenshots/login.js`          | Session restore + fresh login; saves `.session.json`                                               |
| `scripts/screenshots/capture.js`        | Main runner — `--dry-run`, `--section=<name>`                                                      |
| `scripts/screenshots/screenshot-map.js` | 701 stub entries across 12 sections                                                                |
| `scripts/screenshots/package.json`      | npm manifest                                                                                       |

**Dry-run confirmed working** (no npm install required for `--dry-run`):

```bash
node scripts/screenshots/capture.js --dry-run             # all 701 entries
node scripts/screenshots/capture.js --dry-run --section=control  # 57 entries
```

**Sections and entry counts:**

| Section      | Entries |
|--------------|---------|
| introduction | 72      |
| plan         | 194     |
| code         | 49      |
| control      | 57      |
| build        | 26      |
| deploy       | 184     |
| measure      | 39      |
| test         | 49      |
| release      | 3       |
| common       | 13      |
| demo         | 15      |
| **Total**    | **701** |

**`.gitignore` updated** — `scripts/screenshots/.env` and `.session.json` are excluded.

---

### WS4 — Shared Image Consolidation ✅ (no-op)

All files described in WS4 (`Loop_central_app_control.png` → `common-app-switcher.png` etc.) were already moved and renamed on this branch in prior work. No action needed.

---

### WS5 — Content Updates ✅

#### 5a + 5b — IBM Docs version links + Genie slug

**Script:** `scripts/update-version-links.js`  
**Applied:** `node scripts/update-version-links.js`

| File                                         | Change                                                             |
|----------------------------------------------|--------------------------------------------------------------------|
| `docs/ai_setup.md`                           | `2.0.0` → `2.0.2`; Genie AI-provider slug → `?topic=integrations`  |
| `docs/demo/mcp_setup.md`                     | `2.0.1` → `2.0.2`                                                  |
| `docs/learn/code/index.md`                   | `2.0.0` → `2.0.2`                                                  |
| `docs/learn/introduction/about/index.md`     | `2.0.0` → `2.0.2`; Genie AI-provider slug → `?topic=integrations`  |
| `docs/learn/introduction/genie/index.md`     | `2.0.0` → `2.0.2`; Genie tech-preview slug → `?topic=integrations` |
| `docs/learn/introduction/index.md`           | `2.0.0` → `2.0.2` (×2)                                             |
| `docs/learn/introduction/loops/index.md`     | `2.0.0` → `2.0.2`                                                  |
| `docs/learn/introduction/teamspace/index.md` | `2.0.0` → `2.0.2`                                                  |

#### 5c — App switcher location text

**Script:** `scripts/update-switcher-text.js`  
**Applied:** `node scripts/update-switcher-text.js`

Changed `"central app switcher on the top left of your screen"` → `"central app switcher on the right side of your screen"` in:

- `docs/learn/plan/index.md`
- `docs/learn/code/index.md`
- `docs/learn/control/index.md`
- `docs/learn/build/index.md`
- `docs/learn/deploy/index.md`
- `docs/learn/measure/index.md`
- `docs/learn/release/index.md`
- `docs/learn/test/index.md`
- `docs/demo/demo_classic.md` (×2)
- `docs/setup.md` (×3)

Manual reword in `docs/learn/introduction/index.md` line 72:  
`"top left Central Solution/App Switcher"` → `"right side of your screen"` (redundant label removed)

#### Bonus — Pre-existing broken image refs fixed

Found and fixed 23 broken refs that pre-dated this update:

| File                               | Fix                                                                                                     |
|------------------------------------|---------------------------------------------------------------------------------------------------------|
| `docs/learn/introduction/index.md` | `LoopHome_build-build-metrics.png` → `intro-loop-home-build-metrics.png`                                |
| `docs/demo/demo_classic.md`        | Same rename (×2 refs)                                                                                   |
| `docs/learn/deploy/index.md`       | 16 `media/deploy-proc-*` refs → `processes/media/deploy-proc-*` (files live in `processes/` sub-folder) |
| `docs/learn/deploy/index.md`       | `media/import_application.png` → `media/deploy-deploy-import-apps-button.png`                           |
| `docs/learn/deploy/index.md`       | `media/updated_application.png` → `media/deploy-deploy-import-apps-dialog.png`                          |

#### 5d — New screenshots replace old ones

**Not yet done** — depends on WS3 Playwright capture run. See "What Remains" below.

---

### WS6 — Validation Scripts + Full Pass ✅

**Scripts created:**

| Script                           | Purpose                                              |
|----------------------------------|------------------------------------------------------|
| `scripts/check-image-refs.js`    | Verify all `.md` image refs resolve to files on disk |
| `scripts/check-orphan-images.js` | Find images not referenced by any `.md` file         |

**Validation results (post-implementation):**

| Check                         | Command                                  | Result                                         |
|-------------------------------|------------------------------------------|------------------------------------------------|
| Old version strings           | `grep -r "devops-loop/2\.0\.[01]" docs/` | ✅ None                                        |
| ALL_CAPS image names in `.md` | `grep -rE "!\[.*\]\([A-Z]{3,}_" docs/`   | ✅ 0                                           |
| Broken image refs             | `node scripts/check-image-refs.js`       | ✅ 0 broken (was 23)                           |
| Copy files on disk            | `find docs -name "* copy*"`              | ✅ None                                        |
| MkDocs strict build           | `mkdocs build --strict`                  | ✅ Clean                                       |
| Orphan images                 | `node scripts/check-orphan-images.js`    | ℹ️ 150 orphans (expected — unreferenced media) |

---

## What Remains (TODO)

### 🔴 Required before merging

#### 1. Populate `screenshot-map.js` selectors

Every entry in `scripts/screenshots/screenshot-map.js` is currently a **stub** with:

```js
type:     'viewport',             // TODO: change to 'element' for small UI elements
selector: null,                   // TODO: add CSS selector for element captures
waitFor:  null,                   // TODO: add stable waitFor selector
```

Before running capture, each entry needs:

- `waitFor` — a CSS selector that confirms the page is loaded (e.g. `.plan-sidebar`, `[data-testid="loop-header"]`)
- For small UI elements (buttons, icons): change `type` to `'element'` and set `selector`
- For dialogs: change `type` to `'dialog'`, set `selector` (dialog container), `triggerSelector` (button to click)

**Recommended approach:** Start with one section at a time using `--section=control`. Run headless=false to see the browser. Use browser DevTools to find stable selectors (`data-testid` > `aria-label` > stable class).

**App switcher selector** (confirmed in plan):

```js
selector: 'img[src*="dots-9-svgrepo-com"]'
// fallback: parent button aria-label if rendered as inline SVG
```

#### 2. Install Playwright and run capture

```bash
cd scripts/screenshots
cp .env.example .env
# Edit .env — fill in LOOP_USER and LOOP_PASS

npm install
npx playwright install chromium

# Run one section first to verify login + selectors
node capture.js --section=introduction

# Then section by section:
node capture.js --section=plan
node capture.js --section=control
# ... etc.

# Or all at once:
node capture.js
```

**First-run checklist:**

- [ ] Login succeeds and `.session.json` is written
- [ ] Loop context URL resolves (check `LOOP_TEAMSPACE=DEMOZ` and `LOOP_LOOP=Bike` are correct)
- [ ] At least one section captures without errors
- [ ] Verify output files appear in the correct `media/` folder

**Loop context URL** — `capture.js` currently builds:

```json
{LOOP_URL}/teamspace/{LOOP_TEAMSPACE}/loop/{LOOP_LOOP}
```

Verify this URL pattern is correct in 2.0.2 after first login. If the path differs, update `capture.js` around line 107.

#### 3. Wire new screenshots into `.md` files (WS5d)

After capture produces new images, the `.md` files need their image references updated to point to the new filenames. Two approaches:

**Option A (if `rename-images.js` handled it):** If the old pre-rename names were still present before WS3 ran, `rename-images.js` would have updated refs. Since names are already correct on this branch, any *new* images from capture just need `[label]: media/new-filename.png` entries added to the relevant `.md` files.

**Option B (manual):** After capture, compare new filenames in each `media/` folder to what the `.md` currently references. Add missing reference definitions.

#### 4. Re-run validation after capture

```bash
node scripts/check-image-refs.js          # should still be 0 broken
node scripts/check-orphan-images.js       # orphan count should drop as new images are referenced
mkdocs build --strict                     # must pass clean
mkdocs serve                              # visual spot-check nav + images
```

---

### 🟡 Nice-to-have / manual checks

#### 5. `docs/learn/secure/media/` is empty

The `secure` section has a `media/` folder with 0 images. No screenshot entries were generated for it. Once 2.0.2 UI screenshots for the Secure section are available, add them to `screenshot-map.js` with `section: 'secure'`.

#### 6. 150 orphan images

`node scripts/check-orphan-images.js` reports 150 images not referenced by any `.md`. These fall into two categories:

- **Legitimately unreferenced** — old images that were renamed but old refs in `.md` still point to old names (unlikely given the ref-check passes)
- **Available but unused** — images that exist in `media/` folders but aren't included in any page yet

Run `node scripts/check-orphan-images.js` after WS5d wiring to see how many remain. Safe to delete confirmed orphans to keep the repo clean.

#### 7. `demo/index.md` content

`demo/index.md` is now in the nav as the Demo Flows "Overview" entry (WS1). Verify it has appropriate overview content. If it's a placeholder, add a brief intro paragraph.

#### 8. MkDocs pages not in nav (informational)

`mkdocs build --strict` reports these as present but not in nav — this is pre-existing and expected:

- `tags.md`
- `includes/abbreviations.md`
- `learn/introduction/about/index.md`
- `learn/introduction/genie/index.md`
- `learn/introduction/loops/index.md`
- `learn/introduction/teamspace/index.md`

These are sub-pages linked from `learn/introduction/index.md` via inline links, not nav entries. No action needed unless you want them in the nav.

---

## Scripts Reference

| Script               | Command                                                | When to use                 |
|----------------------|--------------------------------------------------------|-----------------------------|
| Generate image map   | `node scripts/generate-image-map.js`                   | After adding new images     |
| Dry-run rename       | `node scripts/rename-images.js --dry-run`              | Preview before applying     |
| Apply rename         | `node scripts/rename-images.js`                        | After reviewing dry-run     |
| Update version links | `node scripts/update-version-links.js`                 | Next IBM Docs version bump  |
| Update switcher text | `node scripts/update-switcher-text.js`                 | If app switcher moves again |
| Check broken refs    | `node scripts/check-image-refs.js`                     | After any image rename/move |
| Check orphans        | `node scripts/check-orphan-images.js`                  | After capture + wiring      |
| Capture screenshots  | `node scripts/screenshots/capture.js --section=<name>` | After filling selectors     |
| Capture dry-run      | `node scripts/screenshots/capture.js --dry-run`        | List entries, no browser    |

---

## Known Decisions (do not re-ask)

| #  | Decision                                                                               |
|----|----------------------------------------------------------------------------------------|
| 1  | New version: `2.0.2`                                                                   |
| 2  | Screenshot tool: Playwright, Chromium, 1280px                                          |
| 3  | Image naming: kebab-case, single dash, zero-padded suffix                              |
| 4  | Demo prefix: `ai-first-`, `classic-`, `mcp-`                                           |
| 5  | Common/shared prefix: `common-`                                                        |
| 6  | Platform URL: `https://platform-staging.us-east.containers.appdomain.cloud/automation` |
| 7  | Teamspace: `DEMOZ`, Loop: `Bike`                                                       |
| 8  | App switcher selector: `img[src*="dots-9-svgrepo-com"]`                                |
| 9  | Session: standard userid/password + Playwright storageState                            |
| 10 | `Desktop_*` files in `docs/media/` — rename only, no Playwright recapture              |
| 11 | Static deploy diagrams — rename only, no Playwright recapture                          |
| 12 | `docs/learn/secure/media/` — currently empty, skip until images are available          |

---

## Risks & Gotchas (still relevant)

| Risk                                                          | Status     | Mitigation                                                                                                                                                                                                                                           |
|---------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CSS selectors in `screenshot-map.js` may not match 2.0.2 UI   | 🔴 Open    | Use `data-testid` > `aria-label` > stable class. Run `headless: false` first to debug interactively                                                                                                                                                  |
| Session expiry during long capture runs                       | 🔴 Open    | `login.js` detects redirect and re-auths. If a full 701-image run stalls, use `--section=` to restart from a specific section                                                                                                                        |
| Loop context URL pattern unverified in 2.0.2                  | 🔴 Open    | `capture.js` builds `{LOOP_URL}/teamspace/DEMOZ/loop/Bike` — confirm in browser after first login; adjust at line ~107 if path differs                                                                                                               |
| `[AppSwitcher]` vs `[CentralAppSwitcher]` label inconsistency | 🟡 Open    | `docs/learn/code/index.md` and `docs/setup.md` use `[AppSwitcher]`; all other files use `[CentralAppSwitcher]`. Both point to `common-app-switcher.png` in `docs/media/`. Harmless but inconsistent — normalise to `[CentralAppSwitcher]` if desired |
| `mkdocs-toggle-sidebar` plugin compatibility                  | 🟡 Open    | Verify plugin still works after nav additions (WS1 added 10 new entries). Run `mkdocs serve` and toggle the sidebar                                                                                                                                  |
| IBM Docs Genie slug `loop-genie-tech-preview`                 | ✅ Resolved| Confirmed new slug is `?topic=integrations`; applied in WS5b                                                                                                                                                                                         |
| `" copy"` duplicate files in `deploy/resources/media/`        | ✅ Resolved| `find docs -name "* copy*"` returns nothing — already removed on this branch                                                                                                                                                                         |
| `Button_ADD.jpg` JPEG conversion                              | ✅ Resolved| File is now `common-button-add.png` in `docs/media/` (already PNG on this branch)                                                                                                                                                                    |
| `docs/learn/secure/media/` empty                              | ✅ Known   | Folder exists, 0 images. `generate-image-map.js` skips it. Add entries to `screenshot-map.js` with `section: 'secure'` once screenshots are available                                                                                                |
