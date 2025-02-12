// app/components/ConditionalLayout.js
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

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
    <div className="flex flex-col min-h-screen text-white">
      {/* Main Content */}
      <main className="container mx-auto p-6 flex-grow flex flex-col md:flex-row gap-6">
        <Sidebar />

        <section className="w-full md:w-3/4 bg-secondary p-4 rounded-xl shadow">
          {children}
        </section>
      </main>
    </div>
  );
}
