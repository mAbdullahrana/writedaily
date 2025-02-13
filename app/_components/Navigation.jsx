import {
  ChartNoAxesCombined,
  LibraryBig,
  LogOut,
  Notebook,
  NotebookPenIcon,
  Settings,
  UserRound,
} from "lucide-react";

import Button from "./Button";
import Tooltip from "./Tooltip";

function Navigation() {
  return (
    <nav className="flex flex-col justify-between">
      <div className="space-y-2 flex flex-col items-start px-4">
        <Button as="link" to="/pages">
          <p className="flex gap-2">
            <NotebookPenIcon />
            Recent
          </p>
        </Button>
        <Button as="link" to="/library">
          {" "}
          <p className="flex gap-2">
            <LibraryBig />
            Library
          </p>
        </Button>
        <Button as="link" to="/progress">
          <p className="flex gap-2">
            <ChartNoAxesCombined />
            Progress
          </p>
        </Button>
        <Button as="link" to="/profile">
          <p className="flex gap-2">
            <UserRound />
            Profile
          </p>
        </Button>
        <Button as="link" to="/settings">
          <p className="flex gap-2">
            <Settings />
            Settings
          </p>
        </Button>
      </div>

      <div className="mt-32 flex items-end ">
        <Button>
          <LogOut />
        </Button>
      </div>
    </nav>
  );
}

export default Navigation;
