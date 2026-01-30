'use client';

import { Phone } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CallButtonProps {
  phone: string;
  className?: string;
  size?: 'default' | 'lg';
}

export function CallButton({ phone, className, size = 'default' }: CallButtonProps) {
  const { t } = useLanguage();

  return (
    <Button
      asChild
      className={cn(
        'bg-green-600 hover:bg-green-700',
        size === 'lg' && 'h-12 text-base',
        className
      )}
    >
      <a href={`tel:${phone}`}>
        <Phone className={cn('mr-2', size === 'lg' ? 'h-5 w-5' : 'h-4 w-4')} />
        {t('common.call')}
      </a>
    </Button>
  );
}
