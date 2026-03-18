import { useTranslations } from 'next-intl';

export default function Values() {
  const t = useTranslations('home');

  return (
    <section className="bg-cream">
      <div className="max-w-[700px] mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-[28px] md:text-[32px] font-display font-medium leading-[1.2] text-dark">
          {t('valuesTitle')}
        </h2>

        {/* Separador honey */}
        <div className="mx-auto mt-5 w-16 h-[3px] rounded-full bg-honey" />

        <p className="mt-6 text-text-soft text-[17px] leading-[1.7]">
          {t('valuesText')}
        </p>
      </div>
    </section>
  );
}
