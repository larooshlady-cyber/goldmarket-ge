'use client';

import { Checkbox, CheckboxProps, Switch, SwitchProps, RadioGroup, Radio, RadioGroupProps } from '@heroui/react';
import { forwardRef } from 'react';

// Styled Checkbox
export const GoldCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ classNames, ...props }, ref) => {
    return (
      <Checkbox
        ref={ref}
        classNames={{
          base: 'max-w-full',
          wrapper: [
            'border-gray-300',
            'group-data-[selected=true]:border-[#0D6B5F]',
            'group-data-[selected=true]:bg-[#0D6B5F]',
            'after:bg-[#0D6B5F]',
          ],
          label: 'text-gray-700',
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

GoldCheckbox.displayName = 'GoldCheckbox';

// Styled Switch
export const GoldSwitch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ classNames, ...props }, ref) => {
    return (
      <Switch
        ref={ref}
        classNames={{
          base: 'max-w-full',
          wrapper: [
            'group-data-[selected=true]:bg-[#0D6B5F]',
          ],
          label: 'text-gray-700',
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

GoldSwitch.displayName = 'GoldSwitch';

// Styled RadioGroup
export interface GoldRadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface GoldRadioGroupProps extends Omit<RadioGroupProps, 'children'> {
  options: GoldRadioOption[];
}

export const GoldRadioGroup = forwardRef<HTMLDivElement, GoldRadioGroupProps>(
  ({ options, classNames, ...props }, ref) => {
    return (
      <RadioGroup
        ref={ref}
        classNames={{
          base: 'max-w-full',
          label: 'text-gray-700 font-medium',
          ...classNames,
        }}
        {...props}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            description={option.description}
            classNames={{
              base: 'max-w-full',
              wrapper: [
                'border-gray-300',
                'group-data-[selected=true]:border-[#0D6B5F]',
              ],
              control: 'bg-[#0D6B5F]',
              label: 'text-gray-900',
              description: 'text-gray-500',
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
