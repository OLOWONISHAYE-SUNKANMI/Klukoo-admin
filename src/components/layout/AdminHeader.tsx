import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/SupabaseClient";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useTranslation } from "react-i18next";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AdminHeader() {
  const { t } = useTranslation();
  const navigate = useNavigate();

 

  const handleLogout = async () => {
    await supabase.auth.signOut(); // Clear Supabase session
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-6 shadow-sm">
      <SidebarTrigger />
      <div className="flex-1" />

      <LanguageToggle className="mr-4" />

      {/* Notification Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <DropdownMenuLabel>{t("adminHeader.notifications")}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex flex-col gap-1">
              <p className="font-medium">{t("adminHeader.requests")}</p>
              <p className="text-sm text-muted-foreground">
                Dr. Smith has a new booking
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex flex-col gap-1">
              <p className="font-medium">{t("adminHeader.paymentStatus")}</p>
              <p className="text-sm text-muted-foreground">
                $150 from Patient John Doe
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex flex-col gap-1">
              <p className="font-medium">{t("adminHeader.doctorApplication")}</p>
              <p className="text-sm text-muted-foreground">
                Dr. Sarah Johnson applied
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* User Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
