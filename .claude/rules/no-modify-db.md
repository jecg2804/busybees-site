---
paths: src/lib/supabase/** src/lib/types/**
---
# No Database Modifications

Claude Code has READ-ONLY Supabase access via MCP.

## NEVER:
- Create, alter, or drop tables
- Run migrations
- Modify RLS policies
- Create auth users
- Create storage buckets

## If you need a schema change:
1. Write the need in Docs/SYNC_LOG.md
2. Tell James: "Necesito un cambio de BD, consulta con Chat"
3. Wait for Chat to update SCHEMA.md
4. Then implement code using the new structure
