'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { Container } from '@/components/layout';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  Button,
  Checkbox,
  Divider,
} from '@heroui/react';

export default function RegisterPage() {
  const { t } = useLanguage();
  const { login } = useAuth();
  const router = useRouter();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('პაროლები არ ემთხვევა');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    login();
    router.push('/account');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FFF8E6] via-white to-[#FFF8E6] py-12 px-4">
      <Container size="small">
        <div className="mx-auto max-w-md">
          <Card className="border border-gray-200 shadow-xl">
            <CardHeader className="flex flex-col items-center gap-4 pt-8 pb-2">
              <Link href="/">
                <Image
                  src="/logo-icon.svg"
                  alt="GoldMarket"
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
              </Link>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  {t('auth.registerTitle')}
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  შექმენით ახალი ანგარიში
                </p>
              </div>
            </CardHeader>

            <CardBody className="px-8 py-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  label={t('auth.nameLabel')}
                  placeholder={t('auth.namePlaceholder')}
                  value={name}
                  onValueChange={setName}
                  startContent={<User className="h-4 w-4 text-gray-400" />}
                  classNames={{
                    inputWrapper: 'border-gray-200 hover:border-[#FFB011] focus-within:!border-[#FFB011]',
                  }}
                  variant="bordered"
                  isRequired
                />

                <Input
                  type="tel"
                  label={t('auth.phoneLabel')}
                  placeholder={t('auth.phonePlaceholder')}
                  value={phone}
                  onValueChange={setPhone}
                  startContent={<Phone className="h-4 w-4 text-gray-400" />}
                  classNames={{
                    inputWrapper: 'border-gray-200 hover:border-[#FFB011] focus-within:!border-[#FFB011]',
                  }}
                  variant="bordered"
                  isRequired
                />

                <Input
                  type="email"
                  label={t('auth.emailLabel')}
                  placeholder={t('auth.emailPlaceholder')}
                  value={email}
                  onValueChange={setEmail}
                  startContent={<Mail className="h-4 w-4 text-gray-400" />}
                  classNames={{
                    inputWrapper: 'border-gray-200 hover:border-[#FFB011] focus-within:!border-[#FFB011]',
                  }}
                  variant="bordered"
                  isRequired
                />

                <Input
                  type={isVisible ? 'text' : 'password'}
                  label={t('auth.passwordLabel')}
                  placeholder={t('auth.passwordPlaceholder')}
                  value={password}
                  onValueChange={setPassword}
                  startContent={<Lock className="h-4 w-4 text-gray-400" />}
                  endContent={
                    <button
                      type="button"
                      onClick={() => setIsVisible(!isVisible)}
                      className="focus:outline-none"
                    >
                      {isVisible ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  }
                  classNames={{
                    inputWrapper: 'border-gray-200 hover:border-[#FFB011] focus-within:!border-[#FFB011]',
                  }}
                  variant="bordered"
                  isRequired
                />

                <Input
                  type={isVisible ? 'text' : 'password'}
                  label={t('auth.confirmPasswordLabel')}
                  placeholder={t('auth.confirmPasswordPlaceholder')}
                  value={confirmPassword}
                  onValueChange={setConfirmPassword}
                  startContent={<Lock className="h-4 w-4 text-gray-400" />}
                  classNames={{
                    inputWrapper: 'border-gray-200 hover:border-[#FFB011] focus-within:!border-[#FFB011]',
                  }}
                  variant="bordered"
                  isRequired
                />

                <Checkbox
                  isSelected={agreedToTerms}
                  onValueChange={setAgreedToTerms}
                  size="sm"
                  classNames={{
                    wrapper: 'after:bg-[#FFB011]',
                  }}
                >
                  <span className="text-sm text-gray-600">
                    {t('auth.agreeToTerms')}{' '}
                    <Link href="/legal/terms" className="text-[#FFB011] hover:underline">
                      {t('nav.terms')}
                    </Link>
                  </span>
                </Checkbox>

                <Button
                  type="submit"
                  className="w-full bg-[#FFB011] text-black font-semibold hover:bg-[#E09D00]"
                  size="lg"
                  radius="lg"
                  isLoading={isLoading}
                  isDisabled={!agreedToTerms}
                >
                  {t('auth.registerButton')}
                </Button>
              </form>

              <div className="relative my-6">
                <Divider />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-gray-500">
                  {t('auth.orContinueWith')}
                </span>
              </div>

              <div className="grid gap-3">
                <Button
                  variant="bordered"
                  className="w-full border-gray-200 font-medium"
                  radius="lg"
                  startContent={
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  }
                >
                  {t('auth.google')}
                </Button>
                <Button
                  variant="bordered"
                  className="w-full border-gray-200 font-medium"
                  radius="lg"
                  startContent={
                    <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  }
                >
                  {t('auth.facebook')}
                </Button>
              </div>
            </CardBody>

            <CardFooter className="justify-center pb-8">
              <p className="text-sm text-gray-600">
                {t('auth.alreadyHaveAccount')}{' '}
                <Link
                  href="/auth/login"
                  className="font-semibold text-[#0D6B5F] hover:text-[#0A5A50]"
                >
                  {t('common.login')}
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </div>
  );
}
