


import {
  ChartNoAxesCombined,
  LibraryBig,
  LogOut,
  NotebookPenIcon,
  Settings,
  UserRound,
} from "lucide-react";
import Button from "./Button";

const buttonsData = [
  {
    to: "/pages",
    icon: <NotebookPenIcon />,
    label: "Recent",
    as: "link",
  },
  {
    to: "/library",
    icon: <LibraryBig />,
    label: "Library",
    as: "link",
  },
  {
    to: "/progress",
    icon: <ChartNoAxesCombined />,
    label: "Progress",
    as: "link",
  },
  {
    to: "/profile",
    icon: <UserRound />,
    label: "Profile",
    as: "link",
  },
  {
    to: "/settings",
    icon: <Settings />,
    label: "Settings",
    as: "link",
  },
];

function Navigation({pathname}) {


  return (
    <nav className="flex flex-col justify-between">
      <div className="space-y-2 flex flex-col items-start px-4">
        {buttonsData.map((button, index) => (
          <Button key={index} as="link" to={button.to}>
            <p
              className={`flex gap-2 ${
                pathname === button.to ? "text-primaryButton " : ""
              }`}
            >
              {button.icon}
              {button.label}
            </p>
          </Button>
        ))}
      </div>

      <div className="mt-32 flex items-end">
        <Button>
          <LogOut />
        </Button>
      </div>
    </nav>
  );
}

export default Navigation;
