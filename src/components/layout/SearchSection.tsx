'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Checkbox, Slider, Select, SelectItem, useDisclosure } from '@heroui/react';
import { Container } from './Container';
import { useLanguage } from '@/lib/i18n';
import { categories, cities } from '@/lib/mock';

export function SearchSection() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    city: '',
    priceRange: [0, 50000] as [number, number],
    metalType: [] as string[],
    condition: '',
    verified: false,
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (filters.category) params.set('category', filters.category);
    if (filters.city) params.set('city', filters.city);
    if (filters.priceRange[0] > 0) params.set('minPrice', filters.priceRange[0].toString());
    if (filters.priceRange[1] < 50000) params.set('maxPrice', filters.priceRange[1].toString());
    if (filters.condition) params.set('condition', filters.condition);
    if (filters.verified) params.set('verified', 'true');
    
    router.push(`/marketplace?${params.toString()}`);
  };

  const metalTypes = [
    { value: 'gold', label: language === 'ka' ? 'ოქრო' : 'Gold' },
    { value: 'silver', label: language === 'ka' ? 'ვერცხლი' : 'Silver' },
    { value: 'platinum', label: language === 'ka' ? 'პლატინა' : 'Platinum' },
    { value: 'palladium', label: language === 'ka' ? 'პალადიუმი' : 'Palladium' },
  ];

  const conditions = [
    { value: 'new', label: language === 'ka' ? 'ახალი' : 'New' },
    { value: 'like-new', label: language === 'ka' ? 'თითქმის ახალი' : 'Like New' },
    { value: 'used', label: language === 'ka' ? 'მეორადი' : 'Used' },
  ];

  return (
    <>
      <section className="py-5 bg-white border-b border-gray-100">
        <Container>
          <div className="flex items-center gap-4">
            {/* Search Input */}
            <Input
              type="text"
              placeholder={language === 'ka' ? 'ძიება...' : 'Search...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              startContent={<Search className="h-5 w-5 text-gray-400" />}
              classNames={{
                base: 'flex-1',
                inputWrapper: 'h-14 bg-gray-50 hover:bg-gray-100 border border-gray-200',
                input: 'text-base',
              }}
              radius="lg"
              size="lg"
            />

            {/* Detailed Filters Button */}
            <Button
              variant="bordered"
              className="h-14 px-5 border-gray-200 text-gray-700 font-medium hidden sm:flex"
              radius="lg"
              startContent={<SlidersHorizontal className="h-4 w-4" />}
              onPress={onOpen}
            >
              {language === 'ka' ? 'დეტალური ფილტრაცია' : 'Detailed Filters'}
            </Button>

            {/* Mobile Filter Button */}
            <Button
              isIconOnly
              variant="bordered"
              className="h-14 w-14 border-gray-200 sm:hidden"
              radius="lg"
              onPress={onOpen}
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>

            {/* Search Button - Teal */}
            <Button
              className="h-14 px-8 bg-[#0D6B5F] text-white font-medium hover:bg-[#0B5A50]"
              radius="lg"
              onPress={handleSearch}
            >
              {language === 'ka' ? 'მოძებნა' : 'Search'}
            </Button>
          </div>
        </Container>
      </section>

      {/* Filter Modal */}
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size="2xl"
        scrollBehavior="inside"
        radius="lg"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 px-6 pt-6">
            <span className="text-lg font-semibold">
              {language === 'ka' ? 'დეტალური ფილტრაცია' : 'Detailed Filters'}
            </span>
          </ModalHeader>
          <ModalBody className="px-6 py-6">
            <div className="space-y-6">
              {/* Category */}
              <Select
                label={language === 'ka' ? 'კატეგორია' : 'Category'}
                placeholder={language === 'ka' ? 'აირჩიეთ კატეგორია' : 'Select category'}
                selectedKeys={filters.category ? [filters.category] : []}
                onSelectionChange={(keys) => {
                  const value = Array.from(keys)[0] as string;
                  setFilters({ ...filters, category: value || '' });
                }}
                radius="lg"
                size="lg"
                classNames={{
                  trigger: 'h-14',
                }}
              >
                {categories.map((cat) => (
                  <SelectItem key={cat.slug}>
                    {t(cat.nameKey)}
                  </SelectItem>
                ))}
              </Select>

              {/* City */}
              <Select
                label={language === 'ka' ? 'ქალაქი' : 'City'}
                placeholder={language === 'ka' ? 'აირჩიეთ ქალაქი' : 'Select city'}
                selectedKeys={filters.city ? [filters.city] : []}
                onSelectionChange={(keys) => {
                  const value = Array.from(keys)[0] as string;
                  setFilters({ ...filters, city: value || '' });
                }}
                radius="lg"
                size="lg"
                classNames={{
                  trigger: 'h-14',
                }}
              >
                {cities.map((city) => (
                  <SelectItem key={city.value}>
                    {language === 'ka' ? city.label.ka : city.label.en}
                  </SelectItem>
                ))}
              </Select>

              {/* Price Range */}
              <div>
                <p className="text-sm font-medium mb-4">
                  {language === 'ka' ? 'ფასი' : 'Price'}: ₾{filters.priceRange[0].toLocaleString()} - ₾{filters.priceRange[1].toLocaleString()}
                </p>
                <Slider
                  step={100}
                  minValue={0}
                  maxValue={50000}
                  value={filters.priceRange}
                  onChange={(value) => setFilters({ ...filters, priceRange: value as [number, number] })}
                  className="max-w-full"
                  classNames={{
                    track: 'bg-gray-200',
                    filler: 'bg-[#0D6B5F]',
                    thumb: 'bg-[#0D6B5F]',
                  }}
                />
              </div>

              {/* Metal Type */}
              <div>
                <p className="text-sm font-medium mb-4">
                  {language === 'ka' ? 'ლითონის ტიპი' : 'Metal Type'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {metalTypes.map((metal) => (
                    <Checkbox
                      key={metal.value}
                      isSelected={filters.metalType.includes(metal.value)}
                      onValueChange={(checked) => {
                        if (checked) {
                          setFilters({ ...filters, metalType: [...filters.metalType, metal.value] });
                        } else {
                          setFilters({ ...filters, metalType: filters.metalType.filter((m) => m !== metal.value) });
                        }
                      }}
                      radius="md"
                      classNames={{
                        wrapper: 'after:bg-[#0D6B5F]',
                      }}
                    >
                      {metal.label}
                    </Checkbox>
                  ))}
                </div>
              </div>

              {/* Condition */}
              <Select
                label={language === 'ka' ? 'მდგომარეობა' : 'Condition'}
                placeholder={language === 'ka' ? 'აირჩიეთ მდგომარეობა' : 'Select condition'}
                selectedKeys={filters.condition ? [filters.condition] : []}
                onSelectionChange={(keys) => {
                  const value = Array.from(keys)[0] as string;
                  setFilters({ ...filters, condition: value || '' });
                }}
                radius="lg"
                size="lg"
                classNames={{
                  trigger: 'h-14',
                }}
              >
                {conditions.map((cond) => (
                  <SelectItem key={cond.value}>
                    {cond.label}
                  </SelectItem>
                ))}
              </Select>

              {/* Verified Seller */}
              <Checkbox
                isSelected={filters.verified}
                onValueChange={(checked) => setFilters({ ...filters, verified: checked })}
                radius="md"
                classNames={{
                  wrapper: 'after:bg-[#0D6B5F]',
                }}
              >
                {language === 'ka' ? 'მხოლოდ ვერიფიცირებული გამყიდველები' : 'Verified sellers only'}
              </Checkbox>
            </div>
          </ModalBody>
          <ModalFooter className="px-6 pb-6">
            <Button
              variant="light"
              radius="lg"
              className="h-12 px-6"
              onPress={() => {
                setFilters({
                  category: '',
                  city: '',
                  priceRange: [0, 50000],
                  metalType: [],
                  condition: '',
                  verified: false,
                });
              }}
            >
              {language === 'ka' ? 'გასუფთავება' : 'Clear'}
            </Button>
            <Button
              className="h-12 px-6 bg-[#0D6B5F] text-white"
              radius="lg"
              onPress={() => {
                handleSearch();
                onClose();
              }}
            >
              {language === 'ka' ? 'გამოყენება' : 'Apply'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
