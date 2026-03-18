# BusyBees — Progress

Última actualización: 2026-03-17

---

## Infraestructura

| Componente | Estado | Detalle |
|-----------|--------|---------|
| Supabase | ✅ Activo | `lnvykzlqojnbvrxdjvhn` (us-east-1) |
| Schema | ✅ Completo | 9 tablas, RLS, triggers, indexes, seed data |
| Supabase Auth | ⏳ Pendiente | James: crear usuario admin en Dashboard → Authentication |
| Supabase Storage | ⏳ Pendiente | James: crear bucket "images" (public) en Dashboard → Storage |
| GitHub Repo | ✅ Activo | github.com/jecg2804/busybees-site (main branch) |
| Documentación v2 | ✅ Completa | CLAUDE.md, 7 rules, 3 skills, FEATURE_SPEC, BUILD_PLAN, SCHEMA |
| MCPs | ✅ Configurado | Context7 + Supabase (read-only) + Playwright en .mcp.json |
| .env.local | ⏳ Pendiente | James: crear con Supabase anon key |
| Vercel | ⏳ Pendiente | Conectar después de Fase 0 |
| Dominio | ⏳ Pendiente | busybees.com.pa o similar |
| Next.js Scaffold | ⏳ Pendiente | Fase 0 |

---

## Progreso por Fase

### Fase 0: Fundación — ⏳ No iniciada
- [ ] 0.1 lib/types/database.ts
- [ ] 0.2 lib/supabase/client.ts
- [ ] 0.3 lib/supabase/server.ts
- [ ] 0.4 lib/utils/constants.ts
- [ ] 0.5 lib/utils/format.ts
- [ ] 0.6 messages/es.json, messages/en.json
- [ ] 0.7 middleware.ts (next-intl + auth redirect)
- [ ] 0.8 lib/i18n.ts + i18n/routing.ts + i18n/navigation.ts
- [ ] 0.9 .env.example (ya existe)

### Fase 1: Layout + Home — ⏳ No iniciada
- [ ] 1.1–1.9 Layout shell + UI primitives
- [ ] 1.10–1.15 Home sections
- [ ] 1.16 Home page

### Fase 2: Content Pages — ⏳ No iniciada
- [ ] 2.1–2.6 Six content pages
- [ ] 2.7 Supabase queries helper

### Fase 3: Blog — ⏳ No iniciada
- [ ] 3.1–3.3 Blog list + post + markdown

### Fase 4: Admin — ⏳ No iniciada
- [ ] 4.1–4.16 Full admin panel

### Fase 5: SEO + Polish — ⏳ No iniciada

### Fase 6: Deploy — ⏳ No iniciada

---

## Decisiones Tomadas

| Fecha | Decisión | Razón |
|-------|----------|-------|
| 2026-03-09 | Supabase como CMS (no Sanity) | Simplificar stack, James ya conoce Supabase |
| 2026-03-09 | next-intl para i18n | Estándar para Next.js 15 App Router |
| 2026-03-09 | Admin panel integrado | No herramienta externa necesaria |
| 2026-03-09 | Fredoka + DM Sans | Match con brand de Instagram |
| 2026-03-09 | us-east-1 para Supabase | Más cerca de Panamá |
| 2026-03-17 | Trabajo en main branch | Simplificar (no dev branch) |
| 2026-03-17 | Docs v2: path-scoped rules | Research: Claude sigue ~150 instrucciones max. Rules scoped reducen carga ~60% |
| 2026-03-17 | 3 MCPs: Context7 + Supabase + Playwright | Context7 = docs accuracy. Playwright = visual self-QA. No noise extra |
| 2026-03-17 | Tailwind v4 CSS-first | No tailwind.config.js. Theme en globals.css via @theme {} |
| 2026-03-17 | @supabase/ssr exclusivo | auth-helpers-nextjs está deprecated |
| 2026-03-17 | Pricing: placeholder | James decidirá rangos de matrícula después |
| 2026-03-17 | Design: "Premium Playful" | Photo-driven editorial + organic accents. NO card grids, NO SaaS templates |

---

## Bugs Conocidos

(ninguno aún)
