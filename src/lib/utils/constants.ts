// ─── Design tokens ───────────────────────────────────────────
export const colors = {
  honey: '#F5A623',
  honeyDark: '#D4901E',
  cream: '#FDF6EA',
  warmWhite: '#FFFBF4',
  blue: '#2E86DE',
  pink: '#F2A0B7',
  lavender: '#D4B8E8',
  green: '#6BBF7B',
  dark: '#222018',
  text: '#3D3A33',
  textSoft: '#6E6960',
  sand: '#F0E9DC',
} as const;

// Colores por programa (slug → color hex)
export const programColors: Record<string, string> = {
  'baby-bees': colors.pink,
  'little-bees': colors.honey,
  'busy-bees': colors.blue,
  'queen-bees': '#9B59B6',
};

// ─── Site config ─────────────────────────────────────────────
export const siteConfig = {
  name: 'Busy Bees Learning Center',
  tagline: 'Shaping hearts, minds, and confidence from the start',
  phone: '+507 6727-6989',
  email: 'hola@busybees.pa',
  whatsappNumber: '50767276989',
  whatsappMessage: 'Hola, me interesa saber más sobre BusyBees 🐝',
  instagram: '@busybees.pa',
  instagramUrl: 'https://instagram.com/busybees.pa',
  location: 'Ciudad de Panamá, Panamá',
  openingYear: 2026,
  maxStudents: 120,
  classrooms: 10,
  studentsPerClassroom: '10–12',
  teachersPerClassroom: 2,
} as const;

export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

// ─── i18n ────────────────────────────────────────────────────
export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es' as const;

// ─── Rutas protegidas ────────────────────────────────────────
export const protectedRoutes = {
  admin: '/admin',
  portal: '/portal',
} as const;
