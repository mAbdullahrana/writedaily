import { signOutAction } from "@/lib/actions";
import { LogOut } from "lucide-react";
import { useTransition } from "react";
import toast from "react-hot-toast";
import SpinnerMini from "./SpinnerMini";

function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  function handleSignOut() {
    startTransition(() => {
      signOutAction();
      toast.success("Sign out successfully");
    });

  }
  return (
    <button
      className="hover:text-primaryButton  transition py-1.5 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      onClick={handleSignOut}
    >
      <div className="flex gap-2 ml-[1.1rem] mt-1 ">
        {!isPending ? (
          <LogOut className="h-6 w-6 text-primary-600" />
        ) : (
          <div className="h-6 w-6">
          <SpinnerMini />
          </div>
        )}
        <span>Sign out</span>
      </div>
    </button>
  );
}

export default SignOutButton;
