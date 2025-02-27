import { getRecentUsers } from "@/lib/actions";
import { formatTimestamp } from "@/lib/helpers";
import LeaderboardItem from "./LeaderboardItem";

async function NewWriters({ newWriters }) {
  const recentUsers = await getRecentUsers();

  return (
    <div className="bg-lightgray p-3 rounded-xl mt-4 shadow">
      <h3 className="text-lg font-bold text-mediumDark mb-2">New Writers</h3>
      <div className="space-y-1">
        {recentUsers.map((writer, index) => (
          <LeaderboardItem
            key={index}
            name={writer.fullName}
            joined={formatTimestamp(writer.created_at)}
          />
        ))}
      </div>
    </div>
  );
}
export default NewWriters;




