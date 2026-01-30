'use client';

import { Card, CardHeader, CardBody, CardFooter, CardProps } from '@heroui/react';
import { forwardRef, ReactNode } from 'react';

export interface GoldCardProps extends CardProps {
  featured?: boolean;
  vipLevel?: 'none' | 'vip' | 'vip_plus' | 'super_vip';
}

const vipBorderColors = {
  none: '',
  vip: 'ring-2 ring-gray-400',
  vip_plus: 'ring-2 ring-[#0D6B5F]',
  super_vip: 'ring-2 ring-[#DC2626]',
};

export const GoldCard = forwardRef<HTMLDivElement, GoldCardProps>(
  ({ featured = false, vipLevel = 'none', className = '', children, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={`
          bg-white border border-gray-100 shadow-sm
          hover:shadow-md transition-shadow
          ${featured ? 'border-[#E8B44B] border-2' : ''}
          ${vipBorderColors[vipLevel]}
          ${className}
        `}
        {...props}
      >
        {children}
      </Card>
    );
  }
);

GoldCard.displayName = 'GoldCard';

export { CardHeader as GoldCardHeader, CardBody as GoldCardBody, CardFooter as GoldCardFooter };
