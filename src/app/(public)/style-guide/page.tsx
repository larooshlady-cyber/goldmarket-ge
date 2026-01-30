'use client';

import { useState } from 'react';
import { Container } from '@/components/layout';
import { 
  Heart, 
  Search, 
  Phone, 
  Check, 
  X, 
  Crown, 
  Star, 
  Sparkles, 
  Info, 
  Settings,
  User,
  MapPin,
  Eye,
  Plus,
  ShoppingBag,
  BadgeCheck,
} from 'lucide-react';

// HeroUI Components
import {
  GoldButton,
  GoldInput,
  GoldCard,
  GoldCardBody,
  VipBadge,
  StatusBadge,
  VerificationBadge,
  GoldPagination,
  GoldAccordionBordered,
  GoldSelect,
  GoldCheckbox,
  GoldSwitch,
  GoldRadioGroup,
  GoldAvatar,
  GoldUser,
  ListingCardSkeleton,
  Spinner,
  Progress,
  Chip,
  Divider,
  Tooltip,
} from '@/components/heroui';
import { Tabs, Tab, Card, CardBody, CardHeader } from '@heroui/react';

export default function StyleGuidePage() {
  const [selectedTab, setSelectedTab] = useState('colors');

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-8">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1A1A1A]">GoldMarket.ge Style Guide</h1>
          <p className="mt-2 text-[#6B7280]">Design system documentation - HeroUI Component Library</p>
          <div className="mt-4 flex gap-2">
            <Chip color="primary" variant="flat">HeroUI</Chip>
            <Chip color="warning" variant="flat">Tailwind CSS</Chip>
            <Chip color="success" variant="flat">Next.js 16</Chip>
          </div>
        </div>

        {/* Main Tabs Navigation */}
        <Tabs 
          aria-label="Style Guide Sections"
          selectedKey={selectedTab}
          onSelectionChange={(key) => setSelectedTab(key as string)}
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-gray-200",
            cursor: "w-full bg-[#0D6B5F]",
            tab: "max-w-fit px-0 h-12 text-gray-500 data-[selected=true]:text-[#0D6B5F]",
            tabContent: "group-data-[selected=true]:text-[#0D6B5F] font-medium"
          }}
        >
          <Tab key="colors" title="🎨 Colors" />
          <Tab key="typography" title="📝 Typography" />
          <Tab key="buttons" title="🔘 Buttons" />
          <Tab key="badges" title="🏷️ Badges" />
          <Tab key="forms" title="📋 Forms" />
          <Tab key="cards" title="🃏 Cards" />
          <Tab key="components" title="🧩 Components" />
        </Tabs>

        {/* Tab Content */}
        <div className="mt-8">
          {/* Colors Section */}
          {selectedTab === 'colors' && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Brand Colors */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Brand Colors</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#0D6B5F] shadow-sm" />
                    <div>
                      <p className="font-medium">Brand Teal (Primary)</p>
                      <p className="text-sm text-gray-500">#0D6B5F</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#0A8A7A] shadow-sm" />
                    <div>
                      <p className="font-medium">Brand Light</p>
                      <p className="text-sm text-gray-500">#0A8A7A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#0A5A50] shadow-sm" />
                    <div>
                      <p className="font-medium">Brand Dark</p>
                      <p className="text-sm text-gray-500">#0A5A50</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Accent Colors */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Accent Colors</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#E8B44B] shadow-sm" />
                    <div>
                      <p className="font-medium">Gold</p>
                      <p className="text-sm text-gray-500">#E8B44B</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#D97706] shadow-sm" />
                    <div>
                      <p className="font-medium">Gold Dark</p>
                      <p className="text-sm text-gray-500">#D97706</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* VIP Badge Colors */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">VIP Badge Colors</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#DC2626] shadow-sm" />
                    <div>
                      <p className="font-medium">Super VIP (S-VIP)</p>
                      <p className="text-sm text-gray-500">#DC2626</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#0D6B5F] shadow-sm" />
                    <div>
                      <p className="font-medium">VIP+</p>
                      <p className="text-sm text-gray-500">#0D6B5F</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#6B7280] shadow-sm" />
                    <div>
                      <p className="font-medium">VIP</p>
                      <p className="text-sm text-gray-500">#6B7280</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Neutral Colors */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Neutral Colors</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg border bg-[#F5F5F5] shadow-sm" />
                    <div>
                      <p className="font-medium">Background</p>
                      <p className="text-sm text-gray-500">#F5F5F5</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg border bg-white shadow-sm" />
                    <div>
                      <p className="font-medium">Surface/Card</p>
                      <p className="text-sm text-gray-500">#FFFFFF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#1A1A1A] shadow-sm" />
                    <div>
                      <p className="font-medium">Text Primary</p>
                      <p className="text-sm text-gray-500">#1A1A1A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#6B7280] shadow-sm" />
                    <div>
                      <p className="font-medium">Text Secondary</p>
                      <p className="text-sm text-gray-500">#6B7280</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Semantic Colors */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Semantic Colors</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#DC2626] shadow-sm" />
                    <div>
                      <p className="font-medium">Error / Danger</p>
                      <p className="text-sm text-gray-500">#DC2626</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#16A34A] shadow-sm" />
                    <div>
                      <p className="font-medium">Success</p>
                      <p className="text-sm text-gray-500">#16A34A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#F59E0B] shadow-sm" />
                    <div>
                      <p className="font-medium">Warning</p>
                      <p className="text-sm text-gray-500">#F59E0B</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          )}

          {/* Typography Section */}
          {selectedTab === 'typography' && (
            <Card className="border border-gray-100">
              <CardBody className="space-y-6 p-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">text-4xl / 36px - Page Title</p>
                  <p className="text-4xl font-bold text-gray-900">ძვირფასეულობის მარკეტი</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500 mb-1">text-3xl / 30px - Section Title</p>
                  <p className="text-3xl font-bold text-gray-900">სუპერ VIP განცხადებები</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500 mb-1">text-2xl / 24px - Card Title</p>
                  <p className="text-2xl font-semibold text-gray-900">ოქროს ბეჭედი 585</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500 mb-1">text-xl / 20px - Subtitle</p>
                  <p className="text-xl font-medium text-gray-900">პოპულარული კატეგორიები</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500 mb-1">text-lg / 18px - Large Text</p>
                  <p className="text-lg text-gray-800">მოძებნეთ ოქრო, ვერცხლი, ბრილიანტები</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500 mb-1">text-base / 16px - Body</p>
                  <p className="text-base text-gray-700">იყიდეთ და გაყიდეთ ძვირფასეულობა სანდო გამყიდველებისგან</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500 mb-1">text-sm / 14px - Small</p>
                  <p className="text-sm text-gray-600">გამყიდველი: ოქროს სახლი</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500 mb-1">text-xs / 12px - Caption</p>
                  <p className="text-xs text-gray-500">გამოქვეყნდა: 15 იანვარი, 2026</p>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Buttons Section */}
          {selectedTab === 'buttons' && (
            <Card className="border border-gray-100">
              <CardBody className="space-y-8 p-6">
                {/* Color Schemes */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Color Schemes</h3>
                  <div className="flex flex-wrap gap-3">
                    <GoldButton colorScheme="primary">Primary</GoldButton>
                    <GoldButton colorScheme="secondary">Secondary</GoldButton>
                    <GoldButton colorScheme="gold">Gold</GoldButton>
                    <GoldButton colorScheme="danger">Danger</GoldButton>
                    <GoldButton colorScheme="success">Success</GoldButton>
                    <GoldButton colorScheme="default">Default</GoldButton>
                  </div>
                </div>

                <Divider />

                {/* Sizes */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Sizes</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <GoldButton size="sm" colorScheme="primary">Small</GoldButton>
                    <GoldButton size="md" colorScheme="primary">Medium</GoldButton>
                    <GoldButton size="lg" colorScheme="primary">Large</GoldButton>
                  </div>
                </div>

                <Divider />

                {/* With Icons */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">With Icons</h3>
                  <div className="flex flex-wrap gap-3">
                    <GoldButton colorScheme="primary" startContent={<Search className="h-4 w-4" />}>
                      ძებნა
                    </GoldButton>
                    <GoldButton colorScheme="gold" startContent={<Plus className="h-4 w-4" />}>
                      დამატება
                    </GoldButton>
                    <GoldButton colorScheme="secondary" startContent={<Heart className="h-4 w-4" />}>
                      რჩეულებში
                    </GoldButton>
                    <GoldButton colorScheme="default" startContent={<Phone className="h-4 w-4" />}>
                      დარეკვა
                    </GoldButton>
                  </div>
                </div>

                <Divider />

                {/* States */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">States</h3>
                  <div className="flex flex-wrap gap-3">
                    <GoldButton colorScheme="primary">Normal</GoldButton>
                    <GoldButton colorScheme="primary" isDisabled>Disabled</GoldButton>
                    <GoldButton colorScheme="primary" isLoading>Loading</GoldButton>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Badges Section */}
          {selectedTab === 'badges' && (
            <div className="grid gap-6 lg:grid-cols-2">
              {/* VIP Badges */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">VIP Badges</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <VipBadge level="super_vip" />
                    <VipBadge level="vip_plus" />
                    <VipBadge level="vip" />
                  </div>
                  <p className="text-sm text-gray-500">
                    VIP badges indicate seller status and listing priority in search results.
                  </p>
                </CardBody>
              </Card>

              {/* Status Badges */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Status Badges</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <StatusBadge status="published" />
                    <StatusBadge status="draft" />
                    <StatusBadge status="paused" />
                    <StatusBadge status="sold" />
                    <StatusBadge status="archived" />
                  </div>
                  <p className="text-sm text-gray-500">
                    Status badges show the current state of listings.
                  </p>
                </CardBody>
              </Card>

              {/* Verification Badges */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Verification Badges</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <VerificationBadge verified={true} />
                    <VerificationBadge verified={false} />
                  </div>
                  <p className="text-sm text-gray-500">
                    Verification badges indicate seller identity verification status.
                  </p>
                </CardBody>
              </Card>

              {/* HeroUI Chips */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Chips</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <Chip color="primary">Primary</Chip>
                    <Chip color="secondary">Secondary</Chip>
                    <Chip color="success">Success</Chip>
                    <Chip color="warning">Warning</Chip>
                    <Chip color="danger">Danger</Chip>
                    <Chip color="default">Default</Chip>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="flat" color="primary">Flat</Chip>
                    <Chip variant="bordered" color="primary">Bordered</Chip>
                    <Chip variant="dot" color="primary">Dot</Chip>
                    <Chip variant="faded" color="primary">Faded</Chip>
                  </div>
                </CardBody>
              </Card>
            </div>
          )}

          {/* Forms Section */}
          {selectedTab === 'forms' && (
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Inputs */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Text Inputs</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <GoldInput
                    label="Basic Input"
                    placeholder="შეიყვანეთ ტექსტი..."
                  />
                  <GoldInput
                    label="With Description"
                    placeholder="example@email.com"
                    description="გამოიყენება შეტყობინებებისთვის"
                  />
                  <GoldInput
                    label="With Error"
                    placeholder="არასწორი მონაცემი"
                    isInvalid
                    errorMessage="სავალდებულო ველი"
                  />
                  <GoldInput
                    label="Disabled"
                    placeholder="გამორთული"
                    isDisabled
                  />
                </CardBody>
              </Card>

              {/* Select */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Select</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <GoldSelect
                    label="Category"
                    placeholder="აირჩიეთ კატეგორია"
                    options={[
                      { key: 'rings', label: 'ბეჭდები' },
                      { key: 'necklaces', label: 'ყელსაბამები' },
                      { key: 'earrings', label: 'საყურეები' },
                      { key: 'bracelets', label: 'სამაჯურები' },
                    ]}
                  />
                  <GoldSelect
                    label="Metal Type"
                    placeholder="აირჩიეთ ლითონი"
                    options={[
                      { key: 'gold', label: 'ოქრო' },
                      { key: 'silver', label: 'ვერცხლი' },
                      { key: 'platinum', label: 'პლატინა' },
                    ]}
                  />
                </CardBody>
              </Card>

              {/* Checkboxes & Switches */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Checkboxes & Switches</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex flex-wrap gap-6">
                    <GoldCheckbox defaultSelected>ოქრო</GoldCheckbox>
                    <GoldCheckbox>ვერცხლი</GoldCheckbox>
                    <GoldCheckbox>პლატინა</GoldCheckbox>
                  </div>
                  <Divider />
                  <div className="flex flex-wrap gap-6">
                    <GoldSwitch defaultSelected>აქტიური განცხადება</GoldSwitch>
                    <GoldSwitch>შეტყობინებები</GoldSwitch>
                  </div>
                </CardBody>
              </Card>

              {/* Radio Groups */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Radio Groups</h3>
                </CardHeader>
                <CardBody>
                  <GoldRadioGroup
                    label="მდგომარეობა"
                    options={[
                      { value: 'new', label: 'ახალი', description: 'არ არის გამოყენებული' },
                      { value: 'used', label: 'მეორადი', description: 'გამოყენებული მდგომარეობა' },
                    ]}
                    defaultValue="new"
                  />
                </CardBody>
              </Card>
            </div>
          )}

          {/* Cards Section */}
          {selectedTab === 'cards' && (
            <div className="space-y-8">
              {/* Listing Cards */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Listing Cards with VIP Levels</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {/* S-VIP Card */}
                  <GoldCard vipLevel="super_vip" className="overflow-hidden">
                    <div className="relative aspect-square bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" 
                        alt="Ring"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute left-2 top-2">
                        <VipBadge level="super_vip" />
                      </div>
                      <span className="absolute bottom-2 left-2 rounded-md bg-[#E8B44B] px-2 py-1 text-sm font-semibold text-white">
                        400₾
                      </span>
                      <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
                        <Eye className="h-3 w-3" />
                        1,234
                      </div>
                    </div>
                    <GoldCardBody className="p-3">
                      <h3 className="font-semibold text-gray-900">ოქროს ბეჭედი 585</h3>
                      <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        თბილისი
                      </div>
                    </GoldCardBody>
                  </GoldCard>

                  {/* VIP+ Card */}
                  <GoldCard vipLevel="vip_plus" className="overflow-hidden">
                    <div className="relative aspect-square bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" 
                        alt="Necklace"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute left-2 top-2">
                        <VipBadge level="vip_plus" />
                      </div>
                      <span className="absolute bottom-2 left-2 rounded-md bg-[#E8B44B] px-2 py-1 text-sm font-semibold text-white">
                        850₾
                      </span>
                    </div>
                    <GoldCardBody className="p-3">
                      <h3 className="font-semibold text-gray-900">ვერცხლის ყელსაბამი</h3>
                      <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        ბათუმი
                      </div>
                    </GoldCardBody>
                  </GoldCard>

                  {/* VIP Card */}
                  <GoldCard vipLevel="vip" className="overflow-hidden">
                    <div className="relative aspect-square bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400" 
                        alt="Earrings"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute left-2 top-2">
                        <VipBadge level="vip" />
                      </div>
                      <span className="absolute bottom-2 left-2 rounded-md bg-[#E8B44B] px-2 py-1 text-sm font-semibold text-white">
                        320₾
                      </span>
                    </div>
                    <GoldCardBody className="p-3">
                      <h3 className="font-semibold text-gray-900">საყურეები</h3>
                      <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        ქუთაისი
                      </div>
                    </GoldCardBody>
                  </GoldCard>

                  {/* Regular Card */}
                  <GoldCard className="overflow-hidden">
                    <div className="relative aspect-square bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" 
                        alt="Bracelet"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 rounded-md bg-[#E8B44B] px-2 py-1 text-sm font-semibold text-white">
                        550₾
                      </span>
                    </div>
                    <GoldCardBody className="p-3">
                      <h3 className="font-semibold text-gray-900">სამაჯური</h3>
                      <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        რუსთავი
                      </div>
                    </GoldCardBody>
                  </GoldCard>
                </div>
              </div>

              {/* Skeleton Cards */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Loading Skeletons</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <ListingCardSkeleton />
                  <ListingCardSkeleton />
                  <ListingCardSkeleton />
                  <ListingCardSkeleton />
                </div>
              </div>

              {/* User Components */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">User Components</h3>
                <Card className="border border-gray-100">
                  <CardBody className="flex flex-wrap gap-8">
                    <div>
                      <p className="mb-2 text-sm text-gray-500">Avatar with Verification</p>
                      <GoldAvatar
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                        name="გიორგი"
                        verified
                        size="lg"
                      />
                    </div>
                    <div>
                      <p className="mb-2 text-sm text-gray-500">User Card</p>
                      <GoldUser
                        name="გიორგი მაჭარაშვილი"
                        description="ვერიფიცირებული გამყიდველი"
                        avatarProps={{
                          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                        }}
                        verified
                      />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          )}

          {/* Components Section */}
          {selectedTab === 'components' && (
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Accordion */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Accordion</h3>
                </CardHeader>
                <CardBody>
                  <GoldAccordionBordered
                    items={[
                      {
                        key: 'faq1',
                        title: 'როგორ დავამატო განცხადება?',
                        content: 'განცხადების დასამატებლად დააჭირეთ "დამატება" ღილაკს და შეავსეთ ფორმა. მიუთითეთ პროდუქტის სახელი, აღწერა, ფასი და ატვირთეთ ფოტოები.',
                      },
                      {
                        key: 'faq2',
                        title: 'რა არის VIP სტატუსი?',
                        content: 'VIP სტატუსი გაძლევთ უპირატესობას ძებნაში და მეტ ნახვებს. არსებობს სამი დონე: VIP, VIP+ და Super VIP.',
                      },
                      {
                        key: 'faq3',
                        title: 'როგორ გავხდე ვერიფიცირებული?',
                        content: 'ვერიფიკაციისთვის საჭიროა პირადობის მოწმობის ატვირთვა და ტელეფონის ნომრის დადასტურება.',
                      },
                    ]}
                  />
                </CardBody>
              </Card>

              {/* Pagination */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Pagination</h3>
                </CardHeader>
                <CardBody className="flex justify-center py-8">
                  <GoldPagination
                    total={10}
                    initialPage={1}
                  />
                </CardBody>
              </Card>

              {/* Loading States */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Loading States</h3>
                </CardHeader>
                <CardBody className="space-y-6">
                  <div>
                    <p className="mb-3 text-sm text-gray-500">Spinners</p>
                    <div className="flex items-center gap-4">
                      <Spinner size="sm" color="primary" />
                      <Spinner size="md" color="primary" />
                      <Spinner size="lg" color="primary" />
                    </div>
                  </div>
                  <Divider />
                  <div>
                    <p className="mb-3 text-sm text-gray-500">Progress Bar</p>
                    <Progress value={65} color="primary" className="max-w-md" />
                  </div>
                </CardBody>
              </Card>

              {/* Tooltips */}
              <Card className="border border-gray-100">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Tooltips</h3>
                </CardHeader>
                <CardBody className="flex flex-wrap gap-4 py-8">
                  <Tooltip content="ძებნა" placement="top">
                    <GoldButton colorScheme="primary" isIconOnly aria-label="Search">
                      <Search className="h-4 w-4" />
                    </GoldButton>
                  </Tooltip>
                  <Tooltip content="რჩეულებში დამატება" placement="top">
                    <GoldButton colorScheme="secondary" isIconOnly aria-label="Add to favorites">
                      <Heart className="h-4 w-4" />
                    </GoldButton>
                  </Tooltip>
                  <Tooltip content="პარამეტრები" placement="top">
                    <GoldButton colorScheme="default" isIconOnly aria-label="Settings">
                      <Settings className="h-4 w-4" />
                    </GoldButton>
                  </Tooltip>
                </CardBody>
              </Card>

              {/* Icons */}
              <Card className="border border-gray-100 lg:col-span-2">
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-semibold">Common Icons (Lucide)</h3>
                </CardHeader>
                <CardBody>
                  <div className="flex flex-wrap gap-6">
                    {[
                      { icon: Heart, name: 'Heart', color: 'text-red-500' },
                      { icon: Search, name: 'Search', color: 'text-gray-600' },
                      { icon: User, name: 'User', color: 'text-gray-600' },
                      { icon: Crown, name: 'Crown (S-VIP)', color: 'text-[#DC2626]' },
                      { icon: Sparkles, name: 'Sparkles (VIP+)', color: 'text-[#0D6B5F]' },
                      { icon: Star, name: 'Star (VIP)', color: 'text-[#6B7280]' },
                      { icon: Phone, name: 'Phone', color: 'text-gray-600' },
                      { icon: MapPin, name: 'MapPin', color: 'text-gray-600' },
                      { icon: Eye, name: 'Eye', color: 'text-gray-600' },
                      { icon: Check, name: 'Check', color: 'text-green-500' },
                      { icon: X, name: 'Close', color: 'text-red-500' },
                      { icon: BadgeCheck, name: 'Verified', color: 'text-green-500' },
                      { icon: ShoppingBag, name: 'ShoppingBag', color: 'text-gray-600' },
                      { icon: Plus, name: 'Plus', color: 'text-gray-600' },
                      { icon: Settings, name: 'Settings', color: 'text-gray-600' },
                      { icon: Info, name: 'Info', color: 'text-blue-500' },
                    ].map(({ icon: Icon, name, color }) => (
                      <Tooltip key={name} content={name}>
                        <div className="flex flex-col items-center gap-2 cursor-pointer">
                          <Icon className={`h-6 w-6 ${color}`} />
                          <p className="text-xs text-gray-500">{name}</p>
                        </div>
                      </Tooltip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>GoldMarket.ge Design System • HeroUI + Tailwind CSS • {new Date().getFullYear()}</p>
        </div>
      </Container>
    </div>
  );
}
