import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ActionTileProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export const ActionTile = ({ icon: Icon, label, onClick }: ActionTileProps) => {
  return (
    <Card 
      className="p-6 flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-lg transition-all hover:scale-105 rounded-2xl border-none shadow-md bg-card"
      onClick={onClick}
    >
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="text-sm font-medium text-center text-card-foreground">{label}</span>
    </Card>
  );
};
