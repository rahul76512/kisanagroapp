import { Header } from "@/components/Header";
import { WeatherCard } from "@/components/WeatherCard";
import { SchemeCard } from "@/components/SchemeCard";
import { ActionTile } from "@/components/ActionTile";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Sprout, FileText, Cloud, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockSchemes, mockUser } from "@/data/mockData";

const Dashboard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Card */}
        <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-none shadow-md rounded-2xl">
          <h2 className="text-2xl font-bold text-foreground">
            {t("welcome", { name: mockUser.name })}
          </h2>
          <p className="text-muted-foreground mt-1">{t("subtitle")}</p>
        </Card>

        {/* Weather Card */}
        <WeatherCard />

        {/* Schemes Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-foreground">
              {t("schemes_you_are_eligible_for")}
            </h2>
            <button 
              className="text-primary text-sm font-medium hover:underline"
              onClick={() => navigate("/schemes")}
            >
              {t("view_all_schemes")}
            </button>
          </div>
          
          <div className="space-y-4">
            {mockSchemes.slice(0, 3).map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </div>

        {/* Action Tiles */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <ActionTile
            icon={FileText}
            label={t("government_schemes")}
            onClick={() => navigate("/schemes")}
          />
          <ActionTile
            icon={Sprout}
            label={t("crop_information")}
            onClick={() => navigate("/crops")}
          />
          <ActionTile
            icon={Cloud}
            label={t("weather")}
            onClick={() => navigate("/weather")}
          />
          <ActionTile
            icon={User}
            label={t("my_profile")}
            onClick={() => navigate("/profile")}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
