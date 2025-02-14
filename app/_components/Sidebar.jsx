import Navigation from "./Navigation";
import Logo from "./Logo";
import Feedback from "./Feedback";


export default function Sidebar({pathname}) {
  return (
    <div className="flex flex-col justify-between items-start">
      <aside className="w-[12.5rem] mt-4 rounded-r-xl h-[78vh] bg-lightgray flex flex-col border-r border-lightgray ">
        <div className="px-4 py-4 flex  flex-col items-start flex-1">
          <Logo />
          <Navigation pathname = {pathname} />
          
        </div>
      </aside>
      <Feedback />
    </div>
  );
}
