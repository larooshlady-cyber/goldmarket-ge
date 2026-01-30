'use client';

import { ReactNode } from 'react';
import { HeroUIProvider } from '@heroui/react';
import { LanguageProvider } from '@/lib/i18n';
import { AuthProvider } from '@/lib/auth';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <LanguageProvider>
        <AuthProvider>{children}</AuthProvider>
      </LanguageProvider>
    </HeroUIProvider>
  );
}
