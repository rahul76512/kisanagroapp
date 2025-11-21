import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Sprout } from "lucide-react";
import { mockCrops } from "@/data/mockData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Crops = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCrops = mockCrops.filter((crop) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      crop.name_en.toLowerCase().includes(searchLower) ||
      crop.name_hi.toLowerCase().includes(searchLower) ||
      crop.season_en.toLowerCase().includes(searchLower) ||
      crop.season_hi.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">{t("crop_information")}</h1>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder={t("search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-2xl border-border"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCrops.map((crop) => {
            const name = language === "en" ? crop.name_en : crop.name_hi;
            const season = language === "en" ? crop.season_en : crop.season_hi;
            
            return (
              <Card 
                key={crop.id} 
                className="p-5 shadow-md rounded-2xl hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/crops/${crop.id}`)}
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sprout className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
                    <p className="text-sm text-muted-foreground">{season}</p>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-1">
                      {crop.soil_type}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Crops;
