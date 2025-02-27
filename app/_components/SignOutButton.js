import { signOutAction } from "@/lib/actions";
import { LogOut } from "lucide-react";
import Button from "./Button";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button
        type="submit"
        className="hover:text-primaryButton  transition py-1.5"
      >
        <div className="flex gap-2 ml-[1.1rem] mt-1 ">
          <LogOut className="h-6 w-6 text-primary-600" />
          <span>Sign out</span>
        </div>
      </button>
    </form>
  );
}


export default SignOutButton;
