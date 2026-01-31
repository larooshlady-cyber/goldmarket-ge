'use client';

import {
  Checkbox,
  CheckboxProps,
  Switch,
  SwitchProps,
  RadioGroup,
  Radio,
  RadioGroupProps,
  CheckboxGroup,
  CheckboxGroupProps,
} from '@heroui/react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

// ============================================
// Styled Checkbox
// ============================================
export interface GoldCheckboxProps extends Omit<CheckboxProps, 'ref'> {}

export const GoldCheckbox = forwardRef<HTMLInputElement, GoldCheckboxProps>(
  ({ classNames, className, ...props }, ref) => {
    return (
      <Checkbox
        ref={ref}
        color="warning"
        radius="sm"
        classNames={{
          base: cn(
            'inline-flex items-center gap-2',
            'cursor-pointer hover:opacity-80',
            'data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed',
            classNames?.base
          ),
          wrapper: cn(
            'before:border-gray-300',
            'group-data-[hover=true]:before:border-gray-400',
            'after:bg-amber-500',
            'group-data-[selected=true]:after:bg-amber-500',
            'group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-amber-500/20',
            classNames?.wrapper
          ),
          icon: cn('text-white', classNames?.icon),
          label: cn('text-sm text-gray-700', classNames?.label),
        }}
        className={className}
        {...props}
      />
    );
  }
);

GoldCheckbox.displayName = 'GoldCheckbox';

// ============================================
// Styled Checkbox Group
// ============================================
export interface GoldCheckboxOption {
  value: string;
  label: string;
  description?: string;
  isDisabled?: boolean;
}

export interface GoldCheckboxGroupProps extends Omit<CheckboxGroupProps, 'children' | 'ref'> {
  options: GoldCheckboxOption[];
  orientation?: 'horizontal' | 'vertical';
}

export const GoldCheckboxGroup = forwardRef<HTMLDivElement, GoldCheckboxGroupProps>(
  ({ options, orientation = 'vertical', classNames, className, ...props }, ref) => {
    return (
      <CheckboxGroup
        ref={ref}
        orientation={orientation}
        classNames={{
          base: cn('w-full', classNames?.base),
          label: cn('text-sm font-medium text-gray-700 mb-2', classNames?.label),
          wrapper: cn(
            orientation === 'horizontal' ? 'flex-row flex-wrap gap-4' : 'flex-col gap-2',
            classNames?.wrapper
          ),
          description: cn('text-xs text-gray-500 mt-1', classNames?.description),
          errorMessage: cn('text-xs text-red-600 mt-1', classNames?.errorMessage),
        }}
        className={className}
        {...props}
      >
        {options.map((option) => (
          <GoldCheckbox
            key={option.value}
            value={option.value}
            isDisabled={option.isDisabled}
          >
            {option.label}
          </GoldCheckbox>
        ))}
      </CheckboxGroup>
    );
  }
);

GoldCheckboxGroup.displayName = 'GoldCheckboxGroup';

// ============================================
// Styled Switch
// ============================================
export interface GoldSwitchProps extends Omit<SwitchProps, 'ref'> {}

export const GoldSwitch = forwardRef<HTMLInputElement, GoldSwitchProps>(
  ({ classNames, className, ...props }, ref) => {
    return (
      <Switch
        ref={ref}
        color="warning"
        classNames={{
          base: cn(
            'inline-flex items-center gap-2 cursor-pointer',
            'data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed',
            classNames?.base
          ),
          wrapper: cn(
            'bg-gray-200',
            'group-data-[selected=true]:bg-amber-500',
            'group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-amber-500/20',
            classNames?.wrapper
          ),
          thumb: cn(
            'bg-white shadow-sm',
            classNames?.thumb
          ),
          label: cn('text-sm text-gray-700', classNames?.label),
        }}
        className={className}
        {...props}
      />
    );
  }
);

GoldSwitch.displayName = 'GoldSwitch';

// ============================================
// Styled RadioGroup
// ============================================
export interface GoldRadioOption {
  value: string;
  label: string;
  description?: string;
  isDisabled?: boolean;
}

export interface GoldRadioGroupProps extends Omit<RadioGroupProps, 'children' | 'ref'> {
  options: GoldRadioOption[];
  orientation?: 'horizontal' | 'vertical';
}

export const GoldRadioGroup = forwardRef<HTMLDivElement, GoldRadioGroupProps>(
  ({ options, orientation = 'vertical', classNames, className, ...props }, ref) => {
    return (
      <RadioGroup
        ref={ref}
        color="warning"
        orientation={orientation}
        classNames={{
          base: cn('w-full', classNames?.base),
          label: cn('text-sm font-medium text-gray-700 mb-2', classNames?.label),
          wrapper: cn(
            orientation === 'horizontal' ? 'flex-row flex-wrap gap-4' : 'flex-col gap-2',
            classNames?.wrapper
          ),
          description: cn('text-xs text-gray-500 mt-1', classNames?.description),
          errorMessage: cn('text-xs text-red-600 mt-1', classNames?.errorMessage),
        }}
        className={className}
        {...props}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            description={option.description}
            isDisabled={option.isDisabled}
            classNames={{
              base: cn(
                'inline-flex items-center gap-2 cursor-pointer',
                'data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed',
                'm-0'
              ),
              wrapper: cn(
                'border-gray-300',
                'group-data-[hover=true]:border-gray-400',
                'group-data-[selected=true]:border-amber-500',
                'group-data-[selected=true]:bg-amber-500',
                'group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-amber-500/20'
              ),
              label: cn('text-sm text-gray-700'),
              description: cn('text-xs text-gray-500'),
            }}
          >
            {option.label}
          </Radio>
        ))}
      </RadioGroup>
    );
  }
);

GoldRadioGroup.displayName = 'GoldRadioGroup';
