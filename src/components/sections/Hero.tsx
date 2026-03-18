import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { FadeInUp } from '@/components/motion/FadeInUp';
import { FadeInScale } from '@/components/motion/FadeInScale';
import OrganicBlob from '@/components/svg/OrganicBlob';
import { whatsappLink } from '@/lib/utils/constants';

export default function Hero() {
  const t = useTranslations('home');

  return (
    <section className="bg-warm">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Texto */}
          <FadeInUp className="order-2 lg:order-1">
            {/* Small text above H1 */}
            <p className="text-sm font-medium text-honey tracking-wide">
              Preescolar bilingüe en Ciudad de Panamá · Abrimos en 2026
            </p>

            <h1 className="mt-4 text-[44px] md:text-[56px] font-display font-semibold leading-tight text-dark">
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
          </FadeInUp>

          {/* Foto con blobs decorativos */}
          <FadeInScale className="order-1 lg:order-2 relative" delay={0.15}>
            <OrganicBlob
              color="lavender"
              className="absolute -top-10 -right-10 w-48 h-48"
            />
            <OrganicBlob
              color="pink"
              className="absolute -bottom-8 -left-8 w-36 h-36"
            />
            <Image
              src="/images/founder-bubbles.jpeg"
              alt="Fundadoras de Busy Bees con niños"
              width={600}
              height={450}
              className="relative z-10 rounded-3xl shadow-[var(--shadow-warm-lg)] w-full h-auto object-cover"
              priority
            />
          </FadeInScale>
        </div>
      </div>
    </section>
  );
}
