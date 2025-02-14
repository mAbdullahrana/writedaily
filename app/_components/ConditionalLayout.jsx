// app/components/ConditionalLayout.js
"use client";

import { usePathname } from "next/navigation";

import { ThemeProvider } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();

  // If we are on a route that starts with /write,
  // we render a minimal layout.
  if (pathname.startsWith("/write")) {
    return (
      <div className="bg-dark max-w-full text-white">
        <main>{children}</main>
      </div>
    );
  }

  // Otherwise, render the full layout.
  return (
    <div className="flex h-screen">
      {/* Left Sidebar - Fixed width and 1/2 height */}
      <Sidebar pathname = {pathname}/>

      {/* Main Content Area */}
      <main className="flex-1  pl-8">
        {/* ml-64 matches sidebar width */}
        <div className="h-screen">
          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto pr-8 py-6">{children}</div>
        </div>
      </main>
    </div>
  );
}
