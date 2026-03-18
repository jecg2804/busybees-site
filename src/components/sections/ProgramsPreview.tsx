import { getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { createClient } from '@/lib/supabase/server';
import { t as tContent } from '@/lib/utils/format';
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger';
import { FadeInUp } from '@/components/motion/FadeInUp';
import type { Program, Locale } from '@/lib/types/database';

export default async function ProgramsPreview() {
  const t = await getTranslations('home');
  const locale = (await getLocale()) as Locale;

  const supabase = await createClient();
  const { data: programs } = await supabase
    .from('programs')
    .select('*')
    .eq('is_active', true)
    .order('sort_order');

  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <FadeInUp>
          <h2 className="text-[32px] md:text-[40px] font-display font-semibold text-center text-dark leading-tight">
            {t('programsTitle')}
          </h2>
        </FadeInUp>

        <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(programs as Program[] | null)?.map((program) => (
            <StaggerItem key={program.id}>
              <div
                className="bg-warm rounded-2xl p-6 border border-line h-full"
                style={{ borderTopColor: program.color, borderTopWidth: '3px' }}
              >
                <span className="text-2xl">{program.emoji}</span>
                <h3 className="mt-3 font-display font-medium text-lg text-dark">
                  {tContent(program, 'name', locale)}
                </h3>
                <p className="mt-1 text-sm text-text-faint">
                  {tContent(program, 'age_range', locale)}
                </p>
                <p className="mt-2 text-sm text-text-soft leading-relaxed line-clamp-3">
                  {tContent(program, 'description', locale)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              href="/programas"
              className="text-[15px] text-honey-dark hover:text-honey font-medium transition-colors"
            >
              {t('programsLink')} →
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
