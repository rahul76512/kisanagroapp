import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SchemeCardProps {
  scheme: {
    id: string;
    title_en: string;
    title_hi: string;
    description_en: string;
    description_hi: string;
    type: string;
  };
}

export const SchemeCard = ({ scheme }: SchemeCardProps) => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const title = language === "en" ? scheme.title_en : scheme.title_hi;
  const description = language === "en" ? scheme.description_en : scheme.description_hi;

  const getTagColor = (type: string) => {
    switch (type) {
      case "subsidy":
        return "bg-tag-subsidy text-tag-subsidyText";
      case "loan":
        return "bg-tag-loan text-tag-loanText";
      case "insurance":
        return "bg-tag-insurance text-tag-insuranceText";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className="p-4 shadow-md rounded-2xl border-l-4 border-l-primary hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate(`/schemes/${scheme.id}`)}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg text-card-foreground pr-2">{title}</h3>
        <span className={`text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ${getTagColor(scheme.type)}`}>
          {t(`scheme_type_${scheme.type}` as any)}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      
      <Button variant="ghost" size="sm" className="w-full justify-between text-primary hover:text-primary-dark">
        {t("view_details")}
        <ChevronRight className="h-4 w-4" />
      </Button>
    </Card>
  );
};
