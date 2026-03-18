---
paths: src/components/** src/app/**
---
# Design System — "Premium Playful"

Photo-driven editorial layout with organic decorative accents.
Reference competitors: playfultbtm.com, wonderlearningpty.com
Goal: Match their warmth and authenticity. Beat them in tech, polish, and conversion.

## Colors (defined as CSS custom properties in globals.css via @theme)
```
--color-honey:       #F5A623   /* primary — CTAs, accent underlines, testimonial borders */
--color-honey-dark:  #D4901E   /* hover states */
--color-cream:       #FDF6EA   /* alternating section background */
--color-warm:        #FFFBF4   /* page background */
--color-blue:        #2E86DE   /* links, Busy Bees program accent */
--color-pink:        #F2A0B7   /* Baby Bees program accent */
--color-lavender:    #D4B8E8   /* Queen Bees program accent */
--color-green:       #6BBF7B   /* success, Little Bees extracurriculars */
--color-dark:        #222018   /* headings */
--color-text:        #3D3A33   /* body text */
--color-text-soft:   #6E6960   /* secondary text */
--color-text-faint:  #A09888   /* labels, captions */
--color-sand:        #F0E9DC   /* borders, dividers */
--color-line:        #E5DDD0   /* subtle borders */
```

## Color Usage Rules
- Page is 80% cream/white, 15% text colors, 5% accent colors
- Honey is NEVER a background color (except tiny badges). It's for CTAs, borders, underlines
- Blue/pink/lavender appear ONLY in program-specific contexts
- Alternating sections: cream → white → cream → white

## Typography
- Display: Fredoka weight 500-600 (NOT 700 — heavy looks childish)
- Body: DM Sans weight 400, emphasis at 500
- h1: 42-48px, h2: 28-32px, h3: 20-24px, body: 16-17px
- Line height: 1.6-1.7 for body, 1.15-1.2 for headings
- Letter spacing: -0.5px on headings (editorial feel)
- Uppercase labels: 11-12px, weight 600, letter-spacing 1.5px, color text-faint

## Layout Rhythm
- Every section alternates between photo + text. Never 2 text sections in a row without a photo
- Photo-text grids: photo 55-60% width, text 40-45%. On mobile, stack with photo first
- Max content width: 1100px. Max text width: 700px (for readability)
- Section padding: 64-80px vertical, 28-32px horizontal
- Between elements: 14-20px gaps

## Photo Placeholders (until James provides real photos)
```html
<!-- Correct placeholder style -->
<div class="bg-cream rounded-2xl border border-dashed border-sand flex items-center justify-center"
     style="min-height: 300px">
  <svg><!-- small camera icon, color text-faint --></svg>
  <span class="text-text-faint text-xs mt-2">Caption text</span>
</div>
```
- NEVER use gray rectangles
- NEVER use emoji as placeholders
- Rounded corners: 16-24px (border-radius)
- Subtle dashed border in sand color

## Decorative Elements
- Wavy SVG section dividers: use sparingly, 2-3 on entire homepage max
- Small decorative SVGs (flower, star, honeycomb) positioned absolutely in margins
- Opacity 0.08-0.12 — they're texture, not decoration
- Match the style from our Instagram posts (organic shapes, flowers, sparkles)

## Animation
- ONLY soft fade-in-up on scroll: translateY(20px) → 0, opacity 0→1, 600ms ease-out
- Apply to sections entering viewport via IntersectionObserver
- NO parallax, NO counter animations, NO hover scale effects, NO GSAP
- NO animated gradients, NO pulsing buttons, NO bouncing icons

## Navigation
- Sticky header: 64px height, white bg with bottom border on scroll
- Logo left, nav links center, language toggle right
- Mobile: hamburger → slide-in panel from right
- Active link: honey color. Hover: honey color transition

## WhatsApp FAB
- Position: fixed, bottom-right, 52×52px
- border-radius: 14px (rounded square, not circle)
- Background: #25D366, white icon
- NOT pulsing, NOT bouncing — static, trustworthy

## Testimonials
- Single featured quote with left border in honey (3px)
- Italic body text, 19-20px
- Author name bold, role in text-faint below
- Long heartfelt quotes like Playful's — not short marketing snippets

## CTAs
- Primary: honey background, white text, 14-16px padding, border-radius 8px
- Secondary: transparent background, subtle border, text color, border-radius 8px
- CTA copy in Spanish should feel personal: "Agenda un Tour" not "Solicitar Información"

## ANTI-PATTERNS (things that make websites look AI-generated)
- ❌ Card grids where everything is the same size
- ❌ Gradient stat bars or animated counters
- ❌ Badge → Title → Subtitle → Cards repeated pattern
- ❌ Everything perfectly symmetrical
- ❌ Emoji as content (ok as data from DB, never as design elements)
- ❌ Rounded pastel cards that all feel the same
- ❌ Purple/blue gradients
- ❌ Inter, Roboto, or system fonts
- ❌ Drop shadows on everything
