'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Category } from '@/lib/types';
import { Button, ScrollShadow } from '@heroui/react';
import { cn } from '@/lib/utils';

interface CategoryStripProps {
  categories: Category[];
  activeCategory?: string;
  className?: string;
  showImages?: boolean;
}

export function CategoryStrip({
  categories,
  activeCategory,
  className,
  showImages = false,
}: CategoryStripProps) {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const getIcon = (iconName: string): LucideIcon => {
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    return icons[iconName] || LucideIcons.Circle;
  };

  return (
    <div className={cn('relative', className)}>
      {/* Scroll buttons - hidden on mobile */}
      <Button
        isIconOnly
        variant="flat"
        className="absolute -left-4 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 rounded-full bg-white shadow-md border border-gray-200 lg:flex"
        onPress={() => scroll('left')}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        isIconOnly
        variant="flat"
        className="absolute -right-4 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 rounded-full bg-white shadow-md border border-gray-200 lg:flex"
        onPress={() => scroll('right')}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <ScrollShadow
        orientation="horizontal"
        className="w-full"
        ref={scrollRef}
      >
        <div className="flex gap-2 pb-2">
          {categories.map((category) => {
            const Icon = getIcon(category.icon);
            const isActive = activeCategory === category.id;

            return (
              <Link
                key={category.id}
                href={
                  category.id === 'all'
                    ? '/marketplace'
                    : `/marketplace?category=${category.slug}`
                }
                className={cn(
                  'flex flex-col items-center gap-2 rounded-2xl border-2 px-5 py-3 transition-all min-w-[90px]',
                  isActive
                    ? 'border-[#FFB011] bg-[#FFF8E6] shadow-sm'
                    : 'border-transparent bg-gray-50 hover:bg-gray-100 hover:border-gray-200'
                )}
              >
                {showImages && category.image ? (
                  <div className="h-11 w-11 overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={category.image}
                      alt={t(category.nameKey)}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-xl transition-colors',
                      isActive 
                        ? 'bg-[#FFB011] text-black' 
                        : 'bg-white text-gray-600 shadow-sm'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <span
                  className={cn(
                    'text-xs font-medium whitespace-nowrap',
                    isActive ? 'text-[#FFB011]' : 'text-gray-700'
                  )}
                >
                  {t(category.nameKey)}
                </span>
              </Link>
            );
          })}
        </div>
      </ScrollShadow>
    </div>
  );
}
