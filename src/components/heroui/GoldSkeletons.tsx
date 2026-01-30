'use client';

import { Skeleton, SkeletonProps, Card, CardBody } from '@heroui/react';
import { forwardRef } from 'react';

// Basic Skeleton
export const GoldSkeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <Skeleton
        ref={ref}
        className={`rounded-lg bg-gray-200 ${className}`}
        {...props}
      />
    );
  }
);

GoldSkeleton.displayName = 'GoldSkeleton';

// Listing Card Skeleton
export function ListingCardSkeleton() {
  return (
    <Card className="overflow-hidden border border-gray-100">
      <Skeleton className="aspect-square w-full rounded-none" />
      <CardBody className="gap-3 p-3">
        <Skeleton className="h-4 w-3/4 rounded-lg" />
        <Skeleton className="h-3 w-1/2 rounded-lg" />
        <Skeleton className="h-5 w-1/3 rounded-lg" />
      </CardBody>
    </Card>
  );
}

// Table Row Skeleton
export function TableRowSkeleton({ columns = 5 }: { columns?: number }) {
  return (
    <div className="flex items-center gap-4 border-b border-gray-100 p-4">
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton key={i} className="h-4 flex-1 rounded-lg" />
      ))}
    </div>
  );
}

// User Card Skeleton
export function UserCardSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24 rounded-lg" />
        <Skeleton className="h-3 w-16 rounded-lg" />
      </div>
    </div>
  );
}

// Form Skeleton
export function FormSkeleton() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20 rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20 rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20 rounded-lg" />
        <Skeleton className="h-24 w-full rounded-lg" />
      </div>
      <Skeleton className="h-10 w-32 rounded-lg" />
    </div>
  );
}

// Stats Card Skeleton
export function StatsCardSkeleton() {
  return (
    <Card className="border border-gray-100 p-4">
      <div className="space-y-3">
        <Skeleton className="h-3 w-24 rounded-lg" />
        <Skeleton className="h-8 w-16 rounded-lg" />
        <Skeleton className="h-2 w-20 rounded-lg" />
      </div>
    </Card>
  );
}
