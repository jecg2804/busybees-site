# BusyBees Design System — Premium Playful

This is the MOST IMPORTANT rule file. Read it FULLY before writing ANY UI code.
Every component, page, and section MUST follow this spec exactly.

---

## Design Philosophy

BusyBees is a **premium bilingual preschool**, not a SaaS startup. The website must feel
warm, personal, and editorial — like a beautifully designed magazine about childhood, not
a tech product landing page.

**Tone:** Organic/natural + playful/toy-like + editorial/magazine.
**Differentiator:** What makes this UNFORGETTABLE is the warmth. Every parent should feel
"these are real people who love children" within 3 seconds of landing.

**Reference sites:** playfultbtm.com (warmth), wonderlearningpty.com (structure).
**Brand materials:** Canva brochures use honeycomb patterns, organic blob shapes, rounded
photo frames, and blue/pink accent splashes over a golden/honey base.

---

## Color Palette (Tailwind v4 @theme tokens)

Define ALL colors in `app/globals.css` inside `@theme {}`:

```css
@theme {
  --color-honey: #F5A623;
  --color-honey-dark: #D4901E;
  --color-cream: #FDF6EA;
  --color-warm: #FFFBF4;
  --color-blue: #2E86DE;
  --color-blue-light: #EBF5FF;
  --color-pink: #F2A0B7;
  --color-pink-light: #FDF0F4;
  --color-lavender: #D4B8E8;
  --color-green: #6BBF7B;
  --color-dark: #222018;
  --color-text: #3D3A33;
  --color-text-soft: #6E6960;
  --color-text-faint: #A09888;
  --color-sand: #F0E9DC;
  --color-line: #E5DDD0;
}
```

**Usage rules:**
- `warm` = page background. `cream` = alternating section bg. NEVER white (#fff) as bg.
- `honey` = primary CTAs, accent underlines, borders, active states.
- `dark` = headings only. `text` = body. `text-soft` = secondary. `text-faint` = labels.
- Each program has its own color: baby-bees=#F2A0B7, little-bees=#F5A623, busy-bees=#2E86DE, queen-bees=#9B59B6.
- NEVER use gray-50/100/200 Tailwind defaults. Use cream/sand/warm instead.

---

## Typography

```css
@theme {
  --font-display: "Fredoka", sans-serif;
  --font-body: "DM Sans", sans-serif;
}
```

Load via `next/font/google` in root layout:
```ts
const fredoka = Fredoka({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-body' })
```

**Scale:**
- H1: Fredoka 44px mobile / 56px desktop, weight 600, color-dark, leading-tight
- H2: Fredoka 32px mobile / 40px desktop, weight 600
- H3: Fredoka 24px mobile / 28px desktop, weight 500
- Body: DM Sans 16px / 18px, weight 400, color-text, leading-relaxed
- Small: DM Sans 14px, color-text-soft
- Caption: DM Sans 12px, color-text-faint, uppercase tracking-wider

**NEVER** use Inter, Roboto, Arial, or system fonts.

---

## Component Library: shadcn/ui

Use shadcn/ui as the base for ALL interactive components (buttons, dialogs, sheets, forms,
tabs, dropdowns). Components are copied into `components/ui/` and fully customizable.

Initialize: `npx shadcn@latest init` (New York style, CSS variables: Yes)
Add components: `npx shadcn@latest add button card dialog sheet tabs form input textarea select`

Override shadcn defaults to match BusyBees warmth:
- Default radius: 12px (`rounded-xl`), NOT 6px
- Primary color: honey (#F5A623), NOT blue/purple
- Focus rings: honey with opacity, NOT blue
- Shadows: warm-tinted (`shadow-[0_4px_20px_rgba(34,32,24,0.08)]`), NOT cool gray

---

## Animation Library: Motion (ex Framer Motion)

Install: `npm install motion`
Import: `import { motion } from "motion/react"`

**ALL visible sections must animate on scroll** using `whileInView`:

```tsx
"use client"
import { motion } from "motion/react"

export function FadeInUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

**Animation rules:**
- EVERY section wraps in `<FadeInUp>`. Stagger children with `delay={0.1}`, `delay={0.2}`, etc.
- Use `type: "spring"` with `stiffness: 100, damping: 15` for playful bouncy elements (buttons hover, cards).
- Photos: fade in with slight scale (`initial={{ opacity: 0, scale: 0.95 }}`).
- NEVER animate more than translateY 24px. Subtle, not dramatic.
- NEVER use CSS `@keyframes` for scroll reveals. Use Motion exclusively.
- `"use client"` is required. Wrap Server Component content in thin client animation wrappers.

**Smooth scrolling:** Install `npm install lenis`. Wrap layout in `<ReactLenis root>`.

---

## Layout Architecture

**Max widths:**
- Content: `max-w-6xl` (1152px)
- Prose text: `max-w-2xl` (672px)
- Full-bleed sections: `w-full` with inner container

**Section padding:** `py-16 md:py-24` (64px mobile, 96px desktop).
**Section alternation:** cream bg → warm bg → cream bg. NEVER two same-bg sections in a row.

**Photo-text sections (the primary layout pattern):**
```
[Photo 55%] [Text 45%]     ← odd sections
[Text 45%]  [Photo 55%]    ← even sections (flipped)
```
On mobile: stack vertically, photo first.

**Grid-breaking elements:**
- Photos can bleed slightly past their column with negative margin
- Decorative SVG blobs peek out from behind photos (positioned absolute, z-behind)
- Section dividers use SVG wave shapes, NOT straight lines

---

## Photo Treatment

**Real photos available:**
- `logo.jpeg` → Header (44px height desktop, 36px mobile) + Footer
- `Founders.jpeg` → Nosotros page, Equipo page (professional shot)
- `founder_bubbles.jpeg` → Hero section (playful, warm)

**Photo styling:**
- ALL photos: `rounded-2xl` (16px radius) or `rounded-3xl` (24px). NEVER sharp rectangles.
- Optional: subtle honey border on one side (`border-l-4 border-honey`)
- Optional: organic clip-path or squircle mask for variety
- Photos inside a soft shadow: `shadow-[0_8px_30px_rgba(34,32,24,0.1)]`

**Placeholders** (for pages without real photos yet):
- Background: `bg-cream`
- Border: `border-2 border-dashed border-sand`
- Center: Camera icon (Lucide `Camera`) in `text-text-faint` + caption below
- NEVER gray rectangles. NEVER emoji as placeholders.

---

## Decorative Elements (from BusyBees brand)

The brand uses these visual elements from Canva materials. Implement as SVG components in `components/svg/`:

### 1. Honeycomb Pattern
Subtle hex grid at 3-5% opacity as background decoration on cream sections.
Place in `components/svg/HoneycombPattern.tsx`. Use as positioned absolute behind content.

### 2. Organic Blob Shapes
Soft amorphous shapes in lavender (#D4B8E8 at 10-15% opacity) and pink (#F2A0B7 at 10% opacity).
Position behind photos or in corners of sections. Use CSS animation for slow morphing:
```css
@theme {
  --animate-blob: blob 8s ease-in-out infinite;
  @keyframes blob {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  }
}
```

### 3. Wave Section Dividers
SVG waves between sections instead of straight lines. Generate from getwaves.io.
Use cream-to-warm and warm-to-cream color transitions.

### 4. Blue Accent Splashes
Small decorative blue (#2E86DE at 15% opacity) organic shapes near section transitions.
Sparingly — max 2-3 per page.

**Generation tools:** Use haikei.app and fffuel.co to generate SVGs. Convert to React with SVGR.
SVGs go in `components/svg/` as React components.

---

## Gallery & Carousel Libraries

**Photo carousel:** Embla Carousel (`embla-carousel-react` + `embla-carousel-autoplay`)
- Hook-based, no default styles (perfect for Tailwind)
- Use for testimonial sliders, photo strips, program showcases

**Masonry grid:** `react-masonry-css` for gallery page
- Asymmetric, Pinterest-style layout
- Columns: 1 mobile, 2 tablet, 3 desktop

**Lightbox:** `yet-another-react-lightbox` (YARL) for fullscreen photo viewing
- Zoom, thumbnails, swipe gestures

---

## Specific Component Patterns

### Header (64px sticky)
- Logo image left (44px height)
- Nav links center: Inicio, Nosotros, Programas, Equipo, Galería, Admisiones, Blog, Contacto
- Right: LangToggle (ES/EN) + "Portal" link (when parent portal is built)
- Mobile: hamburger → Sheet slide-in from right
- Background: warm with subtle backdrop-blur on scroll

### Hero
- Two-column: text 55% left, photo 45% right
- Photo: `founder_bubbles.jpeg` with rounded-3xl + decorative blob behind
- Small text above H1: "Preescolar bilingüe en Ciudad de Panamá · Abrimos en 2026" in honey
- H1: Fredoka 56px, "Donde el juego es el camino."
- Body paragraph: DM Sans 18px, from site_settings.general.hero_description_es
- Tags: "Basado en el juego · Bilingüe · Grupos de 10-12" as small inline items
- CTAs: Primary honey "Agenda un Tour" + Secondary outlined "Conócenos"

### Buttons
- Primary: `bg-honey text-white rounded-xl px-6 py-3 font-medium hover:bg-honey-dark transition-colors`
- Secondary: `border-2 border-dark text-dark rounded-xl px-6 py-3 font-medium hover:bg-dark hover:text-warm transition-colors`
- Ghost: `text-honey hover:underline`
- WhatsApp: Fixed bottom-right FAB, 52px, `bg-[#25D366] text-white rounded-2xl shadow-lg`

### Testimonials
- Single featured quote: 3px honey left border, italic Fredoka 20px, max-w-2xl centered
- Multi: Embla Carousel with auto-advance, fade transition

### Program Cards
- NOT identical card grids. Each program is a photo-text alternating section.
- Program color as accent: top border on photo, colored tag chips
- Age range, description, highlights as flowing text NOT bullet lists

---

## ANTI-PATTERNS — NEVER DO THESE

1. **Card grids** — No 3-column identical cards. Use alternating photo-text editorial.
2. **Gray backgrounds** — Use cream/warm. Gray = corporate = wrong.
3. **Drop shadows everywhere** — Shadows only on photos and floating elements.
4. **Gradient hero banners** — Use warm solid bg + photo.
5. **Badge → Title → Cards pattern** — The SaaS homepage formula. Avoid.
6. **Perfect symmetry** — Asymmetric layouts feel more organic and editorial.
7. **Emoji as design elements** — Emoji in data (program emoji) is fine. Emoji as decoration is not.
8. **Animated counters** — "120+ students!" counting up. Tacky.
9. **Purple gradients** — The default AI aesthetic. Absolutely not.
10. **Inter/Roboto fonts** — See Typography section.
11. **Generic stock photo grids** — Use real photos or cream placeholders.
12. **Bullet point lists on public pages** — Write prose. Lists are for admin.

---

## Package Dependencies Summary

```bash
# Component foundation
npx shadcn@latest init
npx shadcn@latest add button card dialog sheet tabs form input textarea select

# Animation
npm install motion lenis

# Image handling
npm install embla-carousel-react embla-carousel-autoplay
npm install react-masonry-css yet-another-react-lightbox

# Utilities
npm install clsx tailwind-merge react-intersection-observer

# Dev
npm install --save-dev @svgr/webpack
```
