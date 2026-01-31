'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { FilterConfig, FilterValues, georgianCities, purityOptions } from '@/lib/types';
import { Button, Checkbox, Input, Divider } from '@heroui/react';
import { cn } from '@/lib/utils';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-sm font-medium text-gray-900"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
}

interface FilterSidebarProps {
  config: FilterConfig;
  values: FilterValues;
  onChange: (values: FilterValues) => void;
  onApply: () => void;
  onReset: () => void;
  className?: string;
}

export function FilterSidebar({
  config,
  values,
  onChange,
  onApply,
  onReset,
  className,
}: FilterSidebarProps) {
  const { t } = useLanguage();

  const handleCheckboxChange = (
    key: keyof FilterValues,
    value: string,
    checked: boolean
  ) => {
    const currentValues = (values[key] as string[]) || [];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v) => v !== value);
    onChange({ ...values, [key]: newValues.length > 0 ? newValues : undefined });
  };

  const handleRangeChange = (
    minKey: keyof FilterValues,
    maxKey: keyof FilterValues,
    type: 'min' | 'max',
    value: string
  ) => {
    const numValue = value ? Number(value) : undefined;
    if (type === 'min') {
      onChange({ ...values, [minKey]: numValue });
    } else {
      onChange({ ...values, [maxKey]: numValue });
    }
  };

  const metalTypes = [
    { value: 'gold', label: t('categories.gold') },
    { value: 'silver', label: t('categories.silver') },
    { value: 'platinum', label: t('categories.platinum') },
    { value: 'palladium', label: 'პალადიუმი' },
  ];

  const stoneTypes = [
    { value: 'diamond', label: t('categories.diamonds') },
    { value: 'ruby', label: 'რუბინი' },
    { value: 'sapphire', label: 'საფირონი' },
    { value: 'emerald', label: 'ზურმუხტი' },
    { value: 'pearl', label: 'მარგალიტი' },
    { value: 'other', label: 'სხვა' },
    { value: 'none', label: 'ქვის გარეშე' },
  ];

  const conditions = [
    { value: 'new', label: t('filters.conditionNew') },
    { value: 'used', label: t('filters.conditionUsed') },
  ];

  const deliveryMethods = [
    { value: 'pickup', label: t('filters.deliveryPickup') },
    { value: 'shipping', label: t('filters.deliveryShipping') },
    { value: 'both', label: t('filters.deliveryBoth') },
  ];

  return (
    <div className={cn('space-y-0', className)}>
      {/* Price Range */}
      {config.filters.priceRange && (
        <FilterSection title={t('filters.priceRange')}>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder={t('common.from')}
              value={values.priceMin?.toString() ?? ''}
              onChange={(e) =>
                handleRangeChange('priceMin', 'priceMax', 'min', e.target.value)
              }
              variant="bordered"
              size="sm"
              classNames={{
                inputWrapper: 'border-gray-300 h-9 bg-white',
              }}
            />
            <span className="text-gray-400">-</span>
            <Input
              type="number"
              placeholder={t('common.to')}
              value={values.priceMax?.toString() ?? ''}
              onChange={(e) =>
                handleRangeChange('priceMin', 'priceMax', 'max', e.target.value)
              }
              variant="bordered"
              size="sm"
              classNames={{
                inputWrapper: 'border-gray-300 h-9 bg-white',
              }}
            />
          </div>
        </FilterSection>
      )}

      {/* Metal Type */}
      {config.filters.metalType && (
        <FilterSection title={t('filters.metalType')}>
          {metalTypes.map((metal) => (
            <Checkbox
              key={metal.value}
              isSelected={values.metalType?.includes(metal.value as any) ?? false}
              onValueChange={(checked) =>
                handleCheckboxChange('metalType', metal.value, checked)
              }
              color="warning"
              size="sm"
              classNames={{
                label: 'text-sm text-gray-600',
              }}
            >
              {metal.label}
            </Checkbox>
          ))}
        </FilterSection>
      )}

      {/* Stone Type */}
      {config.filters.stoneType && (
        <FilterSection title={t('filters.stoneType')} defaultOpen={false}>
          {stoneTypes.map((stone) => (
            <Checkbox
              key={stone.value}
              isSelected={values.stoneType?.includes(stone.value as any) ?? false}
              onValueChange={(checked) =>
                handleCheckboxChange('stoneType', stone.value, checked)
              }
              color="warning"
              size="sm"
              classNames={{
                label: 'text-sm text-gray-600',
              }}
            >
              {stone.label}
            </Checkbox>
          ))}
        </FilterSection>
      )}

      {/* Purity */}
      {config.filters.purity && (
        <FilterSection title={t('filters.purity')} defaultOpen={false}>
          {[...purityOptions.gold, ...purityOptions.silver].map((purity) => (
            <Checkbox
              key={purity}
              isSelected={values.purity?.includes(purity) ?? false}
              onValueChange={(checked) =>
                handleCheckboxChange('purity', purity, checked)
              }
              color="warning"
              size="sm"
              classNames={{
                label: 'text-sm text-gray-600',
              }}
            >
              {purity}
            </Checkbox>
          ))}
        </FilterSection>
      )}

      {/* Weight */}
      {config.filters.weight && (
        <FilterSection title={`${t('filters.weight')} (${t('filters.weightUnit')})`} defaultOpen={false}>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder={t('common.from')}
              value={values.weightMin?.toString() ?? ''}
              onChange={(e) =>
                handleRangeChange('weightMin', 'weightMax', 'min', e.target.value)
              }
              variant="bordered"
              size="sm"
              classNames={{
                inputWrapper: 'border-gray-300 h-9 bg-white',
              }}
            />
            <span className="text-gray-400">-</span>
            <Input
              type="number"
              placeholder={t('common.to')}
              value={values.weightMax?.toString() ?? ''}
              onChange={(e) =>
                handleRangeChange('weightMin', 'weightMax', 'max', e.target.value)
              }
              variant="bordered"
              size="sm"
              classNames={{
                inputWrapper: 'border-gray-300 h-9 bg-white',
              }}
            />
          </div>
        </FilterSection>
      )}

      {/* Condition */}
      {config.filters.condition && (
        <FilterSection title={t('filters.condition')} defaultOpen={false}>
          {conditions.map((condition) => (
            <Checkbox
              key={condition.value}
              isSelected={values.condition?.includes(condition.value as any) ?? false}
              onValueChange={(checked) =>
                handleCheckboxChange('condition', condition.value, checked)
              }
              color="warning"
              size="sm"
              classNames={{
                label: 'text-sm text-gray-600',
              }}
            >
              {condition.label}
            </Checkbox>
          ))}
        </FilterSection>
      )}

      {/* City */}
      {config.filters.city && (
        <FilterSection title={t('common.city')} defaultOpen={false}>
          <div className="max-h-48 space-y-3 overflow-y-auto">
            {georgianCities.slice(0, 10).map((city) => (
              <Checkbox
                key={city}
                isSelected={values.city?.includes(city) ?? false}
                onValueChange={(checked) =>
                  handleCheckboxChange('city', city, checked)
                }
                color="warning"
                size="sm"
                classNames={{
                  label: 'text-sm text-gray-600',
                }}
              >
                {city}
              </Checkbox>
            ))}
          </div>
        </FilterSection>
      )}

      {/* Certificate */}
      {config.filters.certificate && (
        <FilterSection title={t('filters.certificate')} defaultOpen={false}>
          <Checkbox
            isSelected={values.certificate ?? false}
            onValueChange={(checked) =>
              onChange({ ...values, certificate: checked })
            }
            color="warning"
            size="sm"
            classNames={{
              label: 'text-sm text-gray-600',
            }}
          >
            {t('filters.hasCertificate')}
          </Checkbox>
        </FilterSection>
      )}

      {/* Delivery Method */}
      {config.filters.deliveryMethod && (
        <FilterSection title={t('filters.deliveryMethod')} defaultOpen={false}>
          {deliveryMethods.map((method) => (
            <Checkbox
              key={method.value}
              isSelected={values.deliveryMethod?.includes(method.value as any) ?? false}
              onValueChange={(checked) =>
                handleCheckboxChange('deliveryMethod', method.value, checked)
              }
              color="warning"
              size="sm"
              classNames={{
                label: 'text-sm text-gray-600',
              }}
            >
              {method.label}
            </Checkbox>
          ))}
        </FilterSection>
      )}

      {/* Seller Verification */}
      {config.filters.sellerVerification && (
        <FilterSection title={t('filters.sellerVerification')} defaultOpen={false}>
          <Checkbox
            isSelected={values.sellerVerification?.includes('verified') ?? false}
            onValueChange={(checked) =>
              handleCheckboxChange('sellerVerification', 'verified', checked)
            }
            color="warning"
            size="sm"
            classNames={{
              label: 'text-sm text-gray-600',
            }}
          >
            {t('common.verified')}
          </Checkbox>
        </FilterSection>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 pt-4">
        <Button onPress={onApply} color="warning" className="flex-1">
          {t('common.apply')}
        </Button>
        <Button variant="bordered" onPress={onReset} className="flex-1">
          {t('common.clearFilters')}
        </Button>
      </div>
    </div>
  );
}
