'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const otherLocale = locale === 'es' ? 'en' : 'es';

  function handleSwitch() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      className="text-sm font-medium px-2.5 py-1 rounded-md border border-sand text-text-soft hover:text-honey-dark hover:border-honey transition-colors cursor-pointer"
      aria-label={`Switch to ${otherLocale === 'es' ? 'Español' : 'English'}`}
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
