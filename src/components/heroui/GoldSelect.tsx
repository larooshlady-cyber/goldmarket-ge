'use client';

import { Select, SelectItem, SelectProps, SelectSection } from '@heroui/react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  key: string;
  label: string;
  description?: string;
  startContent?: React.ReactNode;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

export interface GoldSelectProps extends Omit<SelectProps, 'children' | 'ref'> {
  /** Options for the select */
  options: SelectOption[];
  /** Grouped options (alternative to options) */
  groups?: SelectOptionGroup[];
  /** Select size variant */
  selectSize?: 'sm' | 'md' | 'lg';
}

export const GoldSelect = forwardRef<HTMLSelectElement, GoldSelectProps>(
  ({ options, groups, selectSize = 'md', classNames, className, ...props }, ref) => {
    const renderOptions = () => {
      if (groups && groups.length > 0) {
        return groups.map((group) => (
          <SelectSection key={group.label} title={group.label} showDivider>
            {group.options.map((option) => (
              <SelectItem
                key={option.key}
                description={option.description}
                startContent={option.startContent}
                textValue={option.label}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectSection>
        ));
      }

      return options.map((option) => (
        <SelectItem
          key={option.key}
          description={option.description}
          startContent={option.startContent}
          textValue={option.label}
        >
          {option.label}
        </SelectItem>
      ));
    };

    return (
      <Select
        ref={ref}
        variant="bordered"
        labelPlacement="outside"
        radius="md"
        size={selectSize}
        classNames={{
          base: cn('w-full', classNames?.base),
          label: cn(
            'text-sm font-medium text-gray-700 pb-1.5',
            classNames?.label
          ),
          trigger: cn(
            'border-gray-300 hover:border-gray-400',
            'data-[hover=true]:border-gray-400',
            'data-[focus=true]:border-amber-500',
            'data-[focus=true]:ring-2 data-[focus=true]:ring-amber-500/20',
            'data-[open=true]:border-amber-500',
            'data-[open=true]:ring-2 data-[open=true]:ring-amber-500/20',
            'bg-white shadow-sm',
            'transition-all duration-200',
            classNames?.trigger
          ),
          value: cn('text-gray-900', classNames?.value),
          selectorIcon: cn('text-gray-400', classNames?.selectorIcon),
          description: cn('text-xs text-gray-500 mt-1', classNames?.description),
          errorMessage: cn('text-xs text-red-600 mt-1', classNames?.errorMessage),
          listbox: cn('', classNames?.listbox),
          listboxWrapper: cn('', classNames?.listboxWrapper),
          popoverContent: cn(
            'border border-gray-200 shadow-lg',
            classNames?.popoverContent
          ),
          mainWrapper: cn(classNames?.mainWrapper),
          innerWrapper: cn(classNames?.innerWrapper),
          helperWrapper: cn('mt-1', classNames?.helperWrapper),
        }}
        className={className}
        {...props}
      >
        {renderOptions()}
      </Select>
    );
  }
);

GoldSelect.displayName = 'GoldSelect';

// Multi-select variant
export interface GoldMultiSelectProps extends Omit<GoldSelectProps, 'selectionMode'> {}

export const GoldMultiSelect = forwardRef<HTMLSelectElement, GoldMultiSelectProps>(
  (props, ref) => {
    return <GoldSelect ref={ref} selectionMode="multiple" {...props} />;
  }
);

GoldMultiSelect.displayName = 'GoldMultiSelect';
