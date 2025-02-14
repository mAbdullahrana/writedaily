import Navigation from "./Navigation";
import Logo from "./Logo";
import Feedback from "./Feedback";

export default function Sidebar({ pathname }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-[12.5rem] flex flex-col justify-between items-start">
      <aside className="mt-4 rounded-r-xl h-[58vh] bg-lightgray flex flex-col border-r border-lightgray w-full">
        <div className="px-4 py-4 flex flex-col items-start flex-1">
          <Logo />
          <Navigation pathname={pathname} />
        </div>
      </aside>
      <Feedback />
    </div>
  );
}
