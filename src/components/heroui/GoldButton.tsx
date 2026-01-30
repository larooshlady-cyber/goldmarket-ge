'use client';

import { Button, ButtonProps } from '@heroui/react';
import { forwardRef } from 'react';

export interface GoldButtonProps extends Omit<ButtonProps, 'color'> {
  colorScheme?: 'primary' | 'secondary' | 'gold' | 'danger' | 'success' | 'default';
}

export const GoldButton = forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ colorScheme = 'primary', className = '', ...props }, ref) => {
    const colorClasses: Record<string, string> = {
      primary: 'bg-[#0D6B5F] text-white hover:bg-[#0A5A50] data-[hover=true]:bg-[#0A5A50]',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 data-[hover=true]:bg-gray-200',
      gold: 'bg-[#E8B44B] text-white hover:bg-[#D97706] data-[hover=true]:bg-[#D97706]',
      danger: 'bg-red-500 text-white hover:bg-red-600 data-[hover=true]:bg-red-600',
      success: 'bg-green-500 text-white hover:bg-green-600 data-[hover=true]:bg-green-600',
      default: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 data-[hover=true]:bg-gray-50',
    };

    return (
      <Button
        ref={ref}
        className={`font-medium transition-all ${colorClasses[colorScheme]} ${className}`}
        {...props}
      />
    );
  }
);

GoldButton.displayName = 'GoldButton';
