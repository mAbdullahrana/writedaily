import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import ConditionalLayout from "./_components/ConditionalLayout";
import MyToaster from "./_components/MyToaster";
import Script from "next/script";
import "./globals.css";
import { GA_TRACKING_ID } from "@/lib/gtag";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={cn("min-h-screen bg-dark text-white antialiased", inter.className)}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
        <MyToaster />
      </body>
    </html>
  );
}
