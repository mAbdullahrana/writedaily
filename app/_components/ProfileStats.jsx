function ProfileStats({ currentStreak, longestStreak, earnedBadges }) {
  
  const statsData = [
    { icon: "🔥", value: currentStreak, label: "Current Streak" },
    { icon: "🍾", value: longestStreak, label: "Longest Streak" },
   
  ];

  return (
    <div className="flex flex-col justify-center sm:flex sm:flex-row sm:gap-16  items-center mb-6">
      {statsData.map((stat, i) => (
        <div key={i} className="bg-dark p-4 rounded-lg text-center">
          <span className="text-4xl">{stat.icon}</span>
          <p className="text-2xl font-bold text-white">{stat.value}</p>
          <p className="text-sm text-mediumDark">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfileStats;
