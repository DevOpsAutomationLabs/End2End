# MkDocs Optimization Findings

> **Repository:** DevOps Loop End-to-End Demo  
> **Scope:** Readability, image visibility, MkDocs configuration  
> **Files analyzed:** `mkdocs.yml`, `base.yml`, `docs/stylesheets/extra.css`, all `index.md` lab pages, `demo/`, `includes/`

---

## Table of Contents

1. [MkDocs Configuration](#1-mkdocs-configuration)
2. [Navigation Structure](#2-navigation-structure)
3. [Image Visibility](#3-image-visibility)
4. [Markdown Content Quality](#4-markdown-content-quality)
5. [CSS Styling](#5-css-styling)
6. [Accessibility & SEO](#6-accessibility--seo)
7. [Summary Table](#7-summary-table)

---

## 1. MkDocs Configuration

### 1.1 Conflicting navigation features in `base.yml`

Both `navigation.collapse` and `navigation.expand` are listed under `features`:

```yaml
# base.yml (current — broken)
features:
  - navigation.collapse   # ← collapses sections by default
  - navigation.expand     # ← expands all sections by default
```

These are mutually exclusive. The last one wins in practice, but the presence of both causes unpredictable behavior across MkDocs Material versions. For a tutorial site where readers follow a linear path, `navigation.expand` alone is the correct choice. `navigation.collapse` should be removed.

---

### 1.2 Missing plugins

Three high-value MkDocs Material plugins are not configured:

| Plugin | Purpose | Why it Matters Here |
|---|---|---|
| `social` | Auto-generates Open Graph / social card images per page | Improves shareability of individual lab pages when linked externally |
| `offline` | Bundles the site for offline use | Demo content is often delivered on-site without guaranteed Wi-Fi |
| `meta` | Allows per-page YAML front-matter to override `description`, `title`, `tags` | Enables richer search results and page-level SEO without editing `mkdocs.yml` |

---

### 1.3 `glightbox` is configured but under-utilized

`glightbox` is correctly added to `base.yml`:

```yaml
plugins:
  - glightbox:
      touchNavigation: true
      loop: false
      effect: zoom
      width: 100%
      zoomable: true
```

However, glightbox's lightbox captions are only populated when images have a `title` attribute or are wrapped in a `figure` block. Nearly all images in the labs use bare reference syntax (`![alt][ref]`) without titles, so clicking an image opens the lightbox with **no caption text** — the reader loses context when the image is enlarged.

---

### 1.4 `git-revision-date-localized` and `git-authors` require full git history

The CI workflow in `.github/workflows/gh-pages-deploy.yml` delegates entirely to a shared reusable workflow:

```yaml
jobs:
  deploy:
    uses: DevOpsAutomationLabs/Index/.github/workflows/mkdocs-deploy.yml@main
```

If that shared workflow uses `actions/checkout` without `fetch-depth: 0`, both `git-revision-date-localized` and `git-authors` will show incorrect or empty dates/authors on all pages. This cannot be verified from this repository alone — the shared workflow must be audited.

---

### 1.5 No `favicon` configured

`base.yml` sets `favicon: null`:

```yaml
theme:
  favicon: null
```

This results in the browser showing a blank tab icon. A favicon should be provided (even a simple one in `docs/assets/`) or the `null` entry removed so MkDocs Material uses its default.

---

## 2. Navigation Structure

### 2.1 Pages missing from `mkdocs.yml` nav

The following pages exist as files but are **absent from the `nav:` section** in `mkdocs.yml`. They are only reachable via inline links from other pages. This breaks:
- The **breadcrumb** trail (`navigation.path` feature)
- **Previous / Next** page footer navigation
- The **`toc.integrate`** sidebar on those pages
- Full **search indexing** (pages not in nav are indexed but not ranked correctly)

| Missing Page | File Path |
|---|---|
| Deploy → Processes | `docs/learn/deploy/processes/index.md` |
| Deploy → Resources | `docs/learn/deploy/resources/index.md` |
| Deploy → Settings | `docs/learn/deploy/settings/index.md` |
| Plan → AI Assistant | *(in nav)* ✅ |
| Plan → Boards | *(in nav)* ✅ |
| Plan → Setup | `docs/learn/plan/setup/index.md` |
| Plan → New App | `docs/learn/plan/newapp/index.md` |
| Plan → New Project | `docs/learn/plan/newproject/index.md` |
| Plan → Work Items | `docs/learn/plan/workitems/index.md` |
| Plan → Queries | `docs/learn/plan/queries/index.md` |
| Introduction → About | `docs/learn/introduction/about/index.md` |
| Introduction → Teamspace | `docs/learn/introduction/teamspace/index.md` |
| Introduction → Loops | `docs/learn/introduction/loops/index.md` |
| Introduction → Genie | `docs/learn/introduction/genie/index.md` |
| Demo → Index | `docs/demo/index.md` |

**15 pages are orphaned from the navigation tree.**

---

### 2.2 `learn/index.md` has no visual structure

The [`docs/learn/index.md`](docs/learn/index.md) overview page uses plain headings with one-line descriptions — no cards, icons, or estimated reading times. This is the landing page for all labs (linked from the hero section as "Explore Labs") and does not match the visual quality of the home page which uses `grid cards`.

---

### 2.3 `demo/demo_ai_first.md` is nearly empty

The page linked as **"View Demo"** from the homepage hero section contains only:
- One introductory sentence
- An empty `## Introduction` section
- An empty `## Example Runs` section with a horizontal rule

This is the most prominently linked page after the home page. A visitor clicking "View Demo" reaches a page with no actionable content.

---

## 3. Image Visibility

### 3.1 Images in table cells have no size constraint

In every lab file, screenshots are placed in the rightmost column of step-by-step tables:

```markdown
| 3 | Click the **Let's Go** button | ![LetsGoButton][LetsGoButton] |
```

The column header carries `{ width="50%" }`:

```markdown
| Step | Details | Additional Information { width="50%" } |
```

However, `attr_list` width hints on table headers do not constrain image dimensions — they affect column width only in some renderers. Images render at their native resolution inside the cell, causing:

- Very large screenshots to overflow the table
- Very small UI screenshots (icon crops like `Build_Sidebar_System_Link.png`) to appear as tiny thumbnails with no context

No `max-width`, `width`, or `height` constraint is applied to `td img` in `extra.css`.

---

### 3.2 No lazy loading on images

Pages such as `docs/learn/deploy/index.md` reference **50+ images** via reference links. All of these load on page open. The `loading="lazy"` HTML attribute is not applied to any image in the repository. On slow connections (common in demo environments), this causes significant page load delays before any text is readable.

---

### 3.3 Inline icon images break text flow

Several lab pages embed tiny icon screenshots directly in table cells or inline text:

```markdown
# From learn/build/index.md
To create a new token please switch to the **System** ![System][BuildSideBarSystem] settings
```

```markdown
# From learn/control/index.md  
click on your **User Profile** and select **Settings** — ![User Profile][ControlUserProfile]
```

These inline images are typically 20–40px icon crops. They render at native size in the flow of text, creating inconsistent line heights and awkward reading rhythm. They also receive the hover scale transform defined in `extra.css` (`transform: scale(1.02)`), which causes layout shift on hover.

---

### 3.4 No image captions on standalone images

Several pages use standalone images outside of tables (e.g., `docs/learn/deploy/index.md`):

```markdown
![Deploy Dashboard Page][DeployDashboard]
```

The `pymdownx.blocks.caption` extension is enabled in `base.yml` but never used. Without captions, standalone images provide no context for screen readers or readers who scroll past without reading surrounding text.

---

### 3.5 `glightbox` captions are empty

When a user clicks any image to open the lightbox, the caption area is blank because no `title` attribute is set on any image. The `alt` text used (reference IDs like `BuildPATListUpdated`) is not rendered as a visible lightbox caption by glightbox — it reads the `title` attribute or the `figcaption` element.

---

### 3.6 Duplicate image files

The `docs/learn/deploy/media/` directory contains both `.jpg` and `.png` versions of the same images:

```
Deploy_Sidebar_AppIcon.jpg
Deploy_Sidebar_AppIcon.png
Deploy_Sidebar_AppIconWithText.jpg  
Deploy_Sidebar_AppIconWithText.png
```

The `.jpg` versions are referenced in `docs/learn/deploy/index.md` for the sidebar icon. The `.png` versions exist but are not referenced for those entries. This is a minor inconsistency but adds unnecessary file size to the repository.

---

## 4. Markdown Content Quality

### 4.1 `TODO:` text is visible in the published site

The following files contain raw `TODO:` markers that render as visible text on the live site:

| File | TODO Text |
|---|---|
| `docs/learn/deploy/index.md` | `TODO: Flow needs rewrite and new screenshots` (page title area) |
| `docs/learn/deploy/index.md` | `TODO: talk about applications` |
| `docs/learn/deploy/index.md` | `TODO: talk about components` |
| `docs/learn/deploy/index.md` | `TODO: talk about environments` |
| `docs/learn/deploy/index.md` | `TODO: talk about snapshots and what they are good for` |

Additionally, `docs/learn/deploy/components/index.md` has step entries like:

```markdown
| | use "home/echologic/echo" for this example | <home/echologic/echo> |
```

The `<home/echologic/echo>` in the Additional Information column renders as an HTML tag attempt, producing broken output.

---

### 4.2 Empty step numbers in tables

In `docs/learn/build/index.md`, `docs/learn/deploy/index.md`, and others, the `Step` column is consistently left blank:

```markdown
| Step | Details | Additional Information |
|:----:|:--------|:----------------------|
|      | Click on the button | ![img][img] |
|      | Another step        | ![img][img] |
```

The Step column header is shown but every cell is empty. This provides no navigational value and creates visual confusion — readers see a decorative column that implies numbered progression but provides none. Either populate the step numbers or remove the column.

---

### 4.3 Snippet inclusion paths use two different syntaxes

MkDocs snippets (`--8<--`) are used in two different ways across the repository:

**Pattern A — Named blocks (explicit start/end):**
```markdown
--8<-- [start:PATControl]
... content ...
--8<-- [end:PATControl]
```

**Pattern B — File path with section name (inline):**
```markdown
--8<--
learn/deploy/applications/index.md:CreateNewApplication
--8<--
```

Both work, but Pattern B (multiline) is visually inconsistent with the inline `[start:X]`/`[end:X]` approach used everywhere else. `docs/learn/deploy/index.md` uses Pattern B for its component and application sections while all other files use Pattern A.

---

### 4.4 Commented-out sections contain outdated content

Multiple files have large HTML comment blocks (`<!-- ... -->`) containing old instructions that reference steps, UI elements, or paths that may no longer be valid:

- `docs/learn/code/index.md`: ~30 lines of commented-out "Edit a file and commit changes" section
- `docs/learn/control/index.md`: ~25 lines of commented-out "Open repo with VSCode" section  
- `docs/learn/deploy/index.md`: ~60 lines of commented-out full configuration section with student-specific instructions

These are not rendered but inflate file size, create confusion during editing, and risk being accidentally uncommented.

---

### 4.5 Typos in visible content

| File | Location | Typo |
|---|---|---|
| `docs/learn/plan/setup/index.md` | Step 2.1 | `"Click oon"` → `"Click on"` |
| `docs/learn/plan/setup/index.md` | Step 2 | `"Downloade"` → `"Download"` |
| `docs/learn/plan/setup/index.md` | Step 5 | `"Presss"` → `"Press"` |
| `docs/learn/deploy/components/index.md` | Table | `"Chose File"` → `"Choose File"` |
| `docs/learn/deploy/components/index.md` | Table | `"configuraiton"` → `"configuration"` |
| `docs/learn/introduction/index.md` | Table | `"successeful"` → `"successful"` |

---

### 4.6 `docs/includes/abbreviations.md` is missing key terms

The abbreviations file is included on every page via `pymdownx.snippets` auto-append. Currently it defines 15 terms. The following terms appear frequently in the documentation but have no tooltip definition:

| Term Used | Missing Definition |
|---|---|
| `WCA` | Watson Code Assistant |
| `VSCode` | Visual Studio Code |
| `DORA` | DevOps Research and Assessment |
| `SSO` | Single Sign-On |
| `JSON` | JavaScript Object Notation |
| `HTTP` | HyperText Transfer Protocol |
| `SaaS` | Software as a Service |
| `SDK` | Software Development Kit |
| `PAT` | Personal Access Token *(already referenced in text but not defined)* |
| `SCM` | Source Code Management |
| `URL` | Uniform Resource Locator |
| `MFA` | Multi-Factor Authentication |

---

## 5. CSS Styling

### 5.1 No `max-width` on images inside table cells

`docs/stylesheets/extra.css` applies hover and shadow effects to all images:

```css
.md-typeset img {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
```

But there is no rule constraining images inside table cells (`td img`). A 1920×1080 screenshot placed in a table column will render at full size, overflowing the layout on all screen sizes.

---

### 5.2 Table header color is off-brand

The table `th` style uses a hardcoded purple-blue gradient:

```css
.md-typeset table:not([class]) th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
```

The site theme in `base.yml` uses `primary: indigo` and `accent: teal`. The hardcoded hex values (`#667eea`, `#764ba2`) do not correspond to Material indigo tokens. In dark mode (`scheme: slate`), the gradient also remains hardcoded — it does not adapt to the user's palette preference. Using CSS custom properties (`var(--md-primary-fg-color)`) would keep the header color in sync with the theme and dark mode automatically.

---

### 5.3 Hover scale on inline icon images causes layout shift

```css
.md-typeset img:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
}
```

This rule applies to all images including the small inline icon screenshots embedded in text (e.g., the `System` link icon in `build/index.md`). Scaling a 20px icon by 1.02 causes a 0.4px layout shift that can trigger text reflow on some browsers. The hover effect should be scoped to exclude inline images or images below a certain size threshold.

---

### 5.4 Hero section has no dark mode variant

The `.hero-section` uses white text on a purple gradient. In dark mode (`[data-md-color-scheme="slate"]`), the gradient is unchanged but the surrounding page background shifts to dark gray. The transition between the bright gradient hero and the dark content area below can create harsh visual contrast. The dark mode variant should soften the gradient or adjust the surrounding spacing.

---

## 6. Accessibility & SEO

### 6.1 Image alt text uses internal reference IDs

Images are defined as:

```markdown
[BuildSideBarSystem]: media/Build_Sidebar_System_Link.png
```

And used as:

```markdown
![System][BuildSideBarSystem]
```

The rendered `alt` attribute becomes `"System"` (the inline text), which is acceptable. However, many images use the reference ID as the alt text directly:

```markdown
![BuildSideBarSystem][BuildSideBarSystem]
```

This results in `alt="BuildSideBarSystem"` — a non-descriptive string that fails WCAG 1.1.1 (non-text content). Screen readers would announce "image BuildSideBarSystem" with no meaningful context.

---

### 6.2 No `site_url` in `mkdocs.yml`

`mkdocs.yml` does not define `site_url`. Without it, MkDocs cannot generate correct canonical URLs, `sitemap.xml` entries, or the social plugin's absolute image URLs. The value should be the GitHub Pages URL.

---

### 6.3 External links open in the same tab

All external links (IBM docs, GitHub, Docker Hub) use standard Markdown syntax and open in the same browser tab by default. For a tutorial site, this takes readers away from the lab content. The `attr_list` extension is enabled, which allows `{target=_blank}` to be added, or the `mkdocs-open-in-new-tab` plugin can handle this globally.

---

## 7. Summary Table

| # | Area | Finding | Severity |
|---|---|---|---|
| 1.1 | Config | `navigation.collapse` and `navigation.expand` both enabled | 🔴 High |
| 1.2 | Config | `social`, `offline`, `meta` plugins not configured | 🟡 Medium |
| 1.3 | Config | `glightbox` captions empty — no `title` attributes on images | 🟡 Medium |
| 1.4 | Config | Shared CI workflow may lack `fetch-depth: 0` | 🟡 Medium |
| 1.5 | Config | `favicon: null` — no favicon shown | 🟢 Low |
| 2.1 | Nav | 15 pages missing from `mkdocs.yml` nav | 🔴 High |
| 2.2 | Nav | `learn/index.md` uses plain text, not grid cards | 🟡 Medium |
| 2.3 | Nav | `demo/demo_ai_first.md` hero CTA leads to empty page | 🔴 High |
| 3.1 | Images | No size constraint on `td img` — overflow on large screenshots | 🔴 High |
| 3.2 | Images | No `loading="lazy"` — pages with 50+ images load slowly | 🟡 Medium |
| 3.3 | Images | Inline icon images break text flow and trigger layout shift on hover | 🟡 Medium |
| 3.4 | Images | No captions on standalone images despite extension being enabled | 🟢 Low |
| 3.5 | Images | `glightbox` opens images with no caption text | 🟡 Medium |
| 3.6 | Images | Duplicate `.jpg`/`.png` files for same sidebar icons | 🟢 Low |
| 4.1 | Content | `TODO:` markers visible in published site | 🔴 High |
| 4.2 | Content | Step column consistently empty in tables | 🟡 Medium |
| 4.3 | Content | Two different snippet include syntaxes in use | 🟢 Low |
| 4.4 | Content | Large commented-out sections inflate file size | 🟢 Low |
| 4.5 | Content | Typos in 6 locations across 3 files | 🟡 Medium |
| 4.6 | Content | 12 frequently-used terms missing from abbreviations | 🟢 Low |
| 5.1 | CSS | No `td img { max-width: 100% }` rule | 🔴 High |
| 5.2 | CSS | Table `th` hardcoded gradient ignores Material theme tokens | 🟡 Medium |
| 5.3 | CSS | Hover scale applies to inline icon images causing layout shift | 🟡 Medium |
| 5.4 | CSS | Hero section has no dark mode variant | 🟢 Low |
| 6.1 | A11y | Some alt texts use internal reference ID names | 🟡 Medium |
| 6.2 | SEO | `site_url` missing from `mkdocs.yml` | 🟡 Medium |
| 6.3 | A11y | External links open in same tab | 🟢 Low |

**Severity legend:** 🔴 High — breaks functionality or content / 🟡 Medium — degrades experience / 🟢 Low — polish and best practice
