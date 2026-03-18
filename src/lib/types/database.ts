// Tipos TypeScript generados del schema de Supabase (SCHEMA.md)
// 9 tablas — BusyBees Learning Center

// ─── site_settings ───────────────────────────────────────────
export interface SiteSetting {
  id: string;
  key: string; // 'general', 'values', 'capacity'
  value: Record<string, unknown>; // JSONB flexible
  created_at: string;
  updated_at: string;
}

// ─── programs ────────────────────────────────────────────────
export interface Program {
  id: string;
  slug: string;
  name_es: string;
  name_en: string;
  age_range_es: string;
  age_range_en: string;
  description_es: string;
  description_en: string;
  highlights_es: string[];
  highlights_en: string[];
  emoji: string;
  color: string;
  sort_order: number;
  is_active: boolean;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

// ─── team_members ────────────────────────────────────────────
export interface TeamMember {
  id: string;
  name: string;
  role_es: string;
  role_en: string;
  bio_es: string | null;
  bio_en: string | null;
  photo_url: string | null;
  is_founder: boolean;
  program_slug: string | null; // FK → programs.slug
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ─── testimonials ────────────────────────────────────────────
export interface Testimonial {
  id: string;
  author_name: string;
  author_role_es: string;
  author_role_en: string;
  quote_es: string;
  quote_en: string;
  photo_url: string | null;
  sort_order: number;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ─── blog_posts ──────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title_es: string;
  title_en: string;
  excerpt_es: string | null;
  excerpt_en: string | null;
  content_es: string;
  content_en: string;
  category: string;
  cover_image_url: string | null;
  author_id: string | null; // FK → team_members.id
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

// ─── gallery_images ──────────────────────────────────────────
export interface GalleryImage {
  id: string;
  image_url: string;
  caption_es: string | null;
  caption_en: string | null;
  category: string; // 'general', 'salones', 'actividades', 'eventos'
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ─── inquiries ───────────────────────────────────────────────
export type InquiryType = 'contact' | 'tour' | 'enrollment';
export type InquiryStatus = 'new' | 'contacted' | 'scheduled' | 'enrolled' | 'archived';

export interface Inquiry {
  id: string;
  type: InquiryType;
  parent_name: string;
  email: string | null;
  phone: string | null;
  child_name: string | null;
  child_age: string | null;
  message: string | null;
  preferred_program: string | null;
  source: string; // 'website', 'instagram', 'referral'
  status: InquiryStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

// ─── faqs ────────────────────────────────────────────────────
export interface FAQ {
  id: string;
  question_es: string;
  question_en: string;
  answer_es: string;
  answer_en: string;
  category: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ─── extracurriculars ────────────────────────────────────────
export interface Extracurricular {
  id: string;
  name_es: string;
  name_en: string;
  description_es: string | null;
  description_en: string | null;
  emoji: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ─── Helper: contenido bilingüe ──────────────────────────────
export type Locale = 'es' | 'en';

// Sufijos bilingües comunes
export type BilingualField<T extends string> = `${T}_es` | `${T}_en`;

// Para insertar en inquiries (campos que el usuario llena)
export interface InquiryInsert {
  type: InquiryType;
  parent_name: string;
  email?: string;
  phone?: string;
  child_name?: string;
  child_age?: string;
  message?: string;
  preferred_program?: string;
  source?: string;
}
