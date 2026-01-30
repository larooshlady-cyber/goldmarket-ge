'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Shield, 
  BadgeCheck, 
  Sparkles, 
  Crown, 
  Star,
  ChevronRight,
  Search 
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Container } from '@/components/layout';
import { CategoryStrip, ListingGrid, SearchBar } from '@/components/marketplace';
import { 
  Button, 
  Input, 
  Card, 
  CardBody,
  Accordion,
  AccordionItem,
  Chip,
  Divider,
} from '@heroui/react';
import { categories } from '@/lib/mock/categories';
import {
  listings,
  getSuperVipListings,
  getVipPlusListings,
  getVipListings,
} from '@/lib/mock/listings';
import { getSellerById } from '@/lib/mock/sellers';

export default function HomePage() {
  const { t } = useLanguage();

  // Enrich listings with seller data
  const enrichListings = (listingsList: typeof listings) => {
    return listingsList.map((listing) => ({
      ...listing,
      seller: getSellerById(listing.sellerId),
    }));
  };

  const superVipListings = enrichListings(getSuperVipListings());
  const vipPlusListings = enrichListings(getVipPlusListings());
  const vipListings = enrichListings(getVipListings());

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8E6] via-white to-[#FFF8E6] py-16 md:py-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFB011]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFB011]/10 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            {/* Logo Icon */}
            <div className="flex justify-center mb-6">
              <Image 
                src="/logo-icon.svg" 
                alt="" 
                width={64} 
                height={64}
                className="h-16 w-16"
              />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              {t('home.heroTitle')}
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.heroSubtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <div className="relative w-full sm:w-[480px]">
                <Input
                  type="search"
                  placeholder={t('common.searchPlaceholder')}
                  startContent={<Search className="h-5 w-5 text-gray-400" />}
                  classNames={{
                    base: 'w-full',
                    inputWrapper: 'h-14 bg-white border-2 border-gray-200 hover:border-[#FFB011] focus-within:!border-[#FFB011] shadow-lg',
                    input: 'text-base',
                  }}
                  radius="lg"
                  size="lg"
                />
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <Shield className="h-5 w-5 text-[#FFB011]" />
                <span className="text-sm font-medium text-gray-700">{t('home.trustBadge')}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <BadgeCheck className="h-5 w-5 text-[#0D6B5F]" />
                <span className="text-sm font-medium text-gray-700">{t('home.verifiedSellers')}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-100 bg-white py-8">
        <Container>
          <CategoryStrip categories={categories} />
        </Container>
      </section>

      {/* Super VIP Listings */}
      {superVipListings.length > 0 && (
        <section className="py-12 bg-gradient-to-b from-white to-gray-50">
          <Container>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500">
                  <Crown className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {t('home.superVip')}
                  </h2>
                  <p className="text-sm text-gray-500">პრემიუმ განცხადებები</p>
                </div>
              </div>
              <Button
                as={Link}
                href="/marketplace?vip=super_vip"
                variant="light"
                className="font-medium text-gray-600"
                endContent={<ChevronRight className="h-4 w-4" />}
              >
                {t('common.viewAll')}
              </Button>
            </div>
            <ListingGrid listings={superVipListings.slice(0, 4)} />
          </Container>
        </section>
      )}

      {/* VIP+ Listings */}
      {vipPlusListings.length > 0 && (
        <section className="py-12 bg-gray-50">
          <Container>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D6B5F]">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {t('home.vipPlus')}
                  </h2>
                  <p className="text-sm text-gray-500">გამორჩეული განცხადებები</p>
                </div>
              </div>
              <Button
                as={Link}
                href="/marketplace?vip=vip_plus"
                variant="light"
                className="font-medium text-gray-600"
                endContent={<ChevronRight className="h-4 w-4" />}
              >
                {t('common.viewAll')}
              </Button>
            </div>
            <ListingGrid listings={vipPlusListings.slice(0, 4)} />
          </Container>
        </section>
      )}

      {/* VIP Listings */}
      {vipListings.length > 0 && (
        <section className="py-12 bg-white">
          <Container>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-500">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{t('home.vip')}</h2>
                  <p className="text-sm text-gray-500">VIP განცხადებები</p>
                </div>
              </div>
              <Button
                as={Link}
                href="/marketplace?vip=vip"
                variant="light"
                className="font-medium text-gray-600"
                endContent={<ChevronRight className="h-4 w-4" />}
              >
                {t('common.viewAll')}
              </Button>
            </div>
            <ListingGrid listings={vipListings.slice(0, 4)} />
          </Container>
        </section>
      )}

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t('home.featuredCategories')}
            </h2>
            <p className="text-gray-600">აირჩიეთ კატეგორია და დაიწყეთ ძიება</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.slice(1, 7).map((category) => (
              <Link
                key={category.id}
                href={`/marketplace?category=${category.slug}`}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 transition-transform hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl shadow-sm">
                    {category.icon || '💎'}
                  </div>
                  <p className="text-sm font-semibold text-white text-center">
                    {t(category.nameKey)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#FFB011]">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              გაყიდეთ თქვენი ძვირფასეულობა
            </h2>
            <p className="text-black/70 mb-8 max-w-xl mx-auto">
              შექმენით განცხადება უფასოდ და მიიღეთ წვდომა ათასობით მყიდველთან
            </p>
            <Button
              as={Link}
              href="/account/listings/new"
              size="lg"
              radius="lg"
              className="bg-black text-white font-semibold hover:bg-gray-800 px-8"
            >
              განცხადების დამატება
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <Container size="small">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t('home.faq')}
            </h2>
            <p className="text-gray-600">ხშირად დასმული კითხვები</p>
          </div>
          <Card className="border border-gray-200 shadow-none">
            <CardBody className="p-0">
              <Accordion 
                variant="light"
                selectionMode="multiple"
                className="px-0"
              >
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    aria-label={item.q}
                    title={item.q}
                    classNames={{
                      title: 'text-base font-medium',
                      content: 'text-gray-600 pb-4',
                      trigger: 'py-4 px-6',
                    }}
                  >
                    {item.a}
                  </AccordionItem>
                ))}
              </Accordion>
            </CardBody>
          </Card>
        </Container>
      </section>
    </div>
  );
}
