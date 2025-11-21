import { Header } from "@/components/Header";
import { SchemeCard } from "@/components/SchemeCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { mockSchemes } from "@/data/mockData";
import { useState } from "react";

const Schemes = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSchemes = mockSchemes.filter((scheme) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      scheme.title_en.toLowerCase().includes(searchLower) ||
      scheme.title_hi.toLowerCase().includes(searchLower) ||
      scheme.description_en.toLowerCase().includes(searchLower) ||
      scheme.description_hi.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">{t("government_schemes")}</h1>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder={t("search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-2xl border-border"
          />
        </div>

        <div className="space-y-4">
          {filteredSchemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Schemes;
