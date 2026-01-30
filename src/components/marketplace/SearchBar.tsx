'use client';

import { Search } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
  placeholder?: string;
  className?: string;
  size?: 'default' | 'large';
}

export function SearchBar({
  value = '',
  onChange,
  onSearch,
  placeholder,
  className,
  size = 'default',
}: SearchBarProps) {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.();
  };

  return (
    <form onSubmit={handleSubmit} className={cn('relative', className)}>
      <div className="relative">
        <Search
          className={cn(
            'absolute left-3 top-1/2 -translate-y-1/2 text-gray-400',
            size === 'large' ? 'h-5 w-5' : 'h-4 w-4'
          )}
        />
        <Input
          type="search"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder || t('common.searchPlaceholder')}
          className={cn(
            'pr-24',
            size === 'large' ? 'h-12 pl-11 text-base' : 'h-10 pl-10'
          )}
        />
        <Button
          type="submit"
          size={size === 'large' ? 'default' : 'sm'}
          className={cn(
            'absolute right-1.5 top-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-600',
            size === 'large' ? 'h-9' : 'h-7'
          )}
        >
          {t('common.search')}
        </Button>
      </div>
    </form>
  );
}
