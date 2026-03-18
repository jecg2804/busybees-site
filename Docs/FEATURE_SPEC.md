# BusyBees — Feature Specification v2.0

## 1. Visión General

Sitio web bilingüe (ES/EN) para BusyBees Learning Center, preescolar basado en el juego en Ciudad de Panamá. Funciones: informar a padres, capturar leads (tours, consultas), y servir como CMS para las fundadoras.

**Audiencia:** Padres panameños (25–40 años) + expats buscando preescolar bilingüe.
**Idioma principal:** Español. Inglés como toggle.
**Dispositivo principal:** Mobile (60%+).
**Diseño:** Photo-driven editorial con acentos orgánicos. Ver `.claude/rules/design-system.md`.

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

## 3. Páginas Públicas

### 3.1 — Home (`/[locale]`)

**Propósito:** Primera impresión. Comunicar qué es BusyBees, generar confianza, convertir a WhatsApp/tour.

**Secciones:**

1. **Hero** — Full-width section, cream background with subtle organic blobs at low opacity.
   - Left column (55%): subtext "Preescolar bilingüe en Ciudad de Panamá · Abrimos en 2026" in small text honey color → h1 "Donde el juego es el camino." in Fredoka 48px → paragraph describing the school in DM Sans 18px → two CTAs (primary honey "Agenda un Tour", secondary outlined "Conócenos") → three small tags (Basado en el juego · Bilingüe · Grupos de 10–12)
   - Right column (45%): large photo placeholder with rounded corners
   - Data: site_settings (general)

2. **Valores** — White background, centered, max-w-700px.
   - "Conectamos. Creamos. Crecemos. Jugamos." in Fredoka 28px
   - Thin honey line divider (48px wide, 2px)
   - One paragraph explaining philosophy in DM Sans 16px
   - Data: site_settings (values)

3. **Features** — Three alternating photo-text sections. Each has a photo placeholder on one side and text on the other, flipping sides each row. Topics: play-based learning, bilingual immersion, small groups. Sections alternate cream/white background. NOT cards. NOT grids. Flowing editorial layout.
   - Data: hardcoded in messages/ (these are brand pillars, not CMS content)

4. **Programas preview** — Cream background. Four simple items, NOT identical cards. Each shows: program color accent as top border → age range in program color → name in Fredoka → one-line description. Link to /programas.
   - Data: programs table

5. **Testimonial** — White background, max-w-700px centered. One big featured quote with 3px honey left border. Italic text 20px. Author name bold, role in faint text below. Long heartfelt quote like Playful's testimonials.
   - Data: testimonials WHERE is_featured = true

6. **CTA** — Simple centered section. "¿Preguntas?" heading + paragraph + WhatsApp button.

---

### 3.2 — Nosotros (`/[locale]/nosotros`)

**Propósito:** Humanizar. Padres eligen personas, no instituciones.

1. **Header** — Cream bg, max-w-700px. "Dos maestras con un sueño." h1. Paragraph of founder story.

2. **Founders** — Photo-text grid. Large photo of both founders (Founders.jpeg in repo) → narrative text about who they are, why they started BusyBees. NOT a corporate bio. Personal, warm, first-person feeling.
   - Data: team_members WHERE is_founder = true, site_settings

3. **Misión y Visión** — Cream bg, flowing text. Two subsections with h2 + paragraph each. NOT cards. Simple clean prose.
   - Data: site_settings

4. **The Busy Bees Way** — Four values in a 2×2 layout with simple text separators. Each value: name in Fredoka + short description in DM Sans.
   - Data: site_settings (values)

---

### 3.3 — Programas (`/[locale]/programas`)

**Propósito:** Detalle por edad.

1. **Header** — "Diseñados para cada etapa." + subtitle about respecting natural rhythm.

2. **Programa sections** — One per program. Alternating photo-text layout (left/right flip). Photo placeholder + name + age + description + highlights as inline tags. Color accent from program (top border on photo, tag colors).
   - Data: programs

3. **Extracurriculares** — Simple centered list: Música · Arte · Mindfulness · Huerto · Cocina · Movimiento
   - Data: extracurriculars

---

### 3.4 — Equipo (`/[locale]/equipo`)

**Propósito:** Mostrar las personas.

1. **Header** — "Conoce a las Queen Bees."

2. **Fundadoras** — Two-column grid. Large photo + name + role + bio for each.
   - Data: team_members WHERE is_founder = true

3. **Maestras** — Intro paragraph about the team. Grid of team members (photo + name + assigned program).
   - Data: team_members WHERE is_founder = false

4. **Careers CTA** — "¿Quieres ser parte de nuestra colmena?" + email link.

---

### 3.5 — Galería (`/[locale]/galeria`)

**Propósito:** Mostrar el día a día.

1. **Header** — "Momentos en nuestra colmena."

2. **Category filter** — Optional tabs: Todo, Salones, Actividades, Eventos.

3. **Photo grid** — Asymmetric masonry-style grid. Varying sizes (some tall, some wide). Lightbox on click.
   - Data: gallery_images ORDER BY sort_order

4. **Instagram CTA** — "Más fotos en @busybees.pa"

---

### 3.6 — Admisiones (`/[locale]/admisiones`)

**Propósito:** Explicar proceso, convertir.

1. **Header** — "Únete a nuestra colmena."

2. **Proceso** — Numbered steps with vertical connector line. NOT cards. Each step: number in honey circle + title + description paragraph.
   - 1. Contáctanos (WhatsApp/form)
   - 2. Agenda un Tour
   - 3. Solicitud + documentos
   - 4. ¡Bienvenido!

3. **Documentos** — Simple list with checkmarks.

4. **Precios** — Tuition ranges (placeholder until James decides). "La inversión mensual varía según programa y horario. Contáctanos para detalles."

5. **Métodos de pago** — Yappy · Nequi · ACH · Tarjeta · Efectivo

6. **CTA** — "¿Lista para dar el primer paso?" + WhatsApp

---

### 3.7 — Blog (`/[locale]/blog`)

**Propósito:** SEO + valor para padres.

**Lista:** Simple editorial list (NOT card grid). Each post: title → excerpt → date. Title turns honey on hover. Category filter optional.
   - Data: blog_posts WHERE is_published ORDER BY published_at DESC

**Post (`/[locale]/blog/[slug]`):** Title, date, author, category → rendered content (markdown) → "Volver al blog" link.
   - Data: blog_posts, team_members (author)

---

### 3.8 — Contacto (`/[locale]/contacto`)

**Propósito:** Capturar leads.

1. **Header** — "Hablemos."

2. **Two-column layout:**
   - Left: form (nombre, email, teléfono/WhatsApp, edad del niño, mensaje) → INSERT into inquiries → confirmación visual
   - Right: contact info (WhatsApp, email, Instagram, ubicación) + Google Maps placeholder

---

## 4. Admin Panel

URL: `/[locale]/admin`. Auth: Supabase email/password. Admin-only.

| Página | Tabla | Operaciones |
|--------|-------|-------------|
| Dashboard | — | KPIs: inquiries nuevas, posts publicados, team count |
| Programas | programs | CRUD + reorder |
| Equipo | team_members | CRUD + photo upload |
| Testimonios | testimonials | CRUD + toggle featured |
| Blog | blog_posts | CRUD + publish/draft |
| Galería | gallery_images | CRUD + upload + reorder |
| Consultas | inquiries | View + status + notes |
| FAQ | faqs | CRUD + reorder |
| Ajustes | site_settings | Edit key-value pairs |

Admin UX: functional, not beautiful. Bilingual forms with _es/_en side by side.

---

## 5. Funcionalidad Transversal

### i18n
- URL-based: `/es/...` y `/en/...`. Default español. `/` → `/es`
- UI strings: messages/es.json y en.json (via next-intl)
- Content: columnas `_es`/`_en` en Supabase
- SEO: hreflang tags en todas las páginas

### WhatsApp
- FAB flotante en todas las páginas → wa.me/50767276989
- Pre-filled message: "Hola, me interesa saber más sobre BusyBees 🐝"

### SEO
- Meta titles/descriptions bilingüe, OG tags, Schema.org School, sitemap.xml, robots.txt
- Target: 90+ Lighthouse

### Performance
- next/image lazy loading, next/font/google, Server Components default
