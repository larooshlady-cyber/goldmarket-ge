'use client';

import Link from 'next/link';
import { BadgeCheck, MapPin, Calendar, Package, ShoppingBag, Star } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Seller } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
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
          <CardContent className="flex items-center gap-3 p-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={seller.avatar} alt={seller.name} />
              <AvatarFallback>{seller.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
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
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Card className={cn(className)}>
      <CardContent className="p-4">
        <Link
          href={`/seller/${seller.slug}`}
          className="flex items-center gap-4 group"
        >
          <Avatar className="h-16 w-16">
            <AvatarImage src={seller.avatar} alt={seller.name} />
            <AvatarFallback className="text-xl">
              {seller.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                {seller.name}
              </h3>
              {seller.verificationStatus === 'verified' && (
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  <BadgeCheck className="mr-1 h-3 w-3" />
                  {t('common.verified')}
                </Badge>
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

        <div className="mt-4 grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-500">
              <Package className="h-4 w-4" />
            </div>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {seller.totalListings}
            </p>
            <p className="text-xs text-gray-500">{t('sellerProfile.totalListings')}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-500">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {seller.soldItems}
            </p>
            <p className="text-xs text-gray-500">{t('sellerProfile.soldItems')}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-500">
              <Calendar className="h-4 w-4" />
            </div>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {formatDate(seller.memberSince)}
            </p>
            <p className="text-xs text-gray-500">{t('sellerProfile.memberSince')}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
