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

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/",
  },
  {
    title: "Patients",
    icon: Users,
    url: "/patients",
  },
  {
    title: "Doctors",
    icon: Stethoscope,
    url: "/doctors",
  },
  {
    title: "Appointments",
    icon: Calendar,
    url: "/appointments",
  },
  {
    title: "Payments",
    icon: CreditCard,
    url: "/payments",
  },
  {
    title: "Content",
    icon: FileText,
    url: "/content",
  },
  {
    title: "Reports",
    icon: BarChart3,
    url: "/reports",
  },
  {
    title: "Notifications",
    icon: Bell,
    url: "/notifications",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/settings",
  },
];

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2">
          <HeartPulse className="h-8 w-8 text-sidebar-primary" />
          <div>
            <h2 className="text-lg font-bold text-sidebar-foreground">Klukoo</h2>
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
