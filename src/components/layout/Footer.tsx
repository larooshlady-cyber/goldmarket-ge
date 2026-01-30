'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './Container';
import { useLanguage } from '@/lib/i18n';
import { Divider } from '@heroui/react';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/marketplace', label: t('nav.marketplace') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const legalLinks = [
    { href: '/legal/terms', label: t('nav.terms') },
    { href: '/legal/privacy', label: t('nav.privacy') },
    { href: '/legal/returns', label: t('nav.returns') },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo.svg" 
                  alt="GoldMarket" 
                  width={160} 
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('footer.about')}
              </p>
              <div className="flex gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors hover:bg-[#FFB011] hover:text-black"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors hover:bg-[#FFB011] hover:text-black"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {t('footer.quickLinks')}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-[#FFB011]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {t('footer.legal')}
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-[#FFB011]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {t('footer.contact')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="tel:+995322123456" 
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#FFB011] transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                      <Phone className="h-4 w-4" />
                    </div>
                    +995 32 212 3456
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@goldmarket.ge" 
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#FFB011] transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                      <Mail className="h-4 w-4" />
                    </div>
                    info@goldmarket.ge
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                    <MapPin className="h-4 w-4" />
                  </div>
                  თბილისი, საქართველო
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        <div className="py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} GoldMarket.ge. {t('footer.allRightsReserved')}.
            </p>
            <div className="flex items-center gap-4">
              <Image 
                src="/logo-icon.svg" 
                alt="" 
                width={24} 
                height={24}
                className="h-6 w-6 opacity-50"
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
