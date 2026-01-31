'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { Card, CardBody, CardHeader, Tabs, Tab, Input, Button, Avatar, Switch, Divider } from '@heroui/react';
import { User, Lock, Bell, Camera } from 'lucide-react';

export default function SettingsPage() {
  const { t } = useLanguage();
  const { user } = useAuth();

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
  });

  const handleProfileChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    alert('Profile saved!');
  };

  const handleChangePassword = () => {
    alert('Password changed!');
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t('settings.pageTitle')}</h1>
      </div>

      <div className="mx-auto max-w-3xl">
        <Tabs aria-label="Settings tabs" color="warning" variant="underlined">
          <Tab
            key="profile"
            title={
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{t('settings.profile')}</span>
              </div>
            }
          >
            <Card className="mt-4">
              <CardHeader>
                <h3 className="text-lg font-semibold">{t('settings.profileInfo')}</h3>
              </CardHeader>
              <CardBody className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar
                    src={user?.avatar}
                    name={user?.name?.charAt(0) || 'U'}
                    size="lg"
                    classNames={{ base: 'h-20 w-20', name: 'text-2xl' }}
                  />
                  <Button variant="bordered" startContent={<Camera className="h-4 w-4" />}>
                    ფოტოს შეცვლა
                  </Button>
                </div>

                <Divider />

                <div className="space-y-4">
                  <Input
                    label={t('auth.nameLabel')}
                    value={profileData.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                    variant="bordered"
                    labelPlacement="outside"
                  />

                  <Input
                    label={t('auth.emailLabel')}
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                    variant="bordered"
                    labelPlacement="outside"
                  />

                  <Input
                    label={t('auth.phoneLabel')}
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
                    variant="bordered"
                    labelPlacement="outside"
                  />
                </div>

                <Button onPress={handleSaveProfile} color="warning">
                  {t('common.save')}
                </Button>
              </CardBody>
            </Card>
          </Tab>

          <Tab
            key="security"
            title={
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span className="hidden sm:inline">{t('settings.security')}</span>
              </div>
            }
          >
            <Card className="mt-4">
              <CardHeader>
                <h3 className="text-lg font-semibold">{t('settings.changePassword')}</h3>
              </CardHeader>
              <CardBody className="space-y-4">
                <Input
                  label={t('settings.currentPassword')}
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                  variant="bordered"
                  labelPlacement="outside"
                />

                <Input
                  label={t('settings.newPassword')}
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                  variant="bordered"
                  labelPlacement="outside"
                />

                <Input
                  label={t('settings.confirmNewPassword')}
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                  variant="bordered"
                  labelPlacement="outside"
                />

                <Button onPress={handleChangePassword} color="warning">
                  {t('settings.changePassword')}
                </Button>
              </CardBody>
            </Card>
          </Tab>

          <Tab
            key="notifications"
            title={
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">{t('settings.notifications')}</span>
              </div>
            }
          >
            <Card className="mt-4">
              <CardHeader>
                <h3 className="text-lg font-semibold">{t('settings.notifications')}</h3>
              </CardHeader>
              <CardBody className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('settings.emailNotifications')}</p>
                    <p className="text-sm text-gray-500">მიიღეთ შეტყობინებები ელ-ფოსტით</p>
                  </div>
                  <Switch
                    isSelected={notifications.email}
                    onValueChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, email: checked }))
                    }
                    color="warning"
                  />
                </div>

                <Divider />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('settings.smsNotifications')}</p>
                    <p className="text-sm text-gray-500">მიიღეთ შეტყობინებები SMS-ით</p>
                  </div>
                  <Switch
                    isSelected={notifications.sms}
                    onValueChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, sms: checked }))
                    }
                    color="warning"
                  />
                </div>

                <Divider />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('settings.pushNotifications')}</p>
                    <p className="text-sm text-gray-500">მიიღეთ Push შეტყობინებები</p>
                  </div>
                  <Switch
                    isSelected={notifications.push}
                    onValueChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, push: checked }))
                    }
                    color="warning"
                  />
                </div>

                <Button color="warning">
                  {t('common.save')}
                </Button>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
