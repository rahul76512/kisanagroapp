import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { mockUser } from "@/data/mockData";
import { useState } from "react";
import { toast } from "sonner";

const Profile = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState(mockUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      language === "en"
        ? "Profile updated successfully!"
        : "प्रोफ़ाइल सफलतापूर्वक अपडेट की गई!"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">{t("my_profile")}</h1>
        
        <Card className="p-6 shadow-lg rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">{t("name")}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="rounded-xl mt-1"
              />
            </div>

            <div>
              <Label htmlFor="village">{t("village")}</Label>
              <Input
                id="village"
                value={formData.village}
                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                className="rounded-xl mt-1"
              />
            </div>

            <div>
              <Label htmlFor="state">{t("state")}</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="rounded-xl mt-1"
              />
            </div>

            <div>
              <Label htmlFor="land_size">{t("land_size")}</Label>
              <Input
                id="land_size"
                value={formData.land_size}
                onChange={(e) => setFormData({ ...formData, land_size: e.target.value })}
                className="rounded-xl mt-1"
              />
            </div>

            <div>
              <Label htmlFor="crops_grown">{t("crops_grown")}</Label>
              <Input
                id="crops_grown"
                value={formData.crops_grown}
                onChange={(e) => setFormData({ ...formData, crops_grown: e.target.value })}
                className="rounded-xl mt-1"
              />
            </div>

            <Button type="submit" className="w-full rounded-2xl" size="lg">
              {t("save_profile")}
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
