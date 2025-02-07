"use client";
import { Button } from "@/components/ui/button";
import MobileSidebarToggle from "./MobileSidebarToggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background border-b fixed top-0 left-0 right-0 h-16 flex items-center px-4 z-50 justify-between">
      <div className="flex items-center gap-4">
        <MobileSidebarToggle />
        <h1 className="font-semibold">Your Logo</h1>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    </header>
  );
}
