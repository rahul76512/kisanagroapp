import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sprout } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ phone: "", password: "" });
  const [signupData, setSignupData] = useState({ phone: "", password: "", name: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - navigate to dashboard
    toast.success(language === "en" ? "Login successful!" : "लॉगिन सफल!");
    navigate("/");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - navigate to dashboard
    toast.success(
      language === "en"
        ? "Account created successfully!"
        : "खाता सफलतापूर्वक बनाया गया!"
    );
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary mb-4">
            <Sprout className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t("app_title")}</h1>
          <p className="text-muted-foreground text-sm">{t("subtitle")}</p>
          
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="rounded-full"
            >
              {language === "en" ? "हिन्दी" : "English"}
            </Button>
          </div>
        </div>

        <Card className="p-6 shadow-xl rounded-3xl">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">{t("login")}</TabsTrigger>
              <TabsTrigger value="signup">{t("signup")}</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="login-phone">{t("phone")}</Label>
                  <Input
                    id="login-phone"
                    type="tel"
                    placeholder="+91-XXXXXXXXXX"
                    value={loginData.phone}
                    onChange={(e) => setLoginData({ ...loginData, phone: e.target.value })}
                    className="rounded-xl mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="login-password">{t("password")}</Label>
                  <Input
                    id="login-password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="rounded-xl mt-1"
                    required
                  />
                </div>

                <Button type="submit" className="w-full rounded-2xl" size="lg">
                  {t("login")}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <Label htmlFor="signup-name">{t("name")}</Label>
                  <Input
                    id="signup-name"
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    className="rounded-xl mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="signup-phone">{t("phone")}</Label>
                  <Input
                    id="signup-phone"
                    type="tel"
                    placeholder="+91-XXXXXXXXXX"
                    value={signupData.phone}
                    onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                    className="rounded-xl mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="signup-password">{t("password")}</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="rounded-xl mt-1"
                    required
                  />
                </div>

                <Button type="submit" className="w-full rounded-2xl" size="lg">
                  {t("create_account")}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {language === "en"
            ? "For admin access, contact your administrator"
            : "एडमिन एक्सेस के लिए अपने प्रशासक से संपर्क करें"}
        </p>
      </div>
    </div>
  );
};

export default Login;
