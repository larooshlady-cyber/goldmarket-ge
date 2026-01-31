'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Eye, MapPin, BadgeCheck, Crown, Star, Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Listing, VipLevel } from '@/lib/types';
import { Card, CardBody, Chip, Skeleton } from '@heroui/react';
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
    className: 'ring-2 ring-gray-400',
    badgeClass: 'bg-gray-500 text-white',
  },
  vip_plus: {
    label: 'VIP+',
    icon: Sparkles,
    className: 'ring-2 ring-[#0D6B5F]',
    badgeClass: 'bg-[#0D6B5F] text-white',
  },
  super_vip: {
    label: 'S-VIP',
    icon: Crown,
    className: 'ring-2 ring-red-500',
    badgeClass: 'bg-red-500 text-white',
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
      className={cn('group block', className)}
    >
      <Card
        isPressable
        className={cn(
          'w-full border border-gray-200 bg-white transition-all hover:shadow-lg hover:-translate-y-1',
          vip?.className
        )}
        radius="lg"
        shadow="none"
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={listing.images[0]}
            alt={listing.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* VIP Badge */}
          {vip && (
            <Chip
              startContent={<vip.icon className="h-3.5 w-3.5" />}
              className={cn(
                'absolute left-2 top-2 font-semibold text-[11px] uppercase tracking-wide px-3 py-1.5 h-auto',
                vip.badgeClass
              )}
              radius="md"
            >
              {vip.label}
            </Chip>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 shadow-sm opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4 text-gray-600" />
          </button>

          {/* Verified Seller Badge */}
          {listing.seller?.verificationStatus === 'verified' && (
            <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-lg bg-white/90 px-2.5 py-1.5 text-xs font-medium text-[#0D6B5F]">
              <BadgeCheck className="h-3.5 w-3.5" />
              დადასტურებული
            </div>
          )}

          {/* Views */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-lg bg-black/60 px-2.5 py-1.5 text-xs text-white">
            <Eye className="h-3 w-3" />
            {listing.views}
          </div>
        </div>

        {/* Content */}
        <CardBody className="p-4">
          <h3 className="line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-[#FFB011] transition-colors">
            {listing.title}
          </h3>

          <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
            <MapPin className="h-3 w-3" />
            {listing.city}
          </div>

          <div className="mt-3 flex items-baseline justify-between">
            <p className="text-lg font-bold text-[#FFB011]">
              {formatPrice(listing.price)} <span className="text-sm font-normal text-gray-500">{t('common.currency')}</span>
            </p>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}

export function SkeletonCard() {
  return (
    <Card className="w-full border border-gray-200" radius="lg" shadow="none">
      <Skeleton className="aspect-square rounded-t-lg" />
      <CardBody className="p-4">
        <Skeleton className="h-4 w-3/4 rounded-lg" />
        <Skeleton className="mt-2 h-3 w-1/2 rounded-lg" />
        <Skeleton className="mt-3 h-5 w-1/3 rounded-lg" />
      </CardBody>
    </Card>
  );
}
