'use client';

import { useLanguage } from '@/lib/i18n';
import { Button } from '@heroui/react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-0.5">
      <Button
        variant={language === 'ka' ? 'solid' : 'light'}
        color={language === 'ka' ? 'primary' : 'default'}
        size="sm"
        className="h-7 min-w-8 px-2 text-xs font-medium"
        onPress={() => setLanguage('ka')}
      >
        KA
      </Button>
      <Button
        variant={language === 'en' ? 'solid' : 'light'}
        color={language === 'en' ? 'primary' : 'default'}
        size="sm"
        className="h-7 min-w-8 px-2 text-xs font-medium"
        onPress={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
}
