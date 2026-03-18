# BusyBees Learning Center — Website

Bilingual preschool website (ES/EN) for BusyBees, Panama City.
Supabase as CMS + backend. Admin panel integrado.

## Stack
- Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 → Vercel
- Supabase PostgreSQL + Auth + RLS + Storage
- next-intl (ES default, EN secondary)
- Fredoka (display) + DM Sans (body) via next/font/google

## Commands
```bash
npm run dev          # localhost:3000
npm run build        # MUST pass before every commit
npm run lint         # ESLint
```

## Reference Docs (read in this order)
1. `@Docs/BUILD_PLAN.md` — Phases, steps, exact file paths
2. `@Docs/FEATURE_SPEC.md` — Page-by-page sections and behavior
3. `@Docs/SCHEMA.md` — DB tables, columns, RLS policies
4. `@Docs/PROGRESS.md` — What's done, what's next (you update this)
5. `@Docs/SYNC_LOG.md` — Changes between Chat and Code (you update this)

## Three Actors
**Claude Chat (claude.ai):** Planning, design, specs, DB writes (has Supabase write access).
**James (human):** Decisions, content, photos, branding. Pushes to git.
**Claude Code (you):** Implementation, testing, builds. Read-only Supabase via MCP.

## Regla de Oro
If it involves changing DB schema or business logic not in docs → **STOP**, tell James to consult Chat.
If it's implementation based on what's documented → **DO IT**.

## Workflow
**Before:** Read BUILD_PLAN → PROGRESS → SYNC_LOG.
**During:** Read relevant FEATURE_SPEC section. Verify schema via SCHEMA.md or Supabase MCP. Run `npm run build`.
**After each step:** Commit → push to main → update PROGRESS.md.
**Context:** `/compact` at 50%. `/clear` between unrelated phases.

## Git
- Work on `main` branch. Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:` in español.
- `npm run build` MUST pass before every commit. One commit per BUILD_PLAN step.

## Supabase
- Project: `lnvykzlqojnbvrxdjvhn` (us-east-1)
- 9 tables. See SCHEMA.md for details.
- Storage: `images` bucket (public) for photos.
- Auth: email/password for admin only (no public registration).

## Conventions
- Server Components by default. `'use client'` only with interactivity.
- Strict TypeScript. No `any`. Interfaces over types.
- Variables in English. Business logic comments in Spanish.
- One component per file. PascalCase for components, camelCase for utils.
- ALL content from Supabase. Never hardcode CMS content.
- ALL bilingual pages use `_es`/`_en` columns based on locale.
- Photo placeholders: cream boxes with dashed border + camera icon (NOT gray rectangles, NOT emoji).

## Design — see `.claude/rules/design-system.md` for full spec
Photo-driven editorial. Organic accents. Warm, personal, NOT template-y.
Reference: playfultbtm.com and wonderlearningpty.com (competitors — match their warmth, beat their tech).
