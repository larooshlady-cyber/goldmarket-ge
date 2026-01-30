'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'small' | 'large' | 'full';
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        {
          'max-w-7xl': size === 'default',
          'max-w-5xl': size === 'small',
          'max-w-[1400px]': size === 'large',
          'max-w-full': size === 'full',
        },
        className
      )}
    >
      {children}
    </div>
  );
}
