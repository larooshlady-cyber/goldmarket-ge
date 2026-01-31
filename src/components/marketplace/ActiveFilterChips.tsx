'use client';

import { useLanguage } from '@/lib/i18n';
import { Chip, Button } from '@heroui/react';
import { cn } from '@/lib/utils';

export interface ActiveFilter {
  key: string;
  label: string;
  value: string;
}

interface ActiveFilterChipsProps {
  filters: ActiveFilter[];
  onRemove: (key: string, value: string) => void;
  onClearAll: () => void;
  className?: string;
}

export function ActiveFilterChips({
  filters,
  onRemove,
  onClearAll,
  className,
}: ActiveFilterChipsProps) {
  const { t } = useLanguage();

  if (filters.length === 0) return null;

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {filters.map((filter, index) => (
        <Chip
          key={`${filter.key}-${filter.value}-${index}`}
          variant="flat"
          color="default"
          onClose={() => onRemove(filter.key, filter.value)}
          classNames={{
            base: 'bg-gray-100 text-gray-700',
            closeButton: 'text-gray-500 hover:text-gray-700',
          }}
        >
          <span className="text-gray-500">{filter.label}:</span>{' '}
          <span>{filter.value}</span>
        </Chip>
      ))}
      <Button
        variant="light"
        size="sm"
        onPress={onClearAll}
        className="h-6 px-2 text-xs text-gray-500 hover:text-gray-700"
      >
        {t('common.clearFilters')}
      </Button>
    </div>
  );
}
