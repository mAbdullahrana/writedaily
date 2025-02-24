function AllTimeStats({ stats }) {
  return (
    <div className="p-6 bg-secondary rounded-xl shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        All Time Stats
      </h2>
      <p className="text-mediumDark mb-6">Your progress over time.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {stats.wordsWritten}
          </p>
          <p className="text-sm text-mediumDark">Words Written</p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {stats.writingTime}
          </p>
          <p className="text-sm text-mediumDark">Minutes Writing</p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {stats.longestWritingStreak}
          </p>
          <p className="text-sm text-mediumDark">
            Longest Writing Streak (Days)
          </p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {stats.currentStreak}
          </p>
          <p className="text-sm text-mediumDark">Current Streak (Days)</p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {stats.writingGoalsMet}
          </p>
          <p className="text-sm text-mediumDark">Writing Goals Met</p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {stats.accountAge}
          </p>
          <p className="text-sm text-mediumDark">Account Age (Days)</p>
        </div>
        <div className="bg-dark p-4 rounded-lg">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {stats.badgesEarned}
          </p>
          <p className="text-sm text-mediumDark">Badges Earned</p>
        </div>
      </div>
    </div>
  );
}

export default AllTimeStats;
