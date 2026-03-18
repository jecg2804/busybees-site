---
paths: Docs/**
---
# Documentation Tiers

## Tier 1 — Only Chat modifies:
- Docs/FEATURE_SPEC.md
- Docs/BUILD_PLAN.md
- Docs/SCHEMA.md
- CLAUDE.md
- .claude/rules/*

Do NOT edit these. If you find a discrepancy, write it in SYNC_LOG.

## Tier 2 — Claude Code updates:
- Docs/PROGRESS.md (mark steps done, add bugs)
- Docs/SYNC_LOG.md (add implementation notes)

## Tier 3 — Claude Code suggests:
When something doesn't match the spec, add to SYNC_LOG.md:
```
## YYYY-MM-DD — Code: [topic]
- Discrepancy: FEATURE_SPEC says X but I found Y
- What I did: [action taken]
- Suggestion: [proposed change to spec]
- Awaiting Chat decision.
```
