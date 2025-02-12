import { Button } from "@/components/ui/button";
import Link from "next/link";

// Sidebar Component
export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/4 bg-lightgray p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      <ul className="space-y-2">
        <li>
          <Link
            href="/write"
            className="hover:text-primaryButton transition-colors"
          >
            Recent Notebooks
          </Link>
        </li>
        <li>
          <a
            href="/favorites"
            className="hover:text-primaryButton transition-colors"
          >
            Favorites
          </a>
        </li>
        <li>
          <a
            href="/tags"
            className="hover:text-primaryButton transition-colors"
          >
            Tags
          </a>
        </li>
      </ul>
    </aside>
  );
}
