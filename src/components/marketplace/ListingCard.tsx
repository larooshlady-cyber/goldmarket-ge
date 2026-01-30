'use client';

import Link from 'next/link';
import { Eye, MapPin, BadgeCheck, Crown, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Listing, VipLevel } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ListingCardProps {
  listing: Listing;
  className?: string;
}

const vipConfig: Record<
  VipLevel,
  { label: string; icon: typeof Crown; className: string; badgeClass: string } | null
> = {
  none: null,
  vip: {
    label: 'VIP',
    icon: Star,
    className: 'ring-2 ring-blue-400',
    badgeClass: 'bg-blue-500 text-white',
  },
  vip_plus: {
    label: 'VIP+',
    icon: Sparkles,
    className: 'ring-2 ring-purple-400',
    badgeClass: 'bg-purple-500 text-white',
  },
  super_vip: {
    label: 'Super VIP',
    icon: Crown,
    className: 'ring-2 ring-amber-400',
    badgeClass: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
  },
};

export function ListingCard({ listing, className }: ListingCardProps) {
  const { t } = useLanguage();
  const vip = vipConfig[listing.vipLevel];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ka-GE').format(price);
  };

  return (
    <Link
      href={`/listing/${listing.slug}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg',
        vip?.className,
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />

        {/* VIP Badge */}
        {vip && (
          <Badge
            className={cn(
              'absolute left-2 top-2 flex items-center gap-1',
              vip.badgeClass
            )}
          >
            <vip.icon className="h-3 w-3" />
            {vip.label}
          </Badge>
        )}

        {/* Verified Seller Badge */}
        {listing.seller?.verificationStatus === 'verified' && (
          <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
            <BadgeCheck className="h-4 w-4 text-green-500" />
          </div>
        )}

        {/* Views */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
          <Eye className="h-3 w-3" />
          {listing.views}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-amber-600">
          {listing.title}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
          <MapPin className="h-3 w-3" />
          {listing.city}
        </div>

        <div className="mt-auto pt-3">
          <p className="text-lg font-semibold text-gray-900">
            {formatPrice(listing.price)} {t('common.currency')}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="aspect-square animate-pulse bg-gray-200" />
      <div className="flex flex-col gap-2 p-3">
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-gray-200" />
        <div className="mt-2 h-5 w-1/3 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}
