'use client';

import { PackageX } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@heroui/react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <PackageX className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">
        {title || t('empty.noResults')}
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        {description || t('empty.tryDifferentFilters')}
      </p>
      {action && (
        <Button
          onPress={action.onClick}
          color="warning"
          className="mt-4"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}
