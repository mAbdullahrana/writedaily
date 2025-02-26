import { getOverAllStats } from "@/lib/actions";
import { formatDate } from "@/lib/helpers";

async function FunFacts({ user }) {
  const { fullName, created_at } = user;

  const name = fullName.split(" ").at(0);
  const month = {
    wordsWritten: 66,
    daysStarted: 2,
    daysCompleted: 0,
  };

  const { totalWordsWritten, totalDaysStarted, totalDaysCompleted } =
    await getOverAllStats();

  return (
    <div className="bg-secondary p-6 rounded-xl shadow mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">Fun Facts</h2>
      <p className="text-mediumDark mb-4">
        Since starting to write on {formatDate(created_at)}, {name} has written{" "}
        {totalWordsWritten} words, started writing on {totalDaysStarted} day(s),
        and completed at least 500 words on {totalDaysCompleted} day(s).
      </p>
    
    </div>
  );
}

export default FunFacts;
