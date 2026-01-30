'use client';

import { useLanguage } from '@/lib/i18n';
import { SortOption } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  const { t } = useLanguage();

  const options: { value: SortOption; label: string }[] = [
    { value: 'newest', label: t('sort.newest') },
    { value: 'oldest', label: t('sort.oldest') },
    { value: 'price_asc', label: t('sort.priceAsc') },
    { value: 'price_desc', label: t('sort.priceDesc') },
    { value: 'popular', label: t('sort.popular') },
  ];

  return (
    <Select value={value} onValueChange={(v) => onChange(v as SortOption)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t('common.sort')} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
