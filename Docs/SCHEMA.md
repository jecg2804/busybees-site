# BusyBees — Database Schema

**Supabase Project:** `lnvykzlqojnbvrxdjvhn` (us-east-1)
**Last updated:** 2026-03-09

---

## Convenciones

- Todos los IDs son UUID con `gen_random_uuid()`
- Todas las tablas tienen `created_at TIMESTAMPTZ DEFAULT now()`
- Todas las tablas tienen `updated_at TIMESTAMPTZ` con trigger automático
- RLS habilitado en TODAS las tablas
- Contenido bilingüe: columnas `_es` y `_en`

---

## Tablas (9)

### site_settings
Key-value config global del sitio.

| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| key | TEXT UNIQUE | 'general', 'values', 'capacity' |
| value | JSONB | Estructura flexible |

**RLS:** Public read. Auth write.
**Datos seed:** 3 registros (general, values, capacity).

---

### programs
Los 4 programas por edad.

| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| slug | TEXT UNIQUE | 'baby-bees', 'little-bees', etc. |
| name_es, name_en | TEXT | |
| age_range_es, age_range_en | TEXT | |
| description_es, description_en | TEXT | |
| highlights_es, highlights_en | TEXT[] | Array de highlights |
| emoji | TEXT | '🍼', '🌻', '🔎', '👑' |
| color | TEXT | Hex color del programa |
| sort_order | INT | 1–4 |
| is_active | BOOLEAN | |
| image_url | TEXT | URL de Supabase Storage |

**RLS:** Public read. Auth write.
**Datos seed:** 4 programas.

---

### team_members

| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| name | TEXT | |
| role_es, role_en | TEXT | |
| bio_es, bio_en | TEXT | Nullable |
| photo_url | TEXT | |
| is_founder | BOOLEAN | |
| program_slug | TEXT FK programs(slug) | Nullable — programa asignado |
| sort_order | INT | |
| is_active | BOOLEAN | |

**RLS:** Public read. Auth write.

---

### testimonials

| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| author_name | TEXT | |
| author_role_es, author_role_en | TEXT | "Mamá de X, 3 años" |
| quote_es, quote_en | TEXT | |
| photo_url | TEXT | Nullable |
| sort_order | INT | |
| is_featured | BOOLEAN | Para mostrar en Home |
| is_active | BOOLEAN | |

**RLS:** Public read. Auth write.
**Datos seed:** 1 testimonio featured.

---

### blog_posts

| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| slug | TEXT UNIQUE | URL-friendly |
| title_es, title_en | TEXT | |
| excerpt_es, excerpt_en | TEXT | Nullable |
| content_es, content_en | TEXT | Markdown o HTML |
| category | TEXT | 'general', 'desarrollo', 'familias', etc. |
| cover_image_url | TEXT | |
| author_id | UUID FK team_members(id) | Nullable |
| is_published | BOOLEAN | |
| published_at | TIMESTAMPTZ | Nullable |

**RLS:** Public read SOLO published. Auth read/write all.

---

### gallery_images

| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| image_url | TEXT | URL de Storage |
| caption_es, caption_en | TEXT | Nullable |
| category | TEXT | 'general', 'salones', 'actividades', 'eventos' |
| sort_order | INT | |
| is_active | BOOLEAN | |

**RLS:** Public read. Auth write.

---

### inquiries
Submissions del formulario de contacto y tour requests.

| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| type | TEXT | CHECK: 'contact', 'tour', 'enrollment' |
| parent_name | TEXT | |
| email | TEXT | Nullable |
| phone | TEXT | Nullable |
| child_name | TEXT | Nullable |
| child_age | TEXT | Nullable |
| message | TEXT | Nullable |
| preferred_program | TEXT | Nullable |
| source | TEXT | 'website', 'instagram', 'referral' |
| status | TEXT | CHECK: 'new', 'contacted', 'scheduled', 'enrolled', 'archived' |
| notes | TEXT | Admin notes |

**RLS:** Public INSERT only. Auth read/write.

---

### faqs

| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| question_es, question_en | TEXT | |
| answer_es, answer_en | TEXT | |
| category | TEXT | |
| sort_order | INT | |
| is_active | BOOLEAN | |

**RLS:** Public read. Auth write.

---

### extracurriculars

| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| name_es, name_en | TEXT | |
| description_es, description_en | TEXT | Nullable |
| emoji | TEXT | |
| sort_order | INT | |
| is_active | BOOLEAN | |

**RLS:** Public read. Auth write.
**Datos seed:** 6 actividades.

---

## Storage Buckets (manual setup)

| Bucket | Propósito | Public |
|--------|-----------|--------|
| images | Fotos de equipo, galería, blog covers | Sí |

**Setup:** James crea el bucket manualmente en Supabase Dashboard → Storage → New Bucket → "images" → Public.
