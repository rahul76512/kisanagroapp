import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Schemes from "./pages/Schemes";
import SchemeDetail from "./pages/SchemeDetail";
import Crops from "./pages/Crops";
import CropDetail from "./pages/CropDetail";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/schemes/:id" element={<SchemeDetail />} />
            <Route path="/crops" element={<Crops />} />
            <Route path="/crops/:id" element={<CropDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/weather" element={<Dashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
