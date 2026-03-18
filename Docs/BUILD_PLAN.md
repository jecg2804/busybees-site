# BusyBees — Build Plan v2.0

Read `.claude/rules/design-system.md` before starting ANY UI work.
Use `context7` MCP to verify API patterns for Next.js 15, Tailwind v4, next-intl, @supabase/ssr.

---

## Fase 0: Fundación

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 0.1 | `lib/types/database.ts` | TypeScript types from Supabase schema (use Supabase MCP to read table structures) |
| 0.2 | `lib/supabase/client.ts` | `createBrowserClient()` — see `.claude/rules/supabase-auth.md` |
| 0.3 | `lib/supabase/server.ts` | `createServerClient()` — see `.claude/rules/supabase-auth.md` |
| 0.4 | `lib/utils/constants.ts` | Site config (phone, email, WhatsApp link, social URLs) |
| 0.5 | `lib/utils/format.ts` | `formatDate()`, general helpers |
| 0.6 | `lib/utils/i18n-content.ts` | `t()` helper for bilingual Supabase content |
| 0.7 | `messages/es.json`, `messages/en.json` | UI strings: nav, buttons, labels, form placeholders, meta descriptions |
| 0.8 | `src/i18n/routing.ts` | next-intl routing config (locales: es, en. Default: es) |
| 0.9 | `src/i18n/navigation.ts` | Exported Link, redirect, usePathname, useRouter from next-intl |
| 0.10 | `src/i18n/request.ts` | next-intl getRequestConfig for server components |
| 0.11 | `middleware.ts` | next-intl routing + Supabase session refresh + admin auth redirect |
| 0.12 | `app/globals.css` | Tailwind v4: `@import "tailwindcss"` + `@theme {}` with all design tokens. See `.claude/rules/tailwind-v4.md` |
| 0.13 | `app/layout.tsx` | Root layout: fonts (Fredoka + DM Sans via next/font/google), metadata |

**Criterio:** `npm run build` pasa. Types compiling. `/es` and `/en` routes working. Supabase client connecting.

---

## Fase 1: Layout Shell + Home

**Read `design-system.md` before starting.** Every component must follow the design spec.

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 1.1 | `app/[locale]/layout.tsx` | Locale layout: NextIntlClientProvider, Header + Footer wrapper |
| 1.2 | `components/layout/Header.tsx` | Sticky 64px. Logo left, nav center, lang toggle right. Mobile: hamburger |
| 1.3 | `components/layout/Footer.tsx` | Simple: logo + tagline, contact info, links, copyright |
| 1.4 | `components/layout/MobileNav.tsx` | Slide-in from right. Links + lang toggle |
| 1.5 | `components/layout/LangToggle.tsx` | ES/EN button — switches locale via next-intl navigation |
| 1.6 | `components/ui/Button.tsx` | Primary (honey), secondary (outlined), ghost. See design-system.md |
| 1.7 | `components/ui/WhatsAppFAB.tsx` | Fixed bottom-right, 52px rounded-square, #25D366. Static, not pulsing |
| 1.8 | `components/ui/PhotoPlaceholder.tsx` | Reusable: cream bg, dashed border, camera icon, optional caption |
| 1.9 | `components/sections/Hero.tsx` | Two-column: text left (55%), photo right (45%). See FEATURE_SPEC §3.1.1 |
| 1.10 | `components/sections/Values.tsx` | Centered text block with honey divider line |
| 1.11 | `components/sections/Features.tsx` | Three alternating photo-text sections. NOT cards |
| 1.12 | `components/sections/ProgramsPreview.tsx` | Four programs from Supabase. Simple items with color accent, NOT identical cards |
| 1.13 | `components/sections/Testimonial.tsx` | Featured quote with honey left border. Fetch from Supabase |
| 1.14 | `components/sections/CTASection.tsx` | Simple centered CTA with WhatsApp button |
| 1.15 | `app/[locale]/(public)/page.tsx` | Home page composing sections 1.9–1.14 |
| 1.16 | `app/[locale]/(public)/layout.tsx` | Public layout (just passes children, separates from admin) |

**Criterio:** Home renders in ES and EN. Nav works. WhatsApp FAB visible. Fully responsive. Photos are cream placeholders with dashed borders. Design matches `design-system.md` spec.

---

## Fase 2: Content Pages

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 2.1 | `app/[locale]/(public)/nosotros/page.tsx` | About: founder story, mission, vision, values. Use Founders.jpeg from repo |
| 2.2 | `app/[locale]/(public)/programas/page.tsx` | Programs: 4 alternating sections + extracurriculars |
| 2.3 | `app/[locale]/(public)/equipo/page.tsx` | Team: founders + teachers grid + careers CTA |
| 2.4 | `app/[locale]/(public)/galeria/page.tsx` | Gallery: asymmetric grid + category filter + lightbox |
| 2.5 | `app/[locale]/(public)/admisiones/page.tsx` | Admissions: steps + docs + payment + pricing placeholder + CTA |
| 2.6 | `app/[locale]/(public)/contacto/page.tsx` | Contact: form (inserts to inquiries) + info + map placeholder |
| 2.7 | `lib/supabase/queries.ts` | Reusable fetch functions for all tables |

**Criterio:** 6 pages render with Supabase data. Contact form inserts. Bilingual. Responsive. Design consistent.

---

## Fase 3: Blog

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 3.1 | `app/[locale]/(public)/blog/page.tsx` | Blog list: editorial list layout, NOT card grid |
| 3.2 | `app/[locale]/(public)/blog/[slug]/page.tsx` | Post: rendered content + meta + back link |
| 3.3 | `lib/utils/markdown.ts` | Markdown → HTML renderer |

**Criterio:** Blog list shows published posts. Post renders content. SEO meta tags work.

---

## Fase 4: Admin Panel

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 4.1 | `app/[locale]/admin/login/page.tsx` | Login form (email/password via Supabase Auth) |
| 4.2 | `app/[locale]/admin/layout.tsx` | Auth guard (getUser) + sidebar layout |
| 4.3 | `components/admin/AdminSidebar.tsx` | Nav links to all admin sections |
| 4.4 | `components/admin/ContentForm.tsx` | Generic bilingual form (fields_es + fields_en side by side) |
| 4.5 | `components/admin/ImageUpload.tsx` | Upload to Supabase Storage + preview |
| 4.6 | `components/ui/DataTable.tsx` | Sortable table for admin lists |
| 4.7 | `app/[locale]/admin/page.tsx` | Dashboard: inquiry count, blog count, quick links |
| 4.8 | `app/[locale]/admin/programas/page.tsx` | CRUD programs |
| 4.9 | `app/[locale]/admin/equipo/page.tsx` | CRUD team members |
| 4.10 | `app/[locale]/admin/testimonios/page.tsx` | CRUD testimonials |
| 4.11 | `app/[locale]/admin/blog/page.tsx` | Blog management + create/edit |
| 4.12 | `app/[locale]/admin/blog/[id]/page.tsx` | Blog editor (bilingual) |
| 4.13 | `app/[locale]/admin/galeria/page.tsx` | Gallery management + upload |
| 4.14 | `app/[locale]/admin/consultas/page.tsx` | Inquiry list + status + notes |
| 4.15 | `app/[locale]/admin/faq/page.tsx` | FAQ management |
| 4.16 | `app/[locale]/admin/ajustes/page.tsx` | Site settings editor |

**Criterio:** Login works. CRUD complete. Image upload works. Admin is usable.

---

## Fase 5: SEO + Performance

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 5.1 | All public pages | Meta tags, OG images, hreflang |
| 5.2 | `app/sitemap.ts` | Dynamic sitemap with blog slugs |
| 5.3 | `app/robots.ts` | robots.txt |
| 5.4 | `lib/utils/schema-org.ts` | JSON-LD School structured data |
| 5.5 | All pages | Lighthouse audit: target 90+ all categories |
| 5.6 | `app/[locale]/(public)/not-found.tsx` | Custom 404 |

---

## Fase 6: Deploy

| Paso | Qué hacer |
|------|----------|
| 6.1 | Connect repo to Vercel. Configure env vars |
| 6.2 | Configure domain (busybees.com.pa) |
| 6.3 | SSL (auto via Vercel) |
| 6.4 | Google Search Console + GA4 |
| 6.5 | Google Business Profile |
| 6.6 | Final test: mobile + desktop |

---

## Reglas Críticas

1. **ALL content from Supabase.** Never hardcode CMS content.
2. **Bilingual always.** `_es`/`_en` columns selected by locale.
3. **Photo placeholders** until James provides real photos. Cream bg + dashed border + camera icon.
4. **Mobile-first.** Design for phone, then expand.
5. **Design = `design-system.md`.** Follow it exactly. When in doubt, read it again.
6. **WhatsApp is the main CTA.** Always visible and prominent.
7. **Use context7** to verify API patterns before writing code for Next.js, Tailwind, next-intl, Supabase.
8. **Use Playwright** to visually verify UI after completing each page.
