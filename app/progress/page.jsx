import AllTimeStats from "../_components/AllTimeStats";
import Chat from "../_components/Chat";
import { generatePrompt } from "../_services/ai";

async function page() {

  const stats = {
    wordsWritten: 66,
    writingTime: 0.4,
    longestWritingStreak: 0,
    currentStreak: 0,
    writingGoalsMet: 0,
    accountAge: 2,
    badgesEarned: 1,
  };
  return <div>
    <AllTimeStats stats = {stats} />
    {/* <Chat /> */}
  </div>;
}

export default page;



