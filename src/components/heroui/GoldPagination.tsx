'use client';

import { Pagination, PaginationProps } from '@heroui/react';
import { forwardRef } from 'react';

export interface GoldPaginationProps extends PaginationProps {}

export const GoldPagination = forwardRef<HTMLElement, GoldPaginationProps>(
  ({ classNames, ...props }, ref) => {
    return (
      <Pagination
        ref={ref}
        classNames={{
          base: 'gap-0',
          wrapper: 'gap-1',
          item: [
            'text-sm',
            'font-medium',
            'text-gray-600',
            'bg-white',
            'border',
            'border-gray-200',
            'data-[hover=true]:bg-gray-50',
            'data-[hover=true]:border-gray-300',
          ],
          cursor: [
            'bg-[#0D6B5F]',
            'text-white',
            'border-[#0D6B5F]',
            'font-semibold',
          ],
          prev: 'text-gray-500',
          next: 'text-gray-500',
          ...classNames,
        }}
        showControls
        showShadow={false}
        {...props}
      />
    );
  }
);

GoldPagination.displayName = 'GoldPagination';
