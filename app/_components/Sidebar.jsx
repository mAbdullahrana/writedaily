// import Navigation from "./Navigation";
// import Logo from "./Logo";
// import Feedback from "./Feedback";
// import SignOutButton from "./SignOutButton";

// export default function Sidebar({ pathname }) {
//   return (
//     <div className="fixed top-0 left-0 h-screen w-[12.5rem] flex flex-col justify-between items-start">
//       <aside className="mt-4 rounded-r-xl h-[58vh] bg-lightgray flex flex-col border-r border-lightgray w-full">
//         <div className="px-4 py-4 flex flex-col items-start flex-1">
//           <Logo />
//           <Navigation pathname={pathname} />
//         </div>
//       </aside>
//       <Feedback />
//       <SignOutButton />
//     </div>
//   );
// }

import { useState } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import Feedback from "./Feedback";
import SignOutButton from "./SignOutButton";
import { Menu, X } from "lucide-react";

export default function Sidebar({ pathname }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-lightgray text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <Menu className="text-white" size={24} />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[12.5rem] flex flex-col justify-between items-start
          shadow-lg  transition-transform duration-300 
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:flex`}
      >
        <aside className="mt-4 rounded-r-xl h-[58vh] bg-lightgray flex flex-col w-full">
          <div className="px-4 py-4 flex flex-col items-start flex-1">
            <Logo />
            <Navigation pathname={pathname} />
          </div>
        </aside>
        <Feedback />
        <SignOutButton />
      </div>

      {/* Overlay when menu is open */}
      {isOpen && <div onClick={() => setIsOpen(false)}></div>}
    </>
  );
}
