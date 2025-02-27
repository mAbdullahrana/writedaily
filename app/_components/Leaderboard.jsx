import { getLeaderboard } from "@/lib/actions";
import LeaderboardItem from "./LeaderboardItem";

async function Leaderboard() {
  const leaders = await getLeaderboard();

  return (
    <div className="bg-lightgray p-3 rounded-xl shadow">
      <h2 className="text-lg font-bold text-mediumDark mb-2">Leaderboard</h2>
      <div className="space-y-2 ">
        {leaders.map((leader, index) => (
          <LeaderboardItem
            key={index}
            name={leader.fullName}
            streakLevel={leader.longestStreak}
          />
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
