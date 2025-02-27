import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import ConditionalLayout from "./_components/ConditionalLayout";
import MyToaster from "./_components/MyToaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-dark text-white antialiased",
          inter.className
        )}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
        <MyToaster />
      </body>
    </html>
  );
}
