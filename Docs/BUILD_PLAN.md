# BusyBees — Build Plan

## Fase 0: Fundación

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 0.1 | `lib/types/database.ts` | Tipos TypeScript generados del schema Supabase |
| 0.2 | `lib/supabase/client.ts` | `createBrowserClient()` con env vars |
| 0.3 | `lib/supabase/server.ts` | `createServerClient()` para SSR |
| 0.4 | `lib/utils/constants.ts` | Design tokens (colores, fonts), site config |
| 0.5 | `lib/utils/format.ts` | `formatDate()`, helpers |
| 0.6 | `messages/es.json`, `messages/en.json` | UI strings (nav, buttons, labels, form placeholders) |
| 0.7 | `middleware.ts` | i18n routing (next-intl) + auth redirect para /admin |
| 0.8 | `lib/i18n.ts` | next-intl config (locales, default) |
| 0.9 | `.env.example` | Template con todas las env vars necesarias |

**Criterio:** `npm run build` pasa. Tipos compilando. i18n routing funcional.

---

## Fase 1: Layout Shell + Home

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 1.1 | `app/globals.css` | Tailwind config + custom tokens |
| 1.2 | `app/layout.tsx` | Root layout: fonts (Fredoka + DM Sans), metadata |
| 1.3 | `app/[locale]/layout.tsx` | Locale layout: next-intl provider, Header + Footer |
| 1.4 | `components/layout/Header.tsx` | Logo, nav links, lang toggle. Sticky, minimal. |
| 1.5 | `components/layout/Footer.tsx` | Logo, links, contact info, copyright |
| 1.6 | `components/layout/MobileNav.tsx` | Hamburger menu for mobile |
| 1.7 | `components/layout/LangToggle.tsx` | ES/EN switch button |
| 1.8 | `components/ui/Button.tsx` | Primary, secondary, ghost variants |
| 1.9 | `components/ui/WhatsAppFAB.tsx` | Floating WhatsApp button |
| 1.10 | `components/sections/Hero.tsx` | Photo + headline + CTAs |
| 1.11 | `components/sections/Values.tsx` | Centered values text block |
| 1.12 | `components/sections/Features.tsx` | Alternating photo-text sections |
| 1.13 | `components/sections/ProgramsPreview.tsx` | 4 simple program cards |
| 1.14 | `components/sections/Testimonial.tsx` | Featured quote with border |
| 1.15 | `components/sections/CTASection.tsx` | Simple CTA with WhatsApp button |
| 1.16 | `app/[locale]/(public)/page.tsx` | Home page composing all sections |

**Criterio:** Home page renderiza en ES y EN. Nav funcional. WhatsApp FAB visible. Responsive.

---

## Fase 2: Content Pages

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 2.1 | `app/[locale]/(public)/nosotros/page.tsx` | About: historia, misión, visión, valores |
| 2.2 | `app/[locale]/(public)/programas/page.tsx` | Programs: 4 secciones alternadas + extras |
| 2.3 | `app/[locale]/(public)/equipo/page.tsx` | Team: fundadoras + maestras grid + careers CTA |
| 2.4 | `app/[locale]/(public)/galeria/page.tsx` | Gallery: grid + category filter + lightbox |
| 2.5 | `app/[locale]/(public)/admisiones/page.tsx` | Admissions: steps + docs + payment + CTA |
| 2.6 | `app/[locale]/(public)/contacto/page.tsx` | Contact: form + info + map placeholder |
| 2.7 | `lib/supabase/queries.ts` | Reusable data-fetching functions para todas las tablas |

**Criterio:** Las 6 páginas renderizan con datos de Supabase. Formulario de contacto inserta en `inquiries`. Bilingüe funcional.

---

## Fase 3: Blog

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 3.1 | `app/[locale]/(public)/blog/page.tsx` | Blog list: posts publicados, con excerpt |
| 3.2 | `app/[locale]/(public)/blog/[slug]/page.tsx` | Blog post individual: content + meta |
| 3.3 | `lib/utils/markdown.ts` | Markdown → HTML renderer (si usamos markdown en content) |

**Criterio:** Blog list muestra posts publicados. Post individual renderiza contenido. SEO meta tags.

---

## Fase 4: Admin Panel

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 4.1 | `app/[locale]/admin/layout.tsx` | Auth guard + admin sidebar layout |
| 4.2 | `app/[locale]/admin/login/page.tsx` | Login form (email/password via Supabase Auth) |
| 4.3 | `components/admin/AdminSidebar.tsx` | Nav: Dashboard, Programas, Equipo, etc. |
| 4.4 | `components/admin/ContentForm.tsx` | Generic bilingual form (fields_es + fields_en) |
| 4.5 | `components/admin/ImageUpload.tsx` | Upload to Supabase Storage + preview |
| 4.6 | `components/ui/DataTable.tsx` | Sortable table for admin lists |
| 4.7 | `app/[locale]/admin/page.tsx` | Dashboard: inquiry count, blog count, quick links |
| 4.8 | `app/[locale]/admin/programas/page.tsx` | CRUD programs |
| 4.9 | `app/[locale]/admin/equipo/page.tsx` | CRUD team members |
| 4.10 | `app/[locale]/admin/testimonios/page.tsx` | CRUD testimonials |
| 4.11 | `app/[locale]/admin/blog/page.tsx` | Blog list + create/edit |
| 4.12 | `app/[locale]/admin/blog/[id]/page.tsx` | Blog editor (bilingual) |
| 4.13 | `app/[locale]/admin/galeria/page.tsx` | Gallery management + upload |
| 4.14 | `app/[locale]/admin/consultas/page.tsx` | Inquiry list + status management |
| 4.15 | `app/[locale]/admin/faq/page.tsx` | FAQ management |
| 4.16 | `app/[locale]/admin/ajustes/page.tsx` | Site settings editor |

**Criterio:** Login funcional. CRUD completo para todas las tablas. Image upload. Admin usable.

---

## Fase 5: SEO + Performance + Polish

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 5.1 | `app/[locale]/(public)/layout.tsx` | Meta tags, OG images, hreflang |
| 5.2 | `app/sitemap.ts` | Dynamic sitemap con blog slugs |
| 5.3 | `app/robots.ts` | robots.txt |
| 5.4 | `lib/utils/schema-org.ts` | JSON-LD School structured data |
| 5.5 | Todas las páginas | Lighthouse audit: performance, accessibility, SEO |
| 5.6 | `app/[locale]/(public)/not-found.tsx` | 404 page personalizada |

**Criterio:** 90+ Lighthouse. Sitemap generado. OG tags correctos. Schema.org.

---

## Fase 6: Deploy

| Paso | Qué hacer |
|------|----------|
| 6.1 | Conectar repo a Vercel. Configurar env vars. |
| 6.2 | Configurar dominio (busybees.com.pa o busybees.pa). |
| 6.3 | SSL automático via Vercel. |
| 6.4 | Google Search Console + GA4 setup. |
| 6.5 | Google Business Profile link. |
| 6.6 | Test final en mobile + desktop. |

---

## Reglas Críticas

1. **Todo el contenido viene de Supabase.** No hardcodear textos de programas, testimonios, etc.
2. **Bilingual siempre.** Cada página usa `_es` o `_en` según locale.
3. **Photo placeholders** hasta que James suba fotos reales. Usar div gris con icono de cámara.
4. **Mobile-first.** Diseñar primero para celular, luego expandir.
5. **Design editorial, NO template.** Alternating layouts, flowing prose, generous whitespace. Ver CLAUDE.md sección "Design Principles".
6. **WhatsApp es el CTA principal.** Siempre visible y prominente.
