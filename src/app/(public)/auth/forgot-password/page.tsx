'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Mail } from 'lucide-react';

export default function ForgotPasswordPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock password reset
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12">
      <Container size="small">
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader className="text-center">
              <Link href="/" className="mx-auto flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                  <span className="text-xl font-bold text-white">G</span>
                </div>
              </Link>
              <CardTitle className="mt-4 text-2xl">{t('auth.forgotPasswordTitle')}</CardTitle>
              <CardDescription>
                {t('auth.forgotPasswordDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{t('auth.checkEmail')}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {t('auth.resetLinkSent')}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    {t('auth.tryAnotherEmail')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('auth.emailLabel')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('auth.emailPlaceholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600"
                  >
                    {t('auth.sendResetLink')}
                  </Button>
                </form>
              )}
            </CardContent>
            <CardFooter className="justify-center">
              <Link
                href="/auth/login"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                {t('auth.backToLogin')}
              </Link>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </div>
  );
}
