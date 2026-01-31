'use client';

import { useLanguage } from '@/lib/i18n';
import { Card, CardBody, CardHeader, Button, Chip, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Tabs, Tab } from '@heroui/react';
import {
  Plus,
  Search,
  MoreVertical,
  Edit,
  Pause,
  Play,
  Trash2,
  CheckCircle,
  Eye,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type ListingStatus = 'all' | 'published' | 'draft' | 'paused' | 'sold' | 'archived';

const mockListings = [
  {
    id: 1,
    title: 'ოქროს ბეჭედი 585',
    category: 'ბეჭდები',
    price: 1200,
    status: 'published',
    views: 234,
    createdAt: '2024-01-15',
    image: '/images/ring1.jpg',
  },
  {
    id: 2,
    title: 'ვერცხლის ჯაჭვი',
    category: 'ჯაჭვები',
    price: 350,
    status: 'published',
    views: 156,
    createdAt: '2024-01-12',
    image: '/images/chain1.jpg',
  },
  {
    id: 3,
    title: 'ბრილიანტის საყურე',
    category: 'საყურეები',
    price: 4500,
    status: 'draft',
    views: 0,
    createdAt: '2024-01-10',
    image: '/images/earring1.jpg',
  },
  {
    id: 4,
    title: 'ანტიკვარული მონეტა',
    category: 'მონეტები',
    price: 800,
    status: 'paused',
    views: 89,
    createdAt: '2024-01-08',
    image: '/images/coin1.jpg',
  },
  {
    id: 5,
    title: 'ოქროს სამაჯური',
    category: 'სამაჯურები',
    price: 2100,
    status: 'sold',
    views: 312,
    createdAt: '2024-01-05',
    image: '/images/bracelet1.jpg',
  },
];

const statusColors: Record<string, 'success' | 'warning' | 'danger' | 'default' | 'primary' | 'secondary'> = {
  published: 'success',
  draft: 'default',
  paused: 'warning',
  sold: 'primary',
  archived: 'secondary',
};

export default function ListingsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ListingStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredListings = mockListings.filter((listing) => {
    if (activeTab !== 'all' && listing.status !== activeTab) return false;
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'published':
        return t('listings.statusPublished');
      case 'draft':
        return t('listings.statusDraft');
      case 'paused':
        return t('listings.statusPaused');
      case 'sold':
        return t('listings.statusSold');
      case 'archived':
        return t('listings.statusArchived');
      default:
        return status;
    }
  };

  const statusCounts = {
    all: mockListings.length,
    published: mockListings.filter((l) => l.status === 'published').length,
    draft: mockListings.filter((l) => l.status === 'draft').length,
    paused: mockListings.filter((l) => l.status === 'paused').length,
    sold: mockListings.filter((l) => l.status === 'sold').length,
    archived: mockListings.filter((l) => l.status === 'archived').length,
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">{t('account.listings')}</h1>
        <Button
          as={Link}
          href="/account/listings/new"
          className="bg-amber-500 text-white hover:bg-amber-600"
          startContent={<Plus className="h-4 w-4" />}
        >
          {t('listings.createNew')}
        </Button>
      </div>

      <Card>
        <CardHeader className="flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Tabs 
            selectedKey={activeTab} 
            onSelectionChange={(key) => setActiveTab(key as ListingStatus)}
            variant="underlined"
            classNames={{
              tabList: "gap-2",
              cursor: "bg-amber-500",
              tab: "px-3 py-2",
            }}
          >
            <Tab key="all" title={`${t('common.all')} (${statusCounts.all})`} />
            <Tab key="published" title={`${t('listings.statusPublished')} (${statusCounts.published})`} />
            <Tab key="draft" title={`${t('listings.statusDraft')} (${statusCounts.draft})`} />
            <Tab key="paused" title={`${t('listings.statusPaused')} (${statusCounts.paused})`} />
            <Tab key="sold" title={`${t('listings.statusSold')} (${statusCounts.sold})`} />
          </Tabs>
          
          <div className="w-full sm:w-64">
            <Input
              placeholder={t('common.search')}
              value={searchQuery}
              onValueChange={setSearchQuery}
              startContent={<Search className="h-4 w-4 text-gray-400" />}
              variant="bordered"
              size="sm"
            />
          </div>
        </CardHeader>
        
        <CardBody>
          {filteredListings.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-gray-500">{t('listings.noListings')}</p>
              <Button
                as={Link}
                href="/account/listings/new"
                className="mt-4 bg-amber-500 text-white hover:bg-amber-600"
                size="sm"
              >
                {t('listings.createFirst')}
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b text-left text-sm text-gray-500">
                    <th className="pb-3 pr-4">{t('listings.tableImage')}</th>
                    <th className="pb-3 pr-4">{t('listings.tableTitle')}</th>
                    <th className="pb-3 pr-4">{t('listings.tableCategory')}</th>
                    <th className="pb-3 pr-4">{t('listings.tablePrice')}</th>
                    <th className="pb-3 pr-4">{t('listings.tableStatus')}</th>
                    <th className="pb-3 pr-4">{t('listings.tableViews')}</th>
                    <th className="pb-3 pr-4">{t('listings.tableDate')}</th>
                    <th className="pb-3">{t('common.actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredListings.map((listing) => (
                    <tr key={listing.id} className="border-b last:border-0">
                      <td className="py-3 pr-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gray-100">
                          <Image
                            src={listing.image}
                            alt={listing.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-3 pr-4">
                        <Link 
                          href={`/listing/${listing.id}`}
                          className="font-medium hover:text-amber-600"
                        >
                          {listing.title}
                        </Link>
                      </td>
                      <td className="py-3 pr-4 text-sm text-gray-500">
                        {listing.category}
                      </td>
                      <td className="py-3 pr-4 font-medium">
                        {listing.price.toLocaleString()} {t('common.currency')}
                      </td>
                      <td className="py-3 pr-4">
                        <Chip 
                          color={statusColors[listing.status] || 'default'} 
                          variant="flat" 
                          size="sm"
                        >
                          {getStatusLabel(listing.status)}
                        </Chip>
                      </td>
                      <td className="py-3 pr-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {listing.views}
                        </div>
                      </td>
                      <td className="py-3 pr-4 text-sm text-gray-500">
                        {new Date(listing.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3">
                        <Dropdown>
                          <DropdownTrigger>
                            <Button isIconOnly variant="light" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Actions">
                            <DropdownItem
                              key="edit"
                              startContent={<Edit className="h-4 w-4" />}
                            >
                              {t('common.edit')}
                            </DropdownItem>
                            <DropdownItem
                              key="toggle-status"
                              startContent={
                                listing.status === 'published' ? (
                                  <Pause className="h-4 w-4" />
                                ) : (
                                  <Play className="h-4 w-4" />
                                )
                              }
                              className={listing.status !== 'published' && listing.status !== 'paused' ? 'hidden' : ''}
                            >
                              {listing.status === 'published' ? t('listings.pause') : t('listings.activate')}
                            </DropdownItem>
                            <DropdownItem
                              key="sold"
                              startContent={<CheckCircle className="h-4 w-4" />}
                              className={listing.status === 'sold' ? 'hidden' : ''}
                            >
                              {t('listings.markSold')}
                            </DropdownItem>
                            <DropdownItem
                              key="delete"
                              className="text-danger"
                              color="danger"
                              startContent={<Trash2 className="h-4 w-4" />}
                            >
                              {t('common.delete')}
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
