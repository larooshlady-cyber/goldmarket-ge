'use client';

import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface AttributeItem {
  label: string;
  value: string | number | boolean | undefined;
}

interface AttributeListProps {
  attributes: AttributeItem[];
  className?: string;
}

export function AttributeList({ attributes, className }: AttributeListProps) {
  const { t } = useLanguage();

  const filteredAttributes = attributes.filter(
    (attr) => attr.value !== undefined && attr.value !== null && attr.value !== ''
  );

  if (filteredAttributes.length === 0) return null;

  const formatValue = (value: string | number | boolean) => {
    if (typeof value === 'boolean') {
      return value ? '✓' : '✗';
    }
    return value;
  };

  return (
    <div className={cn('overflow-hidden rounded-lg border border-gray-200', className)}>
      <table className="w-full">
        <tbody>
          {filteredAttributes.map((attr, index) => (
            <tr
              key={index}
              className={cn(
                'border-b border-gray-100 last:border-b-0',
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              )}
            >
              <td className="px-4 py-3 text-sm font-medium text-gray-600">
                {attr.label}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">
                {formatValue(attr.value!)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
