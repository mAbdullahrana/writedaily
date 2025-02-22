// app/components/ConditionalLayout.js
"use client";

import { usePathname } from "next/navigation";

import { ThemeProvider } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";
import Link from "next/link";

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
  if (pathname.startsWith("/login")) {
    return (
      <div className="min-h-screen flex">
        {children}
        {/* Right Side Content (Login Form) */}
      </div>
    );
  }

  // Otherwise, render the full layout.
  return (
    <div className="flex h-screen">
      <Sidebar pathname={pathname} />
      <main className="flex-1 ml-[12.5rem] pl-8">
        <div className="h-screen">
          <div className="flex-1 overflow-y-auto pr-8 py-6">{children}</div>
        </div>
      </main>
    </div>
  );
}
