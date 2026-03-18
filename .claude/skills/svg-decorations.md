# Skill: SVG Decorative Elements

BusyBees brand uses organic visual elements. These are pre-built components in `components/svg/`.

---

## Available Components

### HoneycombPattern
Subtle hex grid for cream section backgrounds.
```tsx
<section className="relative bg-cream py-16">
  <HoneycombPattern className="absolute inset-0 text-honey opacity-[0.04] pointer-events-none" />
  <div className="relative z-10 max-w-6xl mx-auto px-4">
    {/* section content */}
  </div>
</section>
```

### OrganicBlob
Soft colored shape behind photos or in corners. Morphs slowly via CSS animation.
```tsx
<div className="relative">
  <OrganicBlob color="lavender" className="absolute -top-16 -right-16 w-48 h-48" />
  <OrganicBlob color="pink" className="absolute -bottom-12 -left-12 w-36 h-36" />
  <Image src={photo} className="relative z-10 rounded-3xl" />
</div>
```
Colors: `lavender`, `pink`, `honey`, `blue`. Max 2 blobs per photo. Opacity is built-in (10%).

### WaveDivider
Organic wave between sections. Replaces hard edges.
```tsx
<section className="bg-cream">...</section>
<WaveDivider from="cream" to="warm" />
<section className="bg-warm">...</section>
```
Use `flip` prop to reverse the wave direction.

---

## Placement Rules

1. Honeycomb: max 1 per page, on a cream section (usually Values or Programs).
2. Blobs: max 4-6 per page total. Always behind photos, never floating alone.
3. Waves: between EVERY section transition (cream↔warm). Never use hard section borders.
4. All decorative SVGs: `aria-hidden="true"` and `pointer-events-none`.
5. All decorative SVGs: `position: absolute` with `z-0`. Content is `relative z-10`.

---

## Generating New SVGs

If you need additional organic shapes:
- Blobs: haikei.app → blob scene generator → export SVG
- Waves: getwaves.io → customize → export SVG
- Convert to React: `npx @svgr/cli -- input.svg` or manually wrap in component
