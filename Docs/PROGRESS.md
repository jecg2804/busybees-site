# BusyBees — Progress

Última actualización: 2026-03-09

---

## Infraestructura

| Componente | Estado | Detalle |
|-----------|--------|---------|
| Supabase | ✅ Activo | `lnvykzlqojnbvrxdjvhn` (us-east-1) |
| Schema | ✅ Completo | 9 tablas, RLS habilitado, seed data |
| Supabase Auth | ⏳ Pendiente | Crear usuario admin |
| Supabase Storage | ⏳ Pendiente | Crear bucket "images" (public) |
| GitHub Repo | ⏳ Pendiente | James crea repo + push inicial |
| Vercel | ⏳ Pendiente | Conectar repo |
| Dominio | ⏳ Pendiente | Registrar busybees.com.pa |
| Next.js Scaffold | ⏳ Pendiente | Fase 0 |

---

## Progreso por Fase

### Fase 0: Fundación — ⏳ No iniciada
- [ ] 0.1 database.ts
- [ ] 0.2 supabase/client.ts
- [ ] 0.3 supabase/server.ts
- [ ] 0.4 constants.ts
- [ ] 0.5 format.ts
- [ ] 0.6 messages (es.json, en.json)
- [ ] 0.7 middleware.ts
- [ ] 0.8 i18n.ts
- [ ] 0.9 .env.example

### Fase 1: Layout + Home — ⏳ No iniciada
- [ ] 1.1–1.9 Layout shell + UI primitives
- [ ] 1.10–1.15 Home sections
- [ ] 1.16 Home page

### Fase 2: Content Pages — ⏳ No iniciada
- [ ] 2.1–2.6 Six content pages
- [ ] 2.7 Supabase queries

### Fase 3: Blog — ⏳ No iniciada
- [ ] 3.1–3.3 Blog list + post + markdown

### Fase 4: Admin — ⏳ No iniciada
- [ ] 4.1–4.16 Full admin panel

### Fase 5: SEO + Polish — ⏳ No iniciada

### Fase 6: Deploy — ⏳ No iniciada

---

## Pendiente para Claude Code

1. Esperar push inicial del scaffold al repo.
2. Comenzar Fase 0 → Fase 1 en orden.
3. Usar `james/dev` branch para todo.

---

## Decisiones Tomadas

| Fecha | Decisión | Razón |
|-------|----------|-------|
| 2026-03-09 | Supabase como CMS (no Sanity) | Simplificar stack, James ya conoce Supabase |
| 2026-03-09 | next-intl para i18n | Estándar para Next.js App Router |
| 2026-03-09 | Admin panel integrado | No necesita herramienta externa |
| 2026-03-09 | Fredoka + DM Sans | Match con brand de Instagram |
| 2026-03-09 | us-east-1 para Supabase | Más cerca de Panamá que us-west |

---

## Bugs Conocidos

(ninguno aún)
