'use client';

import { Input, InputProps } from '@heroui/react';
import { forwardRef } from 'react';

export interface GoldInputProps extends InputProps {
  goldVariant?: 'flat' | 'bordered' | 'underlined' | 'faded';
}

export const GoldInput = forwardRef<HTMLInputElement, GoldInputProps>(
  ({ goldVariant = 'bordered', classNames, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        variant={goldVariant}
        classNames={{
          base: 'max-w-full',
          inputWrapper: [
            'border-gray-200',
            'hover:border-[#0D6B5F]',
            'group-data-[focus=true]:border-[#0D6B5F]',
            'group-data-[focus=true]:ring-2',
            'group-data-[focus=true]:ring-[#0D6B5F]/20',
            'bg-white',
            'data-[hover=true]:bg-white',
            'group-data-[focus=true]:bg-white',
          ],
          input: [
            'text-gray-900',
            'placeholder:text-gray-400',
          ],
          label: 'text-gray-700 font-medium',
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

GoldInput.displayName = 'GoldInput';
