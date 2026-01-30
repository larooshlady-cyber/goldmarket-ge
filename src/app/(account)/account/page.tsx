'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { listings } from '@/lib/mock';
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Chip,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@heroui/react';
import {
  ListChecks,
  Wallet,
  Eye,
  TrendingUp,
  Plus,
  ArrowRight,
  Zap,
  ShieldCheck,
  ChevronRight,
  Package,
} from 'lucide-react';
import { StatusBadge, VipBadge } from '@/components/heroui';

export default function AccountDashboardPage() {
  const { t } = useLanguage();
  const { user } = useAuth();

  // Mock stats
  const stats = {
    activeListings: 5,
    totalViews: 1234,
    walletBalance: user?.balance || 150,
    soldItems: 8,
  };

  // Get user's recent listings (mock)
  const recentListings = listings.slice(0, 5);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ka-GE').format(price);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{t('account.dashboard')}</h1>
        <p className="mt-1 text-gray-500">
          მოგესალმებით, {user?.name || 'მომხმარებელი'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border border-gray-200 shadow-none">
          <CardBody className="p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <ListChecks className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('account.activeListings')}</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeListings}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="border border-gray-200 shadow-none">
          <CardBody className="p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('listing.views')}</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="border border-gray-200 shadow-none bg-[#FFF8E6]">
          <CardBody className="p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFB011]">
                <Wallet className="h-6 w-6 text-black" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{t('account.balance')}</p>
                <p className="text-2xl font-bold text-gray-900">{stats.walletBalance} ₾</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="border border-gray-200 shadow-none">
          <CardBody className="p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('account.soldListings')}</p>
                <p className="text-2xl font-bold text-gray-900">{stats.soldItems}</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">სწრაფი მოქმედებები</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/account/listings/new">
            <Card isPressable className="border border-gray-200 shadow-none hover:shadow-md transition-shadow">
              <CardBody className="flex flex-row items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFB011]">
                  <Plus className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t('account.createListing')}</p>
                  <p className="text-xs text-gray-500">ახალი განცხადება</p>
                </div>
              </CardBody>
            </Card>
          </Link>

          <Link href="/account/wallet">
            <Card isPressable className="border border-gray-200 shadow-none hover:shadow-md transition-shadow">
              <CardBody className="flex flex-row items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D6B5F]">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t('account.topUp')}</p>
                  <p className="text-xs text-gray-500">ბალანსის შევსება</p>
                </div>
              </CardBody>
            </Card>
          </Link>

          <Link href="/account/services">
            <Card isPressable className="border border-gray-200 shadow-none hover:shadow-md transition-shadow">
              <CardBody className="flex flex-row items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t('listingActions.boost')}</p>
                  <p className="text-xs text-gray-500">VIP სერვისები</p>
                </div>
              </CardBody>
            </Card>
          </Link>

          <Link href="/account/verification">
            <Card isPressable className="border border-gray-200 shadow-none hover:shadow-md transition-shadow">
              <CardBody className="flex flex-row items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t('account.verification')}</p>
                  <p className="text-xs text-gray-500">ვერიფიკაცია</p>
                </div>
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>

      {/* Recent Listings Table */}
      <Card className="border border-gray-200 shadow-none">
        <CardHeader className="flex justify-between items-center px-6 pt-5 pb-0">
          <h2 className="text-lg font-semibold text-gray-900">{t('account.myListings')}</h2>
          <Button
            as={Link}
            href="/account/listings"
            variant="light"
            className="text-gray-600"
            endContent={<ChevronRight className="h-4 w-4" />}
          >
            {t('common.viewAll')}
          </Button>
        </CardHeader>
        <CardBody className="px-0">
          <Table
            aria-label="Recent listings"
            classNames={{
              wrapper: 'shadow-none',
              th: 'bg-gray-50 text-gray-600 font-semibold text-xs uppercase',
            }}
            removeWrapper
          >
            <TableHeader>
              <TableColumn>განცხადება</TableColumn>
              <TableColumn>ფასი</TableColumn>
              <TableColumn>სტატუსი</TableColumn>
              <TableColumn>ნახვები</TableColumn>
              <TableColumn className="text-right">მოქმედება</TableColumn>
            </TableHeader>
            <TableBody>
              {recentListings.map((listing) => (
                <TableRow key={listing.id} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={listing.images[0]}
                          alt={listing.title}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 line-clamp-1">{listing.title}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          {listing.vipLevel !== 'none' && (
                            <VipBadge level={listing.vipLevel} size="sm" />
                          )}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold text-[#FFB011]">
                      {formatPrice(listing.price)} ₾
                    </span>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={listing.status} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Eye className="h-4 w-4" />
                      {listing.views}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      as={Link}
                      href={`/listing/${listing.slug}`}
                      size="sm"
                      variant="flat"
                      className="bg-gray-100"
                    >
                      ნახვა
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
