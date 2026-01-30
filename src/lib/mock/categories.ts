import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'all',
    slug: 'all',
    nameKey: 'categories.all',
    icon: 'LayoutGrid',
  },
  {
    id: 'gold',
    slug: 'gold',
    nameKey: 'categories.gold',
    icon: 'CircleDot',
    image: '/images/categories/gold.jpg',
  },
  {
    id: 'silver',
    slug: 'silver',
    nameKey: 'categories.silver',
    icon: 'Circle',
    image: '/images/categories/silver.jpg',
  },
  {
    id: 'platinum',
    slug: 'platinum',
    nameKey: 'categories.platinum',
    icon: 'Gem',
    image: '/images/categories/platinum.jpg',
  },
  {
    id: 'diamonds',
    slug: 'diamonds',
    nameKey: 'categories.diamonds',
    icon: 'Diamond',
    image: '/images/categories/diamonds.jpg',
  },
  {
    id: 'gemstones',
    slug: 'gemstones',
    nameKey: 'categories.gemstones',
    icon: 'Sparkles',
    image: '/images/categories/gemstones.jpg',
  },
  {
    id: 'rings',
    slug: 'rings',
    nameKey: 'categories.rings',
    icon: 'CircleDashed',
    image: '/images/categories/rings.jpg',
  },
  {
    id: 'necklaces',
    slug: 'necklaces',
    nameKey: 'categories.necklaces',
    icon: 'Link',
    image: '/images/categories/necklaces.jpg',
  },
  {
    id: 'bracelets',
    slug: 'bracelets',
    nameKey: 'categories.bracelets',
    icon: 'Infinity',
    image: '/images/categories/bracelets.jpg',
  },
  {
    id: 'earrings',
    slug: 'earrings',
    nameKey: 'categories.earrings',
    icon: 'Droplet',
    image: '/images/categories/earrings.jpg',
  },
  {
    id: 'watches',
    slug: 'watches',
    nameKey: 'categories.watches',
    icon: 'Watch',
    image: '/images/categories/watches.jpg',
  },
  {
    id: 'coins',
    slug: 'coins',
    nameKey: 'categories.coins',
    icon: 'Coins',
    image: '/images/categories/coins.jpg',
  },
  {
    id: 'bars',
    slug: 'bars',
    nameKey: 'categories.bars',
    icon: 'RectangleHorizontal',
    image: '/images/categories/bars.jpg',
  },
  {
    id: 'antique',
    slug: 'antique',
    nameKey: 'categories.antique',
    icon: 'Crown',
    image: '/images/categories/antique.jpg',
  },
  {
    id: 'wedding',
    slug: 'wedding',
    nameKey: 'categories.wedding',
    icon: 'Heart',
    image: '/images/categories/wedding.jpg',
  },
  {
    id: 'engagement',
    slug: 'engagement',
    nameKey: 'categories.engagement',
    icon: 'HeartHandshake',
    image: '/images/categories/engagement.jpg',
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((cat) => cat.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};
