# Project — IBM DevOps Loop End-to-End Demo

## What this project is

A hands-on tutorial and demo enablement site for **IBM DevOps Loop**. It documents available capabilities and functionalities, explains them concisely, and provides structured demo paths for sellers and partners to use when presenting the product to prospects.

The site is built with **MkDocs Material** and published to **GitHub Pages** at:
`https://devopsautomationlabs.github.io/End2End/`

---

## Main goals and objectives

- Enable sellers (technical and non-technical), business partners, and clients to **quickly understand IBM DevOps Loop**
- Provide **fast, structured demo paths** (AI-First and Classic) that are easy to execute
- Reduce time-to-demo-readiness through clear, progressive documentation
- Serve as a **living reference** updated as the product evolves (current: v2.0.2)

---

## Target audience

| Audience              | Use case                                           |
|-----------------------|----------------------------------------------------|
| Technical sellers     | Deep-dive capability understanding, demo execution |
| Non-technical sellers | Quick orientation, demo preparation                |
| Business partners     | Independent enablement and demo delivery           |
| Client users          | Self-service exploration of product capabilities   |

---

## Demo paths

Two structured demo flows exist under `docs/demo/`:

- **AI-First Demo** (`demo/demo_ai_first.md`) — Showcases AI-powered workflows first
- **Classic Demo** (`demo/demo_classic.md`) — Traditional capability walkthrough
- **MCP Setup** (`demo/mcp_setup.md`) — AI integration via Model Context Protocol

---

## DevOps Loop capability modules

The learning labs (`docs/learn/`) cover the full DevOps lifecycle:

| Module  | Path                                                                             |
|---------|----------------------------------------------------------------------------------|
| Plan    | `learn/plan/` — AI assistant, boards, work items, queries, new app/project setup |
| Code    | `learn/code/`                                                                    |
| Control | `learn/control/`                                                                 |
| Build   | `learn/build/`                                                                   |
| Deploy  | `learn/deploy/` — applications, components, processes, resources, settings       |
| Test    | `learn/test/`                                                                    |
| Secure  | `learn/secure/`                                                                  |
| Measure | `learn/measure/`                                                                 |
| Release | `learn/release/`                                                                 |

---

## Technical stack

- **Static site generator:** MkDocs with Material theme (`base.yml` + `mkdocs.yml`)
- **Markdown extensions:** Admonitions, tabbed content, tasklists, code highlighting, Mermaid diagrams, snippets, abbreviations (`docs/includes/abbreviations.md`)
- **Diagrams:** Mermaid (via `pymdownx.superfences`)
- **Images:** Always stored in `media/` subfolder within the relevant topic folder; kebab-case naming with zero-padded suffixes (`-01`, `-02`)
- **Shared/common images:** `docs/media/` with `common-` prefix
- **Fonts:** Inter (text), JetBrains Mono (code)
- **Theme:** Indigo / teal palette, light + dark mode

---

## Key files and locations

| File/Folder                      | Purpose                                       |
|----------------------------------|-----------------------------------------------|
| `mkdocs.yml`                     | Site config, navigation                       |
| `base.yml`                       | Theme, plugins, markdown extensions           |
| `docs/`                          | All published content                         |
| `docs/stylesheets/extra.css`     | Custom styles                                 |
| `docs/includes/abbreviations.md` | Global abbreviations (auto-appended)          |
| `scripts/`                       | Utility scripts (Playwright, etc.)            |
| `bob_*.md`                       | AI planning files (root level, not published) |

---

## Active version

`2.0.2` — Loop Genie is GA (no longer tech preview). App switcher moved to right side.
