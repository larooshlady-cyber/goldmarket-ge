'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './Container';
import { useLanguage } from '@/lib/i18n';
import { Separator } from '@/components/ui/separator';

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
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
                  <span className="text-lg font-bold text-white">G</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">GoldMarket</span>
              </Link>
              <p className="text-sm text-gray-600">{t('footer.about')}</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-amber-500 hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-amber-500 hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {t('footer.quickLinks')}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-amber-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {t('footer.legal')}
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-amber-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {t('footer.contact')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+995322123456" className="hover:text-amber-600">
                    +995 32 212 3456
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@goldmarket.ge" className="hover:text-amber-600">
                    info@goldmarket.ge
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>თბილისი, საქართველო</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} GoldMarket.ge. {t('footer.allRightsReserved')}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
