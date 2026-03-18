# Skill: Public Page Pattern

## Server Component with Supabase data

```typescript
// app/[locale]/(public)/programas/page.tsx
import { createClient } from '@/lib/supabase/server'
import { getTranslations } from 'next-intl/server'
import { t } from '@/lib/utils/i18n-content'

interface Props {
  params: Promise<{ locale: string }>  // Next.js 15: params is a Promise
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const tr = await getTranslations({ locale, namespace: 'programs' })
  return {
    title: tr('meta_title'),
    description: tr('meta_description'),
  }
}

export default async function ProgramasPage({ params }: Props) {
  const { locale } = await params  // MUST await
  const supabase = await createClient()
  const tr = await getTranslations('programs')

  const { data: programs } = await supabase
    .from('programs')
    .select('*')
    .eq('is_active', true)
    .order('sort_order')

  return (
    <main>
      {/* Header — cream bg, centered text */}
      <section className="bg-cream px-8 py-20">
        <div className="mx-auto max-w-[700px]">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1.5px] text-text-faint">
            {tr('label')}
          </p>
          <h1 className="font-display text-[42px] font-semibold leading-[1.15] tracking-[-0.5px] text-dark">
            {tr('title')}
          </h1>
        </div>
      </section>

      {/* Alternating sections — see design-system.md */}
      {programs?.map((program, i) => (
        <section key={program.id} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'}>
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 px-8 py-16 md:grid-cols-2">
            {/* Photo placeholder */}
            <div className={`flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-sand bg-cream ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
              <span className="text-sm text-text-faint">📷 {t(program, 'name', locale)}</span>
            </div>
            {/* Text */}
            <div className={i % 2 !== 0 ? 'md:order-1' : ''}>
              <p className="mb-2 text-sm font-medium text-honey">
                {t(program, 'age_range', locale)}
              </p>
              <h2 className="mb-4 font-display text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] text-dark">
                {t(program, 'name', locale)}
              </h2>
              <p className="text-[16px] leading-[1.7] text-text-soft">
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

## Layout patterns
- **Header:** bg-cream, max-w-[700px] centered, uppercase label + h1
- **Content:** alternate bg-white and bg-cream
- **Grids:** max-w-[1100px], 1col mobile → 2col desktop, alternating photo/text sides
- **Spacing:** py-16 sections, gap-12 grids
- **Photo placeholders:** cream bg, dashed border, rounded-2xl
