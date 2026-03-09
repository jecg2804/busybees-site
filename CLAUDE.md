# BusyBees Learning Center — Website

Sitio web bilingüe (ES/EN) para BusyBees, preescolar basado en el juego en Ciudad de Panamá.
Supabase como CMS + backend. Admin panel integrado para gestión de contenido.

## Stack

- **Frontend:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 → Vercel
- **DB/CMS:** Supabase PostgreSQL + Auth + RLS + Storage
- **i18n:** next-intl (ES default, EN secondary)
- **Fonts:** Fredoka (display) + DM Sans (body) via next/font/google
- **Hosting:** Vercel (auto-deploy from main)

## Commands

```bash
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build — run before every push
npm run lint         # ESLint
```

## Key Directories

```
src/
├── app/
│   ├── [locale]/               # i18n: /es/... and /en/...
│   │   ├── (public)/           # Public pages (no auth)
│   │   │   ├── page.tsx        # Home
│   │   │   ├── nosotros/       # About
│   │   │   ├── programas/      # Programs
│   │   │   ├── equipo/         # Team
│   │   │   ├── galeria/        # Gallery
│   │   │   ├── admisiones/     # Admissions
│   │   │   ├── blog/           # Blog list + [slug]
│   │   │   └── contacto/       # Contact
│   │   └── admin/              # Protected admin panel
│   │       ├── layout.tsx      # Auth guard
│   │       ├── page.tsx        # Dashboard
│   │       ├── programas/      # CRUD programs
│   │       ├── equipo/         # CRUD team
│   │       ├── testimonios/    # CRUD testimonials
│   │       ├── blog/           # CRUD blog posts
│   │       ├── galeria/        # CRUD gallery
│   │       ├── consultas/      # View/manage inquiries
│   │       └── ajustes/        # Site settings
│   └── globals.css
├── components/
│   ├── ui/                     # Button, Input, Badge, Modal, DataTable
│   ├── layout/                 # Header, Footer, MobileNav, LangToggle
│   ├── sections/               # Hero, Features, ProgramCard, Testimonial, CTA
│   └── admin/                  # AdminSidebar, ContentForm, ImageUpload
├── lib/
│   ├── supabase/               # client.ts, server.ts, middleware.ts
│   ├── types/                  # database.ts (generated), content.ts
│   └── utils/                  # constants.ts, format.ts
├── messages/                   # en.json, es.json (UI strings only, not CMS content)
└── middleware.ts                # i18n routing + auth redirect
```

## Reference Docs

| Documento | Cuándo leerlo |
|-----------|---------------|
| @Docs/BUILD_PLAN.md | **SIEMPRE primero.** Fases, pasos, archivos exactos. |
| @Docs/FEATURE_SPEC.md | Detalle por página: secciones, contenido, comportamiento. |
| @Docs/SCHEMA.md | Tablas de BD, columnas, relaciones, RLS. |
| @Docs/PROGRESS.md | Estado actual, qué está hecho, qué sigue. |
| @Docs/SYNC_LOG.md | Cambios de BD y decisiones entre Chat y Code. |

## Tres Actores

**Claude Chat (claude.ai):** Planificación, diseño, specs, cambios de BD (tiene write access a Supabase). Si necesitas un cambio de schema → STOP, dile a James que consulte con Chat.

**James (humano):** Decisiones finales, contenido real, fotos, branding. Push solo desde `james/dev`.

**Claude Code (tú):** Implementación, testing, builds. Puede: crear/editar código, correr build/lint, leer Supabase MCP (read-only), actualizar PROGRESS.md y SYNC_LOG.md, commit+push a `james/dev`.

**Regla de oro:** Si involucra cambiar BD o lógica no documentada → STOP, dile a James. Si es implementación basada en docs → HAZLO.

## Workflow

**ANTES de cada sesión:**
1. Lee `@Docs/BUILD_PLAN.md` para fase/paso actual.
2. Lee `@Docs/PROGRESS.md` para tareas pendientes.
3. Lee `@Docs/SYNC_LOG.md` para cambios recientes de Chat.

**DURANTE:**
4. Lee la sección relevante del FEATURE_SPEC.
5. Verifica schema en SCHEMA.md o via Supabase MCP (read-only).
6. Implementa. `npm run build` para verificar.
7. `/compact` al 50% de contexto.

**DESPUÉS de cada paso:**
8. `git add -A && git commit -m "feat: paso X.Y — desc" && git push origin james/dev`
9. Actualiza PROGRESS.md.
10. Si descubriste algo que no cuadra con el spec → escribe en SYNC_LOG.md.

**NUNCA:**
- Push a `main`. Solo `james/dev`.
- Modificar FEATURE_SPEC.md o BUILD_PLAN.md (Tier 1 — solo Chat los modifica).
- Crear/modificar tablas en Supabase.
- Hardcodear contenido que viene de la BD (todo se fetch de Supabase).

## Convenciones

### TypeScript
- Strict mode. No `any`.
- Interfaces sobre types (excepto unions).
- Variables en inglés, comentarios en español para lógica de negocio.

### React / Next.js
- Server Components por default. `'use client'` solo con interactividad.
- App Router. No Pages Router.
- Tailwind para estilos. No CSS modules.

### i18n
- UI strings (botones, labels, nav) → messages/es.json y en.json
- Content (blog, programs, testimonials) → Supabase con columnas `_es` y `_en`
- Locale en URL: `/es/programas`, `/en/programs`
- Default: español. Redirect `/` → `/es`

### Archivos
- Componentes: `PascalCase.tsx`
- Utils/hooks: `camelCase.ts`
- Un componente por archivo.

## Design System

```
Honey:       #F5A623  (primary — CTAs, accents, brand)
Honey Dark:  #D4901E  (hover states)
Cream:       #FDF6EA  (backgrounds)
Warm White:  #FFFBF4  (page background)
Blue:        #2E86DE  (secondary — links, Busy Bees program)
Pink:        #F2A0B7  (Baby Bees program)
Lavender:    #D4B8E8  (Queen Bees program)
Green:       #6BBF7B  (success, extracurriculars)
Dark:        #222018  (headings)
Text:        #3D3A33  (body)
Text Soft:   #6E6960  (secondary text)
Sand:        #F0E9DC  (borders, dividers, subtle backgrounds)
```

### Typography
- Display: Fredoka (400, 500, 600, 700)
- Body: DM Sans (400, 500, 600, 700)
- Scale: text-sm (13), text-base (15–16), text-lg (18), text-xl (20), text-2xl (24), text-3xl (32), text-4xl (42–48)

### Design Principles
- Photo-driven, editorial layout — NOT card grids or SaaS templates
- Alternating photo-text sections with generous whitespace
- Big real photos of kids and teachers (placeholder boxes until James provides)
- Flowing prose, not bullet points
- Warm, personal, handcrafted feel
- Reference sites: playfultbtm.com, wonderlearningpty.com

## Supabase

- Project: `lnvykzlqojnbvrxdjvhn` (us-east-1)
- 9 tables: site_settings, programs, team_members, testimonials, blog_posts, gallery_images, inquiries, faqs, extracurriculars
- RLS: public read on content tables, auth required for writes
- Storage: `images` bucket for photos (manual setup by James)
- Auth: email/password for admin users only (no public auth)

## Git

- `main` — Estable. Deploy automático a Vercel.
- `james/dev` — Branch de desarrollo. Commits auto-push.
- Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:` — mensaje en español.
