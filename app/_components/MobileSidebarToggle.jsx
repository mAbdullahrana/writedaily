import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";


export default function MobileSidebarToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}