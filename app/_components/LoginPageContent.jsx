import Link from "next/link";
import Logo from "./Logo";

function LoginPageContent() {
  return (
    <div className="hidden md:flex flex-1 flex-col items-start  bg-dark  justify-center p-8 ">
      <Logo />
      <div className="text-white">
        <h1 className="text-[2.7rem] font-bold mb-4">
          Build a Daily Writing Habit✍
        </h1>
        <p className="text-lg mb-8">
          Start writing more today.Enjoy daily prompts, AI-powered topic
          suggestions, and personalized writing tips that spark your
          imagination, streaks, custom analytics, text reminders, personalized
          statistics, and so much more.
        </p>

        <p className="text-lg mb-8">Over 2k Happy Users🎉</p>
      </div>
    </div>
  );
}

export default LoginPageContent;
