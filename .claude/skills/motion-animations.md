# Skill: Motion Animations

All animation in this project uses Motion (v12+). `import { motion } from "motion/react"`.
Every animated component MUST have `"use client"` directive.

---

## Core Wrappers (create in `components/motion/`)

### FadeInUp — default for all sections
```tsx
"use client"
import { motion } from "motion/react"

interface FadeInUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeInUp({ children, delay = 0, className }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

### FadeInScale — for photos
```tsx
"use client"
import { motion } from "motion/react"

export function FadeInScale({ children, delay = 0, className }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

### StaggerChildren — for lists/grids
```tsx
"use client"
import { motion } from "motion/react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
}

export function StaggerContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <motion.div variants={itemVariants} className={className}>{children}</motion.div>
}
```

---

## Usage Rules

1. Every public page section wraps in `<FadeInUp>`.
2. Photos use `<FadeInScale>`.
3. Lists of items (programs, team, extracurriculars) use `<StaggerContainer>` + `<StaggerItem>`.
4. Buttons: add `whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}` for playful feel.
5. NEVER animate translateY more than 24px. Subtle, not dramatic.
6. NEVER use CSS @keyframes for scroll reveals. Motion only.
7. The ONLY CSS animation allowed is the blob morph (defined in globals.css @theme).

---

## Smooth Scroll Setup

In `app/[locale]/layout.tsx`:
```tsx
"use client" // only the Lenis wrapper needs this
import { ReactLenis } from "lenis/react"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>{children}</ReactLenis>
}
```
