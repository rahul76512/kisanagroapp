import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, ExternalLink } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { mockSchemes } from "@/data/mockData";
import { toast } from "sonner";

const SchemeDetail = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const scheme = mockSchemes.find(s => s.id === id);

  if (!scheme) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-muted-foreground">Scheme not found</p>
          <Button onClick={() => navigate("/schemes")} className="mt-4">
            {t("view_all_schemes")}
          </Button>
        </div>
      </div>
    );
  }

  const title = language === "en" ? scheme.title_en : scheme.title_hi;
  const description = language === "en" ? scheme.description_en : scheme.description_hi;
  const eligibility = language === "en" ? scheme.eligibility_en : scheme.eligibility_hi;

  const handleApply = () => {
    toast.success(language === "en" 
      ? "Application feature coming soon. Please contact the helpline." 
      : "आवेदन सुविधा जल्द आ रही है। कृपया हेल्पलाइन से संपर्क करें।");
  };

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
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
              scheme.type === "subsidy" ? "bg-tag-subsidy text-tag-subsidyText" :
              scheme.type === "loan" ? "bg-tag-loan text-tag-loanText" :
              "bg-tag-insurance text-tag-insuranceText"
            }`}>
              {t(`scheme_type_${scheme.type}` as any)}
            </span>
          </div>

          <p className="text-muted-foreground mb-6">{description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t("eligibility")}</h3>
              <p className="text-muted-foreground">{eligibility}</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">{t("contact_info")}</h3>
              <div className="flex items-center gap-2 text-primary">
                <Phone className="h-4 w-4" />
                <a href={`tel:${scheme.contact}`} className="hover:underline">
                  {scheme.contact}
                </a>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <Button 
                className="w-full rounded-2xl" 
                size="lg"
                onClick={handleApply}
              >
                {t("apply_now")}
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default SchemeDetail;
