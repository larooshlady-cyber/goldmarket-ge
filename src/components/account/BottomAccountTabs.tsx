'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  ListChecks,
  Wallet,
  Sparkles,
  Settings,
} from 'lucide-react';

const tabs = [
  { href: '/account', icon: LayoutDashboard, labelKey: 'nav.dashboard' as const },
  { href: '/account/listings', icon: ListChecks, labelKey: 'nav.myListings' as const },
  { href: '/account/wallet', icon: Wallet, labelKey: 'nav.wallet' as const },
  { href: '/account/services', icon: Sparkles, labelKey: 'nav.services' as const },
  { href: '/account/settings', icon: Settings, labelKey: 'nav.settings' as const },
];

export function BottomAccountTabs() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white md:hidden">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href || 
            (tab.href !== '/account' && pathname.startsWith(tab.href));
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                'flex flex-1 flex-col items-center gap-1 py-3 text-xs',
                isActive ? 'text-amber-600' : 'text-gray-600'
              )}
            >
              <tab.icon className="h-5 w-5" />
              <span className="truncate">{t(tab.labelKey)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
