'use client';

import { useLanguage } from '@/lib/i18n';
import { plans, boosts } from '@/lib/mock';
import { Card, CardBody, CardHeader, CardFooter, Button, Chip } from '@heroui/react';
import { Check, Sparkles, TrendingUp, Crown, Star, MessageCircle } from 'lucide-react';

export default function ServicesPage() {
  const { t } = useLanguage();

  const getPlanIcon = (planId: string) => {
    switch (planId) {
      case 'plan-vip':
        return Star;
      case 'plan-vip-plus':
        return Sparkles;
      case 'plan-super-vip':
        return Crown;
      default:
        return Star;
    }
  };

  const getPlanStyle = (planId: string) => {
    switch (planId) {
      case 'plan-vip':
        return 'border-purple-200 bg-purple-50';
      case 'plan-vip-plus':
        return 'border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50';
      case 'plan-super-vip':
        return 'border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50';
      default:
        return '';
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t('services.pageTitle')}</h1>
      </div>

      {/* Current plan */}
      <Card className="mb-8">
        <CardBody className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm text-gray-500">{t('services.currentPlan')}</p>
            <p className="text-xl font-bold">{t('services.freePlan')}</p>
          </div>
          <Button color="warning">
            {t('services.upgradePlan')}
          </Button>
        </CardBody>
      </Card>

      {/* Subscription plans */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">{t('services.subscriptions')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.filter(p => p.type !== 'free').map((plan) => {
            const Icon = getPlanIcon(plan.id);
            return (
              <Card key={plan.id} className={`relative ${getPlanStyle(plan.id)}`}>
                {plan.id === 'plan-super-vip' && (
                  <Chip 
                    color="warning" 
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    რეკომენდებული
                  </Chip>
                )}
                <CardHeader className="flex flex-col items-center text-center pb-0">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className={`h-8 w-8 ${
                      plan.id === 'plan-super-vip' ? 'text-amber-500' :
                      plan.id === 'plan-vip-plus' ? 'text-blue-500' : 'text-purple-500'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold">{plan.nameKey}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500"> {t('common.currency')}{t('services.perMonth')}</span>
                  </div>
                </CardHeader>
                <CardBody>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                <CardFooter>
                  <Button 
                    className="w-full"
                    color={plan.id === 'plan-super-vip' ? 'warning' : 'default'}
                    variant={plan.id === 'plan-super-vip' ? 'solid' : 'bordered'}
                  >
                    {t('services.selectPlan')}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Boosts */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">{t('services.boosts')}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boosts.map((boost) => (
            <Card key={boost.id}>
              <CardBody className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                    <TrendingUp className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{boost.nameKey}</h3>
                    <p className="text-sm text-gray-500">{boost.duration} დღე</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600">{boost.descriptionKey}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{boost.price} {t('common.currency')}</span>
                  <Button variant="bordered" size="sm">
                    {t('services.boostListing')}
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Promo placement */}
      <section>
        <h2 className="mb-6 text-xl font-semibold">{t('services.promoPlacement')}</h2>
        <Card>
          <CardBody className="flex flex-col items-center gap-6 p-8 sm:flex-row">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-yellow-100">
              <Crown className="h-10 w-10 text-amber-600" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="mb-2 text-lg font-semibold">{t('services.promoPlacement')}</h3>
              <p className="mb-4 text-gray-600">{t('services.promoDescription')}</p>
              <Button startContent={<MessageCircle className="h-4 w-4" />}>
                {t('services.contactAdmin')}
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
