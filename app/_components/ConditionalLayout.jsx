"use client";

import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";
import AppFooter from "./AppFooter";
import { auth } from "@/lib/auth";

export default function ConditionalLayout({ children }) {

  const pathname = usePathname();

  if (pathname.startsWith("/write")) {
    return (
      <div className="bg-dark max-w-full text-white">
        <main>{children}</main>
      </div>
    );
  }
  if (pathname.startsWith("/login")) {
    return <div className="min-h-screen flex">{children}</div>;
  }
  if (pathname === "/") {
    return <div className="min-h-screen flex">{children}</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 md:flex-row overflow-y-auto pb-16">
        <Sidebar pathname={pathname} />
        <main className="flex-1 ml-0 md:ml-[12.5rem] pl-0 md:pl-8 py-6 pr-4 md:pr-8">
          {children}
        </main>
      </div>

      <AppFooter />
    </div>
  );
}
