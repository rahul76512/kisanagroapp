import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sprout } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { mockCrops } from "@/data/mockData";

const CropDetail = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const crop = mockCrops.find(c => c.id === id);

  if (!crop) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-muted-foreground">Crop not found</p>
          <Button onClick={() => navigate("/crops")} className="mt-4">
            {t("crop_information")}
          </Button>
        </div>
      </div>
    );
  }

  const name = language === "en" ? crop.name_en : crop.name_hi;
  const season = language === "en" ? crop.season_en : crop.season_hi;
  const fertilizers = language === "en" ? crop.fertilizers_en : crop.fertilizers_hi;
  const pestManagement = language === "en" ? crop.pest_management_en : crop.pest_management_hi;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <Card className="p-6 shadow-lg rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Sprout className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{name}</h1>
              <p className="text-muted-foreground">{season}</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t("soil_type")}</h3>
              <p className="text-muted-foreground">{crop.soil_type}</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">{t("fertilizers")}</h3>
              <p className="text-muted-foreground">{fertilizers}</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">{t("pest_management")}</h3>
              <p className="text-muted-foreground">{pestManagement}</p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default CropDetail;
