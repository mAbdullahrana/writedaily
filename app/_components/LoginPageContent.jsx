import Link from "next/link";
import Logo from "./Logo";

function LoginPageContent() {
  return (
    <div className="hidden md:flex flex-1 flex-col items-start  bg-dark  justify-center p-8 ">
      <Logo />
      <div className="text-white max-w-md">
        <h1 className="text-[2.5rem] font-bold mb-4">Welcome to WriteDaily</h1>
        <p className="text-lg mb-8">
          Your creative journey begins here. Discover inspiration, share your
          ideas, and build your daily writing habit.
        </p>
      </div>
    </div>
  );
}

export default LoginPageContent;
