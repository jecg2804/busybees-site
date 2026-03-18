# BusyBees — Progress

Última actualización: 2026-03-17

---

## Infraestructura

| Componente | Estado | Detalle |
|-----------|--------|---------|
| Supabase | ✅ Activo | `lnvykzlqojnbvrxdjvhn` (us-east-1) |
| Schema | ✅ Completo | 31 tablas, RLS, triggers, indexes, seed data |
| Supabase Auth | ⏳ Pendiente | James: crear usuario admin en Dashboard → Authentication |
| Supabase Storage | ✅ Activo | Bucket "images" (public) creado via SQL |
| GitHub Repo | ✅ Activo | github.com/jecg2804/busybees-site (main branch) |
| Documentación v3 | ✅ Completa | CLAUDE.md, 7 rules, 3 skills, FEATURE_SPEC, BUILD_PLAN, SCHEMA |
| MCPs | ✅ Configurado | Context7 + Supabase (read-only) + Playwright en .mcp.json |
| .env.local | ✅ Creado | Supabase URL + anon key |
| Vercel | ⏳ Pendiente | Conectar después de Fase 0 |
| Dominio | ⏳ Pendiente | busybees.com.pa o similar |
| Next.js Scaffold | ✅ Completo | Next.js 15 + TS + Tailwind v4 + @supabase/ssr + next-intl |

---

## Progreso por Fase

### Fase 0: Fundación — ✅ Completada (2026-03-17)
- [x] 0.1 database.ts — tipos TS para 9 tablas
- [x] 0.2 supabase/client.ts — createBrowserClient
- [x] 0.3 supabase/server.ts + middleware.ts — createServerClient + session refresh
- [x] 0.4 constants.ts — design tokens, site config, colores por programa
- [x] 0.5 format.ts — formatDate, formatCurrency, formatPhoneNumber, t()
- [x] 0.6 messages/es.json + en.json — UI strings completas
- [x] 0.7 middleware.ts — next-intl routing + Supabase session + admin auth guard
- [x] 0.8 i18n/ — routing.ts + navigation.ts + request.ts (next-intl v4)
- [x] 0.9 .env.example — template con vars de Supabase

### Fase 1: Layout + Home — ✅ Completada (2026-03-17)
- [x] 1.1–1.3 globals.css con design tokens, root layout, locale layout (Fredoka + DM Sans)
- [x] 1.4 Header.tsx — sticky 64px, logo, nav center, lang toggle, hamburger mobile
- [x] 1.5 Footer.tsx — 3 columnas: brand, links, contacto
- [x] 1.6 MobileNav.tsx — slide-in from right con overlay
- [x] 1.7 LangToggle.tsx — ES/EN switch button
- [x] 1.8 Button.tsx — primary/secondary/ghost, soporta href (link) o button
- [x] 1.9 WhatsAppFAB.tsx — fixed bottom-right, 52px rounded-square, #25D366
- [x] PhotoPlaceholder.tsx — cream bg, dashed border, camera icon
- [x] 1.10 Hero.tsx — two-column, headline + CTAs + photo placeholder
- [x] 1.11 Values.tsx — centered text + honey divider
- [x] 1.12 Features.tsx — 3 alternating photo-text sections
- [x] 1.13 ProgramsPreview.tsx — 4 programs from Supabase con color border-top
- [x] 1.14 Testimonial.tsx — featured quote from Supabase, honey left border
- [x] 1.15 CTASection.tsx — WhatsApp CTA
- [x] 1.16 Home page composing all sections + (public) layout wrapper

### Fase 2: Content Pages + Blog — ⏳ No iniciada
- [ ] 2.1–2.12 All public pages (about, programs, team, gallery, admissions, contact, blog, events, calendar)

### Fase 3: Enrollment System — ⏳ No iniciada
- [ ] 3.1–3.9 Multi-step enrollment + tour scheduling

### Fase 4: Parent Portal — ⏳ No iniciada
- [ ] 4.1–4.16 Auth + dashboard + children + messages + billing + calendar

### Fase 5: Store — ⏳ No iniciada
- [ ] 5.1–5.8 Product catalog + cart + checkout + order history

### Fase 6: Admin Panel — ⏳ No iniciada
- [ ] 6.1–6.33 Full admin panel for all 31 tables

### Fase 7: SEO + Polish — ⏳ No iniciada

### Fase 8: Deploy — ⏳ No iniciada

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
| 2026-03-17 | Docs v2→v3: path-scoped rules | Research: Claude sigue ~150 instrucciones max |
| 2026-03-17 | 3 MCPs: Context7 + Supabase + Playwright | Context7 = docs accuracy. Playwright = visual QA |
| 2026-03-17 | Tailwind v4 CSS-first | No tailwind.config.js |
| 2026-03-17 | @supabase/ssr exclusivo | auth-helpers-nextjs deprecated |
| 2026-03-17 | Pricing: placeholder | James decidirá rangos después |
| 2026-03-17 | Design: "Premium Playful" | Photo-driven editorial + organic accents |
| 2026-03-17 | Level 5 DB desde día 1 | 31 tablas. BD lista para parent portal, enrollment, store, payments |
| 2026-03-17 | Dual auth: admin + parents | Mismo Supabase Auth, diferentes roles y rutas |
| 2026-03-17 | Payments: manual first | Yappy/Nequi instructions + receipt upload. No gateway automático aún |

---

## Bugs Conocidos

(ninguno aún)
