'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Eye,
  Calendar,
  MapPin,
  Share2,
  Flag,
  ChevronRight,
  ShieldAlert,
  Truck,
  Package,
  Phone,
  BadgeCheck,
  Heart,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Container, Breadcrumbs } from '@/components/layout';
import { ListingGrid } from '@/components/marketplace';
import { ImageGallery, AttributeList, SellerCard, CallButton } from '@/components/listing';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Tabs,
  Tab,
  Chip,
  Divider,
  Avatar,
} from '@heroui/react';
import { getListingBySlug, listings } from '@/lib/mock/listings';
import { getSellerById } from '@/lib/mock/sellers';
import { getCategoryById } from '@/lib/mock/categories';
import { VipBadge } from '@/components/heroui';

interface ListingPageProps {
  params: Promise<{ slug: string }>;
}

export default function ListingPage({ params }: ListingPageProps) {
  const { slug } = use(params);
  const { t } = useLanguage();

  const listing = getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  const seller = getSellerById(listing.sellerId);
  const category = getCategoryById(listing.categoryId);

  // Get similar listings (same category, exclude current)
  const similarListings = listings
    .filter((l) => l.categoryId === listing.categoryId && l.id !== listing.id)
    .slice(0, 4)
    .map((l) => ({
      ...l,
      seller: getSellerById(l.sellerId),
    }));

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ka-GE').format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ka-GE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Build attributes list for the specifications table
  const attributes = [
    listing.specifications.metalType && {
      label: t('filters.metalType'),
      value: t(`categories.${listing.specifications.metalType}`),
    },
    listing.specifications.purity && {
      label: t('filters.purity'),
      value: listing.specifications.purity,
    },
    listing.specifications.weight && {
      label: t('filters.weight'),
      value: `${listing.specifications.weight} ${t('filters.weightUnit')}`,
    },
    listing.specifications.stoneType &&
      listing.specifications.stoneType !== 'none' && {
        label: t('filters.stoneType'),
        value:
          listing.specifications.stoneType === 'diamond'
            ? t('categories.diamonds')
            : listing.specifications.stoneType,
      },
    listing.specifications.stoneWeight && {
      label: 'ქვის წონა',
      value: `${listing.specifications.stoneWeight} კარატი`,
    },
    listing.specifications.size && {
      label: 'ზომა',
      value: listing.specifications.size,
    },
    listing.specifications.year && {
      label: 'წელი',
      value: listing.specifications.year,
    },
    listing.specifications.brand && {
      label: 'ბრენდი',
      value: listing.specifications.brand,
    },
    {
      label: t('filters.condition'),
      value:
        listing.condition === 'new'
          ? t('filters.conditionNew')
          : t('filters.conditionUsed'),
    },
    listing.specifications.certificate && {
      label: t('filters.certificate'),
      value: listing.specifications.certificateNumber || '✓',
    },
    {
      label: t('filters.deliveryMethod'),
      value:
        listing.deliveryMethod === 'pickup'
          ? t('filters.deliveryPickup')
          : listing.deliveryMethod === 'shipping'
            ? t('filters.deliveryShipping')
            : t('filters.deliveryBoth'),
    },
  ].filter(Boolean) as { label: string; value: string | number }[];

  const safetyTips = [
    t('listing.safetyTip1'),
    t('listing.safetyTip2'),
    t('listing.safetyTip3'),
    t('listing.safetyTip4'),
  ];

  const breadcrumbItems = [
    { label: t('nav.marketplace'), href: '/marketplace' },
    category && {
      label: t(category.nameKey),
      href: `/marketplace?category=${category.slug}`,
    },
    { label: listing.title },
  ].filter(Boolean) as { label: string; href?: string }[];

  return (
    <div className="min-h-screen bg-white py-6">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-3">
            <ImageGallery images={listing.images} title={listing.title} />
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title, VIP Badge, and Price */}
            <Card className="border border-gray-200 shadow-none">
              <CardBody className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {listing.vipLevel !== 'none' && (
                      <VipBadge level={listing.vipLevel} className="mb-3" />
                    )}
                    <h1 className="text-xl font-bold text-gray-900 lg:text-2xl">
                      {listing.title}
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      isIconOnly
                      variant="flat"
                      className="bg-gray-100"
                      radius="full"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button
                      isIconOnly
                      variant="flat"
                      className="bg-gray-100"
                      radius="full"
                      aria-label="Share"
                    >
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <p className="mt-4 text-3xl font-bold text-[#FFB011]">
                  {formatPrice(listing.price)} <span className="text-lg font-normal text-gray-500">{t('common.currency')}</span>
                </p>

                {/* Meta info */}
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                    ID: {listing.id}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                    <Eye className="h-4 w-4" />
                    {listing.views}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                    <Calendar className="h-4 w-4" />
                    {formatDate(listing.createdAt)}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                    <MapPin className="h-4 w-4" />
                    {listing.city}
                  </span>
                </div>

                {/* Delivery badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {(listing.deliveryMethod === 'pickup' ||
                    listing.deliveryMethod === 'both') && (
                    <Chip
                      startContent={<Package className="h-3 w-3" />}
                      variant="flat"
                      className="bg-gray-100"
                      size="sm"
                    >
                      {t('filters.deliveryPickup')}
                    </Chip>
                  )}
                  {(listing.deliveryMethod === 'shipping' ||
                    listing.deliveryMethod === 'both') && (
                    <Chip
                      startContent={<Truck className="h-3 w-3" />}
                      variant="flat"
                      className="bg-gray-100"
                      size="sm"
                    >
                      {t('filters.deliveryShipping')}
                    </Chip>
                  )}
                </div>
              </CardBody>
            </Card>

            {/* Specifications */}
            <Card className="border border-gray-200 shadow-none">
              <CardHeader className="px-6 pt-5 pb-0">
                <h2 className="font-semibold text-gray-900">
                  {t('listing.specifications')}
                </h2>
              </CardHeader>
              <CardBody className="p-6 pt-4">
                <AttributeList attributes={attributes} />
              </CardBody>
            </Card>

            {/* Seller Card */}
            {seller && (
              <Card className="border border-gray-200 shadow-none">
                <CardHeader className="px-6 pt-5 pb-0">
                  <h2 className="font-semibold text-gray-900">
                    {t('common.seller')}
                  </h2>
                </CardHeader>
                <CardBody className="p-6 pt-4">
                  <div className="flex items-center gap-4">
                    <Avatar
                      src={seller.avatar}
                      name={seller.name.charAt(0)}
                      size="lg"
                      classNames={{
                        base: 'bg-[#FFB011]',
                        name: 'text-black font-semibold text-lg',
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{seller.name}</h3>
                        {seller.verificationStatus === 'verified' && (
                          <BadgeCheck className="h-5 w-5 text-[#0D6B5F]" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{seller.city}</p>
                      <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                        <span>{seller.totalListings} განცხადება</span>
                        <span>რეგისტრაცია: {new Date(seller.memberSince).getFullYear()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Divider className="my-4" />
                  
                  <Button
                    as="a"
                    href={`tel:${seller.phone}`}
                    className="w-full bg-[#0D6B5F] text-white font-semibold hover:bg-[#0A5A50]"
                    size="lg"
                    radius="lg"
                    startContent={<Phone className="h-5 w-5" />}
                  >
                    {seller.phone}
                  </Button>
                  
                  <Button
                    as={Link}
                    href={`/seller/${seller.id}`}
                    variant="bordered"
                    className="w-full mt-3 border-gray-300"
                    radius="lg"
                  >
                    პროფილის ნახვა
                  </Button>
                </CardBody>
              </Card>
            )}

            {/* Report */}
            <Button
              variant="light"
              className="w-full text-gray-500"
              startContent={<Flag className="h-4 w-4" />}
            >
              განცხადების გასაჩივრება
            </Button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-10">
          <Tabs
            aria-label="Listing details"
            variant="underlined"
            classNames={{
              tabList: 'gap-6 border-b border-gray-200',
              cursor: 'bg-[#FFB011]',
              tab: 'px-0 h-12',
              tabContent: 'group-data-[selected=true]:text-[#FFB011]',
            }}
          >
            <Tab key="description" title={t('common.description')}>
              <Card className="mt-6 border border-gray-200 shadow-none">
                <CardBody className="p-6">
                  <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {listing.description}
                  </p>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="safety" title={t('listing.safetyTips')}>
              <Card className="mt-6 border border-gray-200 shadow-none bg-amber-50">
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFB011]">
                      <ShieldAlert className="h-5 w-5 text-black" />
                    </div>
                    <ul className="space-y-3 flex-1">
                      {safetyTips.map((tip, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <ChevronRight className="h-4 w-4 text-[#FFB011]" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>

        {/* Similar Listings */}
        {similarListings.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                {t('listing.similarListings')}
              </h2>
              <Button
                as={Link}
                href={`/marketplace?category=${category?.slug}`}
                variant="light"
                className="font-medium text-gray-600"
                endContent={<ChevronRight className="h-4 w-4" />}
              >
                {t('common.viewAll')}
              </Button>
            </div>
            <ListingGrid listings={similarListings} />
          </section>
        )}
      </Container>
    </div>
  );
}
