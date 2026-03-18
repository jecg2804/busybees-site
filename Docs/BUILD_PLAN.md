# BusyBees — Build Plan v3.0

Read `.claude/rules/design-system.md` before starting ANY UI work.
Use `context7` MCP to verify API patterns for Next.js 15, Tailwind v4, next-intl, @supabase/ssr.
Use `playwright` MCP to visually verify UI after completing each page.

---

## Fase 0: Fundación

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 0.1 | `lib/types/database.ts` | TypeScript types from ALL 31 Supabase tables |
| 0.2 | `lib/supabase/client.ts` | `createBrowserClient()` — see `.claude/rules/supabase-auth.md` |
| 0.3 | `lib/supabase/server.ts` | `createServerClient()` — see `.claude/rules/supabase-auth.md` |
| 0.4 | `lib/utils/constants.ts` | Site config (phone, email, WhatsApp link, social URLs, payment info) |
| 0.5 | `lib/utils/format.ts` | `formatDate()`, `formatCurrency()`, `formatPhoneNumber()` |
| 0.6 | `lib/utils/i18n-content.ts` | `t()` helper for bilingual Supabase content |
| 0.7 | `messages/es.json`, `messages/en.json` | UI strings for ALL pages (nav, buttons, labels, form placeholders, meta) |
| 0.8 | `src/i18n/routing.ts` | next-intl routing config |
| 0.9 | `src/i18n/navigation.ts` | Exported Link, redirect, usePathname, useRouter |
| 0.10 | `src/i18n/request.ts` | next-intl getRequestConfig |
| 0.11 | `middleware.ts` | next-intl routing + Supabase session refresh + admin/portal auth redirects |
| 0.12 | `app/globals.css` | Tailwind v4: `@import "tailwindcss"` + `@theme {}` with ALL design tokens |
| 0.13 | `app/layout.tsx` | Root layout: fonts (Fredoka + DM Sans), metadata |
| 0.14 | `lib/supabase/queries.ts` | Reusable fetch functions for ALL content tables |

**Criterio:** `npm run build` pasa. Types for 31 tables. i18n routing. Supabase connecting.

---

## Fase 1: Layout Shell + Home

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 1.1 | `app/[locale]/layout.tsx` | Locale layout: NextIntlClientProvider, Header + Footer |
| 1.2 | `components/layout/Header.tsx` | Sticky 64px. Logo left, nav center, lang toggle + portal login right. Mobile: hamburger |
| 1.3 | `components/layout/Footer.tsx` | Logo, tagline, contact, links, programs, copyright |
| 1.4 | `components/layout/MobileNav.tsx` | Slide-in from right |
| 1.5 | `components/layout/LangToggle.tsx` | ES/EN button |
| 1.6 | `components/ui/Button.tsx` | Primary, secondary, ghost |
| 1.7 | `components/ui/WhatsAppFAB.tsx` | Fixed bottom-right, 52px, rounded-square, #25D366 |
| 1.8 | `components/ui/PhotoPlaceholder.tsx` | Cream bg, dashed border, camera icon, caption |
| 1.9 | `components/sections/Hero.tsx` | Two-column. See FEATURE_SPEC §3.1 |
| 1.10 | `components/sections/Values.tsx` | Centered text + honey divider |
| 1.11 | `components/sections/Features.tsx` | Three alternating photo-text. NOT cards |
| 1.12 | `components/sections/ProgramsPreview.tsx` | Four programs from DB |
| 1.13 | `components/sections/Testimonial.tsx` | Featured quote, honey left border |
| 1.14 | `components/sections/CTASection.tsx` | Simple CTA + WhatsApp |
| 1.15 | `app/[locale]/(public)/page.tsx` | Home composing 1.9–1.14 |
| 1.16 | `app/[locale]/(public)/layout.tsx` | Public layout wrapper |

**Criterio:** Home renders ES/EN. Nav works. WhatsApp FAB. Responsive. Design matches spec.

---

## Fase 2: Content Pages + Blog

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 2.1 | `app/[locale]/(public)/nosotros/page.tsx` | About page |
| 2.2 | `app/[locale]/(public)/programas/page.tsx` | Programs page |
| 2.3 | `app/[locale]/(public)/equipo/page.tsx` | Team page |
| 2.4 | `app/[locale]/(public)/galeria/page.tsx` | Gallery + lightbox |
| 2.5 | `app/[locale]/(public)/admisiones/page.tsx` | Admissions + link to application |
| 2.6 | `app/[locale]/(public)/contacto/page.tsx` | Contact form → inquiries |
| 2.7 | `app/[locale]/(public)/blog/page.tsx` | Blog list |
| 2.8 | `app/[locale]/(public)/blog/[slug]/page.tsx` | Blog post |
| 2.9 | `lib/utils/markdown.ts` | Markdown → HTML |
| 2.10 | `app/[locale]/(public)/eventos/page.tsx` | Events list |
| 2.11 | `app/[locale]/(public)/eventos/[id]/page.tsx` | Event detail + registration |
| 2.12 | `app/[locale]/(public)/calendario/page.tsx` | School calendar view |

**Criterio:** All public pages render with DB data. Contact form inserts. Blog works. Events visible.

---

## Fase 3: Enrollment System

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 3.1 | `app/[locale]/(public)/admisiones/aplicar/page.tsx` | Multi-step enrollment form |
| 3.2 | `components/enrollment/StepParentInfo.tsx` | Step 1: parent details |
| 3.3 | `components/enrollment/StepChildInfo.tsx` | Step 2: child details |
| 3.4 | `components/enrollment/StepAdditional.tsx` | Step 3: medical, how heard |
| 3.5 | `components/enrollment/StepDocuments.tsx` | Step 4: file uploads to Storage |
| 3.6 | `components/enrollment/StepConfirmation.tsx` | Step 5: summary + submit |
| 3.7 | `components/enrollment/EnrollmentWizard.tsx` | State management, progress bar, step navigation |
| 3.8 | `app/[locale]/(public)/admisiones/tour/page.tsx` | Tour scheduling form |
| 3.9 | `components/tours/TourScheduler.tsx` | Calendar date picker + form |

**Criterio:** Full enrollment flow works. Documents upload to Storage. Tour scheduling creates records.

---

## Fase 4: Parent Portal

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 4.1 | `app/[locale]/portal/login/page.tsx` | Parent login (email/password) |
| 4.2 | `app/[locale]/portal/register/page.tsx` | Parent registration |
| 4.3 | `app/[locale]/portal/layout.tsx` | Auth guard + portal sidebar/nav |
| 4.4 | `components/portal/PortalNav.tsx` | Dashboard, Children, Messages, Billing, Store, Calendar |
| 4.5 | `app/[locale]/portal/page.tsx` | Portal dashboard: children overview, reports, messages, invoices |
| 4.6 | `app/[locale]/portal/hijos/page.tsx` | Children list |
| 4.7 | `app/[locale]/portal/hijos/[id]/page.tsx` | Child profile: info, attendance, daily reports |
| 4.8 | `components/portal/AttendanceCalendar.tsx` | Monthly attendance view |
| 4.9 | `components/portal/DailyReportCard.tsx` | Single day report (meals, nap, mood, photos) |
| 4.10 | `app/[locale]/portal/mensajes/page.tsx` | Conversations list |
| 4.11 | `app/[locale]/portal/mensajes/[id]/page.tsx` | Conversation thread |
| 4.12 | `components/portal/MessageThread.tsx` | Message bubbles + input |
| 4.13 | `app/[locale]/portal/facturacion/page.tsx` | Invoices + payment history |
| 4.14 | `components/portal/InvoiceCard.tsx` | Invoice with status + pay button |
| 4.15 | `app/[locale]/portal/anuncios/page.tsx` | Announcements feed |
| 4.16 | `app/[locale]/portal/calendario/page.tsx` | Calendar + event registration |

**Criterio:** Parents can login, view children, read daily reports, message teachers, see invoices.

---

## Fase 5: Store

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 5.1 | `app/[locale]/(public)/tienda/page.tsx` | Product catalog with categories |
| 5.2 | `app/[locale]/(public)/tienda/[slug]/page.tsx` | Category page |
| 5.3 | `components/store/ProductCard.tsx` | Product with photo, name, price, sizes |
| 5.4 | `components/store/Cart.tsx` | Cart sidebar/modal (client state) |
| 5.5 | `components/store/CartProvider.tsx` | Cart context with localStorage |
| 5.6 | `app/[locale]/portal/tienda/checkout/page.tsx` | Checkout (requires auth) → order + payment instructions |
| 5.7 | `app/[locale]/portal/tienda/pedidos/page.tsx` | Order history |
| 5.8 | `components/store/OrderCard.tsx` | Order with status tracker |

**Criterio:** Products display. Cart works. Checkout creates order. Order history visible.

---

## Fase 6: Admin Panel

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 6.1 | `app/[locale]/admin/login/page.tsx` | Admin login |
| 6.2 | `app/[locale]/admin/layout.tsx` | Auth guard + sidebar |
| 6.3 | `components/admin/AdminSidebar.tsx` | All admin sections |
| 6.4 | `components/admin/ContentForm.tsx` | Generic bilingual form |
| 6.5 | `components/admin/ImageUpload.tsx` | Upload to Storage |
| 6.6 | `components/ui/DataTable.tsx` | Sortable admin table |
| 6.7 | `app/[locale]/admin/page.tsx` | Dashboard KPIs |
| 6.8 | `app/[locale]/admin/programas/page.tsx` | CRUD programs |
| 6.9 | `app/[locale]/admin/equipo/page.tsx` | CRUD team |
| 6.10 | `app/[locale]/admin/testimonios/page.tsx` | CRUD testimonials |
| 6.11 | `app/[locale]/admin/blog/page.tsx` | Blog management |
| 6.12 | `app/[locale]/admin/blog/[id]/page.tsx` | Blog editor |
| 6.13 | `app/[locale]/admin/galeria/page.tsx` | Gallery management |
| 6.14 | `app/[locale]/admin/consultas/page.tsx` | Inquiries + status |
| 6.15 | `app/[locale]/admin/aplicaciones/page.tsx` | Enrollment pipeline view |
| 6.16 | `app/[locale]/admin/aplicaciones/[id]/page.tsx` | Application detail + document review |
| 6.17 | `app/[locale]/admin/waitlist/page.tsx` | Waitlist management |
| 6.18 | `app/[locale]/admin/tours/page.tsx` | Tour management |
| 6.19 | `app/[locale]/admin/familias/page.tsx` | Family directory |
| 6.20 | `app/[locale]/admin/familias/[id]/page.tsx` | Family detail + children |
| 6.21 | `app/[locale]/admin/salones/page.tsx` | Classroom management |
| 6.22 | `app/[locale]/admin/asistencia/page.tsx` | Daily attendance |
| 6.23 | `app/[locale]/admin/reportes/page.tsx` | Daily reports — create/edit/publish |
| 6.24 | `app/[locale]/admin/reportes/[id]/page.tsx` | Single report editor |
| 6.25 | `app/[locale]/admin/mensajes/page.tsx` | All conversations |
| 6.26 | `app/[locale]/admin/anuncios/page.tsx` | Announcement management |
| 6.27 | `app/[locale]/admin/eventos/page.tsx` | Event management |
| 6.28 | `app/[locale]/admin/calendario/page.tsx` | School calendar management |
| 6.29 | `app/[locale]/admin/facturacion/page.tsx` | Invoices + payments |
| 6.30 | `app/[locale]/admin/tienda/page.tsx` | Product management |
| 6.31 | `app/[locale]/admin/tienda/pedidos/page.tsx` | Order management |
| 6.32 | `app/[locale]/admin/faq/page.tsx` | FAQ management |
| 6.33 | `app/[locale]/admin/ajustes/page.tsx` | Site settings |

**Criterio:** Full admin panel operational. Every table has CRUD. Pipeline views work.

---

## Fase 7: SEO + Performance + Polish

| Paso | Archivo(s) | Qué hace |
|------|-----------|----------|
| 7.1 | All public pages | Meta tags, OG images, hreflang |
| 7.2 | `app/sitemap.ts` | Dynamic sitemap with blog slugs + events |
| 7.3 | `app/robots.ts` | robots.txt |
| 7.4 | `lib/utils/schema-org.ts` | JSON-LD School structured data |
| 7.5 | All pages | Lighthouse audit: 90+ all categories |
| 7.6 | `app/[locale]/(public)/not-found.tsx` | Custom 404 |
| 7.7 | All forms | Validation, error handling, loading states |

---

## Fase 8: Deploy

| Paso | Qué hacer |
|------|----------|
| 8.1 | Connect repo to Vercel. Configure env vars. |
| 8.2 | Configure domain (busybees.com.pa) |
| 8.3 | SSL (auto via Vercel) |
| 8.4 | Google Search Console + GA4 |
| 8.5 | Google Business Profile |
| 8.6 | Final test: all flows on mobile + desktop |

---

## Reglas Críticas

1. **ALL content from Supabase.** Never hardcode CMS content.
2. **Bilingual always.** `_es`/`_en` columns selected by locale.
3. **Photo placeholders** until photos provided. Cream bg + dashed border + camera icon.
4. **Mobile-first.** Design for phone, then expand.
5. **Design = `design-system.md`.** Follow it exactly.
6. **WhatsApp is the main CTA** on public pages.
7. **Use context7** to verify API patterns before writing code.
8. **Use Playwright** to visually verify UI after completing each page.
9. **Dual auth:** Admin (/admin) and Parents (/portal) are separate auth flows, same Supabase Auth.
10. **Payments:** Manual recording for now. Show Yappy/Nequi/bank instructions, parent uploads receipt. No automated payment gateway yet.
