'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Category } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
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
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full shadow-md lg:flex"
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full shadow-md lg:flex"
        onClick={() => scroll('right')}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <ScrollArea className="w-full whitespace-nowrap" ref={scrollRef}>
        <div className="flex gap-3 pb-3">
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
                  'flex flex-col items-center gap-2 rounded-xl border px-4 py-3 transition-all hover:border-amber-500 hover:shadow-sm',
                  isActive
                    ? 'border-amber-500 bg-amber-50 shadow-sm'
                    : 'border-gray-200 bg-white'
                )}
              >
                {showImages && category.image ? (
                  <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={category.image}
                      alt={t(category.nameKey)}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-lg',
                      isActive ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <span
                  className={cn(
                    'text-xs font-medium',
                    isActive ? 'text-amber-600' : 'text-gray-700'
                  )}
                >
                  {t(category.nameKey)}
                </span>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}
