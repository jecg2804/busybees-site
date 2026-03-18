# Skill: Supabase Queries

## Correct client imports
- **Server Components:** `import { createClient } from '@/lib/supabase/server'`
- **Client Components:** `import { createClient } from '@/lib/supabase/client'`
- Server client is async: `const supabase = await createClient()`
- Client client is sync: `const supabase = createClient()`

## Bilingual content helper
```typescript
// lib/utils/i18n-content.ts
export function t<T extends Record<string, unknown>>(
  item: T, field: string, locale: string
): string {
  return (item[`${field}_${locale}`] as string) || (item[`${field}_es`] as string) || ''
}
```

## Common queries

### Programs (active, sorted)
```typescript
const { data: programs } = await supabase
  .from('programs')
  .select('*')
  .eq('is_active', true)
  .order('sort_order')
```

### Site settings (by key)
```typescript
const { data } = await supabase
  .from('site_settings')
  .select('key, value')
  .in('key', ['general', 'values'])

const settings = Object.fromEntries(
  (data ?? []).map(row => [row.key, row.value])
)
```

### Featured testimonial
```typescript
const { data: testimonial } = await supabase
  .from('testimonials')
  .select('*')
  .eq('is_featured', true)
  .eq('is_active', true)
  .order('sort_order')
  .limit(1)
  .maybeSingle()  // returns null if none found, not an error
```

### Blog posts (public — RLS filters unpublished for anon)
```typescript
const { data: posts } = await supabase
  .from('blog_posts')
  .select('slug, title_es, title_en, excerpt_es, excerpt_en, category, published_at, cover_image_url')
  .order('published_at', { ascending: false })
```

### Insert inquiry (client component form)
```typescript
const { error } = await supabase.from('inquiries').insert({
  type: 'contact',
  parent_name: formData.name,
  email: formData.email,
  phone: formData.phone,
  child_age: formData.childAge,
  message: formData.message,
  source: 'website',
})
```

## NEVER
- Never hardcode content that comes from Supabase
- Never use `.single()` without handling null — use `.maybeSingle()`
- Never forget `.eq('is_active', true)` on tables with that column
- Never use `*` select in production queries with many columns — select what you need
