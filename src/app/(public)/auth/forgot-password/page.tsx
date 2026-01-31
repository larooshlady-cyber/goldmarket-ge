'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Container } from '@/components/layout';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  Button,
} from '@heroui/react';

export default function ForgotPasswordPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FFF8E6] via-white to-[#FFF8E6] py-12 px-4">
      <Container size="small">
        <div className="mx-auto max-w-md">
          <Card className="border border-gray-200 shadow-xl" radius="lg">
            <CardHeader className="flex flex-col items-center gap-4 px-8 pt-10 pb-4">
              <Link href="/">
                <Image
                  src="/logo-icon.svg"
                  alt="GoldMarket"
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
              </Link>
              {isSubmitted ? (
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    შეამოწმეთ ელ-ფოსტა
                  </h1>
                  <p className="mt-2 text-sm text-gray-500">
                    პაროლის აღდგენის ინსტრუქცია გამოგზავნილია მისამართზე: <strong>{email}</strong>
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {t('auth.forgotPasswordTitle')}
                  </h1>
                  <p className="mt-1 text-sm text-gray-500">
                    შეიყვანეთ ელ-ფოსტა და გამოგიგზავნით აღდგენის ბმულს
                  </p>
                </div>
              )}
            </CardHeader>

            <CardBody className="px-8 py-6">
              {isSubmitted ? (
                <div className="space-y-5">
                  <Button
                    as={Link}
                    href="/auth/login"
                    className="w-full h-14 bg-[#FFB011] text-black font-semibold hover:bg-[#E09D00] text-base"
                    radius="lg"
                  >
                    დაბრუნება ავტორიზაციაზე
                  </Button>
                  <p className="text-center text-sm text-gray-500">
                    ვერ მიიღეთ წერილი?{' '}
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="font-medium text-[#FFB011] hover:text-[#E09D00]"
                    >
                      ხელახლა გაგზავნა
                    </button>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="email"
                    label={t('auth.emailLabel')}
                    placeholder={t('auth.emailPlaceholder')}
                    value={email}
                    onValueChange={setEmail}
                    startContent={<Mail className="h-4 w-4 text-gray-400" />}
                    classNames={{
                      inputWrapper: 'h-14 border-gray-200 hover:border-[#FFB011] focus-within:!border-[#FFB011] rounded-xl',
                      label: 'text-gray-600 font-medium',
                      input: 'text-base',
                    }}
                    variant="bordered"
                    radius="lg"
                    size="lg"
                    isRequired
                  />

                  <Button
                    type="submit"
                    className="w-full h-14 bg-[#FFB011] text-black font-semibold hover:bg-[#E09D00] text-base"
                    radius="lg"
                    isLoading={isLoading}
                  >
                    {t('auth.sendResetLink')}
                  </Button>
                </form>
              )}
            </CardBody>

            <CardFooter className="justify-center pb-10 pt-2">
              <Link
                href="/auth/login"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                უკან დაბრუნება
              </Link>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </div>
  );
}
