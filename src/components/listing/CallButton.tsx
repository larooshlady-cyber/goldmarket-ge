'use client';

import { Phone } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@heroui/react';
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
      as="a"
      href={`tel:${phone}`}
      color="success"
      size={size === 'lg' ? 'lg' : 'md'}
      className={cn('font-medium', className)}
      startContent={<Phone className={cn(size === 'lg' ? 'h-5 w-5' : 'h-4 w-4')} />}
    >
      {t('common.call')}
    </Button>
  );
}
