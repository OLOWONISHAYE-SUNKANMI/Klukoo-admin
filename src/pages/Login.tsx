import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/SupabaseClient";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageToggle from "@/components/ui/LanguageToggle";


const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      // Restrict login to only one admin account
      if (email !== "skprojects29@gmail.com") {
        await supabase.auth.signOut();
        setError("Access denied");
        setLoading(false);
        return;
      }

      // Success - go to dashboard
      localStorage.setItem("isLoggedIn", "true");
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Sign In Form */}
      <div className="flex flex-1 items-center justify-center bg-white p-8">
        <Card className="w-full max-w-md border-0 shadow-none">
          <div className="space-y-6">

              <LanguageToggle className="mr-4" /> 

            <div>
              <h1 className="text-3xl font-bold text-foreground">{t('signInPage.title')}</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-muted-foreground">
                  {t('signInPage.email')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@klukoo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-muted-foreground">
                  {t('signInPage.password')}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full h-12 text-base hover:bg-[#CC5500] bg-primary"
                size="lg"
                disabled={loading}
              >
                {loading ? t('signInPage.response') : t('signInPage.button')}
              </Button>
            </form>
          </div>
        </Card>
      </div>

      {/* Right Side - Welcome Panel */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-primary p-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">
            {t('signInPage.welcome')} <span className="text-white">{t('signInPage.klukoo')}</span>
          </h2>
          <div className="flex items-center justify-center">
            <div className="backdrop-blur-sm flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/depeqzb6z/image/upload/v1757665702/WhatsApp_Image_2025-09-10_%C3%A0_23.51.01_43a85c4a-removebg-preview_jnqaja.png"
                alt="Klukoo Logo"
                className="w-32 h-32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
