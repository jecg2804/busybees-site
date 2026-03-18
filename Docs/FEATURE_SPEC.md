# BusyBees — Feature Specification v3.0

## 1. Visión General

Sitio web bilingüe (ES/EN) para BusyBees Learning Center, preescolar basado en el juego en Ciudad de Panamá. NO es solo un website — es una plataforma operacional completa: marketing, admisiones, portal de padres, pagos, tienda, y comunicación.

**Audiencia:** Padres panameños (25–40) + expats buscando preescolar bilingüe.
**Idioma principal:** Español. Inglés como toggle.
**Dispositivo principal:** Mobile (60%+).
**Diseño:** Photo-driven editorial con acentos orgánicos. Ver `.claude/rules/design-system.md`.
**Referencias:** playfultbtm.com (warmth, testimonials), wonderlearningpty.com (structure), flamingoschool.com (modern UX).

---

## 2. Marca

- **Nombre:** Busy Bees Learning Center
- **Logo:** Abeja cartoon con lentes redondos sobre círculo dorado
- **Tagline:** "Shaping hearts, minds, and confidence from the start"
- **Valores:** Conectamos · Creamos · Crecemos · Jugamos
- **Teléfono/WhatsApp:** +507 6727-6989
- **Email:** hola@busybees.pa
- **Instagram:** @busybees.pa
- **Ubicación:** Ciudad de Panamá, Panamá
- **Apertura:** 2026

### Programas
| Slug | Nombre | Edad | Color | Emoji |
|------|--------|------|-------|-------|
| baby-bees | Baby Bees | 18m–2 años | #F2A0B7 | 🍼 |
| little-bees | Little Bees | 2–3 años | #F5A623 | 🌻 |
| busy-bees | Busy Bees | 3–4 años | #2E86DE | 🔎 |
| queen-bees | Queen Bees | 4–5 años | #9B59B6 | 👑 |

### Capacidad
10 salones, max 10–12 niños/salón, 120 max, 2 maestras/salón, sesiones mañana y tarde.

---

## 3. Páginas Públicas (Marketing Website)

### 3.1 — Home (`/[locale]`)
1. **Hero** — Two-column: text (55%) + photo (45%). Cream bg, organic blob accents at low opacity. H1 "Donde el juego es el camino." Subtitle, 2 CTAs (Agenda un Tour, Conócenos), 3 tags.
2. **Valores** — Centered text. "Conectamos. Creamos. Crecemos. Jugamos." + honey divider + philosophy paragraph.
3. **Features** — Three alternating photo-text sections (play-based, bilingual, small groups). NOT cards.
4. **Programas preview** — Four items from Supabase with program color accents. Link to /programas.
5. **Testimonial** — Featured quote, 3px honey left border, italic 20px. From testimonials table.
6. **CTA** — "¿Preguntas?" + WhatsApp button.

### 3.2 — Nosotros (`/[locale]/nosotros`)
1. Header — "Dos maestras con un sueño."
2. Founders photo (Founders.jpeg) + narrative story.
3. Misión y Visión — flowing prose, NOT cards.
4. The Busy Bees Way — 4 values in 2×2 layout.

### 3.3 — Programas (`/[locale]/programas`)
1. Header — "Diseñados para cada etapa."
2. One section per program, alternating photo-text layout. Color accents + highlight tags.
3. Extracurriculares — simple centered list from Supabase.

### 3.4 — Equipo (`/[locale]/equipo`)
1. Header — "Conoce a las Queen Bees."
2. Fundadoras — 2-col grid, large photo + bio.
3. Maestras — grid of team members.
4. Careers CTA — email link.

### 3.5 — Galería (`/[locale]/galeria`)
1. Header — "Momentos en nuestra colmena."
2. Category filter tabs.
3. Asymmetric masonry grid + lightbox.
4. Instagram CTA.

### 3.6 — Admisiones (`/[locale]/admisiones`)
1. Header — "Únete a nuestra colmena."
2. Proceso — numbered steps with vertical connector (Contáctanos → Tour → Solicitud → Bienvenido).
3. **Online Application button** → links to multi-step enrollment form.
4. Documentos requeridos — checklist.
5. Precios — tuition ranges (placeholder until decided).
6. Métodos de pago — Yappy, Nequi, ACH, Tarjeta, Efectivo.
7. CTA → WhatsApp + "Apply Online" button.

### 3.7 — Blog (`/[locale]/blog`)
- Editorial list layout (NOT card grid). Title → excerpt → date. Hover: honey.
- Post detail: title, date, author, category, markdown content, back link.

### 3.8 — Contacto (`/[locale]/contacto`)
- Two-column: form (nombre, email, WhatsApp, edad, mensaje → inquiries table) + contact info + map.

### 3.9 — Eventos (`/[locale]/eventos`)
- List of upcoming public events from events table. Card per event with date, title, type, registration button.
- Event detail page with description, location, registration form.
- Events with fees show payment option.

### 3.10 — Tienda (`/[locale]/tienda`)
- Product categories (uniforms, supplies, lunch plans).
- Product grid per category with photo, name, price, sizes.
- Cart functionality (client-side state).
- Checkout → creates order + shows payment instructions (Yappy/Nequi).
- **Requires parent login** to purchase.

### 3.11 — Calendario Escolar (`/[locale]/calendario`)
- Monthly calendar view from school_calendar table.
- Filter by type (holiday, event, deadline).
- Color-coded by type.

---

## 4. Enrollment System (`/[locale]/admisiones/aplicar`)

Multi-step enrollment application form (public, no auth required):

**Step 1 — Parent Info:** parent name, email, phone, preferred language.
**Step 2 — Child Info:** child name, DOB, gender, preferred program, preferred session, preferred start date.
**Step 3 — Additional:** how heard about us, allergies/medical, message.
**Step 4 — Documents:** upload birth certificate, vaccination card, parent ID, photos. → Supabase Storage.
**Step 5 — Confirmation:** summary + "We'll contact you within 48 hours."

→ Creates `enrollment_applications` record with status 'submitted'.
→ Admin sees it in dashboard and manages pipeline: reviewing → tour_scheduled → documents_pending → accepted → enrolled.

---

## 5. Tour Scheduling (`/[locale]/admisiones/tour`)

- Calendar-style date picker showing available slots.
- Parent fills: name, email, phone, child age.
- → Creates `tours` record with status 'scheduled'.
- Admin manages: confirm, complete, no-show, cancel.
- Post-tour: can link to enrollment application.

---

## 6. Parent Portal (`/[locale]/portal`)

**Auth required.** Parents register/login via Supabase Auth (email + password).
Family record links to auth.users via `families.auth_id`.

### 6.1 — Portal Dashboard
- Children overview: name, program, classroom, attendance this week.
- Recent daily reports.
- Unread messages count.
- Upcoming events.
- Outstanding invoices.

### 6.2 — Child Profile
- Info, medical details, enrollment status.
- Attendance history (calendar view).
- Daily reports feed (photos, meals, naps, activities, mood).
- Developmental milestones (future).

### 6.3 — Messages
- Conversations with teachers/admin.
- Thread view. Real-time with Supabase Realtime (future).

### 6.4 — Billing
- Invoice list with status (pending, paid, overdue).
- Payment history.
- Payment instructions (Yappy number, Nequi, ACH details).
- Upload payment receipt (proof of transfer).

### 6.5 — Store
- Browse products, add to cart, checkout.
- Order history with status tracking.

### 6.6 — Calendar
- School calendar + events.
- Register for events.

### 6.7 — Announcements
- School-wide and program-specific announcements.

---

## 7. Admin Panel (`/[locale]/admin`)

Auth required. Admin users (Supabase Auth, manual creation).

### Dashboard
- KPIs: inquiries nuevas, applications pending, enrolled count, attendance today, revenue this month.
- Quick actions: view recent inquiries, pending tours, unpublished reports.

### Content Management (original)
| Sección | Tabla | Operaciones |
|---------|-------|-------------|
| Programas | programs | CRUD + reorder |
| Equipo | team_members | CRUD + photo upload |
| Testimonios | testimonials | CRUD + toggle featured |
| Blog | blog_posts | CRUD + publish/draft |
| Galería | gallery_images | CRUD + upload + reorder |
| FAQ | faqs | CRUD + reorder |
| Ajustes | site_settings | Edit key-value |

### Operations
| Sección | Tabla(s) | Operaciones |
|---------|----------|-------------|
| Consultas | inquiries | View + status + notes |
| Aplicaciones | enrollment_applications, enrollment_documents | Pipeline view, status changes, document review |
| Waitlist | waitlist | Manage positions, priorities, notifications |
| Tours | tours | Schedule, confirm, complete, track |
| Familias | families, children | View/edit family + children records |
| Salones | classrooms, classroom_assignments | Manage rooms + teacher assignments |
| Asistencia | attendance | Daily check-in view, reports |
| Reportes Diarios | daily_reports | Create, edit, publish to parents |
| Mensajes | conversations, messages | View/respond to parent messages |
| Anuncios | announcements | Create, publish, target audience |
| Eventos | events, event_registrations | CRUD events, manage registrations |
| Calendario | school_calendar | Manage academic calendar |
| Facturación | invoices, payments | Create invoices, record payments, track status |
| Tienda | product_categories, products, orders, order_items | Product management, order fulfillment |

---

## 8. Funcionalidad Transversal

### i18n
- URL-based: `/es/...` y `/en/...`. Default español. `/` → `/es`
- UI strings: messages/ (next-intl). Content: `_es`/`_en` columns.
- SEO: hreflang tags.

### WhatsApp
- FAB en todas las páginas → wa.me/50767276989
- Pre-filled: "Hola, me interesa saber más sobre BusyBees 🐝"

### Auth (dual system)
- **Admin auth:** email/password, manual user creation. Access to /admin.
- **Parent auth:** email/password, self-registration during enrollment or by admin. Access to /portal.
- Middleware checks auth and redirects accordingly.

### SEO
- Meta titles/descriptions bilingüe, OG tags, Schema.org School, sitemap.xml, robots.txt.
- Target: 90+ Lighthouse.

### Payments (Panama-specific)
- Yappy: show Yappy number + instructions. Parent uploads receipt.
- Nequi: same flow as Yappy.
- ACH/Transfer: show bank details. Parent uploads receipt.
- Credit/Debit card: Stripe integration (future) or manual recording.
- Cash: admin records manually.
- All payments tracked in `payments` table with reference numbers.

### Performance
- next/image, next/font/google, Server Components by default.
- Supabase Realtime for messages (future enhancement).
