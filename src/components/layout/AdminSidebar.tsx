import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  Calendar,
  CreditCard,
  FileText,
  BarChart3,
  Bell,
  Settings,
  HeartPulse,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useTranslation } from 'react-i18next';


  

export function AdminSidebar() {

    const { t } = useTranslation();
 
      
  const menuItems = [
  {
    title: t('adminSiderbar.dashboard'),
    icon: LayoutDashboard,
    url: "/",
  },
  {
    title: t('adminSiderbar.patients'),
    icon: Users,
    url: "/patients",
  },
  {
    title: t('adminSiderbar.doctors'),
    icon: Stethoscope,
    url: "/doctors",
  },
  {
    title: t('adminSiderbar.appointments'),
    icon: Calendar,
    url: "/appointments",
  },
  {
    title: t('adminSiderbar.payments'),
    icon: CreditCard,
    url: "/payments",
  },
  {
    title: t('adminSiderbar.content'),
    icon: FileText,
    url: "/content",
  },
  {
    title: t('adminSiderbar.reports'),
    icon: BarChart3,
    url: "/reports",
  },
  {
    title: t('adminSiderbar.notifications'),
    icon: Bell,
    url: "/notifications",
  },
  {
    title: t('adminSiderbar.settings'),
    icon: Settings,
    url: "/settings",
  },
];

  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2">
          <div>
            <h2 className="text-xl text-[36px] mb-5 font-bold text-sidebar-foreground">Klukoo</h2>
            <p className="text-xs text-sidebar-foreground/70">Admin Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
