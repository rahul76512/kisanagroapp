import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
          {t("app_title")}
        </h1>
        
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={toggleLanguage}
            className="rounded-full px-3 md:px-4 shadow-sm font-medium"
          >
            {language === "en" ? "हिन्दी" : "English"}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/profile")}
            className="text-primary-foreground hover:bg-primary-dark"
          >
            <User className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/login")}
            className="text-primary-foreground hover:bg-primary-dark"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
