# BusyBees — Database Schema v3.0

**Supabase Project:** `lnvykzlqojnbvrxdjvhn` (us-east-1)
**Last updated:** 2026-03-17
**Total tables:** 31

---

## Convenciones

- Todos los IDs son UUID con `gen_random_uuid()`
- Todas las tablas tienen `created_at TIMESTAMPTZ DEFAULT now()`
- Todas las tablas tienen `updated_at TIMESTAMPTZ` con trigger automático (excepto las de solo-insert)
- RLS habilitado en TODAS las tablas
- Contenido bilingüe: columnas `_es` y `_en`
- Parents ven solo datos de su familia. Admin ve todo.

---

## Dominio A: Website CMS (9 tablas originales)

### site_settings
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| key | TEXT UNIQUE | 'general', 'values', 'capacity' |
| value | JSONB | Estructura flexible |
RLS: Public read. Auth write. **Seed:** 3 registros.

### programs
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| slug | TEXT UNIQUE | 'baby-bees', 'little-bees', 'busy-bees', 'queen-bees' |
| name_es, name_en | TEXT | |
| age_range_es, age_range_en | TEXT | |
| description_es, description_en | TEXT | |
| highlights_es, highlights_en | TEXT[] | |
| emoji | TEXT | |
| color | TEXT | Hex |
| sort_order | INT | |
| is_active | BOOLEAN | |
| image_url | TEXT | |
RLS: Public read. Auth write. **Seed:** 4 programas.

### team_members
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| name | TEXT | |
| role_es, role_en | TEXT | |
| bio_es, bio_en | TEXT | Nullable |
| photo_url | TEXT | |
| is_founder | BOOLEAN | |
| program_slug | TEXT FK programs(slug) | Nullable |
| sort_order | INT | |
| is_active | BOOLEAN | |
RLS: Public read. Auth write.

### testimonials
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| author_name | TEXT | |
| author_role_es, author_role_en | TEXT | |
| quote_es, quote_en | TEXT | |
| photo_url | TEXT | Nullable |
| sort_order | INT | |
| is_featured | BOOLEAN | Home page |
| is_active | BOOLEAN | |
RLS: Public read. Auth write. **Seed:** 1 featured.

### blog_posts
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| slug | TEXT UNIQUE | |
| title_es, title_en | TEXT | |
| excerpt_es, excerpt_en | TEXT | Nullable |
| content_es, content_en | TEXT | Markdown |
| category | TEXT | |
| cover_image_url | TEXT | |
| author_id | UUID FK team_members | Nullable |
| is_published | BOOLEAN | |
| published_at | TIMESTAMPTZ | |
RLS: Public read solo published. Auth all.

### gallery_images
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| image_url | TEXT | |
| caption_es, caption_en | TEXT | Nullable |
| category | TEXT | 'general','salones','actividades','eventos' |
| sort_order | INT | |
| is_active | BOOLEAN | |
RLS: Public read. Auth write.

### inquiries
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| type | TEXT | CHECK: 'contact','tour','enrollment' |
| parent_name | TEXT | |
| email, phone | TEXT | Nullable |
| child_name, child_age | TEXT | Nullable |
| message | TEXT | Nullable |
| preferred_program | TEXT | Nullable |
| source | TEXT | 'website','instagram','referral' |
| status | TEXT | CHECK: 'new','contacted','scheduled','enrolled','archived' |
| notes | TEXT | Admin notes |
RLS: Public INSERT only. Auth read/write.

### faqs
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| question_es, question_en | TEXT | |
| answer_es, answer_en | TEXT | |
| category | TEXT | |
| sort_order | INT | |
| is_active | BOOLEAN | |
RLS: Public read. Auth write.

### extracurriculars
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| name_es, name_en | TEXT | |
| description_es, description_en | TEXT | Nullable |
| emoji | TEXT | |
| sort_order | INT | |
| is_active | BOOLEAN | |
RLS: Public read. Auth write. **Seed:** 6 actividades.

---

## Dominio B: Classrooms & Staff (2 tablas)

### classrooms
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| name | TEXT | "Salón Abeja 1" |
| program_slug | TEXT FK programs(slug) | |
| session | TEXT | CHECK: 'morning','afternoon' |
| capacity | INT | Default 12 |
| room_number | TEXT | |
| is_active | BOOLEAN | |
RLS: Public read. Auth write.

### classroom_assignments
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| classroom_id | UUID FK classrooms | CASCADE |
| team_member_id | UUID FK team_members | CASCADE |
| role | TEXT | CHECK: 'lead','assistant' |
| school_year | TEXT | '2026-2027' |
| is_active | BOOLEAN | |
UNIQUE(classroom_id, team_member_id, school_year). RLS: Auth only.

---

## Dominio C: Families & Children (2 tablas)

### families
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| auth_id | UUID FK auth.users | Supabase Auth link |
| parent1_name | TEXT | |
| parent1_email, parent1_phone, parent1_cedula | TEXT | |
| parent2_name, parent2_email, parent2_phone, parent2_cedula | TEXT | Nullable |
| address | TEXT | |
| emergency_contact_name, _phone, _relation | TEXT | |
| preferred_language | TEXT | CHECK: 'es','en' |
| notes | TEXT | |
| is_active | BOOLEAN | |
RLS: Own family read. Auth all.

### children
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| family_id | UUID FK families | CASCADE |
| first_name, last_name | TEXT | |
| date_of_birth | DATE | |
| gender | TEXT | CHECK: 'M','F','other' |
| photo_url | TEXT | |
| program_slug | TEXT FK programs | |
| classroom_id | UUID FK classrooms | |
| session | TEXT | CHECK: 'morning','afternoon' |
| blood_type | TEXT | |
| allergies, medical_conditions, medications | TEXT | |
| pediatrician_name, pediatrician_phone | TEXT | |
| vaccination_up_to_date | BOOLEAN | |
| enrollment_status | TEXT | CHECK: 'inquiry','applied','waitlisted','accepted','enrolled','active','withdrawn','graduated' |
| enrollment_date, withdrawal_date | DATE | |
| notes | TEXT | |
| is_active | BOOLEAN | |
RLS: Own family read. Auth all.

---

## Dominio D: Enrollment Pipeline (3 tablas)

### enrollment_applications
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| child_id | UUID FK children | Nullable (pre-enrollment) |
| family_id | UUID FK families | Nullable |
| parent_name, parent_email, parent_phone | TEXT | For public apps |
| child_name | TEXT | |
| child_dob | DATE | |
| preferred_program, preferred_session | TEXT | |
| preferred_start_date | DATE | |
| how_heard_about_us | TEXT | |
| status | TEXT | CHECK: 'submitted','reviewing','tour_scheduled','tour_completed','documents_pending','documents_received','accepted','waitlisted','enrolled','rejected','withdrawn' |
| admin_notes | TEXT | |
| reviewed_by | UUID FK team_members | |
| reviewed_at | TIMESTAMPTZ | |
RLS: Public INSERT. Auth all.

### enrollment_documents
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| application_id | UUID FK enrollment_applications | CASCADE |
| document_type | TEXT | CHECK: 'birth_certificate','parent_id','vaccination_card','medical_report','photos','previous_school_report','other' |
| file_url | TEXT | Supabase Storage |
| file_name | TEXT | |
| status | TEXT | CHECK: 'pending','approved','rejected' |
| notes | TEXT | |
RLS: Auth only.

### waitlist
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| application_id | UUID FK enrollment_applications | CASCADE |
| child_id | UUID FK children | |
| program_slug | TEXT FK programs | |
| preferred_session | TEXT | |
| position | INT | |
| priority | TEXT | CHECK: 'sibling','staff','normal' |
| is_active | BOOLEAN | |
RLS: Auth only.

---

## Dominio E: Daily Operations (2 tablas)

### attendance
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| child_id | UUID FK children | CASCADE |
| date | DATE | UNIQUE con child_id |
| check_in, check_out | TIMESTAMPTZ | |
| checked_in_by, checked_out_by | UUID FK team_members | |
| status | TEXT | CHECK: 'present','absent','late','excused','sick' |
| notes | TEXT | |
RLS: Own family read. Auth all.

### daily_reports
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| child_id | UUID FK children | CASCADE |
| date | DATE | |
| teacher_id | UUID FK team_members | |
| activities_summary | TEXT | |
| breakfast, lunch, snack | TEXT | CHECK: 'all','some','none','n/a' |
| nap_start, nap_end | TIMESTAMPTZ | |
| mood | TEXT | CHECK: 'happy','calm','tired','fussy','sick' |
| highlights, concerns | TEXT | |
| parent_notes | TEXT | Visible to parent |
| internal_notes | TEXT | Admin only |
| photo_urls | TEXT[] | |
| is_published | BOOLEAN | |
RLS: Own family read (published only). Auth all.

---

## Dominio F: Communication (3 tablas)

### conversations
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| family_id | UUID FK families | CASCADE |
| child_id | UUID FK children | Nullable |
| subject | TEXT | |
| is_archived | BOOLEAN | |
RLS: Own family read + insert. Auth all.

### messages
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| conversation_id | UUID FK conversations | CASCADE |
| sender_type | TEXT | CHECK: 'parent','teacher','admin' |
| sender_id | UUID | auth.uid for parents, team_members.id for staff |
| body | TEXT | |
| attachments | TEXT[] | |
| is_read | BOOLEAN | |
RLS: Own family conversation read + insert. Auth all.

### announcements
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| title_es, title_en | TEXT | |
| body_es, body_en | TEXT | |
| audience | TEXT | CHECK: 'all','parents','staff','program' |
| target_program | TEXT FK programs(slug) | |
| priority | TEXT | CHECK: 'normal','important','urgent' |
| author_id | UUID FK team_members | |
| is_published | BOOLEAN | |
| published_at, expires_at | TIMESTAMPTZ | |
RLS: Public read (published). Auth all.

---

## Dominio G: Events & Calendar (4 tablas)

### events
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| title_es, title_en | TEXT | |
| description_es, description_en | TEXT | |
| event_type | TEXT | CHECK: 'open_house','workshop','celebration','field_trip','parent_meeting','fundraiser','other' |
| start_datetime, end_datetime | TIMESTAMPTZ | |
| location | TEXT | |
| cover_image_url | TEXT | |
| max_attendees | INT | |
| requires_registration | BOOLEAN | |
| registration_deadline | TIMESTAMPTZ | |
| fee | NUMERIC(10,2) | |
| audience | TEXT | CHECK: 'all','parents','staff','public' |
| is_published | BOOLEAN | |
RLS: Public read (published). Auth all.

### event_registrations
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| event_id | UUID FK events | CASCADE |
| family_id | UUID FK families | Nullable |
| attendee_name, _email, _phone | TEXT | For public |
| num_attendees | INT | |
| status | TEXT | CHECK: 'registered','confirmed','cancelled','attended' |
| payment_id | UUID FK payments | |
RLS: Public INSERT. Auth all.

### tours
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| inquiry_id | UUID FK inquiries | Nullable |
| application_id | UUID FK enrollment_applications | Nullable |
| family_id | UUID FK families | Nullable |
| parent_name, parent_email, parent_phone | TEXT | |
| child_age | TEXT | |
| scheduled_date | DATE | |
| scheduled_time | TIME | |
| guide_id | UUID FK team_members | |
| status | TEXT | CHECK: 'scheduled','confirmed','completed','no_show','cancelled' |
| feedback, notes | TEXT | |
RLS: Public INSERT. Auth all.

### school_calendar
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| title_es, title_en | TEXT | |
| date | DATE | |
| end_date | DATE | For multi-day |
| calendar_type | TEXT | CHECK: 'holiday','no_school','half_day','event','deadline','term_start','term_end' |
| school_year | TEXT | '2026-2027' |
| notes | TEXT | |
RLS: Public read. Auth write.

---

## Dominio H: Payments & Billing (2 tablas)

### invoices
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| invoice_number | TEXT UNIQUE | |
| family_id | UUID FK families | |
| child_id | UUID FK children | |
| invoice_type | TEXT | CHECK: 'tuition','enrollment_fee','event_fee','store_order','extracurricular','late_fee','other' |
| description | TEXT | |
| amount, tax, total | NUMERIC(10,2) | |
| due_date | DATE | |
| status | TEXT | CHECK: 'pending','sent','partial','paid','overdue','cancelled','refunded' |
| billing_period_start, billing_period_end | DATE | |
| notes | TEXT | |
RLS: Own family read. Auth all.

### payments
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| invoice_id | UUID FK invoices | Nullable |
| family_id | UUID FK families | |
| amount | NUMERIC(10,2) | |
| payment_method | TEXT | CHECK: 'yappy','nequi','ach','credit_card','debit_card','cash','bank_transfer','other' |
| reference_number | TEXT | Transaction ID |
| payment_date | TIMESTAMPTZ | |
| status | TEXT | CHECK: 'pending','completed','failed','refunded' |
| receipt_url | TEXT | |
| notes | TEXT | |
| recorded_by | UUID FK team_members | |
RLS: Own family read. Auth all.

---

## Dominio I: Store (4 tablas)

### product_categories
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| name_es, name_en | TEXT | |
| slug | TEXT UNIQUE | 'uniforms','supplies','lunch' |
| sort_order | INT | |
| is_active | BOOLEAN | |
RLS: Public read. Auth write.

### products
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| category_id | UUID FK product_categories | |
| name_es, name_en | TEXT | |
| description_es, description_en | TEXT | |
| price | NUMERIC(10,2) | |
| image_url | TEXT | |
| sizes | TEXT[] | ['2T','3T','4T','5','6'] |
| stock | INT | NULL = unlimited |
| is_active | BOOLEAN | |
| sort_order | INT | |
RLS: Public read (active). Auth all.

### orders
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| order_number | TEXT UNIQUE | |
| family_id | UUID FK families | |
| status | TEXT | CHECK: 'pending','confirmed','preparing','ready','delivered','cancelled' |
| subtotal, tax, total | NUMERIC(10,2) | |
| payment_id | UUID FK payments | |
| delivery_method | TEXT | CHECK: 'pickup','classroom' |
| notes | TEXT | |
RLS: Own family read + insert. Auth all.

### order_items
| Columna | Tipo | Notas |
|---------|------|-------|
| id | UUID PK | |
| order_id | UUID FK orders | CASCADE |
| product_id | UUID FK products | |
| quantity | INT | |
| size | TEXT | For uniforms |
| unit_price, total | NUMERIC(10,2) | |
RLS: Own family read. Auth all.

---

## Storage Buckets

| Bucket | Propósito | Public |
|--------|-----------|--------|
| images | Fotos de equipo, galería, blog, productos, daily reports | Sí |

Policies: public read, auth insert/update/delete.
