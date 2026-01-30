'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { categories } from '@/lib/mock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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
            <CardTitle>{t('createListing.basics')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">{t('createListing.titleLabel')}</Label>
              <Input
                id="title"
                placeholder={t('createListing.titlePlaceholder')}
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>{t('createListing.categoryLabel')}</Label>
                <Select value={formData.category} onValueChange={(v) => handleChange('category', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('createListing.selectCategory')} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.slug}>
                        {cat.nameKey}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">{t('createListing.priceLabel')}</Label>
                <div className="flex gap-2">
                  <Input
                    id="price"
                    type="number"
                    placeholder={t('createListing.pricePlaceholder')}
                    value={formData.price}
                    onChange={(e) => handleChange('price', e.target.value)}
                    className="flex-1"
                  />
                  <Select value={formData.currency} onValueChange={(v) => handleChange('currency', v)}>
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GEL">₾ GEL</SelectItem>
                      <SelectItem value="USD">$ USD</SelectItem>
                      <SelectItem value="EUR">€ EUR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">{t('createListing.descriptionLabel')}</Label>
              <Textarea
                id="description"
                placeholder={t('createListing.descriptionPlaceholder')}
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>{t('createListing.specifications')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>{t('filters.metalType')}</Label>
                <Select value={formData.metalType} onValueChange={(v) => handleChange('metalType', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('common.all')} />
                  </SelectTrigger>
                  <SelectContent>
                    {metalTypes.map((metal) => (
                      <SelectItem key={metal.value} value={metal.value}>
                        {metal.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t('filters.purity')}</Label>
                <Select value={formData.purity} onValueChange={(v) => handleChange('purity', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('common.all')} />
                  </SelectTrigger>
                  <SelectContent>
                    {goldPurities.map((purity) => (
                      <SelectItem key={purity.value} value={purity.value}>
                        {purity.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">{t('filters.weight')}</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="weight"
                    type="number"
                    step="0.01"
                    value={formData.weight}
                    onChange={(e) => handleChange('weight', e.target.value)}
                  />
                  <span className="text-sm text-gray-500">{t('filters.weightUnit')}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>{t('filters.stoneType')}</Label>
                <Select value={formData.stoneType} onValueChange={(v) => handleChange('stoneType', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('common.all')} />
                  </SelectTrigger>
                  <SelectContent>
                    {stoneTypes.map((stone) => (
                      <SelectItem key={stone.value} value={stone.value}>
                        {stone.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>{t('filters.condition')}</Label>
              <RadioGroup
                value={formData.condition}
                onValueChange={(v) => handleChange('condition', v)}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="new" id="new" />
                  <Label htmlFor="new" className="font-normal">
                    {t('filters.conditionNew')}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="used" id="used" />
                  <Label htmlFor="used" className="font-normal">
                    {t('filters.conditionUsed')}
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>{t('filters.certificate')}</Label>
              <RadioGroup
                value={formData.hasCertificate}
                onValueChange={(v) => handleChange('hasCertificate', v)}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="cert-yes" />
                  <Label htmlFor="cert-yes" className="font-normal">
                    {t('filters.hasCertificate')}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="cert-no" />
                  <Label htmlFor="cert-no" className="font-normal">
                    არა
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Location and delivery */}
        <Card>
          <CardHeader>
            <CardTitle>{t('createListing.location')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>{t('createListing.cityLabel')}</Label>
                <Select value={formData.city} onValueChange={(v) => handleChange('city', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('createListing.selectCity')} />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t('createListing.deliveryLabel')}</Label>
                <Select
                  value={formData.deliveryMethod}
                  onValueChange={(v) => handleChange('deliveryMethod', v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('createListing.selectDelivery')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pickup">{t('filters.deliveryPickup')}</SelectItem>
                    <SelectItem value="shipping">{t('filters.deliveryShipping')}</SelectItem>
                    <SelectItem value="both">{t('filters.deliveryBoth')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Photos */}
        <Card>
          <CardHeader>
            <CardTitle>{t('createListing.media')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={handleSaveDraft} className="gap-2">
            <Save className="h-4 w-4" />
            {t('createListing.saveDraft')}
          </Button>
          <Button onClick={handlePublish} className="gap-2 bg-amber-500 hover:bg-amber-600">
            <Send className="h-4 w-4" />
            {t('createListing.publish')}
          </Button>
        </div>
      </div>
    </div>
  );
}
