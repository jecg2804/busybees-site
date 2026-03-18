'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: ReadonlyArray<{ href: string; key: string }>;
}

export default function MobileNav({ open, onClose, links }: MobileNavProps) {
  const t = useTranslations('nav');

  // Bloquear scroll del body cuando está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-warm z-50 shadow-xl transform transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 text-text-soft hover:text-dark cursor-pointer"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 gap-1">
          {links.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              onClick={onClose}
              className="py-3 text-lg text-text hover:text-honey-dark transition-colors border-b border-line"
            >
              {t(key)}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
