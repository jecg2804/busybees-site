---
paths: src/app/** src/middleware.ts src/i18n/**
---
# Next.js 15 + next-intl Rules

## Async Params (BREAKING in Next.js 15)
`params` and `searchParams` are now Promises. Always await them:
```typescript
// CORRECT
interface Props {
  params: Promise<{ locale: string }>
}
export default async function Page({ params }: Props) {
  const { locale } = await params
  // ...
}

// WRONG — will cause type errors
export default async function Page({ params }: { params: { locale: string } }) {
```

## Server Components
- Default to Server Components. Use `'use client'` ONLY for interactivity (forms, state, effects)
- Server Components can be async and fetch data directly
- Client Components CANNOT be async

## Fetch Behavior
- fetch() is NOT cached by default in Next.js 15 (changed from 14)
- Use `export const dynamic = 'force-dynamic'` on authenticated routes
- Use `{ next: { revalidate: 3600 } }` for cacheable content

## next-intl Setup
- All pages under `src/app/[locale]/`
- Default locale: `es`. Secondary: `en`
- Redirect `/` → `/es`
- Navigation: use `@/i18n/navigation` (NOT `next/navigation` directly)
- Messages: `messages/es.json` and `messages/en.json` for UI strings only
- CMS content: `_es` and `_en` columns in Supabase, selected by locale

## i18n Navigation
```typescript
// src/i18n/navigation.ts
import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)

// ALWAYS import Link from '@/i18n/navigation', NOT from 'next/link'
```

## i18n Content Helper
```typescript
// Use for Supabase bilingual content
export function t<T extends Record<string, unknown>>(
  item: T, field: string, locale: string
): string {
  return (item[`${field}_${locale}`] as string) || (item[`${field}_es`] as string) || ''
}
// Usage: t(program, 'name', locale) → "Baby Bees"
```

## Metadata
```typescript
export async function generateMetadata({ params }: Props) {
  const { locale } = await params  // MUST await
  const t = await getTranslations({ locale, namespace: 'programs' })
  return { title: t('meta_title'), description: t('meta_description') }
}
```

## NEVER
- Never destructure params without awaiting the Promise
- Never import Link from 'next/link' (use @/i18n/navigation)
- Never hardcode locale strings in URLs
- Never use Pages Router patterns (getServerSideProps, getStaticProps)
