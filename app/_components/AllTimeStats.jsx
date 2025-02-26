import { getOverAllStats, getUser } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { getDaysSinceCreated } from "@/lib/helpers";

async function AllTimeStats() {
  const session = await auth();
  const { totalWordsWritten, totalDaysStarted, totalDaysCompleted } =
    await getOverAllStats();

  const user = await getUser(session.user.email);
  const {
    fullName,
    created_at,
    currentStreak,
    longestStreak,
    earnedBadges = 1,
  } = user;
  return (
    <div className="p-6 bg-secondary rounded-xl shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        All Time Stats
      </h2>
      <p className="text-mediumDark mb-6">Your progress over time.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {totalWordsWritten}
          </p>
          <p className="text-sm text-mediumDark">Words Written</p>
        </div>
        {/* <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {stats.writingTime}
          </p>
          <p className="text-sm text-mediumDark">Minutes Writing</p>
        </div> */}
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {totalDaysStarted}
          </p>
          <p className="text-sm text-mediumDark">Writing Days</p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {longestStreak}
          </p>
          <p className="text-sm text-mediumDark">
            Longest Writing Streak (Days)
          </p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {currentStreak}
          </p>
          <p className="text-sm text-mediumDark">Current Streak (Days)</p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {totalDaysCompleted}
          </p>
          <p className="text-sm text-mediumDark">Writing Goals Met</p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {getDaysSinceCreated(created_at)}
          </p>
          <p className="text-sm text-mediumDark">Account Age (Days)</p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {earnedBadges}
          </p>
          <p className="text-sm text-mediumDark">Badges Earned</p>
        </div>
      </div>
    </div>
  );
}

export default AllTimeStats;
