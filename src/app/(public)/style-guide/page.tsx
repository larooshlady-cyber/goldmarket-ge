'use client';

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
import { Heart, ShoppingCart, User, Search, Phone, Check, X, AlertCircle } from 'lucide-react';

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-8">
      <Container>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1A1A1A]">GoldMarket.ge Style Guide</h1>
          <p className="mt-2 text-[#6B7280]">Design system documentation and component library</p>
        </div>

        {/* Color Palette */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">🎨 Color Palette</h2>
          
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
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-[#6B7280]" />
                  <div>
                    <p className="font-medium">Text Secondary</p>
                    <p className="text-sm text-gray-500">#6B7280</p>
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
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">📝 Typography</h2>
          
          <Card>
            <CardContent className="space-y-6 p-6">
              <div>
                <p className="text-xs text-gray-500">text-4xl / 36px - Page Title</p>
                <p className="text-4xl font-bold">ძვირფასეულობის მარკეტი</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">text-3xl / 30px - Section Title</p>
                <p className="text-3xl font-bold">სუპერ VIP განცხადებები</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">text-2xl / 24px - Card Title</p>
                <p className="text-2xl font-semibold">ოქროს ბეჭედი 585</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">text-xl / 20px - Subtitle</p>
                <p className="text-xl font-medium">პოპულარული კატეგორიები</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">text-lg / 18px - Large Text</p>
                <p className="text-lg">მოძებნეთ ოქრო, ვერცხლი, ბრილიანტები</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">text-base / 16px - Body</p>
                <p className="text-base">იყიდეთ და გაყიდეთ ძვირფასეულობა სანდო გამყიდველებისგან</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">text-sm / 14px - Small</p>
                <p className="text-sm text-gray-600">გამყიდველი: ოქროს სახლი</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">text-xs / 12px - Caption</p>
                <p className="text-xs text-gray-500">გამოქვეყნდა: 15 იანვარი, 2026</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">🔘 Buttons</h2>
          
          <Card>
            <CardContent className="space-y-6 p-6">
              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">Primary Button (Brand Teal)</p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-[#0D6B5F] hover:bg-[#0A5A50]">
                    დამატება
                  </Button>
                  <Button className="bg-[#0D6B5F] hover:bg-[#0A5A50]" size="lg">
                    <Search className="mr-2 h-4 w-4" />
                    ძებნა
                  </Button>
                  <Button className="bg-[#0D6B5F] hover:bg-[#0A5A50]" disabled>
                    გამორთული
                  </Button>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">Secondary Button (Gold)</p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-[#E8B44B] hover:bg-[#D97706]">
                    განცხადების დამატება
                  </Button>
                  <Button className="bg-[#E8B44B] hover:bg-[#D97706]" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    რჩეულებში
                  </Button>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">Outline Button</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline">
                    გაუქმება
                  </Button>
                  <Button variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    დარეკვა
                  </Button>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">Ghost Button</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost">
                    მეტის ნახვა
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">Destructive Button</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="destructive">
                    წაშლა
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Badges */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">🏷️ Badges</h2>
          
          <Card>
            <CardContent className="space-y-6 p-6">
              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">VIP Badges</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-[#DC2626] text-white hover:bg-[#DC2626]">S-VIP</Badge>
                  <Badge className="bg-[#0D6B5F] text-white hover:bg-[#0D6B5F]">VIP +</Badge>
                  <Badge className="bg-[#6B7280] text-white hover:bg-[#6B7280]">VIP</Badge>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">Price Badge</p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-md bg-[#E8B44B] px-3 py-1 text-sm font-semibold text-white">
                    400₾
                  </span>
                  <span className="inline-flex items-center rounded-md bg-[#E8B44B] px-3 py-1 text-sm font-semibold text-white">
                    1,250₾
                  </span>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">Status Badges</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    <Check className="mr-1 h-3 w-3" />
                    ვერიფიცირებული
                  </Badge>
                  <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                    მოლოდინში
                  </Badge>
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                    <X className="mr-1 h-3 w-3" />
                    უარყოფილი
                  </Badge>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">Category Badges</p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline">ბეჭედი</Badge>
                  <Badge variant="outline">ყელსაბამი</Badge>
                  <Badge variant="outline">საყურე</Badge>
                  <Badge variant="outline">სამაჯური</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Form Elements */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">📋 Form Elements</h2>
          
          <Card>
            <CardContent className="space-y-6 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Text Input</Label>
                  <Input placeholder="შეიყვანეთ ელ-ფოსტა" />
                </div>
                <div className="space-y-2">
                  <Label>Input with Icon</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input className="pl-10" placeholder="მოძებნეთ ძვირფასეულობა..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Input with Error</Label>
                  <Input className="border-red-500 focus-visible:ring-red-500" placeholder="არასწორი მონაცემი" />
                  <p className="flex items-center gap-1 text-sm text-red-500">
                    <AlertCircle className="h-4 w-4" />
                    სავალდებულო ველი
                  </p>
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
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">Checkboxes</p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Checkbox id="check1" className="border-[#0D6B5F] data-[state=checked]:bg-[#0D6B5F]" />
                    <Label htmlFor="check1">ოქრო</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="check2" defaultChecked className="border-[#0D6B5F] data-[state=checked]:bg-[#0D6B5F]" />
                    <Label htmlFor="check2">ვერცხლი</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="check3" className="border-[#0D6B5F] data-[state=checked]:bg-[#0D6B5F]" />
                    <Label htmlFor="check3">პლატინა</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">🃏 Cards</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Listing Card Example */}
            <Card className="overflow-hidden">
              <div className="relative aspect-square bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" 
                  alt="Ring"
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute left-2 top-2 bg-[#DC2626] text-white hover:bg-[#DC2626]">
                  S-VIP
                </Badge>
                <span className="absolute left-2 top-10 rounded-md bg-[#E8B44B] px-2 py-1 text-sm font-semibold text-white">
                  400₾
                </span>
              </div>
              <CardContent className="p-3">
                <h3 className="font-semibold">ბეჭედი</h3>
                <p className="text-sm text-gray-500">მანანა</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative aspect-square bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" 
                  alt="Necklace"
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute left-2 top-2 bg-[#0D6B5F] text-white hover:bg-[#0D6B5F]">
                  VIP +
                </Badge>
                <span className="absolute left-2 top-10 rounded-md bg-[#E8B44B] px-2 py-1 text-sm font-semibold text-white">
                  850₾
                </span>
              </div>
              <CardContent className="p-3">
                <h3 className="font-semibold">ყელსაბამი</h3>
                <p className="text-sm text-gray-500">ოქროს სახლი</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative aspect-square bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400" 
                  alt="Earrings"
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute left-2 top-2 bg-[#6B7280] text-white hover:bg-[#6B7280]">
                  VIP
                </Badge>
                <span className="absolute left-2 top-10 rounded-md bg-[#E8B44B] px-2 py-1 text-sm font-semibold text-white">
                  320₾
                </span>
              </div>
              <CardContent className="p-3">
                <h3 className="font-semibold">საყურე</h3>
                <p className="text-sm text-gray-500">ნინო დავითა</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative aspect-square bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" 
                  alt="Bracelet"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-2 top-2 rounded-md bg-[#E8B44B] px-2 py-1 text-sm font-semibold text-white">
                  550₾
                </span>
              </div>
              <CardContent className="p-3">
                <h3 className="font-semibold">სამაჯური</h3>
                <p className="text-sm text-gray-500">ბესო იოსელიანი</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Category Cards */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">📁 Category Cards</h2>
          
          <div className="flex gap-4 overflow-x-auto pb-4">
            <Card className="shrink-0 cursor-pointer bg-[#0D6B5F] text-white">
              <CardContent className="flex h-24 w-32 flex-col items-center justify-center p-4">
                <div className="mb-2 text-2xl">⚙️</div>
                <p className="text-center text-sm font-medium">ყველა კატეგორია</p>
              </CardContent>
            </Card>
            <Card className="shrink-0 cursor-pointer hover:shadow-md">
              <CardContent className="flex h-24 w-32 flex-col items-center justify-center p-4">
                <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100" alt="" className="mb-2 h-10 w-10 rounded object-cover" />
                <p className="text-center text-sm font-medium">ბეჭედი</p>
              </CardContent>
            </Card>
            <Card className="shrink-0 cursor-pointer hover:shadow-md">
              <CardContent className="flex h-24 w-32 flex-col items-center justify-center p-4">
                <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100" alt="" className="mb-2 h-10 w-10 rounded object-cover" />
                <p className="text-center text-sm font-medium">საყურე</p>
              </CardContent>
            </Card>
            <Card className="shrink-0 cursor-pointer hover:shadow-md">
              <CardContent className="flex h-24 w-32 flex-col items-center justify-center p-4">
                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100" alt="" className="mb-2 h-10 w-10 rounded object-cover" />
                <p className="text-center text-sm font-medium">სამაჯური</p>
              </CardContent>
            </Card>
            <Card className="shrink-0 cursor-pointer hover:shadow-md">
              <CardContent className="flex h-24 w-32 flex-col items-center justify-center p-4">
                <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100" alt="" className="mb-2 h-10 w-10 rounded object-cover" />
                <p className="text-center text-sm font-medium">ყელსაბამი</p>
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
          <h2 className="mb-6 text-2xl font-bold">🎯 Common Icons</h2>
          
          <Card>
            <CardContent className="flex flex-wrap gap-6 p-6">
              <div className="flex flex-col items-center gap-2">
                <Heart className="h-6 w-6" />
                <p className="text-xs">Heart</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Search className="h-6 w-6" />
                <p className="text-xs">Search</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <User className="h-6 w-6" />
                <p className="text-xs">User</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShoppingCart className="h-6 w-6" />
                <p className="text-xs">Cart</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-6 w-6" />
                <p className="text-xs">Phone</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Check className="h-6 w-6 text-green-500" />
                <p className="text-xs">Check</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <X className="h-6 w-6 text-red-500" />
                <p className="text-xs">Close</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AlertCircle className="h-6 w-6 text-yellow-500" />
                <p className="text-xs">Alert</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
}
