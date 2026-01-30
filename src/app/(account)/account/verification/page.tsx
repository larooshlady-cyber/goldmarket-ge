'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ShieldCheck,
  Upload,
  CheckCircle,
  Clock,
  XCircle,
  FileText,
  Building2,
} from 'lucide-react';

export default function VerificationPage() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [idUploaded, setIdUploaded] = useState(false);
  const [businessUploaded, setBusinessUploaded] = useState(false);

  // Mock verification status
  const verificationStatus: 'not-verified' | 'pending' | 'verified' = user?.verificationStatus === 'verified'
    ? 'verified'
    : user?.verificationStatus === 'pending'
    ? 'pending'
    : 'not-verified';

  const getStatusInfo = () => {
    switch (verificationStatus) {
      case 'verified':
        return {
          icon: CheckCircle,
          color: 'text-green-600',
          bg: 'bg-green-100',
          badge: 'bg-green-100 text-green-700',
          label: t('verification.verified'),
        };
      case 'pending':
        return {
          icon: Clock,
          color: 'text-yellow-600',
          bg: 'bg-yellow-100',
          badge: 'bg-yellow-100 text-yellow-700',
          label: t('verification.pending'),
        };
      default:
        return {
          icon: XCircle,
          color: 'text-gray-600',
          bg: 'bg-gray-100',
          badge: 'bg-gray-100 text-gray-700',
          label: t('verification.notVerified'),
        };
    }
  };

  const statusInfo = getStatusInfo();
  const StatusIcon = statusInfo.icon;

  const benefits = [
    t('verification.benefit1'),
    t('verification.benefit2'),
    t('verification.benefit3'),
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t('verification.pageTitle')}</h1>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {/* Status card */}
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-8 sm:flex-row">
            <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${statusInfo.bg}`}>
              <StatusIcon className={`h-10 w-10 ${statusInfo.color}`} />
            </div>
            <div className="text-center sm:text-left">
              <p className="mb-1 text-sm text-gray-500">{t('verification.status')}</p>
              <Badge className={statusInfo.badge}>{statusInfo.label}</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-amber-500" />
              {t('verification.benefits')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Upload documents */}
        {verificationStatus !== 'verified' && (
          <Card>
            <CardHeader>
              <CardTitle>{t('verification.uploadDocuments')}</CardTitle>
              <CardDescription>
                ატვირთეთ საჭირო დოკუმენტები ვერიფიკაციისთვის
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* ID Document */}
              <div className="rounded-lg border-2 border-dashed p-6">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="font-medium">{t('verification.idDocument')}</h4>
                    <p className="text-sm text-gray-500">
                      პირადობის მოწმობა ან პასპორტი
                    </p>
                  </div>
                  {idUploaded ? (
                    <Badge className="bg-green-100 text-green-700">
                      <CheckCircle className="mr-1 h-4 w-4" />
                      ატვირთულია
                    </Badge>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => setIdUploaded(true)}
                      className="gap-2"
                    >
                      <Upload className="h-4 w-4" />
                      ატვირთვა
                    </Button>
                  )}
                </div>
              </div>

              {/* Business Document */}
              <div className="rounded-lg border-2 border-dashed p-6">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-purple-100">
                    <Building2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="font-medium">{t('verification.businessDocument')}</h4>
                    <p className="text-sm text-gray-500">
                      ამონაწერი რეესტრიდან ან ლიცენზია
                    </p>
                  </div>
                  {businessUploaded ? (
                    <Badge className="bg-green-100 text-green-700">
                      <CheckCircle className="mr-1 h-4 w-4" />
                      ატვირთულია
                    </Badge>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => setBusinessUploaded(true)}
                      className="gap-2"
                    >
                      <Upload className="h-4 w-4" />
                      ატვირთვა
                    </Button>
                  )}
                </div>
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <Button
                  className="w-full bg-amber-500 hover:bg-amber-600"
                  disabled={!idUploaded}
                >
                  {t('verification.submit')}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
