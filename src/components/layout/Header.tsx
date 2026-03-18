'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LangToggle from './LangToggle';
import MobileNav from './MobileNav';

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/nosotros', key: 'about' },
  { href: '/programas', key: 'programs' },
  { href: '/equipo', key: 'team' },
  { href: '/galeria', key: 'gallery' },
  { href: '/admisiones', key: 'admissions' },
  { href: '/blog', key: 'blog' },
  { href: '/contacto', key: 'contact' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-line shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1100px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-display text-xl font-semibold text-dark tracking-tight">
              Busy Bees
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className="text-[15px] text-text-soft hover:text-honey-dark transition-colors"
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LangToggle />

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
              aria-label="Open menu"
            >
              <span className="block w-5 h-[2px] bg-dark" />
              <span className="block w-5 h-[2px] bg-dark" />
              <span className="block w-4 h-[2px] bg-dark" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer para contenido debajo del header fijo */}
      <div className="h-16" />

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
