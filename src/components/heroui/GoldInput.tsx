'use client';

import { Input, InputProps } from '@heroui/react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface GoldInputProps extends Omit<InputProps, 'ref'> {
  /** Input size variant */
  inputSize?: 'sm' | 'md' | 'lg';
}

export const GoldInput = forwardRef<HTMLInputElement, GoldInputProps>(
  ({ inputSize = 'md', classNames, className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        variant="bordered"
        labelPlacement="outside"
        radius="md"
        size={inputSize}
        classNames={{
          base: cn('w-full', classNames?.base),
          label: cn(
            'text-sm font-medium text-gray-700 pb-1.5',
            classNames?.label
          ),
          input: cn(
            'text-gray-900 placeholder:text-gray-400',
            'focus:outline-none',
            classNames?.input
          ),
          inputWrapper: cn(
            'border-gray-300 hover:border-gray-400',
            'data-[hover=true]:border-gray-400',
            'data-[focus=true]:border-amber-500',
            'data-[focus=true]:ring-2 data-[focus=true]:ring-amber-500/20',
            'group-data-[invalid=true]:border-red-500',
            'group-data-[invalid=true]:ring-2 group-data-[invalid=true]:ring-red-500/20',
            'bg-white shadow-sm',
            'transition-all duration-200',
            classNames?.inputWrapper
          ),
          description: cn('text-xs text-gray-500 mt-1', classNames?.description),
          errorMessage: cn('text-xs text-red-600 mt-1', classNames?.errorMessage),
          helperWrapper: cn('mt-1', classNames?.helperWrapper),
          innerWrapper: cn(classNames?.innerWrapper),
          mainWrapper: cn(classNames?.mainWrapper),
          clearButton: cn(classNames?.clearButton),
        }}
        className={className}
        {...props}
      />
    );
  }
);

GoldInput.displayName = 'GoldInput';

// Textarea variant using HeroUI
import { Textarea, TextAreaProps } from '@heroui/react';

export interface GoldTextareaProps extends Omit<TextAreaProps, 'ref'> {}

export const GoldTextarea = forwardRef<HTMLTextAreaElement, GoldTextareaProps>(
  ({ classNames, className, ...props }, ref) => {
    return (
      <Textarea
        ref={ref}
        variant="bordered"
        labelPlacement="outside"
        radius="md"
        minRows={3}
        classNames={{
          base: cn('w-full', classNames?.base),
          label: cn(
            'text-sm font-medium text-gray-700 pb-1.5',
            classNames?.label
          ),
          input: cn(
            'text-gray-900 placeholder:text-gray-400',
            'focus:outline-none resize-none',
            classNames?.input
          ),
          inputWrapper: cn(
            'border-gray-300 hover:border-gray-400',
            'data-[hover=true]:border-gray-400',
            'data-[focus=true]:border-amber-500',
            'data-[focus=true]:ring-2 data-[focus=true]:ring-amber-500/20',
            'group-data-[invalid=true]:border-red-500',
            'group-data-[invalid=true]:ring-2 group-data-[invalid=true]:ring-red-500/20',
            'bg-white shadow-sm',
            'transition-all duration-200',
            classNames?.inputWrapper
          ),
          description: cn('text-xs text-gray-500 mt-1', classNames?.description),
          errorMessage: cn('text-xs text-red-600 mt-1', classNames?.errorMessage),
        }}
        className={className}
        {...props}
      />
    );
  }
);

GoldTextarea.displayName = 'GoldTextarea';
