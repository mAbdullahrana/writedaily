import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={` antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative bg-dark`}
//       >
//         <header className="bg-secondary px-6 py-4 flex items-center justify-between">
//           <div className="text-2xl font-bold">WriteDaily</div>
//           <nav className="space-x-4">
//             <a href="/" className="hover:text-accentButton transition-colors">
//               Home
//             </a>
//             <Link
//               href="/write"
//               className="hover:text-accentButton transition-colors"
//             >
//               Notebooks
//             </Link>
//             <a
//               href="/profile"
//               className="hover:text-accentButton transition-colors"
//             >
//               Profile
//             </a>
//           </nav>
//         </header>

//         <div className="flex-1 px-8 py-12 grid">
//           <main className="max-w-full mx-auto w-full grid">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }

// app/layout.js
import "./globals.css";
import ConditionalLayout from "./_components/ConditionalLayout";
import { cn } from "@/lib/utils";

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
      </body>
    </html>
  );
}
