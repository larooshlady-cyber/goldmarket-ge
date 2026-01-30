'use client';

import { Select, SelectItem, SelectProps } from '@heroui/react';
import { forwardRef } from 'react';

export interface SelectOption {
  key: string;
  label: string;
  description?: string;
}

export interface GoldSelectProps extends Omit<SelectProps, 'children'> {
  options: SelectOption[];
}

export const GoldSelect = forwardRef<HTMLSelectElement, GoldSelectProps>(
  ({ options, classNames, ...props }, ref) => {
    return (
      <Select
        ref={ref}
        classNames={{
          base: 'max-w-full',
          trigger: [
            'border-gray-200',
            'bg-white',
            'hover:border-[#0D6B5F]',
            'data-[hover=true]:bg-white',
            'data-[open=true]:border-[#0D6B5F]',
            'data-[focus=true]:border-[#0D6B5F]',
            'shadow-none',
          ],
          value: 'text-gray-900',
          label: 'text-gray-700 font-medium',
          listboxWrapper: 'max-h-[300px]',
          ...classNames,
        }}
        variant="bordered"
        {...props}
      >
        {options.map((option) => (
          <SelectItem key={option.key} description={option.description}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    );
  }
);

GoldSelect.displayName = 'GoldSelect';
