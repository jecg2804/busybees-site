import { useTranslations } from 'next-intl';
import { FadeInUp } from '@/components/motion/FadeInUp';
import { FadeInScale } from '@/components/motion/FadeInScale';
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder';

interface Feature {
  titleKey: string;
  descKey: string;
  photoCaption: string;
}

const features: Feature[] = [
  {
    titleKey: 'playTitle',
    descKey: 'playDesc',
    photoCaption: 'Aprendizaje basado en el juego',
  },
  {
    titleKey: 'bilingualTitle',
    descKey: 'bilingualDesc',
    photoCaption: 'Inmersión bilingüe',
  },
  {
    titleKey: 'smallGroupsTitle',
    descKey: 'smallGroupsDesc',
    photoCaption: 'Grupos pequeños',
  },
];

export default function Features() {
  const t = useTranslations('features');

  return (
    <section className="bg-warm">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-16 md:space-y-24">
        {features.map((feature, i) => {
          const isReversed = i % 2 === 1;
          return (
            <div
              key={feature.titleKey}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              {/* Foto */}
              <FadeInScale className={isReversed ? 'lg:order-2' : ''}>
                <PhotoPlaceholder
                  caption={feature.photoCaption}
                  className="w-full"
                  aspectRatio="aspect-[4/3]"
                />
              </FadeInScale>

              {/* Texto */}
              <FadeInUp delay={0.1} className={isReversed ? 'lg:order-1' : ''}>
                <h3 className="text-[24px] md:text-[28px] font-display font-medium leading-tight text-dark">
                  {t(feature.titleKey)}
                </h3>
                <p className="mt-4 text-text-soft text-[16px] leading-[1.7] max-w-lg">
                  {t(feature.descKey)}
                </p>
              </FadeInUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}
