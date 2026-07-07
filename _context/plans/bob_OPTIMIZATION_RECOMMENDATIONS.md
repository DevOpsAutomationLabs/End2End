# MkDocs Optimization Recommendations

> Companion to [OPTIMIZATION_FINDINGS.md](OPTIMIZATION_FINDINGS.md)  
> Each item references its finding number and provides the exact change to make.

---

## Table of Contents

1. [Fix MkDocs Configuration](#1-fix-mkdocs-configuration)
2. [Fix Navigation Structure](#2-fix-navigation-structure)
3. [Fix Image Visibility](#3-fix-image-visibility)
4. [Fix Markdown Content](#4-fix-markdown-content)
5. [Fix CSS Styling](#5-fix-css-styling)
6. [Fix Accessibility & SEO](#6-fix-accessibility--seo)

---

## 1. Fix MkDocs Configuration

### 1.1 Remove conflicting navigation feature (Finding 1.1) 🔴

**File:** `base.yml`

Remove `navigation.collapse` — keep only `navigation.expand`:

```yaml
# BEFORE
features:
  - navigation.collapse   # ← remove this line
  - navigation.expand

# AFTER
features:
  - navigation.expand
```

---

### 1.2 Add missing plugins (Finding 1.2) 🟡

**File:** `base.yml` — add to the `plugins:` section:

```yaml
plugins:
  - search:
      separator: '[\s\-,:!=\[\]()"/]+|(?!\b)(?=[A-Z][a-z])|\.(?!\d)|&[lg]t;'
  - git-revision-date-localized:
      enable_creation_date: true
      type: timeago
  - git-authors
  - minify:
      minify_html: true
      minify_js: true
      minify_css: true
  - tags
  - toggle-sidebar:
      enabled: true
  - glightbox:
      touchNavigation: true
      loop: false
      effect: zoom
      slide_effect: slide
      width: 100%
      height: auto
      zoomable: true
      draggable: true
  # ↓ Add these three
  - social                    # generates Open Graph cards per page
  - offline                   # bundles site for offline / air-gapped demos
  - meta                      # enables per-page front-matter overrides
```

> **Note:** `social` and `offline` require `mkdocs-material[imaging]` to be installed. Add it to your `requirements.txt` or `pip install` command:
>
```bash
pip install mkdocs-material[imaging]
> ```

---

### 1.3 Add image titles so glightbox shows captions (Finding 1.3) 🟡

For every image that appears standalone or in a table, add a `title` attribute using `attr_list` syntax:

```markdown
<!-- BEFORE -->
![Deploy Dashboard Page][DeployDashboard]

<!-- AFTER -->
![Deploy Dashboard Page][DeployDashboard]{ title="Deploy dashboard showing deployment success/failure metrics" }
```

For the most important screenshots, use `pymdownx.blocks.caption` (already enabled) to render a visible caption below the image:

```markdown
/// figure | Deploy Dashboard — overview of deployment metrics
![Deploy Dashboard Page][DeployDashboard]
///
```

---

### 1.4 Set favicon (Finding 1.5) 🟢

**File:** `base.yml`

Either remove the `favicon: null` line entirely (MkDocs Material will use its default rocket icon) or provide a file:

```yaml
theme:
  favicon: assets/favicon.png   # place a 32×32 or 48×48 PNG in docs/assets/
```

---

### 1.5 Add `site_url` to `mkdocs.yml` (Finding 6.2) 🟡

**File:** `mkdocs.yml`

```yaml
site_name: "DevOps Loop End to End Demo"
site_url: "https://devopsautomationlabs.github.io/End2End/"   # ← add this
site_description: "Master DevOps Loop with hands-on labs and AI-powered demonstrations"
```

---

## 2. Fix Navigation Structure

### 2.1 Add all orphaned pages to nav (Finding 2.1) 🔴

**File:** `mkdocs.yml` — replace the `nav:` section with the complete version below:

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

> **Note:** `learn/code/index.md` is also missing from the current nav — it is referenced by links but has no nav entry.

---

### 2.2 Expand `learn/index.md` with grid cards (Finding 2.2) 🟡

**File:** `docs/learn/index.md` — replace with:

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

### 2.3 Add placeholder content to `demo_ai_first.md` (Finding 2.3) 🔴

**File:** `docs/demo/demo_ai_first.md` — add a work-in-progress admonition until the content is ready:

```markdown
!!! warning "Work in Progress"
    This demo flow guide is being written. In the meantime, follow the
    [MCP Setup guide](mcp_setup.md) to configure your AI assistant,
    then refer to the [Classic Demo Flow](demo_classic.md) for step-by-step instructions.
```

Or if the content exists elsewhere, embed it using snippet includes.

---

## 3. Fix Image Visibility

### 3.1 Add `td img` size constraint to CSS (Finding 3.1, 5.1) 🔴

**File:** `docs/stylesheets/extra.css` — add after the existing image section:

```css
/* ============================================
   Image Size Constraints
   ============================================ */

/* Prevent table cell images from overflowing */
.md-typeset td img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Cap screenshot size in step tables for readability */
.md-typeset td img:not([width]) {
  max-width: 480px;
}

/* Inline icon images — prevent hover scale causing layout shift */
.md-typeset p img,
.md-typeset li img {
  display: inline;
  vertical-align: middle;
  max-height: 1.8em;          /* keeps icon-sized images inline */
  width: auto;
  box-shadow: none;           /* icons don't need shadow */
}

.md-typeset p img:hover,
.md-typeset li img:hover {
  transform: none;            /* disable scale on inline icons */
  box-shadow: none;
}
```

---

### 3.2 Add lazy loading via `attr_list` on large image pages (Finding 3.2) 🟡

For pages with many images (deploy, control, build labs), add `loading="lazy"` to all images. Since images use reference links, update the reference definitions at the bottom of each file:

```markdown
<!-- BEFORE -->
[DeployDashboard]: media/dashboard.png

<!-- AFTER — not possible on reference links directly -->
```

Reference link definitions do not support `attr_list`. Instead, convert the most image-heavy pages to use inline image syntax with attributes, or add a global CSS/JavaScript lazy loading approach.

**Recommended global approach** — add to `docs/stylesheets/extra.css`:

```css
/* Browser-native lazy loading hint via content-visibility */
.md-typeset img {
  content-visibility: auto;
}
```

**Or** add a small JavaScript snippet to `docs/javascripts/lazyload.js`:

```javascript
// Apply loading="lazy" to all images that don't already have it
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.md-typeset img:not([loading])').forEach(function (img) {
    img.setAttribute('loading', 'lazy');
  });
});
```

Then register in `mkdocs.yml`:

```yaml
extra_javascript:
  - javascripts/lazyload.js
```

---

### 3.3 Cap hover effect on inline images (Finding 3.3, 5.3) 🟡

Already covered by the CSS fix in **3.1** above — the `p img:hover` and `li img:hover` rules set `transform: none`.

---

### 3.4 Add captions to key standalone images (Finding 3.4) 🟢

Use `pymdownx.blocks.caption` for screenshots that appear as standalone paragraphs. Example from `docs/learn/deploy/index.md`:

```markdown
<!-- BEFORE -->
![Deploy Dashboard Page][DeployDashboard]

<!-- AFTER -->
/// figure | Deploy Dashboard — deployment success, failure, and agent health overview
![Deploy Dashboard Page][DeployDashboard]
///
```

---

## 4. Fix Markdown Content

### 4.1 Replace TODO markers with WIP admonitions (Finding 4.1) 🔴

**File:** `docs/learn/deploy/index.md`

Replace each raw `TODO:` line:

```markdown
<!-- BEFORE -->
TODO: Flow needs rewrite and new screenshots

<!-- AFTER -->
!!! warning "Work in Progress"
    This section is being updated. Content and screenshots will be added in the next revision.
```

Replace inline TODOs in section bodies the same way:

```markdown
<!-- BEFORE -->
## [Applications](applications/index.md)

TODO: talk about applications

<!-- AFTER -->
## [Applications](applications/index.md)

!!! info "Coming Soon"
    A full walkthrough of the Applications section will be added here.
    For now, see the [Applications sub-page](applications/index.md) for step-by-step instructions.
```

---

### 4.2 Fix broken HTML in table cell (Finding 4.1) 🔴

**File:** `docs/learn/deploy/components/index.md`

```markdown
<!-- BEFORE -->
| | use "home/echologic/echo" for this example | <home/echologic/echo> |

<!-- AFTER -->
| | use "home/echologic/echo" for this example | `home/echologic/echo` |
```

---

### 4.3 Fix typos (Finding 4.5) 🟡

**File:** `docs/learn/plan/setup/index.md`

| Line         | Before                           | After                           |
|--------------|----------------------------------|---------------------------------|
| Step 2 label | `"Downloade the Demo Data File"` | `"Download the Demo Data File"` |
| Step 2.1     | `"Click oon"`                    | `"Click on"`                    |
| Step 5       | `"Presss the Import Button"`     | `"Press the Import Button"`     |

**File:** `docs/learn/deploy/components/index.md`

| Line       | Before                 | After                  |
|------------|------------------------|------------------------|
| Table cell | `"Chose File"`         | `"Choose File"`        |
| Table cell | `"configuraiton view"` | `"configuration view"` |

**File:** `docs/learn/introduction/index.md`

| Line       | Before          | After          |
|------------|-----------------|----------------|
| Table cell | `"successeful"` | `"successful"` |

---

### 4.4 Add missing abbreviations (Finding 4.6) 🟢

**File:** `docs/includes/abbreviations.md` — append:

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

---

### 4.5 Standardize snippet include syntax (Finding 4.3) 🟢

**File:** `docs/learn/deploy/index.md` — convert multiline Pattern B to inline Pattern A:

```markdown
<!-- BEFORE (Pattern B — multiline) -->
--8<--
learn/deploy/applications/index.md:CreateNewApplication
--8<--

<!-- AFTER (Pattern A — inline, consistent with all other files) -->
--8<-- learn/deploy/applications/index.md:CreateNewApplication
```

---

### 4.6 Remove or archive large commented-out sections (Finding 4.4) 🟢

Content inside `<!-- ... -->` blocks in `docs/learn/code/index.md`, `docs/learn/control/index.md`, and `docs/learn/deploy/index.md` is no longer active. Options:

- **Delete** if the content is permanently superseded
- **Move** to a `docs/archive/` folder as standalone reference files if it may be revived
- **Keep** only a brief `<!-- TODO: restore when screenshots updated -->` comment instead of the full content block

---

## 5. Fix CSS Styling

### 5.1 Use CSS variables for table header (Finding 5.2) 🟡

**File:** `docs/stylesheets/extra.css` — replace the hardcoded gradient on `th`:

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

This automatically adapts to the `indigo` primary color in light mode and the adjusted palette in dark mode.

---

### 5.2 Add dark mode variant for hero section (Finding 5.4) 🟢

**File:** `docs/stylesheets/extra.css` — add after the existing `.hero-section` block:

```css
/* Hero section — dark mode adjustment */
[data-md-color-scheme="slate"] .hero-section {
  background: linear-gradient(135deg, #3d4fd6 0%, #5a2d8a 100%);
  box-shadow: 0 10px 25px rgba(30, 30, 60, 0.5);
}
```

---

### 5.3 Complete CSS block with all image fixes

For convenience, here is the **complete replacement** for the Image Presentation section in `docs/stylesheets/extra.css`:

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

## 6. Fix Accessibility & SEO

### 6.1 Audit and fix non-descriptive alt text (Finding 6.1) 🟡

Search for reference definitions where the link text matches the reference ID:

```bash
# Run from repository root to find likely bad alt text
grep -rn '\!\[\(Build\|Deploy\|Control\|CODE\|CONTROL\|DEPLOY\)\]' docs/
```

Fix by updating the inline alt text to be descriptive:

```markdown
<!-- BEFORE — alt text is the reference ID -->
![BuildSideBarSystem][BuildSideBarSystem]

<!-- AFTER — alt text describes the image content -->
![Build sidebar system settings link][BuildSideBarSystem]
```

---

### 6.2 Make external links open in a new tab (Finding 6.3) 🟢

**Option A** — Global plugin (simplest, zero per-link changes):

```yaml
# mkdocs.yml
markdown_extensions:
  # ... existing extensions ...
  - mkdocs-open-in-new-tab   # requires: pip install mkdocs-open-in-new-tab
```

**Option B** — Per-link using `attr_list` (already enabled, no extra install):

```markdown
[IBM Documentation](https://www.ibm.com/docs/...){target=_blank rel=noopener}
```

For consistency across 100+ external links, Option A is strongly preferred.

---

## Implementation Checklist

Use this checklist to track progress. Items are ordered by severity then effort.

### 🔴 High Priority (breaks functionality or content)

- [ ] **1.1** Remove `navigation.collapse` from `base.yml`
- [ ] **2.1** Add all 15 missing pages to `mkdocs.yml` nav
- [ ] **2.3** Add WIP admonition to `demo/demo_ai_first.md`
- [ ] **3.1** Add `td img` max-width constraint to `extra.css`
- [ ] **4.1** Replace `TODO:` text with WIP admonitions in `learn/deploy/index.md`
- [ ] **4.1** Fix `<home/echologic/echo>` broken HTML in `deploy/components/index.md`

### 🟡 Medium Priority (degrades experience)

- [ ] **1.2** Add `social`, `offline`, `meta` plugins to `base.yml`
- [ ] **1.3** Add `title` attributes to key images for glightbox captions
- [ ] **1.4** Audit shared CI workflow for `fetch-depth: 0`
- [ ] **1.5** Add `site_url` to `mkdocs.yml`
- [ ] **2.2** Rewrite `learn/index.md` with grid cards
- [ ] **3.2** Add JavaScript lazy-loader for images
- [ ] **4.3** Fix typos in `plan/setup/index.md`, `deploy/components/index.md`, `introduction/index.md`
- [ ] **5.2** Replace hardcoded `th` gradient with CSS variables
- [ ] **6.1** Fix non-descriptive alt text (audit with grep, fix worst offenders)
- [ ] **6.2** Add `site_url` to `mkdocs.yml`

### 🟢 Low Priority (polish and best practice)

- [ ] **1.5** Set favicon in `base.yml`
- [ ] **3.4** Add `/// figure | caption ///` to key standalone images
- [ ] **3.6** Remove duplicate `.jpg` sidebar icon files
- [ ] **4.4** Add 11 missing abbreviations to `docs/includes/abbreviations.md`
- [ ] **4.5** Standardize snippet include syntax in `deploy/index.md`
- [ ] **4.6** Review and archive or delete large commented-out sections
- [ ] **5.4** Add dark mode variant for `.hero-section` in `extra.css`
- [ ] **6.3** Enable new-tab external links via plugin or `attr_list`
