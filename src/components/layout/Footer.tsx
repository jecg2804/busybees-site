import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig, whatsappLink } from '@/lib/utils/constants';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-line">
      <div className="max-w-[1100px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-xl font-semibold text-dark">
              Busy Bees
            </span>
            <p className="mt-3 text-text-soft text-sm leading-relaxed max-w-xs">
              {t('tagline')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1.5px] text-text-faint mb-4">
              {t('links')}
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/nosotros" className="text-sm text-text-soft hover:text-honey-dark transition-colors">
                {tNav('about')}
              </Link>
              <Link href="/programas" className="text-sm text-text-soft hover:text-honey-dark transition-colors">
                {tNav('programs')}
              </Link>
              <Link href="/admisiones" className="text-sm text-text-soft hover:text-honey-dark transition-colors">
                {tNav('admissions')}
              </Link>
              <Link href="/blog" className="text-sm text-text-soft hover:text-honey-dark transition-colors">
                {tNav('blog')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1.5px] text-text-faint mb-4">
              {t('contact')}
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-text-soft">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-honey-dark transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-honey-dark transition-colors"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-honey-dark transition-colors"
              >
                {siteConfig.instagram}
              </a>
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-line text-center">
          <p className="text-xs text-text-faint">
            {t('copyright', { year: String(year) })}
          </p>
        </div>
      </div>
    </footer>
  );
}
