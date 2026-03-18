# BusyBees — Sync Log

Bridge between Claude Chat and Claude Code.
Both actors write here. James reads to stay in sync.

---

## 2026-03-17 — Chat: Level 5 database expansion + docs v3

Expanded database from 9 to 31 tables. James decided to build ambitious from day 1 — database ready for parent portal, enrollment pipeline, store, payments, attendance, daily reports, messaging, events, and school calendar.

**New tables added (22):**
- Classrooms: `classrooms`, `classroom_assignments`
- Families: `families` (linked to auth.users), `children`
- Enrollment: `enrollment_applications`, `enrollment_documents`, `waitlist`
- Operations: `attendance`, `daily_reports`
- Communication: `conversations`, `messages`, `announcements`
- Events: `events`, `event_registrations`, `tours`, `school_calendar`
- Payments: `invoices`, `payments`
- Store: `product_categories`, `products`, `orders`, `order_items`

**RLS patterns:**
- Public tables: anyone can read
- Parent tables: families see only their own data (via auth.uid() = families.auth_id)
- Admin tables: only authenticated users (admin/staff)
- Forms (enrollment, tours, events): public INSERT, auth read/write

**Doc updates:**
- SCHEMA.md: all 31 tables documented
- FEATURE_SPEC.md: expanded to cover enrollment system, parent portal, store, events
- BUILD_PLAN.md: 8 phases instead of 6 (added enrollment, parent portal, store phases)
- PROGRESS.md: reflects 31 tables and new phase structure

**Storage bucket `images` created via SQL** with public read + auth write policies.

**Pendiente for James:**
- Create admin user in Supabase Auth (Dashboard → Authentication → Add User)
- Push v3 docs to main
- Connect Vercel when ready

**Pendiente for Claude Code:**
- Start Fase 0 from BUILD_PLAN.md
- Types must cover ALL 31 tables
- Use context7 for API verification

---

## 2026-03-17 — Chat: Documentation overhaul (v2)

Major rewrite. CLAUDE.md trimmed to ~65 lines. 7 path-scoped rules created. 3 MCPs configured. Design system defined.

---

## 2026-03-09 — Chat: Proyecto creado

- Supabase project created. 9 initial tables. Seed data: 4 programs, 6 extracurriculars, 3 settings, 1 testimonial.

---
