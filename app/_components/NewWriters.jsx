import LeaderboardItem from "./LeaderboardItem";

function NewWriters({ newWriters }) {
  return (
    <div className="bg-lightgray p-3 rounded-xl mt-4 shadow">
      <h3 className="text-lg font-bold text-mediumDark mb-2">New Writers</h3>
      <div className="space-y-1">
        {newWriters.map((writer, index) => (
          <LeaderboardItem
            key={index}
            avatar={writer.avatar}
            name={writer.name}
            joined={writer.joined}
          />
        ))}
      </div>
    </div>
  );
}
export default NewWriters
