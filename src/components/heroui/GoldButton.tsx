'use client';

import { Button, ButtonProps } from '@heroui/react';
import { forwardRef } from 'react';

export interface GoldButtonProps extends Omit<ButtonProps, 'color'> {
  colorScheme?: 'primary' | 'secondary' | 'gold' | 'danger' | 'success' | 'default';
}

export const GoldButton = forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ colorScheme = 'primary', className = '', radius = 'lg', ...props }, ref) => {
    const colorClasses: Record<string, string> = {
      primary: 'bg-[#FFB011] text-black font-semibold hover:bg-[#E09D00] data-[hover=true]:bg-[#E09D00]',
      secondary: 'bg-[#0D6B5F] text-white font-semibold hover:bg-[#0A5A50] data-[hover=true]:bg-[#0A5A50]',
      gold: 'bg-[#FFB011] text-black font-semibold hover:bg-[#E09D00] data-[hover=true]:bg-[#E09D00]',
      danger: 'bg-red-500 text-white font-semibold hover:bg-red-600 data-[hover=true]:bg-red-600',
      success: 'bg-green-500 text-white font-semibold hover:bg-green-600 data-[hover=true]:bg-green-600',
      default: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 data-[hover=true]:bg-gray-50',
    };

    return (
      <Button
        ref={ref}
        className={`font-medium transition-all ${colorClasses[colorScheme]} ${className}`}
        radius={radius}
        {...props}
      />
    );
  }
);

GoldButton.displayName = 'GoldButton';
