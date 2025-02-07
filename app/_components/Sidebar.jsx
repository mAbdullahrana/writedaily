import { Button } from "@/components/ui/button";
import Link from "next/link";

// Sidebar Component
export default function Sidebar() {
  return (
    <nav className="space-y-2">
      <Button variant="ghost" className="w-full justify-start">
        <Link href="/app/write">Recent</Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Link href="/app/library">Library</Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Link href="/app/progress">Progress</Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Link href="/app/profile">Profile</Link>
      </Button>
    </nav>
  );
}
