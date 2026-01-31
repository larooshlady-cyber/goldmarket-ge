'use client';

import { useLanguage } from '@/lib/i18n';
import { SortOption } from '@/lib/types';
import { Select, SelectItem } from '@heroui/react';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  const { t } = useLanguage();

  const options = [
    { key: 'newest', label: t('sort.newest') },
    { key: 'oldest', label: t('sort.oldest') },
    { key: 'price_asc', label: t('sort.priceAsc') },
    { key: 'price_desc', label: t('sort.priceDesc') },
    { key: 'popular', label: t('sort.popular') },
  ];

  return (
    <Select
      selectedKeys={[value]}
      onSelectionChange={(keys) => {
        const selected = Array.from(keys)[0] as SortOption;
        if (selected) onChange(selected);
      }}
      placeholder={t('common.sort')}
      variant="bordered"
      radius="md"
      classNames={{
        base: 'w-[180px]',
        trigger: cn(
          'h-10 border-gray-300 hover:border-gray-400',
          'data-[focus=true]:border-amber-500',
          'bg-white'
        ),
      }}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
