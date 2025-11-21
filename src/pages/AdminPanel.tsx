import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";
import { mockSchemes, mockCrops, mockUser } from "@/data/mockData";
import { toast } from "sonner";

const AdminPanel = () => {
  const { t, language } = useLanguage();

  const handleAdd = (type: string) => {
    toast.info(`Add ${type} feature coming soon`);
  };

  const handleEdit = (type: string, id: string) => {
    toast.info(`Edit ${type} ${id} feature coming soon`);
  };

  const handleDelete = (type: string, id: string) => {
    toast.info(`Delete ${type} ${id} feature coming soon`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{t("admin_panel")}</h1>
        </div>

        <Tabs defaultValue="schemes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="schemes">{t("schemes")}</TabsTrigger>
            <TabsTrigger value="crops">{t("crops")}</TabsTrigger>
            <TabsTrigger value="users">{t("users")}</TabsTrigger>
          </TabsList>

          <TabsContent value="schemes">
            <Card className="p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{t("government_schemes")}</h2>
                <Button onClick={() => handleAdd("scheme")} size="sm" className="rounded-xl">
                  <Plus className="h-4 w-4 mr-2" />
                  {t("add_scheme")}
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockSchemes.map((scheme) => (
                      <TableRow key={scheme.id}>
                        <TableCell className="font-medium">
                          {language === "en" ? scheme.title_en : scheme.title_hi}
                        </TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {scheme.type}
                          </span>
                        </TableCell>
                        <TableCell>{scheme.contact}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit("scheme", scheme.id)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete("scheme", scheme.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="crops">
            <Card className="p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{t("crop_information")}</h2>
                <Button onClick={() => handleAdd("crop")} size="sm" className="rounded-xl">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Crop
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Season</TableHead>
                      <TableHead>Soil Type</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockCrops.map((crop) => (
                      <TableRow key={crop.id}>
                        <TableCell className="font-medium">
                          {language === "en" ? crop.name_en : crop.name_hi}
                        </TableCell>
                        <TableCell>
                          {language === "en" ? crop.season_en : crop.season_hi}
                        </TableCell>
                        <TableCell>{crop.soil_type}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit("crop", crop.id)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete("crop", crop.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="p-6 rounded-2xl">
              <h2 className="text-xl font-semibold mb-4">{t("users")}</h2>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Village</TableHead>
                      <TableHead>State</TableHead>
                      <TableHead>Land Size</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">{mockUser.name}</TableCell>
                      <TableCell>{mockUser.phone}</TableCell>
                      <TableCell>{mockUser.village}</TableCell>
                      <TableCell>{mockUser.state}</TableCell>
                      <TableCell>{mockUser.land_size} acres</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPanel;
