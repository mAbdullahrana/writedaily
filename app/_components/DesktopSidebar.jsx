import Sidebar from "./Sidebar";

export default function DesktopSidebar() {
  return (
    <aside className="hidden md:block fixed left-0 top-16 h-full w-64 border-r bg-background p-4">
      <Sidebar />
    </aside>
  );
}
