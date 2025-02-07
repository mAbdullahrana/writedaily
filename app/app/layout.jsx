// // app/layout.tsx
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import Sidebar from "../_components/Sidebar";

// export default function Layout({ children }) {
//   return (
//     <div className="min-h-screen">
//       {/* Header */}
//       <header className="bg-background border-b fixed top-0 left-0 right-0 h-16 flex items-center px-4 z-50">
//         <div className="flex items-center gap-4">
//           {/* Mobile Sidebar Toggle */}
//           <Sheet>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="outline" size="icon">
//                 <Menu className="h-4 w-4" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="w-64">
//               <Sidebar />
//             </SheetContent>
//           </Sheet>
//           <h1 className="font-semibold">Your Logo</h1>
//         </div>
//       </header>

//       {/* Desktop Sidebar + Main Content */}
//       <div className="flex pt-16">
//         {/* Desktop Sidebar (hidden on mobile) */}
//         <aside className="hidden md:block fixed left-0 top-16 h-full w-64 border-r bg-background p-4">
//           <Sidebar />
//         </aside>

//         {/* Main Content */}
//         <main className="md:ml-64 flex-1 p-4">{children}</main>
//       </div>
//     </div>
//   );
// }




// app/layout.tsx
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






