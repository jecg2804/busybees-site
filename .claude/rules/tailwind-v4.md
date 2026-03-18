---
paths: src/** *.css
---
# Tailwind CSS v4 Rules

Tailwind v4 has BREAKING CHANGES from v3. Follow these rules exactly.

## Configuration
- NO tailwind.config.js or tailwind.config.ts — config is CSS-first
- Theme values defined in globals.css using `@theme { }` block
- Import: `@import "tailwindcss"` (NOT @tailwind base/components/utilities)

## globals.css structure
```css
@import "tailwindcss";

@theme {
  --color-honey: #F5A623;
  --color-honey-dark: #D4901E;
  --color-cream: #FDF6EA;
  --color-warm: #FFFBF4;
  --color-blue: #2E86DE;
  --color-pink: #F2A0B7;
  --color-lavender: #D4B8E8;
  --color-green: #6BBF7B;
  --color-dark: #222018;
  --color-text: #3D3A33;
  --color-text-soft: #6E6960;
  --color-text-faint: #A09888;
  --color-sand: #F0E9DC;
  --color-line: #E5DDD0;

  --font-display: 'Fredoka', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```

## Renamed Utilities (v3 → v4)
- `bg-gradient-to-r` → `bg-linear-to-r`
- `flex-shrink-0` → `shrink-0`
- `flex-grow` → `grow`
- `overflow-ellipsis` → `text-ellipsis`
- `decoration-clone` → `box-decoration-clone`

## Breaking Changes
- `border` now defaults to `currentColor` NOT gray-200 — always specify color: `border-sand`
- `theme()` function is REMOVED — use CSS custom properties: `var(--color-honey)`
- Container queries are built-in (no plugin needed)
- `@apply` still works but prefer utility classes directly

## NEVER
- Never create tailwind.config.js or tailwind.config.ts
- Never use `theme()` in CSS — it doesn't exist in v4
- Never use old utility names (flex-shrink-0, bg-gradient-to-r, etc.)
- Never use `border` without specifying a color
