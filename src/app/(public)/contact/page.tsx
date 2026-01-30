'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Container, Breadcrumbs } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t('common.phone'),
      value: '+995 32 212 3456',
      href: 'tel:+995322123456',
    },
    {
      icon: Mail,
      label: t('common.email'),
      value: 'info@goldmarket.ge',
      href: 'mailto:info@goldmarket.ge',
    },
    {
      icon: MapPin,
      label: t('common.address'),
      value: 'თბილისი, საქართველო',
    },
    {
      icon: Clock,
      label: 'სამუშაო საათები',
      value: 'ორშ-პარ: 10:00 - 19:00',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('შეტყობინება გაიგზავნა!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <Container size="small">
        <Breadcrumbs items={[{ label: t('nav.contact') }]} className="mb-6" />

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">{t('nav.contact')}</h1>
            <p className="mt-4 text-lg text-gray-600">
              გაქვთ კითხვა? დაგვიკავშირდით ნებისმიერ დროს
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                      <item.icon className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-gray-900 hover:text-amber-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-gray-900">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  მოგვწერეთ
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('auth.nameLabel')}</Label>
                    <Input id="name" placeholder={t('auth.namePlaceholder')} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('auth.emailLabel')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('auth.emailPlaceholder')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">შეტყობინება</Label>
                    <Textarea
                      id="message"
                      placeholder="დაწერეთ თქვენი შეტყობინება..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600"
                  >
                    გაგზავნა
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
