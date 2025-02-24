import LeaderboardItem from "./LeaderboardItem";

function Leaderboard({ leaders, newWriters }) {
  return (
    <div className="bg-lightgray p-3 rounded-xl shadow">
      <h2 className="text-lg font-bold text-mediumDark mb-2">Leaderboard</h2>
      <div className="space-y-2 ">
        {leaders.map((leader, index) => (
          <LeaderboardItem
            key={index}
            avatar={leader.avatar}
            name={leader.name}
            streakLevel={leader.streakLevel}
          />
        ))}
      </div>
    </div>
  );
}

export default Leaderboard
