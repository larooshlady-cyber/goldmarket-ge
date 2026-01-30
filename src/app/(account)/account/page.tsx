'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { listings } from '@/lib/mock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ListChecks,
  Wallet,
  Eye,
  TrendingUp,
  Plus,
  ArrowRight,
} from 'lucide-react';

export default function AccountDashboardPage() {
  const { t } = useLanguage();
  const { user } = useAuth();

  // Mock stats
  const stats = {
    activeListings: 5,
    totalViews: 1234,
    walletBalance: 150,
    soldItems: 8,
  };

  // Get user's recent listings (mock)
  const recentListings = listings.slice(0, 4);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t('account.dashboard')}</h1>
        <p className="text-gray-600">
          {t('home.heroSubtitle')}
        </p>
      </div>

      {/* Stats grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <ListChecks className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{t('account.activeListings')}</p>
              <p className="text-2xl font-bold">{stats.activeListings}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <Eye className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{t('listing.views')}</p>
              <p className="text-2xl font-bold">{stats.totalViews}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
              <Wallet className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{t('account.balance')}</p>
              <p className="text-2xl font-bold">{stats.walletBalance} {t('common.currency')}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{t('account.soldListings')}</p>
              <p className="text-2xl font-bold">{stats.soldItems}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick actions */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">{t('footer.quickLinks')}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/account/listings/new">
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                  <Plus className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">{t('account.createListing')}</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/account/wallet">
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500">
                  <Wallet className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">{t('account.topUp')}</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/account/services">
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">{t('listingActions.boost')}</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/account/verification">
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                  <Badge className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">{t('account.verification')}</span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Recent listings */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{t('account.myListings')}</CardTitle>
          <Button variant="ghost" asChild>
            <Link href="/account/listings" className="gap-2">
              {t('common.viewAll')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-500">
                  <th className="pb-3 pr-4">{t('common.images')}</th>
                  <th className="pb-3 pr-4">{t('common.title')}</th>
                  <th className="pb-3 pr-4">{t('common.price')}</th>
                  <th className="pb-3 pr-4">{t('common.status')}</th>
                  <th className="pb-3">{t('listing.views')}</th>
                </tr>
              </thead>
              <tbody>
                {recentListings.map((listing) => (
                  <tr key={listing.id} className="border-b last:border-0">
                    <td className="py-3 pr-4">
                      <img
                        src={listing.images[0]}
                        alt={listing.title}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                    </td>
                    <td className="py-3 pr-4">
                      <Link
                        href={`/listing/${listing.slug}`}
                        className="font-medium hover:text-amber-600"
                      >
                        {listing.title}
                      </Link>
                    </td>
                    <td className="py-3 pr-4">
                      {listing.price.toLocaleString()} {t('common.currency')}
                    </td>
                    <td className="py-3 pr-4">
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {t('listingStatus.published')}
                      </Badge>
                    </td>
                    <td className="py-3">{listing.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
