---
paths: **
---
# Commits

## After each BUILD_PLAN step:
1. `npm run build` — MUST pass
2. If it fails, fix before proceeding
3. `git add -A && git commit -m "feat: paso X.Y — description" && git push origin main`
4. Update Docs/PROGRESS.md marking step complete
5. Continue to next step without waiting for approval

## Commit format:
- `feat: paso X.Y — descripción breve`
- `fix: descripción del bug`
- `docs: actualizar PROGRESS/SYNC_LOG`
- `refactor: descripción`

## NEVER:
- Accumulate multiple steps in one commit
- Commit code that fails `npm run build`
- Skip updating PROGRESS.md
