# Skill: Crear página pública

## Patrón de Server Component con datos de Supabase

```typescript
// app/[locale]/(public)/programas/page.tsx
import { createClient } from '@/lib/supabase/server'
import { getTranslations } from 'next-intl/server'
import { t } from '@/lib/utils/i18n-content'

interface Props {
  params: Promise<{ locale: string }>
}

export default async function ProgramasPage({ params }: Props) {
  const { locale } = await params
  const supabase = await createClient()
  const tr = await getTranslations('programs') // UI strings from messages/

  const { data: programs } = await supabase
    .from('programs')
    .select('*')
    .eq('is_active', true)
    .order('sort_order')

  return (
    <main>
      {/* Header */}
      <section className="bg-cream px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-text-faint tracking-widest uppercase mb-4">
            {tr('label')}
          </p>
          <h1 className="font-display text-4xl font-semibold text-dark leading-tight">
            {tr('title')}
          </h1>
        </div>
      </section>

      {/* Content from Supabase */}
      {programs?.map((program, i) => (
        <section key={program.id} className={i % 2 === 0 ? 'bg-white' : 'bg-warm'}>
          <div className="max-w-5xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Photo placeholder */}
            <div className="bg-sand rounded-md h-72 flex items-center justify-center">
              <span className="text-4xl">{program.emoji}</span>
            </div>
            {/* Text */}
            <div>
              <p className="text-sm font-medium text-honey mb-2">
                {t(program, 'age_range', locale)}
              </p>
              <h2 className="font-display text-3xl font-semibold text-dark mb-4">
                {t(program, 'name', locale)}
              </h2>
              <p className="text-base text-text-soft leading-relaxed">
                {t(program, 'description', locale)}
              </p>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
```

## Convenciones de layout

- **Header sections:** bg-cream, max-w-3xl centered, uppercase label + h1
- **Content sections:** alternar bg-white y bg-warm
- **Grid:** max-w-5xl, grid 1col mobile → 2col desktop
- **Photo placeholders:** bg-sand rounded-md con emoji centered
- **Spacing:** py-16 entre secciones, gap-12 en grids
- **Typography:** font-display para headings, font-body implícito para texto

## SEO metadata

```typescript
export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const tr = await getTranslations('programs')
  return {
    title: tr('meta_title'),
    description: tr('meta_description'),
  }
}
```
