import { useTranslations } from 'next-intl';
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
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-20 space-y-16 md:space-y-20">
        {features.map((feature, i) => {
          const isReversed = i % 2 === 1;
          return (
            <div
              key={feature.titleKey}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
                isReversed ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Foto */}
              <div className={isReversed ? 'lg:order-2' : ''}>
                <PhotoPlaceholder
                  caption={feature.photoCaption}
                  className="w-full"
                  aspectRatio="aspect-[4/3]"
                />
              </div>

              {/* Texto */}
              <div className={isReversed ? 'lg:order-1' : ''}>
                <h3 className="text-[22px] md:text-[26px] font-display font-medium leading-[1.2] text-dark">
                  {t(feature.titleKey)}
                </h3>
                <p className="mt-4 text-text-soft text-[16px] leading-[1.7] max-w-lg">
                  {t(feature.descKey)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
