'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Shield, 
  BadgeCheck, 
  Sparkles, 
  Crown, 
  Star,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Container } from '@/components/layout';
import { SearchSection } from '@/components/layout/SearchSection';
import { CategoryGrid } from '@/components/layout/CategoryGrid';
import { ListingGrid } from '@/components/marketplace';
import { 
  Button, 
  Card, 
  CardBody,
  Accordion,
  AccordionItem,
} from '@heroui/react';
import {
  listings,
  getSuperVipListings,
  getVipPlusListings,
  getVipListings,
} from '@/lib/mock/listings';
import { getSellerById } from '@/lib/mock/sellers';

export default function HomePage() {
  const { t, language } = useLanguage();

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
      {/* Search Section - Right below header */}
      <SearchSection />

      {/* Category Grid with Images */}
      <CategoryGrid />

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b border-gray-100">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Shield className="h-5 w-5 text-[#FFB011]" />
              <span className="text-sm font-medium text-gray-700">{t('home.trustBadge')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <BadgeCheck className="h-5 w-5 text-[#0D6B5F]" />
              <span className="text-sm font-medium text-gray-700">{t('home.verifiedSellers')}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Super VIP Listings */}
      {superVipListings.length > 0 && (
        <section className="py-10 bg-white">
          <Container>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500">
                  <Crown className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {t('home.superVip')}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {language === 'ka' ? 'პრემიუმ განცხადებები' : 'Premium Listings'}
                  </p>
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
        <section className="py-10 bg-gray-50">
          <Container>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D6B5F]">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {t('home.vipPlus')}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {language === 'ka' ? 'გამორჩეული განცხადებები' : 'Featured Listings'}
                  </p>
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
        <section className="py-10 bg-white">
          <Container>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-500">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{t('home.vip')}</h2>
                  <p className="text-sm text-gray-500">
                    {language === 'ka' ? 'VIP განცხადებები' : 'VIP Listings'}
                  </p>
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

      {/* Call to Action */}
      <section className="py-14 bg-[#FFB011]">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              {language === 'ka' ? 'გაყიდეთ თქვენი ძვირფასეულობა' : 'Sell Your Precious Items'}
            </h2>
            <p className="text-black/70 mb-8 max-w-xl mx-auto">
              {language === 'ka' 
                ? 'შექმენით განცხადება უფასოდ და მიიღეთ წვდომა ათასობით მყიდველთან'
                : 'Create a listing for free and reach thousands of buyers'}
            </p>
            <Button
              as={Link}
              href="/account/listings/new"
              size="lg"
              radius="lg"
              className="bg-black text-white font-semibold hover:bg-gray-800 px-8"
            >
              {language === 'ka' ? 'განცხადების დამატება' : 'Add Listing'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <Container size="small">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t('home.faq')}
            </h2>
            <p className="text-gray-600">
              {language === 'ka' ? 'ხშირად დასმული კითხვები' : 'Frequently Asked Questions'}
            </p>
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
