// app/components/ConditionalLayout.js
"use client";

import { usePathname } from "next/navigation";

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
  if (pathname.startsWith("/login")) {
    return <div className="min-h-screen flex">{children}</div>;
  }
  if (pathname === "/") {
    return <div className="min-h-screen flex">{children}</div>;
  }

  // Otherwise, render the full layout.
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <div className="flex flex-1 md:flex-row overflow-y-auto pb-16">
        <Sidebar pathname={pathname} />
        <main className="flex-1 ml-0 md:ml-[12.5rem] pl-0 md:pl-8 py-6 pr-4 md:pr-8">
          {children}
        </main>
      </div>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 w-full pb-2">
        <p className="text-white text-[0.5rem] text-center">
          © 2025 All Rights Reserved.
          <span>
            <a
              href="https://www.linkedin.com/in/muhammad-abdullah-9672bb247/"
              className="underline text-[0.55rem]"
              target="_blank"
              rel="noopener noreferrer"
            >
              M.Abdullah
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}
