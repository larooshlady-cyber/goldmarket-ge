'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { FilterConfig, FilterValues, georgianCities, purityOptions } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
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
              value={values.priceMin ?? ''}
              onChange={(e) =>
                handleRangeChange('priceMin', 'priceMax', 'min', e.target.value)
              }
              className="h-9"
            />
            <span className="text-gray-400">-</span>
            <Input
              type="number"
              placeholder={t('common.to')}
              value={values.priceMax ?? ''}
              onChange={(e) =>
                handleRangeChange('priceMin', 'priceMax', 'max', e.target.value)
              }
              className="h-9"
            />
          </div>
        </FilterSection>
      )}

      {/* Metal Type */}
      {config.filters.metalType && (
        <FilterSection title={t('filters.metalType')}>
          {metalTypes.map((metal) => (
            <div key={metal.value} className="flex items-center gap-2">
              <Checkbox
                id={`metal-${metal.value}`}
                checked={values.metalType?.includes(metal.value as any) ?? false}
                onCheckedChange={(checked) =>
                  handleCheckboxChange('metalType', metal.value, checked as boolean)
                }
              />
              <Label
                htmlFor={`metal-${metal.value}`}
                className="text-sm font-normal text-gray-600"
              >
                {metal.label}
              </Label>
            </div>
          ))}
        </FilterSection>
      )}

      {/* Stone Type */}
      {config.filters.stoneType && (
        <FilterSection title={t('filters.stoneType')} defaultOpen={false}>
          {stoneTypes.map((stone) => (
            <div key={stone.value} className="flex items-center gap-2">
              <Checkbox
                id={`stone-${stone.value}`}
                checked={values.stoneType?.includes(stone.value as any) ?? false}
                onCheckedChange={(checked) =>
                  handleCheckboxChange('stoneType', stone.value, checked as boolean)
                }
              />
              <Label
                htmlFor={`stone-${stone.value}`}
                className="text-sm font-normal text-gray-600"
              >
                {stone.label}
              </Label>
            </div>
          ))}
        </FilterSection>
      )}

      {/* Purity */}
      {config.filters.purity && (
        <FilterSection title={t('filters.purity')} defaultOpen={false}>
          {[...purityOptions.gold, ...purityOptions.silver].map((purity) => (
            <div key={purity} className="flex items-center gap-2">
              <Checkbox
                id={`purity-${purity}`}
                checked={values.purity?.includes(purity) ?? false}
                onCheckedChange={(checked) =>
                  handleCheckboxChange('purity', purity, checked as boolean)
                }
              />
              <Label
                htmlFor={`purity-${purity}`}
                className="text-sm font-normal text-gray-600"
              >
                {purity}
              </Label>
            </div>
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
              value={values.weightMin ?? ''}
              onChange={(e) =>
                handleRangeChange('weightMin', 'weightMax', 'min', e.target.value)
              }
              className="h-9"
            />
            <span className="text-gray-400">-</span>
            <Input
              type="number"
              placeholder={t('common.to')}
              value={values.weightMax ?? ''}
              onChange={(e) =>
                handleRangeChange('weightMin', 'weightMax', 'max', e.target.value)
              }
              className="h-9"
            />
          </div>
        </FilterSection>
      )}

      {/* Condition */}
      {config.filters.condition && (
        <FilterSection title={t('filters.condition')} defaultOpen={false}>
          {conditions.map((condition) => (
            <div key={condition.value} className="flex items-center gap-2">
              <Checkbox
                id={`condition-${condition.value}`}
                checked={values.condition?.includes(condition.value as any) ?? false}
                onCheckedChange={(checked) =>
                  handleCheckboxChange('condition', condition.value, checked as boolean)
                }
              />
              <Label
                htmlFor={`condition-${condition.value}`}
                className="text-sm font-normal text-gray-600"
              >
                {condition.label}
              </Label>
            </div>
          ))}
        </FilterSection>
      )}

      {/* City */}
      {config.filters.city && (
        <FilterSection title={t('common.city')} defaultOpen={false}>
          <div className="max-h-48 space-y-3 overflow-y-auto">
            {georgianCities.slice(0, 10).map((city) => (
              <div key={city} className="flex items-center gap-2">
                <Checkbox
                  id={`city-${city}`}
                  checked={values.city?.includes(city) ?? false}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange('city', city, checked as boolean)
                  }
                />
                <Label
                  htmlFor={`city-${city}`}
                  className="text-sm font-normal text-gray-600"
                >
                  {city}
                </Label>
              </div>
            ))}
          </div>
        </FilterSection>
      )}

      {/* Certificate */}
      {config.filters.certificate && (
        <FilterSection title={t('filters.certificate')} defaultOpen={false}>
          <div className="flex items-center gap-2">
            <Checkbox
              id="certificate"
              checked={values.certificate ?? false}
              onCheckedChange={(checked) =>
                onChange({ ...values, certificate: checked as boolean })
              }
            />
            <Label htmlFor="certificate" className="text-sm font-normal text-gray-600">
              {t('filters.hasCertificate')}
            </Label>
          </div>
        </FilterSection>
      )}

      {/* Delivery Method */}
      {config.filters.deliveryMethod && (
        <FilterSection title={t('filters.deliveryMethod')} defaultOpen={false}>
          {deliveryMethods.map((method) => (
            <div key={method.value} className="flex items-center gap-2">
              <Checkbox
                id={`delivery-${method.value}`}
                checked={values.deliveryMethod?.includes(method.value as any) ?? false}
                onCheckedChange={(checked) =>
                  handleCheckboxChange('deliveryMethod', method.value, checked as boolean)
                }
              />
              <Label
                htmlFor={`delivery-${method.value}`}
                className="text-sm font-normal text-gray-600"
              >
                {method.label}
              </Label>
            </div>
          ))}
        </FilterSection>
      )}

      {/* Seller Verification */}
      {config.filters.sellerVerification && (
        <FilterSection title={t('filters.sellerVerification')} defaultOpen={false}>
          <div className="flex items-center gap-2">
            <Checkbox
              id="verified-seller"
              checked={values.sellerVerification?.includes('verified') ?? false}
              onCheckedChange={(checked) =>
                handleCheckboxChange('sellerVerification', 'verified', checked as boolean)
              }
            />
            <Label
              htmlFor="verified-seller"
              className="text-sm font-normal text-gray-600"
            >
              {t('common.verified')}
            </Label>
          </div>
        </FilterSection>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 pt-4">
        <Button onClick={onApply} className="flex-1 bg-amber-500 hover:bg-amber-600">
          {t('common.apply')}
        </Button>
        <Button variant="outline" onClick={onReset} className="flex-1">
          {t('common.clearFilters')}
        </Button>
      </div>
    </div>
  );
}
