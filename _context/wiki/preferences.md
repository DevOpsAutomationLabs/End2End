# Preferences — Working Standards and AI Collaboration

## Working standards

### Language

- **English only** — all content, comments, filenames, and plans

### Markdown style

- Modern but restrained — minimal color, clean whitespace, Japanese-influenced aesthetic (clarity over decoration)
- Use admonitions sparingly; prefer tables and lists for structure
- No excessive emoji or decorative icons in content files
- MkDocs Material extensions are available — use them purposefully, not decoratively

### File naming conventions

- All markdown content files: kebab-case (e.g. `demo_ai_first.md`, `ai-first-demo.md`)
- Images: kebab-case, zero-padded sequential suffixes (`-01`, `-02`), demo-flow prefixed (`ai-first-*`, `classic-*`, `mcp-*`)
- Shared/common images: `common-` prefix, stored in `docs/media/`
- Bob planning files: `bob_` prefix, stored in `_context/plans/`, never published (e.g. `_context/plans/bob_my-task-plan.md`)

### Content structure

- Markdown files live in their topic folder under `docs/`
- Images always go in the `media/` subfolder of the relevant topic
- Abbreviations belong in `docs/includes/abbreviations.md` (auto-appended globally)
- Navigation is explicitly defined in `mkdocs.yml` — always update it when adding pages

### Diagrams

- Use Mermaid for flow diagrams — already configured in `base.yml`

---

## AI collaboration preferences

### Before acting

1. **Ask good questions first** — surface gaps, ambiguities, and missing requirements
2. **Flag holes and better options** — point out risks, inconsistencies, or superior approaches before committing
3. **Never execute automatically** — always wait for explicit approval before making changes

### Planning

1. **Create a plan file first** — save as `_context/plans/bob_<task-name>-plan.md` before any implementation
2. **Review the plan for holes** — AI should proactively identify what could go wrong or what was missed
3. **Plan format:** Decision log table + structured steps (see existing files in `_context/plans/` as reference)

### During execution

1. **Clear and concise** — no chatty filler, no unnecessary explanation of obvious things
2. **Ask for clarifications** when something is ambiguous rather than guessing
3. **Point out better options** — if a better approach exists, say so before proceeding

### MkDocs / tooling

1. **Proactively suggest** if there is a better way to use MkDocs or similar tools for this project type
2. Respect existing `base.yml` + `mkdocs.yml` split — do not merge them

---

## Communication preferences

- **Concise by default** — less is more; avoid restating what was just said
- **Direct** — state the issue, option, or recommendation plainly
- **Tables over prose** for comparisons, decisions, and structured data
- **No unsolicited refactoring** — only change what the task requires
