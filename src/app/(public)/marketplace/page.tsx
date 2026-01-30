'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { Container, Breadcrumbs } from '@/components/layout';
import {
  CategoryStrip,
  ListingGrid,
  FilterSidebar,
  FilterDrawer,
  SortSelect,
  Pagination,
  ActiveFilterChips,
  EmptyState,
  SkeletonCard,
} from '@/components/marketplace';
import { FilterValues, SortOption } from '@/lib/types';
import { categories, getCategoryBySlug } from '@/lib/mock/categories';
import { listings } from '@/lib/mock/listings';
import { getSellerById } from '@/lib/mock/sellers';
import { getFilterConfigByCategory } from '@/lib/mock/filters';

const ITEMS_PER_PAGE = 12;

function MarketplaceContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const categorySlug = searchParams.get('category') || 'all';
  const category = getCategoryBySlug(categorySlug);

  const [filterValues, setFilterValues] = useState<FilterValues>({});
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  const filterConfig = useMemo(
    () => getFilterConfigByCategory(category?.id || 'all'),
    [category]
  );

  // Filter and sort listings
  const filteredListings = useMemo(() => {
    let result = [...listings];

    // Filter by category
    if (categorySlug && categorySlug !== 'all') {
      result = result.filter((l) => l.categoryId === category?.id);
    }

    // Apply filters
    if (filterValues.priceMin !== undefined) {
      result = result.filter((l) => l.price >= filterValues.priceMin!);
    }
    if (filterValues.priceMax !== undefined) {
      result = result.filter((l) => l.price <= filterValues.priceMax!);
    }
    if (filterValues.metalType?.length) {
      result = result.filter((l) =>
        filterValues.metalType!.includes(l.specifications.metalType!)
      );
    }
    if (filterValues.stoneType?.length) {
      result = result.filter((l) =>
        filterValues.stoneType!.includes(l.specifications.stoneType!)
      );
    }
    if (filterValues.purity?.length) {
      result = result.filter((l) =>
        filterValues.purity!.includes(l.specifications.purity!)
      );
    }
    if (filterValues.condition?.length) {
      result = result.filter((l) => filterValues.condition!.includes(l.condition));
    }
    if (filterValues.city?.length) {
      result = result.filter((l) => filterValues.city!.includes(l.city));
    }
    if (filterValues.certificate) {
      result = result.filter((l) => l.specifications.certificate === true);
    }
    if (filterValues.deliveryMethod?.length) {
      result = result.filter((l) =>
        filterValues.deliveryMethod!.includes(l.deliveryMethod)
      );
    }
    if (filterValues.sellerVerification?.length) {
      result = result.filter((l) => {
        const seller = getSellerById(l.sellerId);
        return (
          seller && filterValues.sellerVerification!.includes(seller.verificationStatus)
        );
      });
    }

    // Enrich with seller data
    result = result.map((l) => ({
      ...l,
      seller: getSellerById(l.sellerId),
    }));

    // Sort
    switch (sortOption) {
      case 'newest':
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'oldest':
        result.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        result.sort((a, b) => b.views - a.views);
        break;
    }

    return result;
  }, [categorySlug, category, filterValues, sortOption]);

  // Pagination
  const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);
  const paginatedListings = filteredListings.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Active filters for chips
  const activeFilters = useMemo(() => {
    const filters: { key: string; label: string; value: string }[] = [];

    if (filterValues.priceMin || filterValues.priceMax) {
      filters.push({
        key: 'price',
        label: t('common.price'),
        value: `${filterValues.priceMin || 0} - ${filterValues.priceMax || '∞'} ${t('common.currency')}`,
      });
    }
    filterValues.metalType?.forEach((m) =>
      filters.push({ key: 'metalType', label: t('filters.metalType'), value: m })
    );
    filterValues.stoneType?.forEach((s) =>
      filters.push({ key: 'stoneType', label: t('filters.stoneType'), value: s })
    );
    filterValues.purity?.forEach((p) =>
      filters.push({ key: 'purity', label: t('filters.purity'), value: p })
    );
    filterValues.condition?.forEach((c) =>
      filters.push({
        key: 'condition',
        label: t('filters.condition'),
        value: c === 'new' ? t('filters.conditionNew') : t('filters.conditionUsed'),
      })
    );
    filterValues.city?.forEach((c) =>
      filters.push({ key: 'city', label: t('common.city'), value: c })
    );
    if (filterValues.certificate) {
      filters.push({
        key: 'certificate',
        label: t('filters.certificate'),
        value: t('filters.hasCertificate'),
      });
    }

    return filters;
  }, [filterValues, t]);

  const handleRemoveFilter = (key: string, value: string) => {
    const newValues = { ...filterValues };

    switch (key) {
      case 'price':
        delete newValues.priceMin;
        delete newValues.priceMax;
        break;
      case 'metalType':
        newValues.metalType = newValues.metalType?.filter((v) => v !== value);
        if (!newValues.metalType?.length) delete newValues.metalType;
        break;
      case 'stoneType':
        newValues.stoneType = newValues.stoneType?.filter((v) => v !== value);
        if (!newValues.stoneType?.length) delete newValues.stoneType;
        break;
      case 'purity':
        newValues.purity = newValues.purity?.filter((v) => v !== value);
        if (!newValues.purity?.length) delete newValues.purity;
        break;
      case 'condition':
        newValues.condition = newValues.condition?.filter(
          (v) =>
            (value === t('filters.conditionNew') ? 'new' : 'used') !== v
        );
        if (!newValues.condition?.length) delete newValues.condition;
        break;
      case 'city':
        newValues.city = newValues.city?.filter((v) => v !== value);
        if (!newValues.city?.length) delete newValues.city;
        break;
      case 'certificate':
        delete newValues.certificate;
        break;
    }

    setFilterValues(newValues);
    setCurrentPage(1);
  };

  const handleClearAllFilters = () => {
    setFilterValues({});
    setCurrentPage(1);
  };

  const breadcrumbItems = [
    { label: t('nav.marketplace'), href: '/marketplace' },
    ...(category && category.id !== 'all'
      ? [{ label: t(category.nameKey) }]
      : []),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Strip */}
      <section className="border-b border-gray-200 bg-white py-4">
        <Container>
          <CategoryStrip categories={categories} activeCategory={category?.id} />
        </Container>
      </section>

      <Container className="py-6">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} className="mb-4" />

        <div className="flex gap-6">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-20 rounded-lg border border-gray-200 bg-white p-4">
              <h2 className="mb-4 font-semibold text-gray-900">{t('common.filter')}</h2>
              <FilterSidebar
                config={filterConfig}
                values={filterValues}
                onChange={setFilterValues}
                onApply={() => setCurrentPage(1)}
                onReset={handleClearAllFilters}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {/* Mobile Filter Button */}
                <div className="lg:hidden">
                  <FilterDrawer
                    config={filterConfig}
                    values={filterValues}
                    onChange={setFilterValues}
                    onApply={() => setCurrentPage(1)}
                    onReset={handleClearAllFilters}
                    activeFiltersCount={activeFilters.length}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  {filteredListings.length} {t('sellerProfile.listings').toLowerCase()}
                </p>
              </div>
              <SortSelect value={sortOption} onChange={setSortOption} />
            </div>

            {/* Active Filters */}
            <ActiveFilterChips
              filters={activeFilters}
              onRemove={handleRemoveFilter}
              onClearAll={handleClearAllFilters}
              className="mb-4"
            />

            {/* Listings Grid */}
            {paginatedListings.length > 0 ? (
              <>
                <ListingGrid listings={paginatedListings} />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  className="mt-8"
                />
              </>
            ) : (
              <EmptyState
                action={{
                  label: t('common.clearFilters'),
                  onClick: handleClearAllFilters,
                }}
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <div className="py-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function MarketplacePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <MarketplaceContent />
    </Suspense>
  );
}
