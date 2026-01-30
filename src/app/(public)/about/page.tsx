'use client';

import { Shield, Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Container, Breadcrumbs } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: 'უსაფრთხოება',
      description: 'ვერიფიცირებული გამყიდველები და უსაფრთხო გარიგებები',
    },
    {
      icon: Users,
      title: 'საზოგადოება',
      description: '10,000+ აქტიური მომხმარებელი და მზარდი საზოგადოება',
    },
    {
      icon: Award,
      title: 'ხარისხი',
      description: 'მხოლოდ მაღალი ხარისხის ძვირფასეულობა და საიუველირო ნაწარმი',
    },
    {
      icon: Clock,
      title: 'გამოცდილება',
      description: '5+ წლიანი გამოცდილება ძვირფასი ლითონების ბაზარზე',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <Container size="small">
        <Breadcrumbs items={[{ label: t('nav.about') }]} className="mb-6" />

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              {t('nav.about')}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              GoldMarket.ge - საქართველოს უდიდესი ძვირფასი ლითონებისა და 
              საიუველირო ნაწარმის ონლაინ მარკეტპლეისი
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                ჩვენი მისია
              </h2>
              <p className="text-gray-600">
                ჩვენი მიზანია შევქმნათ უსაფრთხო და მოხერხებული პლატფორმა, 
                სადაც გამყიდველებსა და მყიდველებს შეეძლებათ მარტივად დაუკავშირდნენ 
                ერთმანეთს. ჩვენ ვაკავშირებთ ძვირფასი ლითონების მოყვარულებს, 
                კოლექციონერებს და პროფესიონალ საიუველირეებს მთელი საქართველოდან.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="flex gap-4 p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                    <feature.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                რას გთავაზობთ
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  ოქროს, ვერცხლის, პლატინის ნაწარმი
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  ბრილიანტები და ძვირფასი ქვები
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  საინვესტიციო ოქრო და ვერცხლი (ზოდები და მონეტები)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  ანტიკვარული და კოლექციონერული ნივთები
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  ლუქს საათები
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
