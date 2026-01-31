'use client';

import { Chip, ChipProps } from '@heroui/react';
import { Crown, Star, Sparkles } from 'lucide-react';
import { forwardRef, ReactNode } from 'react';

export type VipLevel = 'vip' | 'vip_plus' | 'super_vip';

export interface VipBadgeProps extends Omit<ChipProps, 'color'> {
  level: VipLevel;
  showIcon?: boolean;
}

const vipConfig: Record<VipLevel, { label: string; icon: ReactNode; className: string }> = {
  vip: {
    label: 'VIP',
    icon: <Star className="h-3.5 w-3.5" />,
    className: 'bg-gray-500 text-white',
  },
  vip_plus: {
    label: 'VIP+',
    icon: <Sparkles className="h-3.5 w-3.5" />,
    className: 'bg-[#0D6B5F] text-white',
  },
  super_vip: {
    label: 'S-VIP',
    icon: <Crown className="h-3.5 w-3.5" />,
    className: 'bg-[#DC2626] text-white',
  },
};

export const VipBadge = forwardRef<HTMLDivElement, VipBadgeProps>(
  ({ level, showIcon = true, className = '', ...props }, ref) => {
    const config = vipConfig[level];

    return (
      <Chip
        ref={ref}
        startContent={showIcon ? config.icon : undefined}
        className={`${config.className} font-semibold text-xs px-3 py-2 h-auto min-h-[28px] rounded-xl ${className}`}
        radius="lg"
        {...props}
      >
        {config.label}
      </Chip>
    );
  }
);

VipBadge.displayName = 'VipBadge';

// Status badges for listings
export type ListingStatus = 'draft' | 'published' | 'paused' | 'sold' | 'archived';

export interface StatusBadgeProps extends Omit<ChipProps, 'color'> {
  status: ListingStatus;
}

const statusConfig: Record<ListingStatus, { label: string; className: string }> = {
  draft: {
    label: 'მონახაზი',
    className: 'bg-gray-100 text-gray-700',
  },
  published: {
    label: 'გამოქვეყნებული',
    className: 'bg-green-100 text-green-700',
  },
  paused: {
    label: 'შეჩერებული',
    className: 'bg-yellow-100 text-yellow-700',
  },
  sold: {
    label: 'გაყიდული',
    className: 'bg-blue-100 text-blue-700',
  },
  archived: {
    label: 'არქივი',
    className: 'bg-gray-100 text-gray-500',
  },
};

export const StatusBadge = forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ status, className = '', ...props }, ref) => {
    const config = statusConfig[status];

    return (
      <Chip
        ref={ref}
        className={`${config.className} font-medium text-xs px-3 py-2 h-auto min-h-[28px] rounded-xl ${className}`}
        radius="lg"
        variant="flat"
        {...props}
      >
        {config.label}
      </Chip>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';

// Verification badge
export interface VerificationBadgeProps extends Omit<ChipProps, 'color'> {
  verified: boolean;
}

export const VerificationBadge = forwardRef<HTMLDivElement, VerificationBadgeProps>(
  ({ verified, className = '', ...props }, ref) => {
    return (
      <Chip
        ref={ref}
        className={`
          font-medium text-xs px-3 py-2 h-auto min-h-[28px] rounded-xl
          ${verified 
            ? 'bg-green-100 text-green-700' 
            : 'bg-gray-100 text-gray-500'
          }
          ${className}
        `}
        radius="lg"
        variant="flat"
        {...props}
      >
        {verified ? 'ვერიფიცირებული' : 'არავერიფიცირებული'}
      </Chip>
    );
  }
);

VerificationBadge.displayName = 'VerificationBadge';
