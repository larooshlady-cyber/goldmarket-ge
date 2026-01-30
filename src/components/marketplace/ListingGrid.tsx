'use client';

import { Listing } from '@/lib/types';
import { ListingCard, SkeletonCard } from './ListingCard';
import { cn } from '@/lib/utils';

interface ListingGridProps {
  listings: Listing[];
  loading?: boolean;
  className?: string;
}

export function ListingGrid({ listings, loading = false, className }: ListingGridProps) {
  if (loading) {
    return (
      <div
        className={cn(
          'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4',
          className
        )}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (listings.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4',
        className
      )}
    >
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
