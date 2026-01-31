'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Plus,
  Heart,
  ShoppingCart,
  Globe,
  User,
  Menu,
  X,
  ChevronDown,
  LogOut,
  LayoutDashboard,
  Package,
  Wallet,
  Settings,
  ShieldCheck,
} from 'lucide-react';
import { Container } from './Container';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Avatar,
  Divider,
} from '@heroui/react';
import { cn } from '@/lib/utils';

export function Header() {
  const { t, language } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const accountLinks = [
    { href: '/account', label: t('nav.dashboard'), icon: LayoutDashboard },
    { href: '/account/listings', label: t('nav.myListings'), icon: Package },
    { href: '/account/wallet', label: t('nav.wallet'), icon: Wallet },
    { href: '/account/services', label: t('nav.services'), icon: ShieldCheck },
    { href: '/account/settings', label: t('common.settings'), icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <div className="flex items-center">
              <span className="bg-[#FFB011] text-white font-bold text-sm px-2 py-1 rounded">
                GOLD
              </span>
              <span className="text-gray-900 font-semibold text-lg ml-1">
                MARKET
              </span>
            </div>
          </Link>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Add Listing Button - Gold */}
            <Button
              as={Link}
              href={isAuthenticated ? '/account/listings/new' : '/auth/login'}
              className="bg-[#FFB011] text-white font-medium hover:bg-[#E09D00]"
              radius="full"
              startContent={<Plus className="h-4 w-4" />}
            >
              {t('common.addListing')}
            </Button>

            {/* Wishlist */}
            <Button
              isIconOnly
              variant="light"
              as={Link}
              href="/wishlist"
              aria-label="Wishlist"
              className="text-gray-600"
            >
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button
              isIconOnly
              variant="light"
              as={Link}
              href="/cart"
              aria-label="Cart"
              className="text-gray-600"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* Language Dropdown */}
            <LanguageToggle />

            {/* User Account */}
            {isAuthenticated ? (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button
                    isIconOnly
                    variant="flat"
                    radius="full"
                    className="bg-[#0D6B5F] text-white"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Account menu" className="w-64">
                  <DropdownSection showDivider>
                    <DropdownItem key="profile" isReadOnly className="h-14 gap-3 cursor-default">
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={user?.avatar}
                          name={user?.name?.charAt(0).toUpperCase()}
                          size="sm"
                          classNames={{
                            base: 'bg-[#FFB011]',
                            name: 'text-white font-semibold',
                          }}
                        />
                        <div>
                          <p className="text-sm font-semibold">{user?.name}</p>
                          <p className="text-xs text-gray-500">{user?.email}</p>
                        </div>
                      </div>
                    </DropdownItem>
                  </DropdownSection>
                  <DropdownSection showDivider>
                    {accountLinks.map((link) => (
                      <DropdownItem
                        key={link.href}
                        as={Link}
                        href={link.href}
                        startContent={<link.icon className="h-4 w-4 text-gray-500" />}
                      >
                        {link.label}
                      </DropdownItem>
                    ))}
                  </DropdownSection>
                  <DropdownSection>
                    <DropdownItem
                      key="logout"
                      onPress={logout}
                      startContent={<LogOut className="h-4 w-4" />}
                      className="text-red-600"
                      color="danger"
                    >
                      {t('common.logout')}
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Button
                isIconOnly
                variant="flat"
                radius="full"
                className="bg-[#0D6B5F] text-white"
                as={Link}
                href="/auth/login"
              >
                <User className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            isIconOnly
            variant="light"
            className="md:hidden"
            onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <Container className="py-4">
            <div className="flex flex-col gap-4">
              {/* Add Listing */}
              <Button
                as={Link}
                href={isAuthenticated ? '/account/listings/new' : '/auth/login'}
                className="w-full bg-[#FFB011] text-white font-medium"
                radius="lg"
                startContent={<Plus className="h-4 w-4" />}
                onPress={() => setMobileMenuOpen(false)}
              >
                {t('common.addListing')}
              </Button>

              <Divider />

              {/* Mobile Links */}
              <div className="flex items-center justify-around">
                <Link
                  href="/wishlist"
                  className="flex flex-col items-center gap-1 text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Heart className="h-5 w-5" />
                  <span className="text-xs">რჩეულები</span>
                </Link>
                <Link
                  href="/cart"
                  className="flex flex-col items-center gap-1 text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="text-xs">კალათა</span>
                </Link>
                <LanguageToggle />
              </div>

              <Divider />

              {/* Auth */}
              {isAuthenticated ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Avatar
                      src={user?.avatar}
                      name={user?.name?.charAt(0)}
                      size="md"
                      classNames={{
                        base: 'bg-[#FFB011]',
                        name: 'text-white font-semibold',
                      }}
                    />
                    <div>
                      <p className="font-semibold">{user?.name}</p>
                      <p className="text-sm text-[#FFB011]">{user?.balance?.toLocaleString()} ₾</p>
                    </div>
                  </div>
                  {accountLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <link.icon className="h-5 w-5 text-gray-500" />
                      {link.label}
                    </Link>
                  ))}
                  <Button
                    variant="light"
                    className="w-full text-red-600 justify-start"
                    startContent={<LogOut className="h-5 w-5" />}
                    onPress={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('common.logout')}
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Button
                    as={Link}
                    href="/auth/login"
                    variant="bordered"
                    className="flex-1"
                    onPress={() => setMobileMenuOpen(false)}
                  >
                    {t('common.login')}
                  </Button>
                  <Button
                    as={Link}
                    href="/auth/register"
                    className="flex-1 bg-[#0D6B5F] text-white"
                    onPress={() => setMobileMenuOpen(false)}
                  >
                    {t('common.register')}
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
