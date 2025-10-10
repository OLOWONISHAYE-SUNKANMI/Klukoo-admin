import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { supabase } from "@/lib/SupabaseClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { AdminHeader } from "@/components/layout/AdminHeader";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected route component
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };
    checkSession();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!session) return <Navigate to="/login" replace />;

  return children;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Protected dashboard and pages */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
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
                          <Route path="/payments" element={<Payments />} />
                          <Route path="/reports" element={<Reports />} />
                          <Route path="/settings" element={<Settings />} />
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </main>
                    </div>
                  </div>
                </SidebarProvider>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
