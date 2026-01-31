'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { BadgeCheck, MapPin, Phone, Mail, Calendar, Package, ShoppingBag, Star } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Container, Breadcrumbs } from '@/components/layout';
import { ListingGrid } from '@/components/marketplace';
import { CallButton } from '@/components/listing';
import { Avatar, Chip, Card, CardBody, Divider } from '@heroui/react';
import { getSellerBySlug } from '@/lib/mock/sellers';
import { getListingsBySellerId } from '@/lib/mock/listings';

interface SellerPageProps {
  params: Promise<{ slug: string }>;
}

export default function SellerPage({ params }: SellerPageProps) {
  const { slug } = use(params);
  const { t } = useLanguage();

  const seller = getSellerBySlug(slug);

  if (!seller) {
    notFound();
  }

  const sellerListings = getListingsBySellerId(seller.id).filter(
    (l) => l.status === 'published'
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ka-GE', {
      year: 'numeric',
      month: 'long',
    });
  };

  const breadcrumbItems = [
    { label: t('nav.marketplace'), href: '/marketplace' },
    { label: seller.name },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <Container>
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />

        {/* Seller Header */}
        <Card className="mb-8">
          <CardBody className="p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              {/* Avatar and Info */}
              <div className="flex flex-1 gap-4">
                <Avatar
                  src={seller.avatar}
                  name={seller.name}
                  className="h-20 w-20 md:h-24 md:w-24"
                  showFallback
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl font-bold text-gray-900">{seller.name}</h1>
                    {seller.verificationStatus === 'verified' && (
                      <Chip
                        color="success"
                        variant="flat"
                        size="sm"
                        startContent={<BadgeCheck className="h-3 w-3" />}
                      >
                        {t('common.verified')}
                      </Chip>
                    )}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {seller.city}
                    </span>
                    {seller.rating && (
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        {seller.rating}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {t('sellerProfile.memberSince')} {formatDate(seller.memberSince)}
                    </span>
                  </div>

                  {seller.bio && (
                    <p className="mt-3 text-gray-600">{seller.bio}</p>
                  )}
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-2 md:items-end">
                <CallButton phone={seller.phone} size="lg" />
                <p className="text-sm text-gray-500">{seller.phone}</p>
              </div>
            </div>

            <Divider className="my-6" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 text-gray-500">
                  <Package className="h-5 w-5" />
                </div>
                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {seller.totalListings}
                </p>
                <p className="text-sm text-gray-500">
                  {t('sellerProfile.totalListings')}
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 text-gray-500">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {seller.soldItems}
                </p>
                <p className="text-sm text-gray-500">{t('sellerProfile.soldItems')}</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 text-gray-500">
                  <Star className="h-5 w-5" />
                </div>
                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {seller.rating || '-'}
                </p>
                <p className="text-sm text-gray-500">{t('sellerProfile.rating')}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Seller Listings */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            {t('sellerProfile.listings')} ({sellerListings.length})
          </h2>
          {sellerListings.length > 0 ? (
            <ListingGrid
              listings={sellerListings.map((l) => ({ ...l, seller }))}
            />
          ) : (
            <Card>
              <CardBody className="flex items-center justify-center py-12">
                <p className="text-gray-500">{t('empty.noListings')}</p>
              </CardBody>
            </Card>
          )}
        </section>
      </Container>
    </div>
  );
}
