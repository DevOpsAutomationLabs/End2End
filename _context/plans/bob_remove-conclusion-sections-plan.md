# Remove `## Conclusion` Sections from Markdown Files

## Overview

Remove the `## Conclusion` heading and its associated body content from 9 markdown files. Each conclusion section ends before a `---` horizontal rule or the end of file. The content below the `---` (link references) must be preserved.

---

## Sub-Tasks

### Sub-Task 1 — Remove `## Conclusion` from `docs/learn/secure/index.md`

**Intent:** Remove the conclusion section from the secure lab file.

**Expected Outcomes:** File no longer contains `## Conclusion` or its body. The `---` separator and link references below it are untouched.

**Relevant Context:**
- Line 11: `## Conclusion`
- Lines 13–17: snippet include block and closing tag
- Line 19: `---` separator (preserve everything from here down)

**Todo List:**
- [ ] Delete lines 11–17 (the `## Conclusion` heading through `--8<-- [end:Conclusion]`)
- [ ] Remove the blank line preceding the heading (line 10) if it leaves a double blank

**Status:** `[ ] pending`

---

### Sub-Task 2 — Remove `## Conclusion` from `docs/learn/release/index.md`

**Intent:** Remove the conclusion section from the release lab file.

**Expected Outcomes:** File no longer contains `## Conclusion` or its body.

**Relevant Context:**
- Line 46: `## Conclusion`
- Pattern matches all other lab files (snippet include block)

**Todo List:**
- [ ] Read the file around line 46 to confirm exact line range
- [ ] Delete heading and body block up to (not including) `---`

**Status:** `[ ] pending`

---

### Sub-Task 3 — Remove `## Conclusion` from `docs/learn/plan/boards/index.md`

**Intent:** Remove the conclusion section from the plan/boards lab file.

**Expected Outcomes:** File no longer contains `## Conclusion` or its body.

**Relevant Context:**
- Line 102: `## Conclusion`

**Todo List:**
- [ ] Read the file around line 102 to confirm exact line range
- [ ] Delete heading and body block up to (not including) `---`

**Status:** `[ ] pending`

---

### Sub-Task 4 — Remove `## Conclusion` from `docs/learn/plan/queries/index.md`

**Intent:** Remove the conclusion section from the plan/queries lab file.

**Expected Outcomes:** File no longer contains `## Conclusion` or its body.

**Relevant Context:**
- Line 93: `## Conclusion`

**Todo List:**
- [ ] Read the file around line 93 to confirm exact line range
- [ ] Delete heading and body block up to (not including) `---`

**Status:** `[ ] pending`

---

### Sub-Task 5 — Remove `## Conclusion` from `docs/learn/plan/newproject/index.md`

**Intent:** Remove the conclusion section from the plan/newproject lab file.

**Expected Outcomes:** File no longer contains `## Conclusion` or its body.

**Relevant Context:**
- Lines 141–147: heading through `--8<-- [end:Conclusion]`
- Line 149: `---` separator (preserve from here down)

**Todo List:**
- [ ] Delete lines 141–147 (heading + snippet include block)
- [ ] Ensure blank line before `---` is not doubled

**Status:** `[ ] pending`

---

### Sub-Task 6 — Remove `## Conclusion` from `docs/learn/test/index.md`

**Intent:** Remove the conclusion section from the test lab file.

**Expected Outcomes:** File no longer contains `## Conclusion` or its body.

**Relevant Context:**
- Line 134: `## Conclusion`

**Todo List:**
- [ ] Read the file around line 134 to confirm exact line range
- [ ] Delete heading and body block up to (not including) `---`

**Status:** `[ ] pending`

---

### Sub-Task 7 — Remove `## Conclusion` from `docs/learn/measure/index.md`

**Intent:** Remove the conclusion section from the measure lab file.

**Expected Outcomes:** File no longer contains `## Conclusion` or its body.

**Relevant Context:**
- Lines 164–172: heading through `--8<-- [end:Conclusion]`
- Line 174: `---` separator (preserve from here down)

**Todo List:**
- [ ] Delete lines 164–172 (heading + snippet include block)
- [ ] Ensure blank line before `---` is not doubled

**Status:** `[ ] pending`

---

### Sub-Task 8 — Remove `## Conclusion` from `docs/learn/deploy/index.md`

**Intent:** Remove the conclusion section from the deploy lab file.

**Expected Outcomes:** File no longer contains `## Conclusion` or its body.

**Relevant Context:**
- Lines 244–250: heading through `--8<-- [end:Conclusion]`
- Line 252: `---` separator (preserve from here down)

**Todo List:**
- [ ] Delete lines 244–250 (heading + snippet include block)
- [ ] Ensure blank line before `---` is not doubled

**Status:** `[ ] pending`

---

### Sub-Task 9 — Remove `## Conclusion` from `docs/demo/demo_classic.md`

**Intent:** Remove the conclusion section from the demo file.

**Expected Outcomes:** File no longer contains `## Conclusion` or its body.

**Relevant Context:**
- Lines 413–417: heading + two content lines (no snippet include blocks — plain markdown)
- Line 419: `---` separator (preserve from here down)

**Todo List:**
- [ ] Delete lines 413–417 (heading + body text)
- [ ] Ensure blank line before `---` is not doubled

**Status:** `[ ] pending`

---

## Non-Goals

- Do not remove `## Conclusion` from any file not listed above
- Do not modify link references or the `---` separator line
- Do not alter any other heading or body content
