# BusyBees — Feature Specification v1.0

## 1. Visión General

Sitio web bilingüe (ES/EN) para BusyBees Learning Center, preescolar basado en el juego en Ciudad de Panamá. El sitio cumple tres funciones: informar a padres potenciales, capturar leads (tours, consultas, enrollment), y servir como CMS para las fundadoras.

**Audiencia primaria:** Padres panameños (25–40 años) buscando preescolar bilingüe.
**Idioma principal:** Español. Inglés como toggle secundario.
**Dispositivo principal:** Mobile (60%+ del tráfico esperado).

---

## 2. Información de Marca

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
- 10 salones, max 10–12 niños por salón
- 120 estudiantes max
- 2 maestras por salón (lead + asistente)
- Sesiones: mañana y tarde

---

## 3. Páginas Públicas

### 3.1 — Home (`/[locale]`)

**Propósito:** Primera impresión. Comunicar qué es BusyBees, generar confianza, convertir a WhatsApp/tour.

**Secciones en orden:**

1. **Hero**
   - Foto grande de niños en clase (placeholder hasta tener fotos reales)
   - Headline: "Donde el juego es el camino." / "Where play is the way."
   - Subtítulo: preescolar bilingüe, opening 2026
   - CTA primario: "Agenda un Tour" → WhatsApp link
   - CTA secundario: "Conócenos" → scroll o /nosotros
   - Tags: Basado en el juego · Bilingüe · Grupos de 10–12

2. **Valores** (simple centered text)
   - "Conectamos. Creamos. Crecemos. Jugamos."
   - Breve párrafo explicando la filosofía
   - Línea decorativa (honey color)

3. **Features** (alternating photo-text, NOT cards)
   - Aprendizaje basado en el juego (foto + texto)
   - Inmersión bilingüe natural (texto + foto)
   - Grupos pequeños, atención real (foto + texto)
   - Layout: 2 columnas, foto y texto alternan lados

4. **Programas preview**
   - 4 programa cards simples (nombre, edad, 1 línea descripción)
   - Link a /programas para ver detalle

5. **Testimonial destacado**
   - Una cita grande con border-left honey
   - Nombre y rol del padre/madre
   - Fetch de `testimonials` WHERE is_featured = true

6. **CTA final**
   - "¿Preguntas?" + botón WhatsApp
   - Simple, limpio

**Data sources:** site_settings, programs, testimonials (featured)

---

### 3.2 — Nosotros (`/[locale]/nosotros`)

**Propósito:** Humanizar. Los padres eligen personas, no instituciones.

**Secciones:**

1. **Header**
   - "Dos maestras con un sueño."
   - Párrafo de historia personal (desde site_settings o hardcoded prose)

2. **Founders photo + story**
   - Foto de las fundadoras lado a lado
   - Texto narrativo: no somos empresarias, somos maestras...

3. **Misión y Visión**
   - Texto plano, sin cards. Subtítulos + párrafos.

4. **The Busy Bees Way**
   - 4 valores con descripción breve
   - Grid de 2x2, simple, con separadores

**Data sources:** site_settings (values), team_members (founders)

---

### 3.3 — Programas (`/[locale]/programas`)

**Propósito:** Detalle de cada programa por edad.

**Secciones:**

1. **Header**
   - "Diseñados para cada etapa."
   - Subtítulo sobre respeto al ritmo natural

2. **Programa sections** (one per program, alternating layout)
   - Foto placeholder + nombre + edad + descripción + highlights como tags
   - Alternar: foto-izq/texto-der, texto-izq/foto-der
   - Color accent del programa en detalles (top border, tags)

3. **Extracurriculares**
   - Simple lista: Música · Arte · Mindfulness · Huerto · Cocina · Movimiento
   - Fetch de `extracurriculars`

**Data sources:** programs, extracurriculars

---

### 3.4 — Equipo (`/[locale]/equipo`)

**Propósito:** Presentar a las personas detrás de BusyBees.

**Secciones:**

1. **Header** — "Conoce a las Queen Bees."

2. **Fundadoras** (grid 2 col)
   - Foto grande + nombre + rol + bio
   - Fetch team_members WHERE is_founder = true

3. **Maestras**
   - Texto introductorio sobre el equipo
   - Grid de team members (foto + nombre + programa)
   - Fetch team_members WHERE is_founder = false

4. **Careers CTA**
   - "¿Quieres ser parte de nuestra colmena?"
   - Link a email

**Data sources:** team_members

---

### 3.5 — Galería (`/[locale]/galeria`)

**Propósito:** Mostrar el día a día visualmente.

**Secciones:**

1. **Header** — "Momentos en nuestra colmena."

2. **Category filter** (optional tabs: Todo, Salones, Actividades, Eventos)

3. **Photo grid**
   - Masonry-style o grid asimétrico
   - Lightbox on click
   - Fetch gallery_images ORDER BY sort_order

4. **Instagram CTA**
   - "Más fotos en @busybees.pa"

**Data sources:** gallery_images

---

### 3.6 — Admisiones (`/[locale]/admisiones`)

**Propósito:** Explicar proceso y convertir.

**Secciones:**

1. **Header** — "Únete a nuestra colmena."

2. **Proceso** (numbered steps, NOT cards)
   - 1. Contáctanos (WhatsApp/form)
   - 2. Agenda un Tour
   - 3. Solicitud + documentos
   - 4. ¡Bienvenido!

3. **Documentos requeridos**
   - Lista simple con checkmarks

4. **Métodos de pago**
   - Yappy · Nequi · ACH · Tarjeta · Efectivo

5. **CTA** — "¿Lista para dar el primer paso?" + WhatsApp

**Data sources:** site_settings (mostly static content)

---

### 3.7 — Blog (`/[locale]/blog`)

**Propósito:** SEO + valor para padres.

**Lista:**
- Simple list layout (título, excerpt, fecha, categoría)
- Hover: título cambia a color honey
- Filtro opcional por categoría
- Fetch blog_posts WHERE is_published = true ORDER BY published_at DESC

**Post individual (`/[locale]/blog/[slug]`):**
- Título, fecha, autor, categoría
- Contenido renderizado (markdown o rich text)
- "Volver al blog" link
- Compartir en WhatsApp/social (optional)

**Data sources:** blog_posts, team_members (author)

---

### 3.8 — Contacto (`/[locale]/contacto`)

**Propósito:** Capturar leads.

**Secciones:**

1. **Header** — "Hablemos."

2. **Formulario** (left column)
   - Campos: nombre, email, teléfono/WhatsApp, edad del niño, mensaje
   - Submit → INSERT en `inquiries` table
   - Confirmación visual post-submit
   - Tipo: 'contact' por default

3. **Info de contacto** (right column)
   - WhatsApp, email, Instagram, ubicación
   - Google Maps embed (placeholder)

**Data sources:** INSERT into inquiries

---

## 4. Admin Panel

### 4.1 — Acceso

- URL: `/[locale]/admin`
- Auth: Supabase email/password (no public registration)
- Guard: redirect a login si no autenticado
- Layout: sidebar navigation + content area

### 4.2 — Páginas Admin

| Página | Ruta | Tabla | Operaciones |
|--------|------|-------|-------------|
| Dashboard | /admin | — | KPIs: inquiries nuevas, posts publicados, team count |
| Programas | /admin/programas | programs | CRUD + reorder |
| Equipo | /admin/equipo | team_members | CRUD + photo upload |
| Testimonios | /admin/testimonios | testimonials | CRUD + toggle featured |
| Blog | /admin/blog | blog_posts | CRUD + publish/draft toggle |
| Galería | /admin/galeria | gallery_images | CRUD + photo upload + reorder |
| Consultas | /admin/consultas | inquiries | View + change status + notes |
| FAQ | /admin/faq | faqs | CRUD + reorder |
| Ajustes | /admin/ajustes | site_settings | Edit key-value pairs |

### 4.3 — UX del Admin

- Formularios simples, funcionales (no necesitan ser bonitos)
- DataTable con sort para listas
- Imagen upload via Supabase Storage
- Toggle publish/draft para blog posts
- Drag-to-reorder para sort_order (o manual number input)
- Bilingual: todos los formularios tienen campos _es y _en lado a lado

---

## 5. Funcionalidad Transversal

### 5.1 — i18n

- URL-based: `/es/...` y `/en/...`
- Default: español. `/` redirects to `/es`
- UI strings: `messages/es.json` y `messages/en.json` (via next-intl)
- Content: columnas `_es` y `_en` en Supabase. Seleccionar según locale.
- SEO: `<link rel="alternate" hreflang="es">` y `hreflang="en"` en todas las páginas.

### 5.2 — SEO

- Meta titles y descriptions por página (bilingual)
- Open Graph tags con imagen
- Schema.org `School` structured data
- Sitemap.xml generado automáticamente
- robots.txt

### 5.3 — WhatsApp Integration

- Botón flotante (FAB) en todas las páginas → wa.me/50767276989
- CTA buttons en hero y admisiones → mismo link
- Pre-filled message: "Hola, me interesa saber más sobre BusyBees 🐝"

### 5.4 — Analytics

- Google Analytics 4 (via next/script)
- Vercel Analytics (built-in)

### 5.5 — Performance

- Target: 90+ Lighthouse score en todas las categorías
- Images: next/image con lazy loading
- Fonts: next/font/google (Fredoka + DM Sans)
- Server Components para todo lo que no necesite interactividad
