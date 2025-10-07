import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your admin account and system settings</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Admin Name" defaultValue="Admin User" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="admin@klukoo.com" defaultValue="admin@klukoo.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+1 234-567-8900" defaultValue="+1 234-567-8900" />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Update your password</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current">Current Password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new">New Password</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input id="confirm" type="password" />
            </div>
            <Button>Update Password</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>App Settings</CardTitle>
            <CardDescription>Configure system preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive email updates</p>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-approve">Auto-approve Appointments</Label>
                <p className="text-sm text-muted-foreground">Automatically confirm bookings</p>
              </div>
              <Switch id="auto-approve" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="maintenance">Maintenance Mode</Label>
                <p className="text-sm text-muted-foreground">Disable user access</p>
              </div>
              <Switch id="maintenance" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Settings</CardTitle>
            <CardDescription>Configure payment options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Input id="currency" placeholder="USD" defaultValue="USD" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fee">Consultation Fee</Label>
              <Input id="fee" type="number" placeholder="50" defaultValue="50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tax">Tax Rate (%)</Label>
              <Input id="tax" type="number" placeholder="10" defaultValue="10" />
            </div>
            <Button>Save Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
