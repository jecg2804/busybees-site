# BusyBees — Sync Log

Bridge between Claude Chat and Claude Code.
Both actors write here. James reads to stay in sync.

---

## 2026-03-17 — Chat: Documentation overhaul (v2)

Major rewrite of all project documentation based on deep research into Claude Code best practices, MCP ecosystem, and stack-specific patterns.

**Changes:**
- CLAUDE.md rewritten: trimmed from ~160 to ~65 lines. Design, stack rules, and conventions extracted to `.claude/rules/`
- `.mcp.json` updated: added Context7 (documentation accuracy) and Playwright (visual self-QA) MCPs alongside existing Supabase
- 7 path-scoped rule files created in `.claude/rules/`:
  - `design-system.md` — full visual spec ("Premium Playful" direction, colors, typography, layout rhythm, anti-AI-slop patterns)
  - `tailwind-v4.md` — CSS-first config, renamed utilities, breaking changes from v3
  - `supabase-auth.md` — @supabase/ssr only, getUser not getSession, correct cookie pattern
  - `nextjs-intl.md` — async params (Promise), next-intl navigation, i18n content helper
  - `commits.md` — git workflow on main branch
  - `documentation-tiers.md` — who can modify what
  - `no-modify-db.md` — Claude Code is read-only on Supabase
- 3 skill files updated with correct Next.js 15 patterns (async params, proper types)
- `.env.example` created
- Design direction finalized: photo-driven editorial with organic accents, NOT card grids or SaaS templates

**Why:** Research showed Claude Code can follow ~150 total instructions. Old CLAUDE.md was burning too much of that budget. New system uses path-scoped rules that only load when relevant, reducing context pressure by ~60%.

**Pendiente for James:**
- Push updated docs to main
- Set up .env.local with Supabase anon key (from Dashboard → Settings → API)
- Run `npx @playwright/mcp@latest` once to auto-install browsers
- Create admin user in Supabase Auth (if not done already)
- Create `images` bucket in Supabase Storage (if not done already)

**Pendiente for Claude Code:**
- Start Fase 0 from BUILD_PLAN.md
- Use `context7` to verify API patterns before generating code

---

## 2026-03-09 — Chat: Proyecto creado

- Supabase project `lnvykzlqojnbvrxdjvhn` creado en us-east-1
- Schema: 9 tablas con migration `initial_schema`
- Seed data: 4 programas, 6 extracurriculares, 3 site_settings, 1 testimonio
- Documentación inicial generada (v1)

---
