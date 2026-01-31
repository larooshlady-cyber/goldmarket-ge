'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { Avatar, Chip } from '@heroui/react';
import {
  LayoutDashboard,
  ListChecks,
  Wallet,
  Sparkles,
  ShieldCheck,
  Settings,
  Plus,
} from 'lucide-react';

const menuItems = [
  { href: '/account', icon: LayoutDashboard, labelKey: 'account.dashboard' as const },
  { href: '/account/listings', icon: ListChecks, labelKey: 'account.myListings' as const },
  { href: '/account/wallet', icon: Wallet, labelKey: 'account.wallet' as const },
  { href: '/account/services', icon: Sparkles, labelKey: 'account.services' as const },
  { href: '/account/verification', icon: ShieldCheck, labelKey: 'account.verification' as const },
  { href: '/account/settings', icon: Settings, labelKey: 'account.settings' as const },
];

export function AccountSidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { user } = useAuth();

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-white md:block">
      <div className="sticky top-0 flex h-screen flex-col">
        {/* User info */}
        <div className="border-b p-4">
          <div className="flex items-center gap-3">
            <Avatar
              src={user?.avatar}
              name={user?.name?.charAt(0) || 'U'}
              size="lg"
              classNames={{
                base: 'h-12 w-12',
              }}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{user?.name || 'User'}</p>
              <Chip
                color={user?.verificationStatus === 'verified' ? 'success' : 'default'}
                variant="flat"
                size="sm"
                className="mt-1"
              >
                {user?.verificationStatus === 'verified' ? t('common.verified') : t('common.notVerified')}
              </Chip>
            </div>
          </div>
        </div>

        {/* New listing button */}
        <div className="border-b p-4">
          <Link
            href="/account/listings/new"
            className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600"
          >
            <Plus className="h-4 w-4" />
            {t('account.createListing')}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/account' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <item.icon className="h-5 w-5" />
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
