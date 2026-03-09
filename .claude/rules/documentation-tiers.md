# Tiers de documentación

## Tier 1 — Solo Chat modifica:
- Docs/FEATURE_SPEC.md
- Docs/BUILD_PLAN.md
- Docs/SCHEMA.md

Si encuentras una discrepancia, NO corrijas estos archivos.

## Tier 2 — Claude Code puede actualizar:
- Docs/PROGRESS.md (marcar pasos, agregar bugs)
- Docs/SYNC_LOG.md (agregar notas de implementación)

## Tier 3 — Claude Code puede sugerir:
Si descubres algo que no cuadra con el spec, escribe en SYNC_LOG.md:
```
## YYYY-MM-DD — Code: [descripción]
- Discrepancia: FEATURE_SPEC dice X pero implementé Y porque Z
- Sugerencia: [cambio propuesto]
- Awaiting Chat decision.
```

James revisará con Chat y actualizará Tier 1 si es necesario.
