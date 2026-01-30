'use client';

import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-0.5">
      <Button
        variant={language === 'ka' ? 'default' : 'ghost'}
        size="sm"
        className="h-7 px-2 text-xs font-medium"
        onClick={() => setLanguage('ka')}
      >
        KA
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        className="h-7 px-2 text-xs font-medium"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
}
