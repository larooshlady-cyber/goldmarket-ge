'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { AccountSidebar, BottomAccountTabs } from '@/components/account';
import { Button } from '@/components/ui/button';
import { LogOut, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LanguageToggle } from '@/components/layout';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  // Mock authentication check
  // In production, this would redirect to login if not authenticated
  // For now, we allow access to show the UI

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Mobile header */}
      <header className="sticky top-0 z-40 border-b bg-white md:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <div className="border-b p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user?.name || 'User'}</p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                </div>
                <nav className="space-y-1 p-4">
                  <Link
                    href="/account/listings/new"
                    className="flex items-center gap-3 rounded-lg bg-amber-500 px-3 py-2 text-sm font-medium text-white"
                  >
                    {t('account.createListing')}
                  </Link>
                  <Link
                    href="/account/verification"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t('account.verification')}
                  </Link>
                </nav>
                <div className="mt-auto border-t p-4">
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-5 w-5" />
                    {t('common.logout')}
                  </button>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
                <span className="text-lg font-bold text-white">G</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Desktop header */}
      <header className="sticky top-0 z-40 hidden border-b bg-white md:block">
        <div className="flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
              <span className="text-xl font-bold text-white">G</span>
            </div>
            <span className="text-xl font-bold">GoldMarket</span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button variant="ghost" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              {t('common.logout')}
            </Button>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex flex-1">
        <AccountSidebar />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
      </div>

      {/* Mobile bottom tabs */}
      <BottomAccountTabs />
    </div>
  );
}
