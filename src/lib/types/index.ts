// Category types
export interface Category {
  id: string;
  slug: string;
  nameKey: string; // i18n key for the name
  icon: string; // Lucide icon name
  image?: string;
  parentId?: string;
  children?: Category[];
}

// Listing types
export type ListingStatus = 'draft' | 'published' | 'paused' | 'sold' | 'archived';
export type VipLevel = 'none' | 'vip' | 'vip_plus' | 'super_vip';
export type Condition = 'new' | 'used';
export type DeliveryMethod = 'pickup' | 'shipping' | 'both';
export type MetalType = 'gold' | 'silver' | 'platinum' | 'palladium' | 'other';
export type StoneType = 'diamond' | 'ruby' | 'sapphire' | 'emerald' | 'pearl' | 'other' | 'none';

export interface ListingSpecifications {
  metalType?: MetalType;
  purity?: string; // e.g., "585", "750", "925"
  weight?: number; // in grams
  stoneType?: StoneType;
  stoneWeight?: number; // in carats
  size?: string;
  year?: number;
  brand?: string;
  certificate?: boolean;
  certificateNumber?: string;
}

export interface Listing {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: 'GEL' | 'USD' | 'EUR';
  categoryId: string;
  category?: Category;
  sellerId: string;
  seller?: Seller;
  status: ListingStatus;
  vipLevel: VipLevel;
  condition: Condition;
  deliveryMethod: DeliveryMethod;
  city: string;
  specifications: ListingSpecifications;
  images: string[];
  views: number;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
}

// Seller types
export type VerificationStatus = 'not_verified' | 'pending' | 'verified';

export interface Seller {
  id: string;
  name: string;
  slug: string;
  email: string;
  phone: string;
  city: string;
  avatar?: string;
  verificationStatus: VerificationStatus;
  bio?: string;
  rating?: number;
  totalListings: number;
  soldItems: number;
  memberSince: string;
}

// User types (for auth context)
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  verificationStatus: VerificationStatus;
  balance: number;
  plan: PlanType;
  createdAt: string;
}

// Filter types
export interface FilterConfig {
  categoryId: string;
  filters: {
    metalType?: boolean;
    stoneType?: boolean;
    purity?: boolean;
    weight?: boolean;
    priceRange?: boolean;
    city?: boolean;
    condition?: boolean;
    sellerVerification?: boolean;
    certificate?: boolean;
    deliveryMethod?: boolean;
    size?: boolean;
    year?: boolean;
    brand?: boolean;
  };
}

export interface FilterValues {
  categoryId?: string;
  metalType?: MetalType[];
  stoneType?: StoneType[];
  purity?: string[];
  weightMin?: number;
  weightMax?: number;
  priceMin?: number;
  priceMax?: number;
  city?: string[];
  condition?: Condition[];
  sellerVerification?: VerificationStatus[];
  certificate?: boolean;
  deliveryMethod?: DeliveryMethod[];
}

export type SortOption = 'newest' | 'oldest' | 'price_asc' | 'price_desc' | 'popular';

// Transaction types
export type TransactionType = 'top_up' | 'purchase' | 'refund';
export type TransactionStatus = 'pending' | 'completed' | 'failed';

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  currency: 'GEL';
  status: TransactionStatus;
  description: string;
  createdAt: string;
}

// Plan types
export type PlanType = 'free' | 'vip' | 'vip_plus' | 'super_vip';

export interface Plan {
  id: string;
  type: PlanType;
  nameKey: string;
  price: number;
  currency: 'GEL';
  period: 'month';
  features: string[]; // i18n keys
  listingLimit: number;
  vipListings: number;
  boostCredits: number;
  prioritySupport: boolean;
}

// Boost types
export type BoostType = 'highlight' | 'top_placement';

export interface Boost {
  id: string;
  type: BoostType;
  nameKey: string;
  descriptionKey: string;
  price: number;
  currency: 'GEL';
  duration: number; // in days
}

// Cities in Georgia
export const georgianCities = [
  'თბილისი',
  'ბათუმი',
  'ქუთაისი',
  'რუსთავი',
  'გორი',
  'ზუგდიდი',
  'ფოთი',
  'ხაშური',
  'სამტრედია',
  'სენაკი',
  'ზესტაფონი',
  'მარნეული',
  'თელავი',
  'ახალციხე',
  'ოზურგეთი',
  'ქობულეთი',
  'ცხინვალი',
  'წყალტუბო',
  'საგარეჯო',
  'გარდაბანი',
] as const;

export type GeorgianCity = (typeof georgianCities)[number];

// Purity options
export const purityOptions = {
  gold: ['375', '500', '585', '750', '875', '916', '958', '999'],
  silver: ['800', '830', '875', '925', '960', '999'],
  platinum: ['850', '900', '950', '999'],
} as const;

// Pagination
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
