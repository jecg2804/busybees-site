# The definitive UI/UX toolkit for premium Next.js 15 sites with Claude Code

**The optimal stack for a "premium playful" preschool website combines shadcn/ui as the component foundation, Motion (v12) for warm animations, Aceternity UI and Magic UI for visual impact, and a v0.dev → Claude Code workflow for AI-assisted development.** Every library below is confirmed compatible with Next.js 15 App Router, React 19, and Tailwind CSS v4 as of early 2026. The critical insight: Tailwind v4's CSS-first configuration, OKLCH color system, and built-in container queries make organic editorial layouts dramatically easier than v3 — but several popular libraries haven't caught up yet, so choosing the right ones matters.

---

## Component libraries ranked for visual distinction and Tailwind v4 compatibility

**shadcn/ui is the non-negotiable foundation.** It's not an npm dependency — components are copied into your codebase, giving full ownership for custom warm/organic styling. It runs on Radix UI primitives (accessibility baked in), fully supports Tailwind v4 (OKLCH colors, `data-slot` attributes), and the CLI works seamlessly with Next.js 15 App Router. The March 2025 update replaced `tailwindcss-animate` with `tw-animate-css` for v4 compatibility.

```bash
npx create-next-app@latest preschool --ts --tailwind --eslint --app
cd preschool
npx shadcn@latest init   # Choose: New York style, CSS variables: Yes
npx shadcn@latest add button card dialog sheet tabs
```

For visual impact beyond shadcn's clean defaults, **Aceternity UI produces the most visually striking results** of any library tested. Its 200+ components include aurora backgrounds, sparkle effects, parallax scroll, lamp glow headers, and 3D card interactions — all built on Motion + Tailwind v4. Components are copy-paste with full source ownership. Install the dependencies (`npm install motion clsx tailwind-merge`) and copy component code directly from ui.aceternity.com.

**Magic UI (magicui.design) is the best complement** for subtle animation components. Its 150+ components integrate via the shadcn CLI (`pnpm dlx shadcn@latest add @magicui/marquee`), making them drop-in additions alongside your existing shadcn components. Marquees for scrolling photo strips, blur-fade entry animations, and confetti effects map perfectly to playful preschool aesthetics. The free tier covers most needs; the **$199 lifetime pro** tier adds 50+ premium blocks.

**Motion Primitives** (motion-primitives.com) rounds out the animation component layer with 30+ animated primitives installable via `npx motion-primitives@latest add animated-background` or the shadcn CLI directly.

Libraries to **avoid** for this stack:

- **Park UI** — The Tailwind plugin (`@park-ui/tailwind-plugin`) hasn't been updated in two years; incompatible with v4's CSS-first configuration
- **Radix Themes** — Its closed CSS system fights against Tailwind customization. Use Radix Primitives via shadcn instead
- **DaisyUI v5** — Tailwind v4 compatible, but semantic class defaults make custom warm/organic styling harder than pure utility classes
- **Mantine** — Excellent standalone, but its PostCSS preset conflicts with Tailwind's base styles
- **HeroUI (NextUI)** — v2.8.0 added Tailwind v4 support, v3 is still beta. Viable but the ecosystem is smaller than shadcn's

| Library | TW v4 | React 19 | Visual Impact | Custom Theming | Recommendation |
|---------|-------|----------|---------------|----------------|----------------|
| **shadcn/ui** | ✅ Full | ✅ | Moderate (customizable) | Excellent | ✅ Foundation layer |
| **Aceternity UI** | ✅ Full | ✅ | Exceptional | Good | ✅ Hero/wow moments |
| **Magic UI** | ✅ Full | ✅ | High | Good | ✅ Animation components |
| **Headless UI** v2.2 | ✅ Full | ✅ | None (headless) | N/A | ✅ If not using shadcn |
| **Catalyst** ($299) | ✅ Full | ✅ | High | Good | Optional — app UI focus |
| **Motion Primitives** | ✅ Full | ✅ | High | Good | ✅ Supplementary |
| Park UI | ⚠️ Stale | ✅ | Moderate | Limited | ❌ Skip |
| Radix Themes | ⚠️ Friction | ✅ | Moderate | Limited | ❌ Skip |

---

## Animation: Motion v12 wins, and GSAP is now completely free

**Motion (the Framer Motion rebrand) is the clear primary choice.** The package is `motion` on npm (v12.37.0), imported as `import { motion } from "motion/react"`. The legacy `framer-motion` package (v12.36.0) maintains an identical API and is still published. Both fully support React 19 and Next.js 15 — the key requirement is v12.x+. Bundle size starts at **2.3 KB** with `LazyMotion` + `domAnimation`, expanding to ~34 KB fully loaded.

Motion's `whileInView` is the single most useful feature for a preschool site — declarative scroll-triggered animations with zero configuration:

```tsx
"use client"
import { motion } from "motion/react"

export function WarmFadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

For parallax-lite effects, Motion's built-in `useScroll` + `useTransform` eliminates the need for `react-scroll-parallax` as a separate dependency. Staggered list reveals use the `variants` API with `staggerChildren`. Spring physics (`type: "spring"`) create organic, bouncy movement that feels warm rather than mechanical.

**The biggest animation news: GSAP is now 100% free**, including all formerly paid Club plugins. Webflow's acquisition in April 2025 made **SplitText** (letter/word/line text reveals), **MorphSVG** (SVG shape morphing), **DrawSVG** (path drawing), and **ScrollSmoother** available at zero cost for commercial use. Install with `npm install gsap @gsap/react`. The `useGSAP()` hook handles SSR correctly in Next.js 15.

**For smooth scrolling**, Lenis (`npm install lenis`, import `ReactLenis` from `lenis/react`) adds buttery-smooth scroll behavior as a layout wrapper. It integrates with both Motion and GSAP ScrollTrigger.

**Libraries to skip:** React Spring has **no React 19 support** (peer deps stuck at React 18). AOS hasn't been updated since 2019 — use Motion's `whileInView` or `react-intersection-observer` instead.

All animation libraries require `"use client"` in Next.js 15 App Router. They cannot run in React Server Components. Structure your app with thin client wrappers around server-rendered content.

### The essential animation packages

```bash
# Primary animation engine
npm install motion

# Viewport detection (lightweight CSS-only fade triggers)
npm install react-intersection-observer

# Smooth scrolling (optional polish)
npm install lenis

# GSAP — only if you need SplitText or SVG morphing
npm install gsap @gsap/react

# Animated illustrations
npm install lottie-react
```

---

## SVG tools that actually produce organic, warm shapes

**Haikei (haikei.app) is the single best tool** for this aesthetic. It offers 15+ generators — blob scenes, layered waves, stacked waves, circle scatter, blurry gradients, symbol scatter — all with customizable colors to match your warm palette. Output is SVG that pastes directly into JSX. Completely free, no signup.

**Fffuel (fffuel.co) complements Haikei** with 20+ specialized generators. Its **ssshape** tool lets you draw custom control points and generates smooth organic curves around them — ideal for bespoke decorative shapes. **llline** creates hand-drawn-style strokes that feel playful. All output is free, copy-pasteable SVG.

For the preschool site specifically:

- **Squircley (squircley.app)** generates squircle shapes — the soft square-circle hybrids Apple uses for iOS icons. These make **perfect photo masks** that feel warmer than standard `border-radius` rectangles
- **Get Waves (getwaves.io)** produces multi-layer wave section dividers. Use between content sections for organic transitions
- **Hero Patterns (heropatterns.com)** provides 100+ repeatable SVG background patterns. Apply at **5–10% opacity** over warm backgrounds for subtle texture (polka dots, topography lines)
- **Lottie (lottie-react)** renders After Effects animations as lightweight JSON. LottieFiles.com has thousands of free playful illustrations — children, animals, nature scenes — that bring warmth without custom illustration budgets

Convert all generated SVGs to React components with **SVGR** (`npm install --save-dev @svgr/webpack`). Configure in next.config.js to import `.svg` files directly as components:

```js
// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
```

For **animated morphing blobs** in CSS (zero JS), define custom keyframes in your Tailwind v4 theme:

```css
@theme {
  --animate-blob: blob 7s infinite;
  @keyframes blob {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  }
}
```

---

## Image handling: plaiceholder is dead, use sharp directly

The most important update: **plaiceholder was archived on January 28, 2025** and is no longer maintained. The recommended approach is using `sharp` directly — which Next.js already bundles internally:

```typescript
// lib/blur.ts
import sharp from 'sharp';

export async function getBlurDataURL(imagePath: string): Promise<string> {
  const response = await fetch(imagePath);
  const buffer = Buffer.from(await response.arrayBuffer());
  const resized = await sharp(buffer).resize(20).toBuffer();
  return `data:image/png;base64,${resized.toString('base64')}`;
}
```

For **static images** (local files), Next.js 15 auto-generates blur placeholders on import — just use `placeholder="blur"`:

```tsx
import heroPhoto from '@/public/images/hero.jpg';
<Image src={heroPhoto} alt="Children playing" placeholder="blur" priority sizes="100vw" />
```

**Art direction** (different crops for mobile/desktop) uses the `getImageProps` helper since `next/image` doesn't support `<picture>` directly:

```tsx
import { getImageProps } from 'next/image';

const { props: desktop } = getImageProps({ src: '/hero-wide.jpg', width: 1920, height: 800, alt: 'Hero' });
const { props: mobile } = getImageProps({ src: '/hero-tall.jpg', width: 750, height: 1000, alt: 'Hero' });

<picture>
  <source media="(min-width: 768px)" srcSet={desktop.srcSet} />
  <img {...mobile} className="w-full h-auto" />
</picture>
```

### Gallery, carousel, and lightbox libraries

| Library | Package | Size | React 19 | Best For |
|---------|---------|------|----------|----------|
| **Embla Carousel** | `embla-carousel-react` v8.6.x | ~6KB | ✅ | Photo sliders, autoplay, loop |
| **react-masonry-css** | `react-masonry-css` v1.0.16 | Tiny | ✅ | Masonry photo grids |
| **YARL** | `yet-another-react-lightbox` v3.x | ~15KB | ✅ | Fullscreen viewing, zoom, thumbnails |
| **Keen Slider** | `keen-slider` v6.x | ~5KB | ✅ | Touch-optimized sliders |
| **Swiper** | `swiper` v11.x | ~30KB | ✅ | Feature-rich carousels, 3D effects |

**Embla Carousel is the top recommendation** — hook-based API, no default styles to fight (perfect for Tailwind), loop + autoplay via plugins, and only 6KB gzipped. The full image stack install:

```bash
npm install embla-carousel-react embla-carousel-autoplay react-masonry-css yet-another-react-lightbox
npm install --save-dev @svgr/webpack
```

---

## Tailwind CSS v4 features that transform editorial layouts

Tailwind v4 (released January 2025, now at v4.2) introduced features that are particularly powerful for organic, editorial design. The **CSS-first configuration** replaces `tailwind.config.js` entirely:

```css
/* app/globals.css */
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  /* Warm organic palette in OKLCH for wider gamut */
  --color-cream: oklch(0.97 0.02 85);
  --color-butter: oklch(0.94 0.06 95);
  --color-peach: oklch(0.88 0.08 55);
  --color-coral: oklch(0.75 0.14 35);
  --color-sage: oklch(0.78 0.06 150);
  --color-forest: oklch(0.52 0.10 155);
  --color-bark: oklch(0.45 0.06 60);

  /* Typography */
  --font-display: "Fraunces", serif;
  --font-body: "DM Sans", sans-serif;
  --font-playful: "Baloo 2", cursive;

  /* Warm shadows — stacking up to 4 layers */
  --shadow-warm: 0 4px 20px oklch(0.45 0.06 60 / 0.08);
  --shadow-warm-lg: 0 10px 40px oklch(0.45 0.06 60 / 0.12);

  /* Playful easing curves */
  --ease-playful: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-gentle: cubic-bezier(0.4, 0, 0.2, 1);
}
```

All `@theme` tokens become CSS custom properties on `:root`, enabling runtime theme switching without rebuilds. The key v4 features for this project:

**Container queries** are built-in with no plugin. Photo-driven editorial cards adapt based on their container width, not the viewport — critical for cards that appear in different layout contexts:

```html
<div class="@container">
  <div class="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 gap-6">
    <!-- Cards adapt to container, not viewport -->
  </div>
</div>
```

**3D transform utilities** (`rotate-x-*`, `rotate-y-*`, `perspective-distant`, `transform-3d`) enable playful card-flip interactions without writing custom CSS. **Expanded gradient APIs** include radial gradients (`bg-radial-*`), conic gradients (`bg-conic-*`), and OKLCH color interpolation for vivid, organic gradient backgrounds. **Inset shadow utilities** (`inset-shadow-*`, `inset-ring-*`) stack up to four shadow layers per element — ideal for paper-texture and depth effects. **Dynamic spacing** accepts any numeric value (`mt-17`, `w-29`, `gap-13`) without configuration.

The `@starting-style` variant (`starting:`) enables CSS-only entry animations for popovers and dialogs, though browser support is still maturing (Chrome 117+, Safari 17.5+, Firefox 129+). For production scroll animations, Motion's `whileInView` remains more reliable.

---

## v0.dev is best for prototyping sections, not full sites

**v0.dev excels at generating individual React + Tailwind components** that drop into Next.js 15 projects. It outputs shadcn/ui-based code with Radix primitives, Lucide icons, and proper component structure. The platform now includes Design Mode for visual tweaking, Figma import, and one-click Vercel deployment.

**The critical limitation:** v0 generates Tailwind utility classes that work across v3 and v4 (the class syntax is identical), but its configuration scaffolding may default to v3 patterns. Generate components in v0, then set up your Tailwind v4 `@theme` configuration manually.

The effective workflow is **section-by-section prototyping**. Paste a design brief into every prompt for consistency:

```
Design System: Premium preschool - "Little Explorers Academy"
Colors: cream #FFF8F0 bg, navy #1B2A4A text, coral #E8725C accent, sage #7FB069 secondary
Typography: Playfair Display headings, Nunito body
Style: Warm, Montessori aesthetic. 16px radius, soft shadows, generous whitespace.
Stack: React + Tailwind CSS + shadcn/ui + Lucide icons
```

Then generate each section separately: hero, navigation, program cards, testimonials, gallery, enrollment CTA. Iterate in Design Mode. Export code. Hand to Claude Code for integration.

**Pricing:** Free tier gives 200 monthly credits (~40-200 generations). Premium at **$20/month** provides unlimited generations. Credits burn faster on complex iterations, so prototype individual sections rather than full pages.

**Key gotchas:** v0 outputs all code in a single file (you must split into components), doesn't always default to TypeScript (specify in prompts), and sometimes invents non-existent component props. Treat v0 output as a high-quality starting point, not production code.

---

## How the AI tools compare for frontend design quality

The tools serve fundamentally different roles. **v0.dev produces the highest visual fidelity** for individual UI components — it's trained on shadcn/ui patterns and the Next.js ecosystem. **Claude Code delivers the best code quality and full-stack integration** — it understands your entire codebase, connects Supabase, writes server actions, and handles TypeScript types. **Lovable generates the most complete MVPs** but uses Vite/React (not Next.js), requiring migration. **Bolt.new has the weakest design output** but scaffolds full-stack projects quickly.

| Tool | Design Quality | Next.js 15 | Full-Stack | Best Role | Price |
|------|---------------|-----------|------------|-----------|-------|
| **v0.dev** | ★★★★ | ★★★★★ | ★★ | UI component prototyping | Free/$20/mo |
| **Claude Code** | ★★★★ | ★★★★★ | ★★★★★ | Integration, backend, code quality | $20–200/mo |
| **Cursor** | ★★★½ | ★★★★★ | ★★★★ | IDE-based refinement | Free/$20/mo |
| **Lovable** | ★★★★ | ★★ (Vite) | ★★★★ | Rapid full-stack MVPs | Free/$20/mo |
| **Bolt.new** | ★★★ | ★★★ | ★★★★ | Quick prototypes | Free/$20–200/mo |
| **Windsurf** | ★★★½ | ★★★★ | ★★★★ | Agentic IDE workflows | Free/$15/mo |

**The winning combination is v0 → Claude Code → Cursor/Windsurf.** v0 handles design prototyping where visual output matters most. Claude Code handles project architecture, Supabase integration, TypeScript types, server actions, SEO, accessibility, and the hundreds of integration details that v0 can't touch. Cursor or Windsurf handles the final IDE-based polish, responsive tweaks, and cross-browser fixes.

To avoid generic "AI slop" from any tool, the single most effective technique is **providing exact design specifications in every prompt**: specific hex/OKLCH colors, named fonts (never "a modern sans-serif"), pixel-level spacing values, border-radius numbers, and references to real websites whose aesthetic you admire. Claude Code's `frontend-design` skill explicitly instructs the model to avoid generic purple gradients and Inter font — install it if available.

---

## The complete install command and recommended architecture

```bash
# Project setup
npx create-next-app@latest preschool --ts --tailwind --eslint --app
cd preschool

# Component foundation
npx shadcn@latest init

# Animation engine
npm install motion

# Supporting packages
npm install react-intersection-observer lenis lottie-react
npm install embla-carousel-react embla-carousel-autoplay
npm install react-masonry-css yet-another-react-lightbox
npm install clsx tailwind-merge

# Dev tools
npm install --save-dev @svgr/webpack

# Only if using text splitting or SVG morphing
npm install gsap @gsap/react
```

### Architecture pattern

| Layer | Library | Purpose |
|-------|---------|---------|
| Base components | shadcn/ui + Radix Primitives | Forms, dialogs, navigation, cards, tabs |
| Animation components | Magic UI + Aceternity UI | Marquees, sparkles, aurora, parallax, blur-fade |
| Animation engine | Motion v12 | whileInView, scroll transforms, stagger, springs |
| Smooth scroll | Lenis | Buttery-smooth scroll feel |
| SVG assets | Haikei + Fffuel + SVGR | Organic shapes converted to React components |
| Image carousel | Embla Carousel | Photo sliders with autoplay |
| Image grid | react-masonry-css | Gallery layouts |
| Lightbox | YARL | Fullscreen photo viewing |
| Illustrations | Lottie | Animated playful illustrations |
| Typography | @tailwindcss/typography | Rich prose content styling |

## Conclusion

The most counterintuitive finding is that **the best "premium playful" results come from combining minimalist foundations with selective visual flourishes**, not from choosing the most feature-rich library. shadcn/ui's clean base + a few carefully chosen Aceternity UI effects (aurora backgrounds, sparkles, parallax) creates more visual distinction than loading every animation library available.

Three developments have shifted the landscape significantly: GSAP becoming completely free (including SplitText and MorphSVG) eliminates the cost barrier for professional text animations and SVG morphing. Tailwind v4's CSS-first `@theme` configuration makes warm OKLCH color palettes and custom design tokens trivially easy to define — and they become runtime-switchable CSS custom properties. And plaiceholder's archival means the community has standardized on raw `sharp` for blur placeholders, which is simpler and already bundled with Next.js.

The pragmatic path for this preschool project: generate individual sections in v0.dev with a consistent design brief, install the stack above, have Claude Code wire everything together with Supabase and proper App Router patterns, and deploy to Vercel. Total tooling cost: approximately **$60–120** for one month of v0 Premium + Claude Code Max.