# Plan: Fix MD060 Table Column Style

## Decision Log

| Decision | Rationale |
|----------|-----------|
| Fix tables manually (not via `--fix`) | markdownlint `--fix` does not handle MD060 |
| Use "aligned" style (pad cells to match header widths) | That's the detected style in all three files |
| Only touch the affected rows | Minimal-change rule |

## Files to Fix

| File | Lines | Issue |
|------|-------|-------|
| `docs/learn/plan/setup/index.md` | 58 | Row cell too short, pipes don't align with header |
| `docs/learn/test/index.md` | 27, 73, 76, 86 | Same |

## Steps

1. Measure header column widths for each table
2. Pad the offending rows to match
3. Run `markdownlint` to verify zero MD060 errors remain
