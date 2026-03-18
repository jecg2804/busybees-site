import { useTranslations } from 'next-intl';
import { FadeInUp } from '@/components/motion/FadeInUp';
import HoneycombPattern from '@/components/svg/HoneycombPattern';

export default function Values() {
  const t = useTranslations('home');

  return (
    <section className="relative bg-cream overflow-hidden">
      {/* Honeycomb background decoration */}
      <HoneycombPattern className="absolute inset-0 text-honey opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 md:py-24 text-center">
        <FadeInUp>
          <h2 className="text-[32px] md:text-[40px] font-display font-semibold leading-tight text-dark">
            {t('valuesTitle')}
          </h2>

          {/* Separador honey */}
          <div className="mx-auto mt-5 w-16 h-[3px] rounded-full bg-honey" />

          <p className="mt-6 text-text-soft text-[17px] leading-[1.7]">
            {t('valuesText')}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
