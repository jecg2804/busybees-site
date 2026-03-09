# Commits automáticos en branch de desarrollo

Claude Code PUEDE hacer commits + push automáticos en `james/dev`.
NUNCA push a `main`.

## Después de cada paso completado:

1. `npm run build` — verificar que compila.
2. Si falla, arreglar antes del siguiente paso.
3. `git add -A && git commit -m "mensaje" && git push origin james/dev`
4. Actualizar Docs/PROGRESS.md marcando el paso como completado.
5. Continuar al siguiente paso sin esperar aprobación.

## Formato de commits:
- `feat: paso X.Y — descripción`
- `fix: bug — descripción`
- `docs: actualizar PROGRESS/SYNC_LOG`

## NUNCA:
- Commits a `main`
- Push a `main`
- Acumular múltiples pasos en un solo commit
