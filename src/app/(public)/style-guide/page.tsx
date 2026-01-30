'use client';

import { useState } from 'react';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, ShoppingCart, User, Search, Phone, Check, X, AlertCircle, Crown, Star, Sparkles, Info, Settings, Package, Wallet, ChevronDown } from 'lucide-react';

// HeroUI Components
import {
  GoldButton,
  GoldInput,
  GoldCard,
  GoldCardBody,
  GoldCardHeader,
  GoldCardFooter,
  VipBadge,
  StatusBadge,
  VerificationBadge,
  GoldTabs,
  GoldTabsBordered,
  GoldPagination,
  GoldAccordion,
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

export default function StyleGuidePage() {
  const [selectedTab, setSelectedTab] = useState('shadcn');

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-8">
      <Container>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1A1A1A]">GoldMarket.ge Style Guide</h1>
          <p className="mt-2 text-[#6B7280]">Design system documentation and component library</p>
          <div className="mt-4 flex gap-2">
            <Chip color="primary" variant="flat">shadcn/ui</Chip>
            <Chip color="secondary" variant="flat">HeroUI</Chip>
            <Chip color="warning" variant="flat">Tailwind CSS</Chip>
          </div>
        </div>

        {/* Component Library Tabs */}
        <Tabs defaultValue="colors" className="mb-12">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-none">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Brand Colors */}
              <Card>
                <CardHeader>
                  <CardTitle>Brand Colors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#0D6B5F]" />
                    <div>
                      <p className="font-medium">Brand Teal</p>
                      <p className="text-sm text-gray-500">#0D6B5F</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#0A8A7A]" />
                    <div>
                      <p className="font-medium">Brand Light</p>
                      <p className="text-sm text-gray-500">#0A8A7A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#0A5A50]" />
                    <div>
                      <p className="font-medium">Brand Dark</p>
                      <p className="text-sm text-gray-500">#0A5A50</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Accent Colors */}
              <Card>
                <CardHeader>
                  <CardTitle>Accent Colors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#E8B44B]" />
                    <div>
                      <p className="font-medium">Gold</p>
                      <p className="text-sm text-gray-500">#E8B44B</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#D97706]" />
                    <div>
                      <p className="font-medium">Gold Dark</p>
                      <p className="text-sm text-gray-500">#D97706</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* VIP Badge Colors */}
              <Card>
                <CardHeader>
                  <CardTitle>VIP Badge Colors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#DC2626]" />
                    <div>
                      <p className="font-medium">Super VIP (S-VIP)</p>
                      <p className="text-sm text-gray-500">#DC2626</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#0D6B5F]" />
                    <div>
                      <p className="font-medium">VIP+</p>
                      <p className="text-sm text-gray-500">#0D6B5F</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#6B7280]" />
                    <div>
                      <p className="font-medium">VIP</p>
                      <p className="text-sm text-gray-500">#6B7280</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Neutral Colors */}
              <Card>
                <CardHeader>
                  <CardTitle>Neutral Colors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg border bg-[#F5F5F5]" />
                    <div>
                      <p className="font-medium">Background</p>
                      <p className="text-sm text-gray-500">#F5F5F5</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg border bg-white" />
                    <div>
                      <p className="font-medium">Surface/Card</p>
                      <p className="text-sm text-gray-500">#FFFFFF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#1A1A1A]" />
                    <div>
                      <p className="font-medium">Text Primary</p>
                      <p className="text-sm text-gray-500">#1A1A1A</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Semantic Colors */}
              <Card>
                <CardHeader>
                  <CardTitle>Semantic Colors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#DC2626]" />
                    <div>
                      <p className="font-medium">Error / Destructive</p>
                      <p className="text-sm text-gray-500">#DC2626</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#16A34A]" />
                    <div>
                      <p className="font-medium">Success</p>
                      <p className="text-sm text-gray-500">#16A34A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#F59E0B]" />
                    <div>
                      <p className="font-medium">Warning</p>
                      <p className="text-sm text-gray-500">#F59E0B</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="mt-6">
            <Card>
              <CardContent className="space-y-6 p-6">
                <div>
                  <p className="text-xs text-gray-500">text-4xl / 36px - Page Title</p>
                  <p className="text-4xl font-bold">ძვირფასეულობის მარკეტი</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500">text-3xl / 30px - Section Title</p>
                  <p className="text-3xl font-bold">სუპერ VIP განცხადებები</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500">text-2xl / 24px - Card Title</p>
                  <p className="text-2xl font-semibold">ოქროს ბეჭედი 585</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500">text-xl / 20px - Subtitle</p>
                  <p className="text-xl font-medium">პოპულარული კატეგორიები</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500">text-lg / 18px - Large Text</p>
                  <p className="text-lg">მოძებნეთ ოქრო, ვერცხლი, ბრილიანტები</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500">text-base / 16px - Body</p>
                  <p className="text-base">იყიდეთ და გაყიდეთ ძვირფასეულობა სანდო გამყიდველებისგან</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500">text-sm / 14px - Small</p>
                  <p className="text-sm text-gray-600">გამყიდველი: ოქროს სახლი</p>
                </div>
                <Divider />
                <div>
                  <p className="text-xs text-gray-500">text-xs / 12px - Caption</p>
                  <p className="text-xs text-gray-500">გამოქვეყნდა: 15 იანვარი, 2026</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Buttons Tab */}
          <TabsContent value="buttons" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* shadcn/ui Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Chip size="sm" variant="flat">shadcn/ui</Chip>
                    Buttons
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">Primary (Brand Teal)</p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-[#0D6B5F] hover:bg-[#0A5A50]">დამატება</Button>
                      <Button className="bg-[#0D6B5F] hover:bg-[#0A5A50]" size="lg">
                        <Search className="mr-2 h-4 w-4" />
                        ძებნა
                      </Button>
                      <Button className="bg-[#0D6B5F] hover:bg-[#0A5A50]" disabled>გამორთული</Button>
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">Secondary (Gold)</p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-[#E8B44B] hover:bg-[#D97706]">განცხადების დამატება</Button>
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">Variants</p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* HeroUI Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Chip size="sm" color="secondary" variant="flat">HeroUI</Chip>
                    Buttons
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">Color Schemes</p>
                    <div className="flex flex-wrap gap-3">
                      <GoldButton colorScheme="primary">Primary</GoldButton>
                      <GoldButton colorScheme="secondary">Secondary</GoldButton>
                      <GoldButton colorScheme="gold">Gold</GoldButton>
                      <GoldButton colorScheme="danger">Danger</GoldButton>
                      <GoldButton colorScheme="success">Success</GoldButton>
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">Sizes</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <GoldButton size="sm">Small</GoldButton>
                      <GoldButton size="md">Medium</GoldButton>
                      <GoldButton size="lg">Large</GoldButton>
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">With Icons</p>
                    <div className="flex flex-wrap gap-3">
                      <GoldButton colorScheme="primary" startContent={<Search className="h-4 w-4" />}>
                        ძებნა
                      </GoldButton>
                      <GoldButton colorScheme="gold" startContent={<Heart className="h-4 w-4" />}>
                        რჩეულებში
                      </GoldButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Badges Tab */}
          <TabsContent value="badges" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* shadcn/ui Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Chip size="sm" variant="flat">shadcn/ui</Chip>
                    Badges
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">VIP Badges</p>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-[#DC2626] text-white hover:bg-[#DC2626]">S-VIP</Badge>
                      <Badge className="bg-[#0D6B5F] text-white hover:bg-[#0D6B5F]">VIP +</Badge>
                      <Badge className="bg-[#6B7280] text-white hover:bg-[#6B7280]">VIP</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">Status</p>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        <Check className="mr-1 h-3 w-3" />
                        ვერიფიცირებული
                      </Badge>
                      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">მოლოდინში</Badge>
                      <Badge className="bg-red-100 text-red-700 hover:bg-red-100">უარყოფილი</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">Variants</p>
                    <div className="flex flex-wrap gap-3">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* HeroUI Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Chip size="sm" color="secondary" variant="flat">HeroUI</Chip>
                    Badges & Chips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">VIP Badges (Custom)</p>
                    <div className="flex flex-wrap gap-3">
                      <VipBadge level="super_vip" />
                      <VipBadge level="vip_plus" />
                      <VipBadge level="vip" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">Status Badges (Custom)</p>
                    <div className="flex flex-wrap gap-3">
                      <StatusBadge status="published" />
                      <StatusBadge status="draft" />
                      <StatusBadge status="paused" />
                      <StatusBadge status="sold" />
                      <StatusBadge status="archived" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">Verification Badge</p>
                    <div className="flex flex-wrap gap-3">
                      <VerificationBadge verified={true} />
                      <VerificationBadge verified={false} />
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-500">HeroUI Chips</p>
                    <div className="flex flex-wrap gap-3">
                      <Chip color="primary">Primary</Chip>
                      <Chip color="secondary">Secondary</Chip>
                      <Chip color="success">Success</Chip>
                      <Chip color="warning">Warning</Chip>
                      <Chip color="danger">Danger</Chip>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* shadcn/ui Forms */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Chip size="sm" variant="flat">shadcn/ui</Chip>
                    Form Elements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Text Input</Label>
                    <Input placeholder="შეიყვანეთ ელ-ფოსტა" />
                  </div>
                  <div className="space-y-2">
                    <Label>Input with Icon</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input className="pl-10" placeholder="მოძებნეთ..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Select</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="აირჩიეთ კატეგორია" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rings">ბეჭდები</SelectItem>
                        <SelectItem value="necklaces">ყელსაბამები</SelectItem>
                        <SelectItem value="earrings">საყურეები</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium">Checkboxes</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Checkbox id="shadcn-check1" />
                        <Label htmlFor="shadcn-check1">ოქრო</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="shadcn-check2" defaultChecked />
                        <Label htmlFor="shadcn-check2">ვერცხლი</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* HeroUI Forms */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Chip size="sm" color="secondary" variant="flat">HeroUI</Chip>
                    Form Elements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <GoldInput
                    label="Text Input"
                    placeholder="შეიყვანეთ ელ-ფოსტა"
                  />
                  <GoldInput
                    label="With Description"
                    placeholder="example@email.com"
                    description="გამოიყენება შეტყობინებებისთვის"
                  />
                  <GoldSelect
                    label="Select"
                    placeholder="აირჩიეთ კატეგორია"
                    options={[
                      { key: 'rings', label: 'ბეჭდები' },
                      { key: 'necklaces', label: 'ყელსაბამები' },
                      { key: 'earrings', label: 'საყურეები' },
                    ]}
                  />
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Checkbox & Switch</p>
                    <div className="flex flex-wrap gap-6">
                      <GoldCheckbox defaultSelected>ოქრო</GoldCheckbox>
                      <GoldCheckbox>ვერცხლი</GoldCheckbox>
                      <GoldSwitch defaultSelected>აქტიური</GoldSwitch>
                    </div>
                  </div>
                  <GoldRadioGroup
                    label="Radio Group"
                    options={[
                      { value: 'new', label: 'ახალი' },
                      { value: 'used', label: 'მეორადი' },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Cards Tab */}
          <TabsContent value="cards" className="mt-6">
            <div className="space-y-8">
              {/* Listing Cards */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Listing Cards</h3>
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
                    </div>
                    <GoldCardBody className="p-3">
                      <h3 className="font-semibold">ოქროს ბეჭედი 585</h3>
                      <p className="text-sm text-gray-500">თბილისი • ოქროს სახლი</p>
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
                      <h3 className="font-semibold">ვერცხლის ყელსაბამი</h3>
                      <p className="text-sm text-gray-500">ბათუმი • მანანა</p>
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
                      <h3 className="font-semibold">საყურეები</h3>
                      <p className="text-sm text-gray-500">ქუთაისი • ნინო</p>
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
                      <h3 className="font-semibold">სამაჯური</h3>
                      <p className="text-sm text-gray-500">თბილისი • ბესო</p>
                    </GoldCardBody>
                  </GoldCard>
                </div>
              </div>

              {/* Skeleton Cards */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Loading States</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <ListingCardSkeleton />
                  <ListingCardSkeleton />
                  <ListingCardSkeleton />
                  <ListingCardSkeleton />
                </div>
              </div>

              {/* User Cards */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">User Components</h3>
                <div className="flex flex-wrap gap-6">
                  <GoldAvatar
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                    name="გიორგი"
                    verified
                  />
                  <GoldUser
                    name="გიორგი მაჭარაშვილი"
                    description="ვერიფიცირებული გამყიდველი"
                    avatarProps={{
                      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                    }}
                    verified
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional HeroUI Components */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">🧩 HeroUI Components</h2>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
              </CardHeader>
              <CardContent>
                <GoldTabsBordered
                  items={[
                    {
                      key: 'overview',
                      title: 'მიმოხილვა',
                      icon: <Info className="h-4 w-4" />,
                      content: <p className="text-gray-600">მიმოხილვის შინაარსი აქ...</p>,
                    },
                    {
                      key: 'settings',
                      title: 'პარამეტრები',
                      icon: <Settings className="h-4 w-4" />,
                      content: <p className="text-gray-600">პარამეტრების შინაარსი აქ...</p>,
                    },
                  ]}
                />
              </CardContent>
            </Card>

            {/* Accordion */}
            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
              </CardHeader>
              <CardContent>
                <GoldAccordionBordered
                  items={[
                    {
                      key: 'faq1',
                      title: 'როგორ დავამატო განცხადება?',
                      content: 'განცხადების დასამატებლად დააჭირეთ "დამატება" ღილაკს და შეავსეთ ფორმა.',
                    },
                    {
                      key: 'faq2',
                      title: 'რა არის VIP სტატუსი?',
                      content: 'VIP სტატუსი გაძლევთ უპირატესობას ძებნაში და მეტ ნახვებს.',
                    },
                  ]}
                />
              </CardContent>
            </Card>

            {/* Pagination */}
            <Card>
              <CardHeader>
                <CardTitle>Pagination</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <GoldPagination
                  total={10}
                  initialPage={1}
                />
              </CardContent>
            </Card>

            {/* Loading States */}
            <Card>
              <CardHeader>
                <CardTitle>Loading States</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Spinner size="sm" color="primary" />
                  <Spinner size="md" color="primary" />
                  <Spinner size="lg" color="primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Progress Bar</p>
                  <Progress value={65} color="primary" className="max-w-md" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing & Radius */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">📐 Spacing & Radius</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Border Radius</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 rounded-sm bg-[#0D6B5F]" />
                  <p className="text-xs">sm (4px)</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 rounded bg-[#0D6B5F]" />
                  <p className="text-xs">default (8px)</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 rounded-lg bg-[#0D6B5F]" />
                  <p className="text-xs">lg (12px)</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 rounded-xl bg-[#0D6B5F]" />
                  <p className="text-xs">xl (16px)</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 rounded-full bg-[#0D6B5F]" />
                  <p className="text-xs">full</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shadows</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 rounded-lg bg-white shadow-sm" />
                  <p className="text-xs">shadow-sm</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 rounded-lg bg-white shadow" />
                  <p className="text-xs">shadow</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 rounded-lg bg-white shadow-md" />
                  <p className="text-xs">shadow-md</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 rounded-lg bg-white shadow-lg" />
                  <p className="text-xs">shadow-lg</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">🎯 Common Icons (Lucide)</h2>
          
          <Card>
            <CardContent className="flex flex-wrap gap-6 p-6">
              <Tooltip content="Heart">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Heart className="h-6 w-6" />
                  <p className="text-xs">Heart</p>
                </div>
              </Tooltip>
              <Tooltip content="Search">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Search className="h-6 w-6" />
                  <p className="text-xs">Search</p>
                </div>
              </Tooltip>
              <Tooltip content="User">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <User className="h-6 w-6" />
                  <p className="text-xs">User</p>
                </div>
              </Tooltip>
              <Tooltip content="Crown">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Crown className="h-6 w-6 text-[#DC2626]" />
                  <p className="text-xs">Crown</p>
                </div>
              </Tooltip>
              <Tooltip content="Star">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Star className="h-6 w-6 text-[#6B7280]" />
                  <p className="text-xs">Star</p>
                </div>
              </Tooltip>
              <Tooltip content="Sparkles">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Sparkles className="h-6 w-6 text-[#0D6B5F]" />
                  <p className="text-xs">Sparkles</p>
                </div>
              </Tooltip>
              <Tooltip content="Phone">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Phone className="h-6 w-6" />
                  <p className="text-xs">Phone</p>
                </div>
              </Tooltip>
              <Tooltip content="Check">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Check className="h-6 w-6 text-green-500" />
                  <p className="text-xs">Check</p>
                </div>
              </Tooltip>
              <Tooltip content="Close">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <X className="h-6 w-6 text-red-500" />
                  <p className="text-xs">Close</p>
                </div>
              </Tooltip>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
}
