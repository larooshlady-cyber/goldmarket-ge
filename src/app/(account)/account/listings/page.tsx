'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { listings } from '@/lib/mock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Plus,
  Search,
  MoreVertical,
  Edit,
  Pause,
  Play,
  CheckCircle,
  Archive,
  Trash2,
  Sparkles,
} from 'lucide-react';

type ListingStatus = 'all' | 'published' | 'draft' | 'paused' | 'sold' | 'archived';

export default function MyListingsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ListingStatus>('all');

  // Add mock status to listings
  const listingsWithStatus = listings.map((listing, index) => ({
    ...listing,
    status: index % 5 === 0 ? 'draft' : index % 4 === 0 ? 'paused' : 'published',
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
  }));

  const filteredListings = listingsWithStatus.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || listing.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-700">{t('listingStatus.published')}</Badge>;
      case 'draft':
        return <Badge variant="secondary">{t('listingStatus.draft')}</Badge>;
      case 'paused':
        return <Badge className="bg-yellow-100 text-yellow-700">{t('listingStatus.paused')}</Badge>;
      case 'sold':
        return <Badge className="bg-blue-100 text-blue-700">{t('listingStatus.sold')}</Badge>;
      case 'archived':
        return <Badge variant="outline">{t('listingStatus.archived')}</Badge>;
      default:
        return null;
    }
  };

  const statusTabs: { key: ListingStatus; label: string }[] = [
    { key: 'all', label: t('common.all') },
    { key: 'published', label: t('listingStatus.published') },
    { key: 'draft', label: t('listingStatus.draft') },
    { key: 'paused', label: t('listingStatus.paused') },
    { key: 'sold', label: t('listingStatus.sold') },
    { key: 'archived', label: t('listingStatus.archived') },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">{t('account.myListings')}</h1>
        <Button asChild className="bg-amber-500 hover:bg-amber-600">
          <Link href="/account/listings/new">
            <Plus className="mr-2 h-4 w-4" />
            {t('account.createListing')}
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4">
            {/* Status tabs */}
            <div className="flex flex-wrap gap-2">
              {statusTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setStatusFilter(tab.key)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    statusFilter === tab.key
                      ? 'bg-amber-100 text-amber-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder={t('common.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-500">
                  <th className="pb-3 pr-4">{t('common.images')}</th>
                  <th className="pb-3 pr-4">{t('common.title')}</th>
                  <th className="hidden pb-3 pr-4 md:table-cell">{t('common.category')}</th>
                  <th className="pb-3 pr-4">{t('common.price')}</th>
                  <th className="pb-3 pr-4">{t('common.status')}</th>
                  <th className="hidden pb-3 pr-4 lg:table-cell">{t('common.date')}</th>
                  <th className="pb-3">{t('common.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredListings.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-gray-500">
                      {t('empty.noListings')}
                    </td>
                  </tr>
                ) : (
                  filteredListings.map((listing) => (
                    <tr key={listing.id} className="border-b last:border-0">
                      <td className="py-3 pr-4">
                        <img
                          src={listing.images[0]}
                          alt={listing.title}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                      </td>
                      <td className="py-3 pr-4">
                        <Link
                          href={`/listing/${listing.slug}`}
                          className="font-medium hover:text-amber-600"
                        >
                          {listing.title}
                        </Link>
                      </td>
                      <td className="hidden py-3 pr-4 text-sm text-gray-600 md:table-cell">
                        {listing.category?.nameKey || listing.categoryId}
                      </td>
                      <td className="py-3 pr-4 font-medium">
                        {listing.price.toLocaleString()} {t('common.currency')}
                      </td>
                      <td className="py-3 pr-4">{getStatusBadge(listing.status)}</td>
                      <td className="hidden py-3 pr-4 text-sm text-gray-500 lg:table-cell">
                        {new Date(listing.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              {t('listingActions.edit')}
                            </DropdownMenuItem>
                            {listing.status === 'published' && (
                              <DropdownMenuItem>
                                <Pause className="mr-2 h-4 w-4" />
                                {t('listingActions.pause')}
                              </DropdownMenuItem>
                            )}
                            {listing.status === 'paused' && (
                              <DropdownMenuItem>
                                <Play className="mr-2 h-4 w-4" />
                                {t('listingActions.resume')}
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              {t('listingActions.markSold')}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Sparkles className="mr-2 h-4 w-4" />
                              {t('listingActions.boost')}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Archive className="mr-2 h-4 w-4" />
                              {t('listingActions.archive')}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              {t('listingActions.delete')}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
