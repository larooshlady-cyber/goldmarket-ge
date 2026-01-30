'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { BottomAccountTabs } from '@/components/account';
import { LanguageToggle } from '@/components/layout';
import {
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Divider,
} from '@heroui/react';
import {
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  Package,
  Wallet,
  Zap,
  ShieldCheck,
  Settings,
  Plus,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

const accountNavItems = [
  { href: '/account', icon: LayoutDashboard, labelKey: 'nav.dashboard' },
  { href: '/account/listings', icon: Package, labelKey: 'nav.myListings' },
  { href: '/account/wallet', icon: Wallet, labelKey: 'nav.wallet' },
  { href: '/account/services', icon: Zap, labelKey: 'nav.services' },
  { href: '/account/verification', icon: ShieldCheck, labelKey: 'account.verification' },
  { href: '/account/settings', icon: Settings, labelKey: 'common.settings' },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const isActive = (href: string) => {
    if (href === '/account') {
      return pathname === '/account';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 border-r border-gray-200 bg-white lg:block">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-gray-200 px-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="GoldMarket"
              width={140}
              height={28}
              className="h-7 w-auto"
            />
          </Link>
        </div>

        {/* User Info */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <Avatar
              src={user?.avatar}
              name={user?.name?.charAt(0) || 'U'}
              size="md"
              classNames={{
                base: 'bg-[#FFB011]',
                name: 'text-black font-semibold',
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">{user?.name || 'მომხმარებელი'}</p>
              <p className="text-sm text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-lg bg-[#FFF8E6] px-3 py-2">
            <span className="text-sm text-gray-600">ბალანსი:</span>
            <span className="font-semibold text-[#FFB011]">
              {user?.balance?.toLocaleString() || 0} {t('common.currency')}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {accountNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'bg-[#FFB011] text-black'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Add Listing Button */}
        <div className="p-4 border-t border-gray-200">
          <Button
            as={Link}
            href="/account/listings/new"
            className="w-full bg-[#0D6B5F] text-white font-semibold"
            radius="lg"
            startContent={<Plus className="h-5 w-5" />}
          >
            {t('common.addListing')}
          </Button>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <Button
            variant="light"
            className="w-full text-red-600 justify-start"
            startContent={<LogOut className="h-5 w-5" />}
            onPress={handleLogout}
          >
            {t('common.logout')}
          </Button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white lg:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Button
              isIconOnly
              variant="light"
              onPress={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link href="/">
              <Image
                src="/logo-icon.svg"
                alt="GoldMarket"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly variant="light" radius="full">
                  <Avatar
                    src={user?.avatar}
                    name={user?.name?.charAt(0) || 'U'}
                    size="sm"
                    classNames={{
                      base: 'bg-[#FFB011]',
                      name: 'text-black font-semibold',
                    }}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Account menu">
                <DropdownItem key="profile" isReadOnly className="h-14 gap-3">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </DropdownItem>
                <DropdownItem key="balance" isReadOnly>
                  <span className="text-[#FFB011] font-semibold">
                    {user?.balance?.toLocaleString() || 0} {t('common.currency')}
                  </span>
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  className="text-red-600"
                  color="danger"
                  startContent={<LogOut className="h-4 w-4" />}
                  onPress={handleLogout}
                >
                  {t('common.logout')}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 bg-white transition-transform lg:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Sidebar Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            <Image
              src="/logo.svg"
              alt="GoldMarket"
              width={120}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
          <Button
            isIconOnly
            variant="light"
            size="sm"
            onPress={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile User Info */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <Avatar
              src={user?.avatar}
              name={user?.name?.charAt(0) || 'U'}
              size="md"
              classNames={{
                base: 'bg-[#FFB011]',
                name: 'text-black font-semibold',
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">{user?.name || 'მომხმარებელი'}</p>
              <p className="text-sm text-[#FFB011] font-medium">
                {user?.balance?.toLocaleString() || 0} {t('common.currency')}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {accountNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'bg-[#FFB011] text-black'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {t(item.labelKey)}
              <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
            </Link>
          ))}
        </nav>

        {/* Mobile Add Listing */}
        <div className="p-4 border-t border-gray-200">
          <Button
            as={Link}
            href="/account/listings/new"
            className="w-full bg-[#0D6B5F] text-white font-semibold"
            radius="lg"
            startContent={<Plus className="h-5 w-5" />}
            onPress={() => setSidebarOpen(false)}
          >
            {t('common.addListing')}
          </Button>
        </div>

        {/* Mobile Logout */}
        <div className="p-4 border-t border-gray-200">
          <Button
            variant="light"
            className="w-full text-red-600 justify-start"
            startContent={<LogOut className="h-5 w-5" />}
            onPress={handleLogout}
          >
            {t('common.logout')}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomAccountTabs />
    </div>
  );
}
