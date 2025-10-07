import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { AdminHeader } from "@/components/layout/AdminHeader";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AdminSidebar />
            <div className="flex flex-1 flex-col">
              <AdminHeader />
              <main className="flex-1 bg-background p-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/patients" element={<Patients />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/appointments" element={<Appointments />} />
                  <Route path="/payments" element={<div className="text-2xl font-bold">Payments - Coming Soon</div>} />
                  <Route path="/content" element={<div className="text-2xl font-bold">Content Management - Coming Soon</div>} />
                  <Route path="/reports" element={<div className="text-2xl font-bold">Reports & Analytics - Coming Soon</div>} />
                  <Route path="/notifications" element={<div className="text-2xl font-bold">Notifications - Coming Soon</div>} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
