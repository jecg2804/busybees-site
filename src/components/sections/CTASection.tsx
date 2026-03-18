import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { FadeInUp } from '@/components/motion/FadeInUp';
import { whatsappLink } from '@/lib/utils/constants';

export default function CTASection() {
  const t = useTranslations('home');

  return (
    <section className="bg-cream">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 text-center">
        <FadeInUp>
          <h2 className="text-[32px] md:text-[40px] font-display font-semibold text-dark leading-tight">
            {t('ctaTitle')}
          </h2>
          <p className="mt-4 text-text-soft text-[17px] leading-relaxed">
            {t('ctaText')}
          </p>
          <div className="mt-8">
            <Button href={whatsappLink} target="_blank" rel="noopener noreferrer">
              {t('ctaButton')}
            </Button>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
