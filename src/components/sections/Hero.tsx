import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder';
import { whatsappLink } from '@/lib/utils/constants';

export default function Hero() {
  const t = useTranslations('home');

  return (
    <section className="bg-warm">
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <h1 className="text-[42px] md:text-[48px] font-display font-semibold leading-[1.15] text-dark">
              {t('heroHeadline')}
            </h1>
            <p className="mt-5 text-lg text-text-soft leading-relaxed max-w-lg">
              {t('heroSubtitle')}
            </p>

            {/* Tags */}
            <p className="mt-4 text-sm text-text-faint">
              {t('heroTags')}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {t('heroCta')}
              </Button>
              <Button variant="secondary" href="/nosotros">
                {t('heroCtaSecondary')}
              </Button>
            </div>
          </div>

          {/* Foto placeholder */}
          <div className="order-1 lg:order-2">
            <PhotoPlaceholder
              caption="Niños en clase"
              className="w-full"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
