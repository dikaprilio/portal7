'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Globe } from 'lucide-react';

interface NavLink {
  href: string;
  labelKey: string;
  children?: { href: string; labelKey: string }[];
}

const navLinks: NavLink[] = [
  { href: '/#hero', labelKey: 'nav_beranda' },
  {
    href: '#',
    labelKey: 'nav_tentang_portal',
    children: [
      { href: '/#tentang', labelKey: 'nav_tentang_kami' },
      { href: '/#sdg-commitment', labelKey: 'nav_sdg_commitment' },
      { href: '/#guest-stars', labelKey: 'nav_guest_stars' },
      { href: '/#highlight', labelKey: 'nav_highlight' },
      { href: '/#linimasa', labelKey: 'nav_linimasa' },
      { href: '/#peserta', labelKey: 'nav_peserta' },
      { href: '/#faq', labelKey: 'nav_faq' },
      { href: '/#sponsorship', labelKey: 'nav_sponsorship' },
      { href: '/#apply-roles', labelKey: 'nav_apply_roles' },
    ],
  },
  {
    href: '#',
    labelKey: 'nav_event',
    children: [
      { href: '/competition-hub', labelKey: 'nav_kompetisi' },
      // { href: '/seminar', labelKey: 'nav_seminar' },
    ],
  },
  {
    href: '#',
    labelKey: 'nav_media',
    children: [
      { href: '/blog', labelKey: 'nav_blog' },
      { href: '/gallery', labelKey: 'nav_gallery' },
    ],
  },
  { href: '/#kontak', labelKey: 'nav_kontak_kami' },
];

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const otherLocale = locale === 'en' ? 'id' : 'en';

  const handleDropdownToggle = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <nav>
      <div className="nav-container">
        <Link href="/" className="logo">
          <img
            src="/img/Portal_Logo.png"
            alt="Logo Portal 8"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/120x30/cccccc/ffffff?text=P8+Logo';
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links hidden lg:flex" id="main-nav-links">
          {navLinks.map((link) => (
            <div
              key={link.labelKey}
              className={`nav-item dropdown ${link.children ? 'relative' : ''}`}
              onMouseEnter={() => link.children && setOpenDropdown(link.labelKey)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              {link.children ? (
                <>
                  <button
                    className="nav-a dropdown-toggle flex items-center gap-1"
                    onClick={() => handleDropdownToggle(link.labelKey)}
                  >
                    {t(link.labelKey)}{' '}
                    <ChevronDown
                      size={12}
                      className={`transition-transform ${
                        openDropdown === link.labelKey ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`dropdown-menu ${
                      openDropdown === link.labelKey ? 'opacity-100 visible pointer-events-auto translate-y-0 scale-100' : ''
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.labelKey}
                        href={child.href}
                        className="dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {t(child.labelKey)}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={link.href} className="nav-a">
                  {t(link.labelKey)}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/#pendaftaran"
            className="nav-a nav-cta-button"
          >
            {t('nav_pendaftaran')}
          </Link>
          <Link
            href={pathname}
            locale={otherLocale}
            className="lang-toggle-button flex items-center gap-2"
          >
            <Globe size={14} />
            {t('lang_toggle')}
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger>
            <button
              className="mobile-menu-button lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-[#1a1d24] border-l border-[#23272f] p-0"
          >
            <div className="flex flex-col p-6 gap-4 mt-12">
              {navLinks.map((link) => (
                <div key={link.labelKey}>
                  {link.children ? (
                    <>
                      <button
                        className="text-[#f0f0f0] font-medium py-2 flex items-center gap-2 w-full text-left"
                        onClick={() => handleDropdownToggle(link.labelKey)}
                      >
                        {t(link.labelKey)}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${
                            openDropdown === link.labelKey ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === link.labelKey && (
                        <div className="flex flex-col pl-4 gap-2 mt-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.labelKey}
                              href={child.href}
                              className="text-[#f0f0f0]/80 hover:text-white py-1 text-sm"
                              onClick={() => setMobileOpen(false)}
                            >
                              {t(child.labelKey)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#f0f0f0] font-medium py-2 block"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(link.labelKey)}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/#pendaftaran"
                className="nav-cta-button text-center mt-4"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav_pendaftaran')}
              </Link>
              <Link
                href={pathname}
                locale={otherLocale}
                className="lang-toggle-button flex items-center justify-center gap-2 mt-2"
                onClick={() => setMobileOpen(false)}
              >
                <Globe size={14} />
                {t('lang_toggle')}
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
