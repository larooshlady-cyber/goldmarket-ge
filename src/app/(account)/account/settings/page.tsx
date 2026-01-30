'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
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
    // Mock save
    alert('Profile saved!');
  };

  const handleChangePassword = () => {
    // Mock password change
    alert('Password changed!');
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t('settings.pageTitle')}</h1>
      </div>

      <div className="mx-auto max-w-3xl">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{t('settings.profile')}</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">{t('settings.security')}</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">{t('settings.notifications')}</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>{t('settings.profileInfo')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="text-2xl">
                      {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="gap-2">
                    <Camera className="h-4 w-4" />
                    ფოტოს შეცვლა
                  </Button>
                </div>

                <Separator />

                {/* Form fields */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('auth.nameLabel')}</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => handleProfileChange('name', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('auth.emailLabel')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('auth.phoneLabel')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <Button onClick={handleSaveProfile} className="bg-amber-500 hover:bg-amber-600">
                  {t('common.save')}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security tab */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>{t('settings.changePassword')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">{t('settings.currentPassword')}</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">{t('settings.newPassword')}</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmNewPassword">{t('settings.confirmNewPassword')}</Label>
                  <Input
                    id="confirmNewPassword"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                  />
                </div>

                <Button onClick={handleChangePassword} className="bg-amber-500 hover:bg-amber-600">
                  {t('settings.changePassword')}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>{t('settings.notifications')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('settings.emailNotifications')}</p>
                    <p className="text-sm text-gray-500">მიიღეთ შეტყობინებები ელ-ფოსტით</p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, email: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('settings.smsNotifications')}</p>
                    <p className="text-sm text-gray-500">მიიღეთ შეტყობინებები SMS-ით</p>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, sms: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('settings.pushNotifications')}</p>
                    <p className="text-sm text-gray-500">მიიღეთ Push შეტყობინებები</p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, push: checked }))
                    }
                  />
                </div>

                <Button className="bg-amber-500 hover:bg-amber-600">
                  {t('common.save')}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
