'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { useLanguage } from '@/lib/i18n';
import { categories } from '@/lib/mock/categories';

// Category images from Unsplash
const categoryImages: Record<string, string> = {
  rings: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop',
  necklaces: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
  bracelets: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop',
  earrings: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop',
  sets: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
  diamonds: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?w=400&h=300&fit=crop',
  silver: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=300&fit=crop',
  coins: 'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=400&h=300&fit=crop',
};

// Georgian labels for categories
const categoryLabels: Record<string, { ka: string; en: string }> = {
  rings: { ka: 'ბეჭდები', en: 'Rings' },
  necklaces: { ka: 'ყელსაბამები', en: 'Necklaces' },
  bracelets: { ka: 'სამაჯურები', en: 'Bracelets' },
  earrings: { ka: 'საყურეები', en: 'Earrings' },
  sets: { ka: 'წყვილები', en: 'Sets' },
  diamonds: { ka: 'ბრილიანტი', en: 'Diamonds' },
  silver: { ka: 'ვერცხლი', en: 'Silver' },
  coins: { ka: 'მონეტა/ზოდი', en: 'Coins/Bullion' },
};

const displayCategories = [
  'rings',
  'necklaces',
  'bracelets',
  'earrings',
  'sets',
  'diamonds',
  'silver',
  'coins',
];

export function CategoryGrid() {
  const { language } = useLanguage();

  return (
    <section className="py-8 bg-gray-50">
      <Container>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-5">
          {displayCategories.map((catSlug) => {
            const image = categoryImages[catSlug];
            const label = categoryLabels[catSlug];
            
            return (
              <Link
                key={catSlug}
                href={`/marketplace?category=${catSlug}`}
                className="group flex flex-col items-center"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-200 mb-3 group-hover:shadow-lg transition-shadow">
                  <Image
                    src={image}
                    alt={label ? (language === 'ka' ? label.ka : label.en) : catSlug}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 25vw, 12.5vw"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 text-center font-medium leading-tight">
                  {label ? (language === 'ka' ? label.ka : label.en) : catSlug}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
