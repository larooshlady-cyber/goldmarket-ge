'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
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
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Container, Breadcrumbs } from '@/components/layout';
import { ListingGrid } from '@/components/marketplace';
import { ImageGallery, AttributeList, SellerCard, CallButton } from '@/components/listing';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { getListingBySlug, listings } from '@/lib/mock/listings';
import { getSellerById } from '@/lib/mock/sellers';
import { getCategoryById } from '@/lib/mock/categories';

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
    <div className="min-h-screen bg-gray-50 py-6">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column - Image Gallery */}
          <div>
            <ImageGallery images={listing.images} title={listing.title} />
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                  {listing.title}
                </h1>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Flag className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="mt-4 text-3xl font-bold text-amber-600">
                {formatPrice(listing.price)} {t('common.currency')}
              </p>

              {/* Meta info */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  {t('listing.id')}: {listing.id}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {listing.views} {t('listing.views')}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(listing.createdAt)}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {listing.city}
                </span>
              </div>

              {/* Delivery badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {(listing.deliveryMethod === 'pickup' ||
                  listing.deliveryMethod === 'both') && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Package className="h-3 w-3" />
                    {t('filters.deliveryPickup')}
                  </Badge>
                )}
                {(listing.deliveryMethod === 'shipping' ||
                  listing.deliveryMethod === 'both') && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Truck className="h-3 w-3" />
                    {t('filters.deliveryShipping')}
                  </Badge>
                )}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="mb-3 font-semibold text-gray-900">
                {t('listing.specifications')}
              </h2>
              <AttributeList attributes={attributes} />
            </div>

            {/* Seller Card */}
            {seller && (
              <div>
                <h2 className="mb-3 font-semibold text-gray-900">
                  {t('common.seller')}
                </h2>
                <SellerCard seller={seller} />
                <div className="mt-4">
                  <CallButton phone={seller.phone} size="lg" className="w-full" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">{t('common.description')}</TabsTrigger>
              <TabsTrigger value="safety">{t('listing.safetyTips')}</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <p className="whitespace-pre-line text-gray-700">
                    {listing.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="safety" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <ul className="space-y-2">
                      {safetyTips.map((tip, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Similar Listings */}
        {similarListings.length > 0 && (
          <section className="mt-12">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('listing.similarListings')}
              </h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/marketplace?category=${category?.slug}`}>
                  {t('common.viewAll')}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ListingGrid listings={similarListings} />
          </section>
        )}
      </Container>
    </div>
  );
}
