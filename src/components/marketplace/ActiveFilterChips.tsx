'use client';

import { X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
        <Badge
          key={`${filter.key}-${filter.value}-${index}`}
          variant="secondary"
          className="flex items-center gap-1 pr-1"
        >
          <span className="text-gray-500">{filter.label}:</span>
          <span>{filter.value}</span>
          <button
            onClick={() => onRemove(filter.key, filter.value)}
            className="ml-1 rounded-full p-0.5 hover:bg-gray-300"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      <Button
        variant="ghost"
        size="sm"
        onClick={onClearAll}
        className="h-6 px-2 text-xs text-gray-500 hover:text-gray-700"
      >
        {t('common.clearFilters')}
      </Button>
    </div>
  );
}
