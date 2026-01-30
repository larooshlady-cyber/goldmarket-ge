'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Search,
  Menu,
  X,
  User,
  Heart,
  Plus,
  LogIn,
  LogOut,
  LayoutDashboard,
  Settings,
  Wallet,
  Package,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { Container } from './Container';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
  Input,
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from '@heroui/react';
import { cn } from '@/lib/utils';

export function Header() {
  const { t } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/marketplace', label: t('nav.marketplace') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const accountLinks = [
    { href: '/account', label: t('nav.dashboard'), icon: LayoutDashboard },
    { href: '/account/listings', label: t('nav.myListings'), icon: Package },
    { href: '/account/wallet', label: t('nav.wallet'), icon: Wallet },
    { href: '/account/services', label: t('nav.services'), icon: ShieldCheck },
    { href: '/account/settings', label: t('common.settings'), icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="GoldMarket" 
              width={180} 
              height={35}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname === link.href 
                    ? 'text-[#FFB011] bg-[#FFF8E6]' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search - Desktop */}
          <div className="hidden flex-1 max-w-md lg:block">
            <Input
              type="search"
              placeholder={t('common.searchPlaceholder')}
              startContent={<Search className="h-4 w-4 text-gray-400" />}
              classNames={{
                base: 'w-full',
                inputWrapper: 'bg-gray-50 border-0 hover:bg-gray-100 focus-within:!bg-white focus-within:!ring-2 focus-within:!ring-[#FFB011]/20',
                input: 'text-sm',
              }}
              radius="lg"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <Button
              isIconOnly
              variant="light"
              className="lg:hidden"
              onPress={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Toggle */}
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>

            {/* Wishlist */}
            <Button
              isIconOnly
              variant="light"
              className="hidden sm:flex"
              as={Link}
              href="/wishlist"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Button>

            {/* Add Listing Button */}
            <Button
              as={Link}
              href={isAuthenticated ? '/account/listings/new' : '/auth/login'}
              className="hidden sm:flex bg-[#FFB011] text-black font-semibold hover:bg-[#E09D00]"
              radius="lg"
              startContent={<Plus className="h-4 w-4" />}
            >
              {t('common.addListing')}
            </Button>

            {/* Auth / Account */}
            {isAuthenticated ? (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button
                    isIconOnly
                    variant="light"
                    radius="full"
                    className="overflow-hidden"
                  >
                    <Avatar
                      src={user?.avatar}
                      name={user?.name?.charAt(0).toUpperCase()}
                      size="sm"
                      classNames={{
                        base: 'bg-[#FFB011]',
                        name: 'text-black font-semibold',
                      }}
                    />
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
                            name: 'text-black font-semibold',
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
              <div className="hidden items-center gap-2 sm:flex">
                <Button
                  as={Link}
                  href="/auth/login"
                  variant="light"
                  className="font-medium"
                  startContent={<LogIn className="h-4 w-4" />}
                >
                  {t('common.login')}
                </Button>
                <Button
                  as={Link}
                  href="/auth/register"
                  variant="bordered"
                  className="font-medium border-gray-300"
                  radius="lg"
                >
                  {t('common.register')}
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              isIconOnly
              variant="light"
              className="lg:hidden"
              onPress={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="border-t border-gray-100 py-3 lg:hidden">
            <Input
              type="search"
              placeholder={t('common.searchPlaceholder')}
              startContent={<Search className="h-4 w-4 text-gray-400" />}
              classNames={{
                inputWrapper: 'bg-gray-50 border-0',
                input: 'text-sm',
              }}
              radius="lg"
              autoFocus
            />
          </div>
        )}
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 bg-white lg:hidden overflow-y-auto">
          <Container className="py-6">
            <div className="flex flex-col gap-6">
              {/* Mobile Language Toggle */}
              <div className="sm:hidden">
                <LanguageToggle />
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      pathname === link.href
                        ? 'bg-[#FFF8E6] text-[#FFB011]'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Divider />

              {/* Mobile Add Listing */}
              <Button
                as={Link}
                href={isAuthenticated ? '/account/listings/new' : '/auth/login'}
                className="w-full bg-[#FFB011] text-black font-semibold hover:bg-[#E09D00]"
                radius="lg"
                size="lg"
                startContent={<Plus className="h-5 w-5" />}
                onPress={() => setIsMenuOpen(false)}
              >
                {t('common.addListing')}
              </Button>

              {/* Mobile Auth */}
              {isAuthenticated ? (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                    <Avatar
                      src={user?.avatar}
                      name={user?.name?.charAt(0).toUpperCase()}
                      size="md"
                      classNames={{
                        base: 'bg-[#FFB011]',
                        name: 'text-black font-semibold',
                      }}
                    />
                    <div>
                      <p className="font-semibold">{user?.name}</p>
                      <p className="text-sm text-gray-500">
                        {user?.balance?.toLocaleString()} {t('common.currency')}
                      </p>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-1">
                    {accountLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                      >
                        <link.icon className="h-5 w-5 text-gray-500" />
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button
                    variant="bordered"
                    className="mt-2 text-red-600 border-red-200 hover:bg-red-50"
                    startContent={<LogOut className="h-4 w-4" />}
                    onPress={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                  >
                    {t('common.logout')}
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Button
                    as={Link}
                    href="/auth/login"
                    className="w-full font-semibold"
                    variant="bordered"
                    size="lg"
                    radius="lg"
                    startContent={<LogIn className="h-5 w-5" />}
                    onPress={() => setIsMenuOpen(false)}
                  >
                    {t('common.login')}
                  </Button>
                  <Button
                    as={Link}
                    href="/auth/register"
                    className="w-full bg-[#0D6B5F] text-white font-semibold"
                    size="lg"
                    radius="lg"
                    onPress={() => setIsMenuOpen(false)}
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
