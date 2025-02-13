import { ArrowLeft } from "lucide-react";
import Tooltip from "./Tooltip";
import Link from "next/link";

function BackButton() {
  return (
    <Link className="hover:text-white" href="/pages">
      <ArrowLeft />
    </Link>
  );
}

export default BackButton;
