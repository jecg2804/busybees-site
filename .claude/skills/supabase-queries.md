# Skill: Queries de Supabase

## Cliente correcto
- **Server Components:** `import { createClient } from '@/lib/supabase/server'`
- **Client Components:** `import { createClient } from '@/lib/supabase/client'`

## Fetch content bilingüe
```typescript
// En Server Component
const supabase = await createClient()
const locale = 'es' // from params

const { data: programs } = await supabase
  .from('programs')
  .select('*')
  .eq('is_active', true)
  .order('sort_order')

// Usar en template:
// program[`name_${locale}`] → "Baby Bees"
// program[`description_${locale}`] → texto en idioma correcto
```

## Helper para seleccionar idioma
```typescript
// lib/utils/i18n-content.ts
export function t<T extends Record<string, unknown>>(
  item: T,
  field: string,
  locale: string
): string {
  return (item[`${field}_${locale}`] as string) || (item[`${field}_es`] as string) || ''
}

// Uso: t(program, 'name', locale) → "Baby Bees"
```

## Fetch site settings
```typescript
const { data } = await supabase
  .from('site_settings')
  .select('key, value')
  .in('key', ['general', 'values'])

const settings = Object.fromEntries(
  (data ?? []).map(row => [row.key, row.value])
)
// settings.general.phone → "+507 6727-6989"
```

## Insert inquiry (contact form)
```typescript
// Client component — form submission
const { error } = await supabase
  .from('inquiries')
  .insert({
    type: 'contact',
    parent_name: formData.name,
    email: formData.email,
    phone: formData.phone,
    child_age: formData.childAge,
    message: formData.message,
    source: 'website',
  })
```

## Blog posts (public — only published)
```typescript
// RLS already filters is_published = true for anon users
const { data: posts } = await supabase
  .from('blog_posts')
  .select('slug, title_es, title_en, excerpt_es, excerpt_en, category, published_at, cover_image_url')
  .order('published_at', { ascending: false })
```

## NUNCA:
- No hardcodear content que viene de Supabase
- No usar `.single()` sin manejar null
- No olvidar `.eq('is_active', true)` en tablas con ese campo
