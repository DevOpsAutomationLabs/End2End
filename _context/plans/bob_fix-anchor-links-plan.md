# Fix Broken Anchor Links in `docs/learn/index.md`

## Overview

Five sub-lab pages define reference-style links pointing to named anchors in `docs/learn/index.md` (e.g. `../index.md#deploy`), but that file contains no section headings — only a single `# Learning Labs` h1 and a Material grid of cards. MkDocs reports these as broken anchors at build time.

There are two valid fix strategies:

1. **Add hidden anchors** — insert `<a id="deploy"></a>`-style HTML anchors into `docs/learn/index.md` at the card positions for each affected section (deploy, test, secure, measure, release). The page appearance does not change.
2. **Remove the fragment from the links** — update the five link definitions in the sub-lab files to drop the `#<section>` fragment so they just point to `../index.md`.

**Chosen approach: Option 1 (add anchors)**  
The intent of the link definitions (`GoBackToParentIndex`) is to land the user at their specific section of the learning labs index — not just the top. Adding anchors preserves that intent and requires no change to how the sub-lab pages define their links. Option 2 would silently degrade navigation.

---

## Sub-Tasks

### Sub-Task 1 — Add missing HTML anchors to `docs/learn/index.md`

**Intent**  
Insert named HTML anchors immediately before each of the five affected grid cards so that `#deploy`, `#test`, `#secure`, `#measure`, and `#release` resolve correctly within the page.

**Expected Outcomes**  
- All five anchors exist in the rendered HTML of `docs/learn/index.md`.
- MkDocs build produces no INFO warnings about missing anchors for the five affected link targets.
- Page visual layout is unchanged.

**Todo List**
1. Open `docs/learn/index.md`.
2. Insert `<a id="deploy"></a>` on a blank line immediately before the `- :material-rocket-launch:` Deploy card entry (before line 35).
3. Insert `<a id="test"></a>` on a blank line immediately before the `- :material-test-tube:` Test card entry (before line 42).
4. Insert `<a id="secure"></a>` on a blank line immediately before the `- :material-shield-check:` Secure card entry (before line 49).
5. Insert `<a id="measure"></a>` on a blank line immediately before the `- :material-chart-line:` Measure card entry (before line 56).
6. Insert `<a id="release"></a>` on a blank line immediately before the `- :material-package-variant-closed:` Release card entry (before line 63).
7. Run `mkdocs build` (or `mkdocs serve`) and confirm none of the five anchor warnings appear.

**Relevant Context**
- File to edit: `docs/learn/index.md`
- Anchors must sit inside the `<div class="grid cards" markdown>` block to be valid in context
- HTML anchor tags inside Material grid card lists are safe as MkDocs/Python-Markdown passes raw HTML through

**Status** — `[ ] pending`

---

### Sub-Task 2 — Verify no other sub-lab files have equivalent broken anchors

**Intent**  
The error log only mentions deploy, test, secure, measure, and release. Confirm that plan, control, code, and build sub-lab files do not reference anchors on `../index.md` that would also be missing (they may not use the same pattern).

**Expected Outcomes**  
- Confirmation that `docs/learn/plan/index.md`, `docs/learn/control/index.md`, `docs/learn/code/index.md`, and `docs/learn/build/index.md` either use no anchor fragment on `../index.md` or only reference anchors that already exist.
- If any additional broken anchors are found, they are added to the fix in Sub-Task 1.

**Todo List**
1. Grep all `docs/learn/*/index.md` files for links matching `../index.md#`.
2. For each match, verify the anchor exists in `docs/learn/index.md` after Sub-Task 1 is applied.
3. If new missing anchors are found, add the corresponding `<a id="..."></a>` tags to `docs/learn/index.md`.

**Relevant Context**
- Pattern to search: `../index.md#`
- Files to check: `docs/learn/plan/index.md`, `docs/learn/control/index.md`, `docs/learn/code/index.md`, `docs/learn/build/index.md`

**Status** — `[ ] pending`

---

### Sub-Task 3 — Validate clean MkDocs build

**Intent**  
Confirm the build is fully clean with no anchor-related INFO or WARNING messages for `learn/index.md`.

**Expected Outcomes**  
- `mkdocs build --strict` (or without `--strict`) completes with zero lines matching `does not contain an anchor`.
- The WARNING about `modernization-plan.md` git timestamp is a separate pre-existing issue and is out of scope; it should not be actioned here.

**Todo List**
1. Run `mkdocs build` from the project root.
2. Grep build output for `does not contain an anchor`.
3. Confirm zero matches.

**Relevant Context**
- The git timestamp WARNING for `modernization-plan.md` is unrelated to anchor links — do not fix it in this task.

**Status** — `[ ] pending`
