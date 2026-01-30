'use client';

import { 
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell,
  TableProps,
} from '@heroui/react';
import { forwardRef } from 'react';

export interface GoldTableProps extends TableProps {
  stickyHeader?: boolean;
}

export const GoldTable = forwardRef<HTMLTableElement, GoldTableProps>(
  ({ stickyHeader = false, classNames, ...props }, ref) => {
    return (
      <Table
        ref={ref}
        aria-label="Data table"
        classNames={{
          base: 'max-w-full',
          table: 'min-w-full',
          wrapper: 'border border-gray-200 rounded-xl shadow-sm p-0',
          th: [
            'bg-gray-50',
            'text-gray-600',
            'font-semibold',
            'text-xs',
            'uppercase',
            'tracking-wide',
            'border-b',
            'border-gray-200',
          ],
          td: [
            'py-3',
            'text-sm',
            'text-gray-700',
            'border-b',
            'border-gray-100',
            'last:border-0',
          ],
          tr: 'hover:bg-gray-50 transition-colors',
          ...classNames,
        }}
        isStriped={false}
        {...props}
      />
    );
  }
);

GoldTable.displayName = 'GoldTable';

export { TableHeader, TableColumn, TableBody, TableRow, TableCell };
