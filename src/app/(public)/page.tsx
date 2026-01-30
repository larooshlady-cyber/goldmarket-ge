'use client';

import Link from 'next/link';
import { ArrowRight, Shield, BadgeCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Container } from '@/components/layout';
import { CategoryStrip, ListingGrid, SearchBar } from '@/components/marketplace';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {t('home.heroTitle')}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{t('home.heroSubtitle')}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <SearchBar size="large" className="w-full sm:w-96" />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-500" />
                {t('home.trustBadge')}
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500" />
                {t('home.verifiedSellers')}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-200 bg-white py-6">
        <Container>
          <CategoryStrip categories={categories} />
        </Container>
      </section>

      {/* Super VIP Listings */}
      {superVipListings.length > 0 && (
        <section className="py-10">
          <Container>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {t('home.superVip')}
                </h2>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/marketplace?vip=super_vip">
                  {t('common.viewAll')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ListingGrid listings={superVipListings.slice(0, 4)} />
          </Container>
        </section>
      )}

      {/* VIP+ Listings */}
      {vipPlusListings.length > 0 && (
        <section className="bg-gray-50 py-10">
          <Container>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('home.vipPlus')}
              </h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/marketplace?vip=vip_plus">
                  {t('common.viewAll')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ListingGrid listings={vipPlusListings.slice(0, 4)} />
          </Container>
        </section>
      )}

      {/* VIP Listings */}
      {vipListings.length > 0 && (
        <section className="py-10">
          <Container>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">{t('home.vip')}</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/marketplace?vip=vip">
                  {t('common.viewAll')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ListingGrid listings={vipListings.slice(0, 4)} />
          </Container>
        </section>
      )}

      {/* Featured Categories */}
      <section className="bg-gray-50 py-10">
        <Container>
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            {t('home.featuredCategories')}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.slice(1, 7).map((category) => (
              <Link
                key={category.id}
                href={`/marketplace?category=${category.slug}`}
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-sm font-medium text-white">
                    {t(category.nameKey)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <Container size="small">
          <h2 className="mb-6 text-center text-xl font-semibold text-gray-900">
            {t('home.faq')}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>
    </div>
  );
}
