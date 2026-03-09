# No modificar base de datos

Claude Code tiene acceso READ-ONLY a Supabase via MCP.

## NUNCA:
- Crear, modificar, o eliminar tablas
- Ejecutar migrations
- Modificar RLS policies
- Crear usuarios en Supabase Auth
- Crear buckets en Storage

## Si necesitas un cambio de BD:
1. Escribe la necesidad en Docs/SYNC_LOG.md
2. Dile a James: "Necesito un cambio de BD, consulta con Chat"
3. Espera a que Chat haga el cambio y actualice SCHEMA.md
4. Solo entonces implementa el código que usa la nueva estructura
