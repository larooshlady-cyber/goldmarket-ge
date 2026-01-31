'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@heroui/react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={cn('flex items-center justify-center gap-1', className)}>
      <Button
        variant="bordered"
        size="sm"
        isIconOnly
        isDisabled={currentPage === 1}
        onPress={() => onPageChange(currentPage - 1)}
        className="h-9 w-9 min-w-9"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {getPageNumbers().map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
              ...
            </span>
          );
        }

        return (
          <Button
            key={page}
            variant={currentPage === page ? 'solid' : 'bordered'}
            color={currentPage === page ? 'warning' : 'default'}
            size="sm"
            isIconOnly
            onPress={() => onPageChange(page as number)}
            className="h-9 w-9 min-w-9"
          >
            {page}
          </Button>
        );
      })}

      <Button
        variant="bordered"
        size="sm"
        isIconOnly
        isDisabled={currentPage === totalPages}
        onPress={() => onPageChange(currentPage + 1)}
        className="h-9 w-9 min-w-9"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
