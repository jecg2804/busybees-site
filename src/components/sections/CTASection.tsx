import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { whatsappLink } from '@/lib/utils/constants';

export default function CTASection() {
  const t = useTranslations('home');

  return (
    <section className="bg-cream">
      <div className="max-w-[700px] mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-[28px] md:text-[32px] font-display font-medium text-dark leading-[1.2]">
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
      </div>
    </section>
  );
}
