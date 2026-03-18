import type { Locale } from '@/lib/types/database';

/**
 * Formatea fecha en formato legible según locale.
 * ES: "15 de marzo de 2026"
 * EN: "March 15, 2026"
 */
export function formatDate(date: string | Date, locale: Locale = 'es'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale === 'es' ? 'es-PA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formatea moneda en USD (estándar en Panamá: balboa = USD).
 */
export function formatCurrency(amount: number, locale: Locale = 'es'): string {
  return new Intl.NumberFormat(locale === 'es' ? 'es-PA' : 'en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

/**
 * Formatea número de teléfono panameño.
 * Input: "+507 6727-6989" o "50767276989"
 * Output: "+507 6727-6989"
 */
export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('507')) {
    return `+507 ${digits.slice(3, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 8) {
    return `+507 ${digits.slice(0, 4)}-${digits.slice(4)}`;
  }
  return phone;
}

/**
 * Selecciona el campo bilingüe correcto según locale.
 * Uso: t(program, 'name', locale) → program.name_es o program.name_en
 */
export function t<T extends Record<string, unknown>>(
  item: T,
  field: string,
  locale: Locale
): string {
  const key = `${field}_${locale}` as keyof T;
  return (item[key] as string) ?? '';
}

/**
 * Genera slug URL-friendly desde texto.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quitar acentos
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
