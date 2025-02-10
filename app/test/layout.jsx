"use client";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";


import Sidebar from "../_components/Sidebar";
import { ThemeProvider } from "../_components/ThemeProvider";
import Header from "../_components/Header";
import DesktopSidebar from "../_components/DesktopSidebar";

export default function Layout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen">
        <Header />
        
        {/* Desktop Sidebar + Main Content */}
        <div className="flex pt-16">
          <DesktopSidebar />
          <main className="md:ml-64 flex-1 p-4">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}






