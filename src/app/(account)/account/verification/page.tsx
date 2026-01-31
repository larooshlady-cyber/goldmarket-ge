'use client';

import { useLanguage } from '@/lib/i18n';
import { Card, CardBody, CardHeader, Button, Chip, Input, Divider } from '@heroui/react';
import {
  Shield,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Camera,
} from 'lucide-react';
import { useState } from 'react';

type VerificationStatus = 'not_verified' | 'pending' | 'verified';

export default function VerificationPage() {
  const { t } = useLanguage();
  const [status] = useState<VerificationStatus>('not_verified');

  const getStatusInfo = () => {
    switch (status) {
      case 'verified':
        return {
          color: 'success' as const,
          icon: CheckCircle,
          title: t('verification.statusVerified'),
          description: t('verification.verifiedDescription'),
        };
      case 'pending':
        return {
          color: 'warning' as const,
          icon: Clock,
          title: t('verification.statusPending'),
          description: t('verification.pendingDescription'),
        };
      default:
        return {
          color: 'danger' as const,
          icon: AlertCircle,
          title: t('verification.statusNotVerified'),
          description: t('verification.notVerifiedDescription'),
        };
    }
  };

  const statusInfo = getStatusInfo();
  const StatusIcon = statusInfo.icon;

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t('account.verification')}</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Status card */}
        <div className="lg:col-span-1">
          <Card>
            <CardBody className="space-y-4 p-6">
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full ${
                  status === 'verified' ? 'bg-green-100 text-green-600' :
                  status === 'pending' ? 'bg-amber-100 text-amber-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  <StatusIcon className="h-7 w-7" />
                </div>
                <div>
                  <Chip color={statusInfo.color} variant="flat">
                    {statusInfo.title}
                  </Chip>
                </div>
              </div>
              <p className="text-sm text-gray-600">{statusInfo.description}</p>
            </CardBody>
          </Card>

          {/* Benefits */}
          <Card className="mt-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-500" />
                <h3 className="font-semibold">{t('verification.benefits')}</h3>
              </div>
            </CardHeader>
            <CardBody className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                <span className="text-sm">{t('verification.benefit1')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                <span className="text-sm">{t('verification.benefit2')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                <span className="text-sm">{t('verification.benefit3')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                <span className="text-sm">{t('verification.benefit4')}</span>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Upload documents */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">{t('verification.uploadDocuments')}</h3>
            </CardHeader>
            <CardBody className="space-y-6">
              <p className="text-sm text-gray-500">{t('verification.uploadDescription')}</p>

              {/* Personal info */}
              <div>
                <h4 className="mb-4 font-medium">{t('verification.personalInfo')}</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    label={t('verification.firstName')}
                    variant="bordered"
                  />
                  <Input
                    label={t('verification.lastName')}
                    variant="bordered"
                  />
                  <Input
                    label={t('verification.idNumber')}
                    variant="bordered"
                  />
                  <Input
                    label={t('verification.phone')}
                    variant="bordered"
                  />
                </div>
              </div>

              <Divider />

              {/* Document uploads */}
              <div>
                <h4 className="mb-4 font-medium">{t('verification.documents')}</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {/* ID document front */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('verification.idFront')}</label>
                    <div className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-amber-500 hover:bg-amber-50">
                      <FileText className="mb-2 h-10 w-10 text-gray-400" />
                      <span className="text-sm text-gray-500">{t('verification.clickToUpload')}</span>
                      <span className="text-xs text-gray-400">PNG, JPG {t('verification.maxSize')}</span>
                    </div>
                  </div>

                  {/* ID document back */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('verification.idBack')}</label>
                    <div className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-amber-500 hover:bg-amber-50">
                      <FileText className="mb-2 h-10 w-10 text-gray-400" />
                      <span className="text-sm text-gray-500">{t('verification.clickToUpload')}</span>
                      <span className="text-xs text-gray-400">PNG, JPG {t('verification.maxSize')}</span>
                    </div>
                  </div>

                  {/* Selfie with ID */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">{t('verification.selfieWithId')}</label>
                    <div className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-amber-500 hover:bg-amber-50">
                      <Camera className="mb-2 h-10 w-10 text-gray-400" />
                      <span className="text-sm text-gray-500">{t('verification.clickToUpload')}</span>
                      <span className="text-xs text-gray-400">PNG, JPG {t('verification.maxSize')}</span>
                    </div>
                    <p className="text-xs text-gray-400">{t('verification.selfieDescription')}</p>
                  </div>
                </div>
              </div>

              <Divider />

              {/* Business verification (optional) */}
              <div>
                <h4 className="mb-2 font-medium">{t('verification.businessVerification')}</h4>
                <p className="mb-4 text-sm text-gray-500">{t('verification.businessDescription')}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    label={t('verification.businessName')}
                    variant="bordered"
                  />
                  <Input
                    label={t('verification.taxId')}
                    variant="bordered"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <label className="text-sm font-medium">{t('verification.businessDocument')}</label>
                  <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-amber-500 hover:bg-amber-50">
                    <Upload className="mb-2 h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-500">{t('verification.clickToUpload')}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="bordered">
                  {t('common.cancel')}
                </Button>
                <Button className="bg-amber-500 text-white hover:bg-amber-600">
                  {t('verification.submit')}
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
