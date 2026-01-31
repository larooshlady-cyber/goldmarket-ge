'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Container, Breadcrumbs } from '@/components/layout';
import { Card, CardBody, Input, Textarea, Button } from '@heroui/react';

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
                  <CardBody className="flex items-center gap-4 p-4">
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
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card>
              <CardBody className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  მოგვწერეთ
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label={t('auth.nameLabel')}
                    placeholder={t('auth.namePlaceholder')}
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    label={t('auth.emailLabel')}
                    type="email"
                    placeholder={t('auth.emailPlaceholder')}
                    variant="bordered"
                    isRequired
                  />
                  <Textarea
                    label="შეტყობინება"
                    placeholder="დაწერეთ თქვენი შეტყობინება..."
                    minRows={5}
                    variant="bordered"
                    isRequired
                  />
                  <Button
                    type="submit"
                    className="w-full bg-amber-500 text-white hover:bg-amber-600"
                  >
                    გაგზავნა
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
