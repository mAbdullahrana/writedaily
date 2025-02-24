function LeaderboardItem({ avatar, name, streakLevel, joined }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-7 h-6 rounded-full flex items-center justify-center text-white text-[0.83rem] bg-secondary">
        {avatar}
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-white text-[0.8rem]">{name}</p>
        <div className="text-mediumDark text-sm">
          {joined ? (
            <span className="text-[0.65rem]"> Joined {joined} </span>
          ) : (
            <span
              className={` ${
                streakLevel > 200
                  ? "bg-sky-700  text-white text-center p-1 rounded-2xl"
                  : "bg-yellow-700  text-center p-1 rounded-2xl text-white"
              } text-[0.8rem]`}
            >
              🔥 {streakLevel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeaderboardItem
