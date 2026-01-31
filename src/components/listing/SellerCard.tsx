'use client';

import Link from 'next/link';
import { BadgeCheck, MapPin, Calendar, Package, ShoppingBag, Star } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Seller } from '@/lib/types';
import { Avatar, Chip, Card, CardBody, Divider } from '@heroui/react';
import { cn } from '@/lib/utils';

interface SellerCardProps {
  seller: Seller;
  className?: string;
  compact?: boolean;
}

export function SellerCard({ seller, className, compact = false }: SellerCardProps) {
  const { t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ka-GE', { year: 'numeric', month: 'short' });
  };

  if (compact) {
    return (
      <Link href={`/seller/${seller.slug}`}>
        <Card className={cn('transition-shadow hover:shadow-md', className)}>
          <CardBody className="flex flex-row items-center gap-3 p-4">
            <Avatar
              src={seller.avatar}
              name={seller.name.charAt(0).toUpperCase()}
              size="md"
              classNames={{
                base: 'h-12 w-12',
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 truncate">
                  {seller.name}
                </span>
                {seller.verificationStatus === 'verified' && (
                  <BadgeCheck className="h-4 w-4 flex-shrink-0 text-green-500" />
                )}
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="h-3 w-3" />
                {seller.city}
              </div>
            </div>
            {seller.rating && (
              <div className="flex items-center gap-1 text-sm font-medium">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {seller.rating}
              </div>
            )}
          </CardBody>
        </Card>
      </Link>
    );
  }

  return (
    <Card className={cn(className)}>
      <CardBody className="p-4">
        <Link
          href={`/seller/${seller.slug}`}
          className="flex items-center gap-4 group"
        >
          <Avatar
            src={seller.avatar}
            name={seller.name.charAt(0).toUpperCase()}
            size="lg"
            classNames={{
              base: 'h-16 w-16',
              name: 'text-xl',
            }}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                {seller.name}
              </h3>
              {seller.verificationStatus === 'verified' && (
                <Chip
                  color="success"
                  variant="flat"
                  size="sm"
                  startContent={<BadgeCheck className="h-3 w-3" />}
                >
                  {t('common.verified')}
                </Chip>
              )}
            </div>
            <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {seller.city}
              </span>
              {seller.rating && (
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  {seller.rating}
                </span>
              )}
            </div>
          </div>
        </Link>

        <Divider className="my-4" />

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <p className="mt-1 font-semibold text-gray-900">{seller.totalListings}</p>
            <p className="text-xs text-gray-500">{t('common.listings')}</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
              <Package className="h-4 w-4" />
            </div>
            <p className="mt-1 font-semibold text-gray-900">{seller.soldItems || 0}</p>
            <p className="text-xs text-gray-500">{t('common.sales')}</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
            </div>
            <p className="mt-1 font-semibold text-gray-900">{formatDate(seller.memberSince)}</p>
            <p className="text-xs text-gray-500">{t('common.memberSince')}</p>
          </div>
        </div>

        {seller.phone && (
          <>
            <Divider className="my-4" />
            <a
              href={`tel:${seller.phone}`}
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
            >
              {t('common.call')}
            </a>
          </>
        )}
      </CardBody>
    </Card>
  );
}
