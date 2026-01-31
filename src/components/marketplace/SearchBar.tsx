'use client';

import { Search } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Input, Button } from '@heroui/react';
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
      <div className="flex gap-2">
        <Input
          type="search"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder || t('common.searchPlaceholder')}
          startContent={<Search className={cn('text-gray-400', size === 'large' ? 'h-5 w-5' : 'h-4 w-4')} />}
          variant="bordered"
          radius="md"
          size={size === 'large' ? 'lg' : 'md'}
          classNames={{
            inputWrapper: cn(
              'border-gray-300 hover:border-gray-400',
              'data-[focus=true]:border-amber-500',
              'bg-white'
            ),
          }}
        />
        <Button
          type="submit"
          size={size === 'large' ? 'md' : 'sm'}
          color="warning"
          className="font-medium"
        >
          {t('common.search')}
        </Button>
      </div>
    </form>
  );
}
