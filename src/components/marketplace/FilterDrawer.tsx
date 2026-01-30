'use client';

import { Filter } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { FilterConfig, FilterValues } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FilterSidebar } from './FilterSidebar';

interface FilterDrawerProps {
  config: FilterConfig;
  values: FilterValues;
  onChange: (values: FilterValues) => void;
  onApply: () => void;
  onReset: () => void;
  activeFiltersCount?: number;
}

export function FilterDrawer({
  config,
  values,
  onChange,
  onApply,
  onReset,
  activeFiltersCount = 0,
}: FilterDrawerProps) {
  const { t } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          {t('common.filter')}
          {activeFiltersCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs text-white">
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{t('common.filter')}</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <FilterSidebar
            config={config}
            values={values}
            onChange={onChange}
            onApply={onApply}
            onReset={onReset}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
