'use client';

import { useLanguage } from '@/lib/i18n';
import { Card, CardBody, CardHeader, Button, Chip, Input } from '@heroui/react';
import {
  Wallet,
  CreditCard,
  Building2,
  Smartphone,
  Bitcoin,
} from 'lucide-react';

const topUpAmounts = [10, 25, 50, 100, 200, 500];

const mockTransactions = [
  { id: 1, type: 'topup', amount: 100, date: '2024-01-15', status: 'completed' },
  { id: 2, type: 'purchase', amount: -30, date: '2024-01-14', status: 'completed', description: 'VIP განცხადება' },
  { id: 3, type: 'purchase', amount: -10, date: '2024-01-12', status: 'completed', description: 'გაძლიერება 7 დღე' },
  { id: 4, type: 'topup', amount: 50, date: '2024-01-10', status: 'completed' },
  { id: 5, type: 'refund', amount: 15, date: '2024-01-08', status: 'completed' },
];

const mockPurchases = [
  { id: 1, name: 'VIP პაკეტი - 1 თვე', amount: 30, date: '2024-01-14' },
  { id: 2, name: 'გაძლიერება - 7 დღე', amount: 10, date: '2024-01-12' },
  { id: 3, name: 'ტოპ განთავსება', amount: 5, date: '2024-01-05' },
];

export default function WalletPage() {
  const { t } = useLanguage();
  const balance = 125;

  const getTransactionType = (type: string) => {
    switch (type) {
      case 'topup':
        return { label: t('wallet.topUpSuccess'), color: 'text-green-600' };
      case 'purchase':
        return { label: t('wallet.purchase'), color: 'text-red-600' };
      case 'refund':
        return { label: t('wallet.refund'), color: 'text-blue-600' };
      default:
        return { label: type, color: 'text-gray-600' };
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t('account.wallet')}</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Balance and top up */}
        <div className="space-y-6 lg:col-span-1">
          {/* Current balance */}
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600">
            <CardBody className="p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Wallet className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm opacity-90">{t('wallet.currentBalance')}</p>
                  <p className="text-3xl font-bold">{balance} {t('common.currency')}</p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Top up */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">{t('account.topUp')}</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">{t('wallet.topUpAmount')}</p>
                <Input type="number" placeholder="0" variant="bordered" size="lg" />
              </div>

              <div className="flex flex-wrap gap-2">
                {topUpAmounts.map((amount) => (
                  <button
                    key={amount}
                    className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:border-amber-500 hover:bg-amber-50"
                  >
                    {amount} {t('common.currency')}
                  </button>
                ))}
              </div>

              <div className="space-y-2 pt-4">
                <p className="text-sm font-medium">{t('wallet.topUpMethods')}</p>
                <div className="grid gap-2">
                  <Button variant="bordered" className="justify-start gap-3">
                    <Building2 className="h-5 w-5" />
                    {t('wallet.bank')}
                  </Button>
                  <Button variant="bordered" className="justify-start gap-3">
                    <Smartphone className="h-5 w-5" />
                    {t('wallet.terminal')}
                  </Button>
                  <Button variant="bordered" className="justify-start gap-3">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                    </svg>
                    {t('wallet.googlePay')}
                  </Button>
                  <Button variant="bordered" className="justify-start gap-3">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.72 9.63c-.27-.2-.66-.13-.84.15l-3.41 5.23-1.42-1.42c-.26-.26-.68-.26-.94 0-.26.26-.26.68 0 .94l1.95 1.95c.12.12.29.19.47.19h.05c.19-.01.36-.11.47-.26l3.83-5.87c.19-.29.11-.68-.16-.91zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                    {t('wallet.applePay')}
                  </Button>
                  <Button variant="bordered" className="justify-start gap-3">
                    <Bitcoin className="h-5 w-5" />
                    {t('wallet.crypto')}
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Transactions and purchases */}
        <div className="space-y-6 lg:col-span-2">
          {/* Recent transactions */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">{t('wallet.recentTransactions')}</h3>
            </CardHeader>
            <CardBody>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left text-sm text-gray-500">
                      <th className="pb-3 pr-4">{t('wallet.transactionType')}</th>
                      <th className="pb-3 pr-4">{t('wallet.transactionAmount')}</th>
                      <th className="pb-3 pr-4">{t('wallet.transactionDate')}</th>
                      <th className="pb-3">{t('wallet.transactionStatus')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTransactions.map((tx) => {
                      const typeInfo = getTransactionType(tx.type);
                      return (
                        <tr key={tx.id} className="border-b last:border-0">
                          <td className="py-3 pr-4">
                            <span className={typeInfo.color}>{typeInfo.label}</span>
                            {tx.description && (
                              <p className="text-sm text-gray-500">{tx.description}</p>
                            )}
                          </td>
                          <td className={`py-3 pr-4 font-medium ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {tx.amount > 0 ? '+' : ''}{tx.amount} {t('common.currency')}
                          </td>
                          <td className="py-3 pr-4 text-sm text-gray-500">
                            {new Date(tx.date).toLocaleDateString()}
                          </td>
                          <td className="py-3">
                            <Chip color="success" variant="flat" size="sm">
                              {t('common.success')}
                            </Chip>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>

          {/* Purchase history */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">{t('wallet.purchaseHistory')}</h3>
            </CardHeader>
            <CardBody>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left text-sm text-gray-500">
                      <th className="pb-3 pr-4">{t('wallet.purchaseName')}</th>
                      <th className="pb-3 pr-4">{t('wallet.transactionAmount')}</th>
                      <th className="pb-3">{t('wallet.transactionDate')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPurchases.map((purchase) => (
                      <tr key={purchase.id} className="border-b last:border-0">
                        <td className="py-3 pr-4 font-medium">{purchase.name}</td>
                        <td className="py-3 pr-4">{purchase.amount} {t('common.currency')}</td>
                        <td className="py-3 text-sm text-gray-500">
                          {new Date(purchase.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
