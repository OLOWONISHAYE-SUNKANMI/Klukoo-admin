import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Check, Clock, AlertCircle, Calendar, MessageSquare } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "appointment",
    title: "New Appointment Booking",
    message: "Dr. Sarah Johnson has a new appointment with Patient #1234",
    time: "5 minutes ago",
    read: false,
    icon: Calendar,
    variant: "info" as const,
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Received",
    message: "Payment of $250 received from John Doe",
    time: "1 hour ago",
    read: false,
    icon: Check,
    variant: "success" as const,
  },
  {
    id: 3,
    type: "alert",
    title: "System Alert",
    message: "Server maintenance scheduled for tonight at 2 AM",
    time: "3 hours ago",
    read: true,
    icon: AlertCircle,
    variant: "warning" as const,
  },
  {
    id: 4,
    type: "message",
    title: "New Message",
    message: "Dr. Michael Chen sent you a message regarding patient care",
    time: "5 hours ago",
    read: true,
    icon: MessageSquare,
    variant: "default" as const,
  },
];

const notificationSettings = [
  { id: "email", label: "Email Notifications", enabled: true },
  { id: "push", label: "Push Notifications", enabled: true },
  { id: "appointments", label: "Appointment Reminders", enabled: true },
  { id: "payments", label: "Payment Alerts", enabled: false },
  { id: "system", label: "System Updates", enabled: true },
];

export default function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground">Manage your notifications and preferences</p>
        </div>
        <Button variant="outline">
          <Check className="mr-2 h-4 w-4" />
          Mark All as Read
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>Stay updated with your latest notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-4 p-4 rounded-lg border transition-colors ${
                      !notification.read ? "bg-accent/50" : "bg-background"
                    }`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className={`p-2 rounded-full ${
                        notification.variant === "success" ? "bg-green-500/10 text-green-500" :
                        notification.variant === "warning" ? "bg-yellow-500/10 text-yellow-500" :
                        notification.variant === "info" ? "bg-blue-500/10 text-blue-500" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground">{notification.title}</p>
                        {!notification.read && (
                          <Badge variant="secondary" className="h-5 px-1.5 text-xs">New</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {notification.time}
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notificationSettings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor={setting.id}
                    className="flex flex-col space-y-1 cursor-pointer"
                  >
                    <span className="text-sm font-medium leading-none">{setting.label}</span>
                  </Label>
                  <Switch id={setting.id} defaultChecked={setting.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Unread</span>
                  <span className="text-2xl font-bold text-foreground">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Today</span>
                  <span className="text-2xl font-bold text-foreground">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">This Week</span>
                  <span className="text-2xl font-bold text-foreground">18</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
