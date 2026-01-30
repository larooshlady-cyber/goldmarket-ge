'use client';

import { useState } from 'react';
import Link from 'next/link';
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
} from 'lucide-react';
import { Container } from './Container';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export function Header() {
  const { t } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
              <span className="text-lg font-bold text-white">G</span>
            </div>
            <span className="hidden text-lg font-semibold text-gray-900 sm:block">
              GoldMarket
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-amber-600',
                  pathname === link.href ? 'text-amber-600' : 'text-gray-600'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search - Desktop */}
          <div className="hidden flex-1 max-w-md lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder={t('common.searchPlaceholder')}
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Toggle */}
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>

            {/* Wishlist (optional UI) */}
            <Button variant="ghost" size="icon" className="hidden sm:flex" asChild>
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>

            {/* Add Listing Button */}
            <Button
              size="sm"
              className="hidden bg-amber-500 hover:bg-amber-600 sm:flex"
              asChild
            >
              <Link href={isAuthenticated ? '/account/listings/new' : '/auth/login'}>
                <Plus className="mr-1 h-4 w-4" />
                {t('common.addListing')}
              </Link>
            </Button>

            {/* Auth / Account */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback>
                        {user?.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  {accountLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link href={link.href} className="flex items-center gap-2">
                        <link.icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-red-600 focus:text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {t('common.logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden items-center gap-2 sm:flex">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/auth/login">
                    <LogIn className="mr-1 h-4 w-4" />
                    {t('common.login')}
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/auth/register">{t('common.register')}</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetTitle className="sr-only">მენიუ</SheetTitle>
                <div className="flex flex-col gap-6 pt-6">
                  {/* Mobile Language Toggle */}
                  <div className="sm:hidden">
                    <LanguageToggle />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                          pathname === link.href
                            ? 'bg-amber-50 text-amber-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Add Listing */}
                  <Button
                    className="w-full bg-amber-500 hover:bg-amber-600"
                    asChild
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link
                      href={isAuthenticated ? '/account/listings/new' : '/auth/login'}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      {t('common.addListing')}
                    </Link>
                  </Button>

                  {/* Mobile Auth */}
                  {isAuthenticated ? (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user?.avatar} alt={user?.name} />
                          <AvatarFallback>
                            {user?.name?.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{user?.name}</p>
                          <p className="text-xs text-gray-500">
                            {user?.balance} {t('common.currency')}
                          </p>
                        </div>
                      </div>
                      <nav className="flex flex-col gap-1">
                        {accountLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
                          >
                            <link.icon className="h-4 w-4" />
                            {link.label}
                          </Link>
                        ))}
                      </nav>
                      <Button
                        variant="outline"
                        className="mt-2 text-red-600 hover:text-red-600"
                        onClick={() => {
                          logout();
                          setMobileMenuOpen(false);
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        {t('common.logout')}
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Button asChild onClick={() => setMobileMenuOpen(false)}>
                        <Link href="/auth/login">
                          <LogIn className="mr-2 h-4 w-4" />
                          {t('common.login')}
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href="/auth/register">{t('common.register')}</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="border-t border-gray-100 py-3 lg:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder={t('common.searchPlaceholder')}
                className="pl-10 pr-4"
                autoFocus
              />
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
