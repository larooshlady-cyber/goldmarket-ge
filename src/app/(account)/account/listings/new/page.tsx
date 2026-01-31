'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { categories } from '@/lib/mock';
import { Card, CardBody, CardHeader, Button, Input, Textarea, Select, SelectItem, RadioGroup, Radio } from '@heroui/react';
import { Upload, X, Save, Send, ImagePlus } from 'lucide-react';

const cities = [
  { value: 'tbilisi', label: 'თბილისი' },
  { value: 'batumi', label: 'ბათუმი' },
  { value: 'kutaisi', label: 'ქუთაისი' },
  { value: 'rustavi', label: 'რუსთავი' },
  { value: 'gori', label: 'გორი' },
  { value: 'zugdidi', label: 'ზუგდიდი' },
  { value: 'poti', label: 'ფოთი' },
  { value: 'telavi', label: 'თელავი' },
];

const metalTypes = [
  { value: 'gold', label: 'ოქრო' },
  { value: 'silver', label: 'ვერცხლი' },
  { value: 'platinum', label: 'პლატინა' },
  { value: 'palladium', label: 'პალადიუმი' },
];

const goldPurities = [
  { value: '375', label: '375 (9K)' },
  { value: '585', label: '585 (14K)' },
  { value: '750', label: '750 (18K)' },
  { value: '916', label: '916 (22K)' },
  { value: '999', label: '999 (24K)' },
];

const stoneTypes = [
  { value: 'diamond', label: 'ბრილიანტი' },
  { value: 'ruby', label: 'ლალი' },
  { value: 'emerald', label: 'ზურმუხტი' },
  { value: 'sapphire', label: 'საფირონი' },
  { value: 'pearl', label: 'მარგალიტი' },
  { value: 'none', label: 'ქვის გარეშე' },
];

const currencies = [
  { value: 'GEL', label: '₾ GEL' },
  { value: 'USD', label: '$ USD' },
  { value: 'EUR', label: '€ EUR' },
];

const deliveryOptions = [
  { value: 'pickup', labelKey: 'filters.deliveryPickup' },
  { value: 'shipping', labelKey: 'filters.deliveryShipping' },
  { value: 'both', labelKey: 'filters.deliveryBoth' },
];

export default function CreateListingPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    currency: 'GEL',
    description: '',
    metalType: '',
    purity: '',
    weight: '',
    stoneType: '',
    condition: 'new',
    city: '',
    deliveryMethod: 'pickup',
    hasCertificate: 'no',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = () => {
    // Mock image upload - in real app this would open file picker
    const mockImages = [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400',
    ];
    if (images.length < 10) {
      setImages([...images, mockImages[images.length % mockImages.length]]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSaveDraft = () => {
    // Mock save draft
    alert('Draft saved!');
  };

  const handlePublish = () => {
    // Mock publish
    router.push('/account/listings');
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t('createListing.pageTitle')}</h1>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {/* Basics */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">{t('createListing.basics')}</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <Input
              label={t('createListing.titleLabel')}
              placeholder={t('createListing.titlePlaceholder')}
              value={formData.title}
              onValueChange={(v) => handleChange('title', v)}
              variant="bordered"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Select
                label={t('createListing.categoryLabel')}
                placeholder={t('createListing.selectCategory')}
                selectedKeys={formData.category ? [formData.category] : []}
                onSelectionChange={(keys) => handleChange('category', Array.from(keys)[0] as string)}
                variant="bordered"
              >
                {categories.map((cat) => (
                  <SelectItem key={cat.slug} textValue={cat.nameKey}>
                    {cat.nameKey}
                  </SelectItem>
                ))}
              </Select>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('createListing.priceLabel')}</label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder={t('createListing.pricePlaceholder')}
                    value={formData.price}
                    onValueChange={(v) => handleChange('price', v)}
                    variant="bordered"
                    className="flex-1"
                  />
                  <Select
                    selectedKeys={[formData.currency]}
                    onSelectionChange={(keys) => handleChange('currency', Array.from(keys)[0] as string)}
                    variant="bordered"
                    className="w-28"
                  >
                    {currencies.map((curr) => (
                      <SelectItem key={curr.value} textValue={curr.label}>
                        {curr.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            <Textarea
              label={t('createListing.descriptionLabel')}
              placeholder={t('createListing.descriptionPlaceholder')}
              value={formData.description}
              onValueChange={(v) => handleChange('description', v)}
              variant="bordered"
              minRows={4}
            />
          </CardBody>
        </Card>

        {/* Specifications */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">{t('createListing.specifications')}</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Select
                label={t('filters.metalType')}
                placeholder={t('common.all')}
                selectedKeys={formData.metalType ? [formData.metalType] : []}
                onSelectionChange={(keys) => handleChange('metalType', Array.from(keys)[0] as string)}
                variant="bordered"
              >
                {metalTypes.map((metal) => (
                  <SelectItem key={metal.value} textValue={metal.label}>
                    {metal.label}
                  </SelectItem>
                ))}
              </Select>

              <Select
                label={t('filters.purity')}
                placeholder={t('common.all')}
                selectedKeys={formData.purity ? [formData.purity] : []}
                onSelectionChange={(keys) => handleChange('purity', Array.from(keys)[0] as string)}
                variant="bordered"
              >
                {goldPurities.map((purity) => (
                  <SelectItem key={purity.value} textValue={purity.label}>
                    {purity.label}
                  </SelectItem>
                ))}
              </Select>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('filters.weight')}</label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.weight}
                    onValueChange={(v) => handleChange('weight', v)}
                    variant="bordered"
                  />
                  <span className="text-sm text-gray-500">{t('filters.weightUnit')}</span>
                </div>
              </div>

              <Select
                label={t('filters.stoneType')}
                placeholder={t('common.all')}
                selectedKeys={formData.stoneType ? [formData.stoneType] : []}
                onSelectionChange={(keys) => handleChange('stoneType', Array.from(keys)[0] as string)}
                variant="bordered"
              >
                {stoneTypes.map((stone) => (
                  <SelectItem key={stone.value} textValue={stone.label}>
                    {stone.label}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t('filters.condition')}</label>
              <RadioGroup
                value={formData.condition}
                onValueChange={(v) => handleChange('condition', v)}
                orientation="horizontal"
              >
                <Radio value="new">{t('filters.conditionNew')}</Radio>
                <Radio value="used">{t('filters.conditionUsed')}</Radio>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t('filters.certificate')}</label>
              <RadioGroup
                value={formData.hasCertificate}
                onValueChange={(v) => handleChange('hasCertificate', v)}
                orientation="horizontal"
              >
                <Radio value="yes">{t('filters.hasCertificate')}</Radio>
                <Radio value="no">არა</Radio>
              </RadioGroup>
            </div>
          </CardBody>
        </Card>

        {/* Location and delivery */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">{t('createListing.location')}</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Select
                label={t('createListing.cityLabel')}
                placeholder={t('createListing.selectCity')}
                selectedKeys={formData.city ? [formData.city] : []}
                onSelectionChange={(keys) => handleChange('city', Array.from(keys)[0] as string)}
                variant="bordered"
              >
                {cities.map((city) => (
                  <SelectItem key={city.value} textValue={city.label}>
                    {city.label}
                  </SelectItem>
                ))}
              </Select>

              <Select
                label={t('createListing.deliveryLabel')}
                placeholder={t('createListing.selectDelivery')}
                selectedKeys={[formData.deliveryMethod]}
                onSelectionChange={(keys) => handleChange('deliveryMethod', Array.from(keys)[0] as string)}
                variant="bordered"
              >
                {deliveryOptions.map((opt) => (
                  <SelectItem key={opt.value} textValue={t(opt.labelKey)}>
                    {t(opt.labelKey)}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </CardBody>
        </Card>

        {/* Photos */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">{t('createListing.media')}</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <p className="text-sm text-gray-500">{t('createListing.uploadHint')}</p>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
              {images.map((img, index) => (
                <div key={index} className="group relative aspect-square">
                  <img
                    src={img}
                    alt={`Upload ${index + 1}`}
                    className="h-full w-full rounded-lg object-cover"
                  />
                  {index === 0 && (
                    <span className="absolute bottom-1 left-1 rounded bg-amber-500 px-1.5 py-0.5 text-xs text-white">
                      {t('createListing.mainPhoto')}
                    </span>
                  )}
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}

              {images.length < 10 && (
                <button
                  onClick={handleImageUpload}
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 transition-colors hover:border-amber-500 hover:text-amber-500"
                >
                  <ImagePlus className="h-6 w-6" />
                  <span className="text-xs">{t('createListing.uploadPhotos')}</span>
                </button>
              )}
            </div>
          </CardBody>
        </Card>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="bordered" onPress={handleSaveDraft} startContent={<Save className="h-4 w-4" />}>
            {t('createListing.saveDraft')}
          </Button>
          <Button onPress={handlePublish} className="bg-amber-500 text-white hover:bg-amber-600" startContent={<Send className="h-4 w-4" />}>
            {t('createListing.publish')}
          </Button>
        </div>
      </div>
    </div>
  );
}
