import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

export default function Settings() {

  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">{t('settingsPage.header.title')}</h1>
        <p className="text-muted-foreground">{t('settingsPage.header.subtitle')}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t('settingsPage.profileInformation.title')}</CardTitle>
            <CardDescription>{t('settingsPage.profileInformation.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('settingsPage.profileInformation.input.name')}</Label>
              <Input id="name" placeholder="Admin Name" defaultValue="Admin User" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('settingsPage.profileInformation.input.email')}</Label>
              <Input id="email" type="email" placeholder="admin@klukoo.com" defaultValue="admin@klukoo.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t('settingsPage.profileInformation.input.phone')}</Label>
              <Input id="phone" placeholder="+1 234-567-8900" defaultValue="+1 234-567-8900" />
            </div>
            <Button>{t('settingsPage.profileInformation.input.save')}</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('settingsPage.changePassword.title')}</CardTitle>
            <CardDescription>{t('settingsPage.changePassword.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current">{t('settingsPage.changePassword.input.currentPassword')}</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new">{t('settingsPage.changePassword.input.newPassword')}</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">{t('settingsPage.changePassword.input.updatePassword')}</Label>
              <Input id="confirm" type="password" />
            </div>
            <Button>{t('settingsPage.changePassword.input.updatePassword')}</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('settingsPage.appSettings.title')}</CardTitle>
            <CardDescription>{t('settingsPage.appSettings.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications">{t('settingsPage.appSettings.emailNotifications')}</Label>
                <p className="text-sm text-muted-foreground">{t('settingsPage.appSettings.subEmailNotifications')}</p>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-approve">{t('settingsPage.appSettings.autoApprove')}</Label>
                <p className="text-sm text-muted-foreground">{t('settingsPage.appSettings.subAutoApprove')}</p>
              </div>
              <Switch id="auto-approve" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="maintenance">{t('settingsPage.appSettings.maintenanceMode')}</Label>
                <p className="text-sm text-muted-foreground">{t('settingsPage.appSettings.userAccess')}</p>
              </div>
              <Switch id="maintenance" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('settingsPage.paymentSettings.title')}</CardTitle>
            <CardDescription>{t('settingsPage.paymentSettings.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currency">{t('settingsPage.paymentSettings.currency')}</Label>
              <Input id="currency" placeholder="USD" defaultValue="USD" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fee">{t('settingsPage.paymentSettings.consultationFee')}</Label>
              <Input id="fee" type="number" placeholder="50" defaultValue="50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tax">{t('settingsPage.paymentSettings.taxRate')} (%)</Label>
              <Input id="tax" type="number" placeholder="10" defaultValue="10" />
            </div>
            <Button>{t('settingsPage.paymentSettings.saveSettings')}</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
