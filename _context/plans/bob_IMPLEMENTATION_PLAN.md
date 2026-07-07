# Implementation Plan — MkDocs Optimization

> Generated from [`OPTIMIZATION_RECOMMENDATIONS.md`](OPTIMIZATION_RECOMMENDATIONS.md)  
> Each task maps 1-to-1 to a recommendation item and lists the exact lines to change.

---

## Status Legend

| Icon | Meaning                                         |
|------|-------------------------------------------------|
| 🔴   | High priority — breaks functionality or content |
| 🟡   | Medium priority — degrades user experience      |
| 🟢   | Low priority — polish and best practice         |
| ⬜   | Not started                                     |
| ✅   | Done                                            |

---

## Phase 1 — High Priority (do first)

### Task 1.1 🔴 Remove `navigation.collapse` from `base.yml`

- **File:** [`base.yml`](base.yml)
- **Line:** 23 (`- navigation.collapse`)
- **Change:** Delete that single line. Keep `navigation.expand` on line 24.
- **Why:** `collapse` and `expand` are mutually exclusive; having both is undefined behaviour in MkDocs Material.

```yaml
# DELETE this line only:
    - navigation.collapse
```

<!-- ---

IGNORE this Task 1.2

### Task 1.2 🔴 Add all orphaned pages to `mkdocs.yml` nav

- **File:** [`mkdocs.yml`](mkdocs.yml)
- **Lines:** 10-35 (entire `nav:` block)
- **Change:** Replace the current `nav:` block with the expanded version below.

**Pages currently missing from nav (all files confirmed present on disk):**

| Missing page              | File path                               |
|---------------------------|-----------------------------------------|
| Demo overview             | `demo/index.md`                         |
| Introduction – About      | `learn/introduction/about/index.md`     |
| Introduction – Genie      | `learn/introduction/genie/index.md`     |
| Introduction – Teamspaces | `learn/introduction/teamspace/index.md` |
| Introduction – Loops      | `learn/introduction/loops/index.md`     |
| Plan – Setup              | `learn/plan/setup/index.md`             |
| Plan – New Application    | `learn/plan/newapp/index.md`            |
| Plan – New Project        | `learn/plan/newproject/index.md`        |
| Plan – Work Items         | `learn/plan/workitems/index.md`         |
| Plan – Queries            | `learn/plan/queries/index.md`           |
| Code                      | `learn/code/index.md`                   |
| Deploy – Processes        | `learn/deploy/processes/index.md`       |
| Deploy – Resources        | `learn/deploy/resources/index.md`       |
| Deploy – Settings         | `learn/deploy/settings/index.md`        |

**New `nav:` block (replace lines 10-35):**

```yaml
nav:
  - Home: index.md
  - Introduction:
      - Overview: learn/introduction/index.md
      - About DevOps Loop: learn/introduction/about/index.md
      - Loop Genie: learn/introduction/genie/index.md
      - Teamspaces: learn/introduction/teamspace/index.md
      - Loops: learn/introduction/loops/index.md
  - Demo Flows:
      - Overview: demo/index.md
      - AI-First Demo: demo/demo_ai_first.md
      - Classic Demo: demo/demo_classic.md
      - MCP Setup: demo/mcp_setup.md
  - Learning Labs:
      - Overview: learn/index.md
      - Plan:
          - Overview: learn/plan/index.md
          - Setup: learn/plan/setup/index.md
          - New Application: learn/plan/newapp/index.md
          - New Project: learn/plan/newproject/index.md
          - Boards: learn/plan/boards/index.md
          - Work Items: learn/plan/workitems/index.md
          - Queries: learn/plan/queries/index.md
          - AI Assistant: learn/plan/ai_assistant/index.md
      - Control: learn/control/index.md
      - Code: learn/code/index.md
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

> ⚠️ Verify each sub-directory contains an `index.md` before adding it to nav (spot-checked: all listed directories exist on disk). `learn/code/index.md` — confirm this file exists before deploying. 

-->

---

### Task 1.3 🔴 Add WIP admonition to `demo/demo_ai_first.md`

- **File:** [`docs/demo/demo_ai_first.md`](docs/demo/demo_ai_first.md)
- **Change:** Insert a WIP admonition after line 1 (the `# AI First Demo Flow` heading).

```markdown
!!! warning "Work in Progress"
    This demo flow guide is being written. In the meantime, follow the
    [MCP Setup guide](mcp_setup.md) to configure your AI assistant,
    then refer to the [Classic Demo Flow](demo_classic.md) for step-by-step instructions.
```

---

### Task 1.4 🔴 Replace `TODO:` markers with WIP admonitions in `deploy/index.md`

- **File:** [`docs/learn/deploy/index.md`](docs/learn/deploy/index.md)

**Five TODOs to replace:**

| Line | Current text                                            | Replacement                                                                                                                                                                                          |
|------|---------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3    | `TODO: Flow needs rewrite and new screenshots`          | `!!! warning "Work in Progress"\n    This section is being updated. Content and screenshots will be added in the next revision.`                                                                     |
| 84   | `TODO: talk about applications`                         | `!!! info "Coming Soon"\n    A full walkthrough of the Applications section will be added here.\n    For now, see the [Applications sub-page](applications/index.md) for step-by-step instructions.` |
| 103  | `TODO: talk about components`                           | `!!! info "Coming Soon"\n    A full walkthrough of the Components section will be added here.\n    For now, see the [Components sub-page](components/index.md) for step-by-step instructions.`       |
| 118  | `TODO: talk about environments`                         | `!!! info "Coming Soon"\n    A full walkthrough of the Environments section will be added here.`                                                                                                     |
| 163  | `TODO: talk about snapshots and what they are good for` | `!!! info "Coming Soon"\n    A description of snapshots and their purpose will be added here.`                                                                                                       |

---

### Task 1.5 🔴 Fix broken HTML in `deploy/components/index.md`

- **File:** [`docs/learn/deploy/components/index.md`](docs/learn/deploy/components/index.md)
- **Line:** 33
- **Change:**

```markdown
# BEFORE
| | use "home/echologic/echo" for this example | <home/echologic/echo> |

# AFTER
| | use "home/echologic/echo" for this example | `home/echologic/echo` |
```

---

### Task 1.6 🔴 Add `td img` CSS constraint to `extra.css`

- **File:** [`docs/stylesheets/extra.css`](docs/stylesheets/extra.css)
- **Change:** Replace the entire `Image Presentation` section (lines 141-151) with the complete block below (covers 3.1, 3.3, and 5.3 from recommendations):

```css
/* ============================================
   Image Presentation
   ============================================ */

/* Base image styling */
.md-typeset img {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  content-visibility: auto;        /* browser-native deferred rendering */
}

.md-typeset img:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
}

/* Table cell images — constrain size, no overflow */
.md-typeset td img {
  max-width: 100%;
  max-height: 400px;
  height: auto;
  display: block;
  border-radius: 6px;
}

.md-typeset td img:not([width]) {
  max-width: 480px;
}

/* Inline images in paragraphs and list items (icon crops) */
.md-typeset p img,
.md-typeset li img {
  display: inline;
  vertical-align: middle;
  max-height: 2em;
  width: auto;
  border-radius: 3px;
  box-shadow: none;
}

.md-typeset p img:hover,
.md-typeset li img:hover {
  transform: none;
  box-shadow: none;
}
```

---

## Phase 2 — Medium Priority

### Task 2.1 🟡 Add `site_url` to `mkdocs.yml`

- **File:** [`mkdocs.yml`](mkdocs.yml)
- **Change:** Add `site_url` after `site_name` (line 1):

```yaml
site_name: "DevOps Loop End to End Demo"
site_url: "https://devopsautomationlabs.github.io/End2End/"   # ← add this
site_description: "Master DevOps Loop with hands-on labs and AI-powered demonstrations"
```

---

### Task 2.2 🟡 Add `social`, `offline`, and `meta` plugins to `base.yml`

- **File:** [`base.yml`](base.yml)
- **Lines:** 110-132 (end of `plugins:` block)
- **Change:** Append the three plugins after the `glightbox` block:

```yaml
  - social                    # generates Open Graph cards per page
  - offline                   # bundles site for offline / air-gapped demos
  - meta                      # enables per-page front-matter overrides
```

- **Prerequisite:** Update [`requirements.txt`](requirements.txt) — change `mkdocs-material>=9.5.0` to `mkdocs-material[imaging]>=9.5.0` so the `social` plugin's image rendering works.

---

### Task 2.3 🟡 Replace hardcoded `th` gradient with CSS variables

- **File:** [`docs/stylesheets/extra.css`](docs/stylesheets/extra.css)
- **Lines:** 58-65
- **Change:**

```css
/* BEFORE */
.md-typeset table:not([class]) th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85em;
  letter-spacing: 0.5px;
}

/* AFTER */
.md-typeset table:not([class]) th {
  background-color: var(--md-primary-fg-color);
  color: var(--md-primary-bg-color);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85em;
  letter-spacing: 0.5px;
}
```

---

### Task 2.4 🟡 Rewrite `learn/index.md` with Material grid cards

- **File:** [`docs/learn/index.md`](docs/learn/index.md)
- **Change:** Replace entire file content with:

```markdown
# Learning Labs

Master DevOps Loop capabilities with hands-on step-by-step labs.

<div class="grid cards" markdown>

- :material-clipboard-list:{ .lg .middle } **Plan**

    Issue tracking, boards, work items, queries, and AI assistant integration.

    ---
    [:octicons-arrow-right-24: Start Plan Lab](plan/index.md)

- :material-source-branch:{ .lg .middle } **Control**

    Git hosting, repository management, access tokens, and code review.

    ---
    [:octicons-arrow-right-24: Start Control Lab](control/index.md)

- :material-code-braces:{ .lg .middle } **Code**

    Cloud-based IDE, dev containers, and code with AI assistance.

    ---
    [:octicons-arrow-right-24: Start Code Lab](code/index.md)

- :material-cog-play:{ .lg .middle } **Build**

    Continuous integration, build templates, project runs, and access tokens.

    ---
    [:octicons-arrow-right-24: Start Build Lab](build/index.md)

- :material-rocket-launch:{ .lg .middle } **Deploy**

    Application deployment, components, processes, and the Deploy Genie.

    ---
    [:octicons-arrow-right-24: Start Deploy Lab](deploy/index.md)

- :material-test-tube:{ .lg .middle } **Test**

    Continuous testing, test suites, and MCP server integration.

    ---
    [:octicons-arrow-right-24: Start Test Lab](test/index.md)

- :material-shield-check:{ .lg .middle } **Secure**

    Vulnerability scanning and security issue management.

    ---
    [:octicons-arrow-right-24: Start Secure Lab](secure/index.md)

- :material-chart-line:{ .lg .middle } **Measure**

    Value stream metrics, DORA metrics, and dashboards.

    ---
    [:octicons-arrow-right-24: Start Measure Lab](measure/index.md)

- :material-package-variant-closed:{ .lg .middle } **Release**

    Release pipelines, snapshots, and reporting.

    ---
    [:octicons-arrow-right-24: Start Release Lab](release/index.md)

</div>
```

---

### Task 2.5 🟡 Fix typos

**File: [`docs/learn/plan/setup/index.md`](docs/learn/plan/setup/index.md)**

| Line | Find                           | Replace                       |
|------|--------------------------------|-------------------------------|
| 18   | `Downloade the Demo Data File` | `Download the Demo Data File` |
| 19   | `Click oon`                    | `Click on`                    |
| 25   | `Presss the Import Button`     | `Press the Import Button`     |

**File: [`docs/learn/deploy/components/index.md`](docs/learn/deploy/components/index.md)**

| Line | Find                 | Replace              |
|------|----------------------|----------------------|
| 48   | `Chose File`         | `Choose File`        |
| 36   | `configuraiton view` | `configuration view` |

**File: [`docs/learn/introduction/index.md`](docs/learn/introduction/index.md)**

| Line | Find          | Replace      |
|------|---------------|--------------|
| 53   | `successeful` | `successful` |

---

### Task 2.6 🟡 Add JavaScript lazy-loader for images

- **New file:** `docs/javascripts/lazyload.js`

```javascript
// Apply loading="lazy" to all images that don't already have it
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.md-typeset img:not([loading])').forEach(function (img) {
    img.setAttribute('loading', 'lazy');
  });
});
```

- **File:** [`mkdocs.yml`](mkdocs.yml) — add `extra_javascript` section (or append if it already exists):

```yaml
extra_javascript:
  - javascripts/lazyload.js
```

---

### Task 2.7 🟡 Fix non-descriptive alt text (worst offenders)

Run this grep to find reference-style images where alt text equals the reference ID:

```bash
grep -rn '\!\[\(Build\|Deploy\|Control\|CODE\|CONTROL\|DEPLOY\|SB\)\]' docs/
```

For each hit, update the alt text to be descriptive. Example:

```markdown
# BEFORE
![BuildSideBarSystem][BuildSideBarSystem]

# AFTER
![Build sidebar system settings link][BuildSideBarSystem]
```

Focus on the most commonly used screenshots across `learn/deploy/`, `learn/build/`, `learn/control/`.

---

## Phase 3 — Low Priority (polish)

### Task 3.1 🟢 Set favicon in `base.yml`

- **File:** [`base.yml`](base.yml)
- **Line:** 10 (`favicon: null`)
- **Options:**
  - **Option A (remove):** Delete line 10 entirely → MkDocs Material uses its default rocket icon.
  - **Option B (custom):** Place a 32×32 or 48×48 PNG at `docs/assets/favicon.png` and set:

    ```yaml
    favicon: assets/favicon.png
    ```

---

### Task 3.2 🟢 Add missing abbreviations to `docs/includes/abbreviations.md`

- **File:** [`docs/includes/abbreviations.md`](docs/includes/abbreviations.md)
- **Change:** Append these lines (note: `CD` is defined twice in the current file — keep only `Continuous Delivery`):

```markdown
*[DORA]: DevOps Research and Assessment
*[HTTP]: HyperText Transfer Protocol
*[JSON]: JavaScript Object Notation
*[MFA]: Multi-Factor Authentication
*[SaaS]: Software as a Service
*[SCM]: Source Code Management
*[SDK]: Software Development Kit
*[SSO]: Single Sign-On
*[URL]: Uniform Resource Locator
*[VSCode]: Visual Studio Code
*[WCA]: Watson Code Assistant
```

> **Bonus fix:** Remove the duplicate `*[CD]: Continuous Deployment` line — keep only `*[CD]: Continuous Delivery`.

---

### Task 3.3 🟢 Standardize snippet include syntax in `deploy/index.md`

- **File:** [`docs/learn/deploy/index.md`](docs/learn/deploy/index.md)
- **Lines:** 98-100 and 110-112 (two multiline `--8<--` blocks)
- **Change:** Convert Pattern B (multiline) to Pattern A (inline):

```markdown
# BEFORE (Pattern B)
--8<--
learn/deploy/applications/index.md:CreateNewApplication
--8<--

# AFTER (Pattern A)
--8<-- learn/deploy/applications/index.md:CreateNewApplication
```

Apply same change to the `CreateNewComponent` snippet block.

---

### Task 3.4 🟢 Add dark mode variant for hero section

- **File:** [`docs/stylesheets/extra.css`](docs/stylesheets/extra.css)
- **Change:** Insert after the closing `}` of the `.hero-section` block (after line 86):

```css
/* Hero section — dark mode adjustment */
[data-md-color-scheme="slate"] .hero-section {
  background: linear-gradient(135deg, #3d4fd6 0%, #5a2d8a 100%);
  box-shadow: 0 10px 25px rgba(30, 30, 60, 0.5);
}
```

---

### Task 3.5 🟢 Enable external links opening in new tab

- **Option A (recommended):** Install plugin and register in `mkdocs.yml`:

```bash
pip install mkdocs-open-in-new-tab
# Add to requirements.txt: mkdocs-open-in-new-tab
```

```yaml
# mkdocs.yml — markdown_extensions section
markdown_extensions:
  - mkdocs-open-in-new-tab
```

- **Option B:** Manually add `{target=_blank rel=noopener}` to critical external links using `attr_list` (already enabled).

---

### Task 3.6 🟢 Review and archive/delete commented-out sections

- **Files to review:**
  - [`docs/learn/code/index.md`](docs/learn/code/index.md) — large `<!-- ... -->` block
  - [`docs/learn/control/index.md`](docs/learn/control/index.md) — large `<!-- ... -->` block
  - [`docs/learn/deploy/index.md`](docs/learn/deploy/index.md) — lines 47-80 (large commented-out configuration section)

- **Decision matrix:**
  - Content permanently superseded → delete
  - Content may be revived → move to `docs/archive/` and leave `<!-- See docs/archive/... -->` comment
  - Keep only a short `<!-- TODO: restore when screenshots updated -->` comment if block is intentionally placeholder

---

### Task 3.7 🟢 Add image titles for glightbox captions

- **Scope:** Key standalone screenshots across deploy, build, control labs.
- **Syntax:** Add `{ title="..." }` using `attr_list` (already enabled).

```markdown
# BEFORE
![Deploy Dashboard Page][DeployDashboard]

# AFTER
![Deploy Dashboard Page][DeployDashboard]{ title="Deploy dashboard showing deployment success/failure metrics" }
```

For the most important images, use `pymdownx.blocks.caption` (already enabled):

```markdown
/// figure | Deploy Dashboard — overview of deployment metrics
![Deploy Dashboard Page][DeployDashboard]
///
```

---

## Execution Order (recommended)

```text
Phase 1 (all at once, low risk):
  1.1 → base.yml: remove navigation.collapse
  1.2 → mkdocs.yml: expand nav
  1.3 → demo_ai_first.md: add WIP admonition
  1.4 → deploy/index.md: replace TODOs
  1.5 → deploy/components/index.md: fix broken HTML
  1.6 → extra.css: add td img + inline img constraints

Phase 2 (one at a time, verify build after each):
  2.1 → mkdocs.yml: add site_url
  2.2 → base.yml + requirements.txt: add social/offline/meta plugins
  2.3 → extra.css: CSS variable for th background
  2.4 → learn/index.md: rewrite with grid cards
  2.5 → typo fixes (3 files)
  2.6 → new lazyload.js + mkdocs.yml extra_javascript
  2.7 → alt text audit (grep + targeted fixes)

Phase 3 (whenever, minimal risk):
  3.1 → base.yml: favicon
  3.2 → abbreviations.md: append + fix duplicate CD
  3.3 → deploy/index.md: standardize snippet syntax
  3.4 → extra.css: dark mode hero
  3.5 → new-tab external links
  3.6 → archive/delete commented-out sections
  3.7 → image title attributes
```

---

## Build Validation

After each phase, run:

```bash
mkdocs build --strict
```

`--strict` promotes warnings (missing nav pages, broken links, bad plugins) to errors.  
For live preview during editing:

```bash
mkdocs serve
```

---

## Checklist

### 🔴 High Priority

- [ ] **1.1** Remove `navigation.collapse` from `base.yml`
- [ ] **1.2** Add all 14 missing pages to `mkdocs.yml` nav
- [ ] **1.3** Add WIP admonition to `demo/demo_ai_first.md`
- [ ] **1.4** Replace 5× `TODO:` markers in `learn/deploy/index.md`
- [ ] **1.5** Fix `<home/echologic/echo>` broken HTML in `deploy/components/index.md`
- [ ] **1.6** Add `td img` + inline img CSS block to `extra.css`

### 🟡 Medium Priority

- [ ] **2.1** Add `site_url` to `mkdocs.yml`
- [ ] **2.2** Add `social`, `offline`, `meta` plugins + update `requirements.txt`
- [ ] **2.3** Replace hardcoded `th` gradient with CSS variables in `extra.css`
- [ ] **2.4** Rewrite `learn/index.md` with grid cards
- [ ] **2.5** Fix 6 typos across 3 files
- [ ] **2.6** Create `docs/javascripts/lazyload.js` + register in `mkdocs.yml`
- [ ] **2.7** Audit and fix non-descriptive alt text

### 🟢 Low Priority

- [ ] **3.1** Set or remove `favicon: null` in `base.yml`
- [ ] **3.2** Add 11 missing abbreviations to `includes/abbreviations.md` + fix duplicate `CD`
- [ ] **3.3** Standardize snippet include syntax in `deploy/index.md`
- [ ] **3.4** Add dark mode CSS for `.hero-section` in `extra.css`
- [ ] **3.5** Enable new-tab external links
- [ ] **3.6** Review/archive large commented-out blocks in 3 files
- [ ] **3.7** Add image titles for glightbox captions on key screenshots
