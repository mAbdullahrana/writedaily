"use client";

import ProfileHeader from "../_components/ProfileHeader";
import ProfileStats from "../_components/ProfileStats";
import FunFacts from "../_components/FunFacts";
import NewWriters from "../_components/NewWriters";
import Leaderboard from "../_components/Leaderboard";

// ProfilePage Component
export default function ProfilePage() {
  // Replace with your real data as needed.
  const user = {
    username: "Le Bim",
    joinedDate: "22 February 2025",
    currentStreak: 0,
    longestStreak: 0,
    earnedBadges: 1,
  };

  const funFactsOverall = {
    startDate: "22 February 2025",
    wordsWritten: 66,
    daysStarted: 1,
    daysCompleted: 0,
  };

  const funFactsMonth = {
    wordsWritten: 66,
    daysStarted: 2,
    daysCompleted: 0,
  };

  const leaders = [
    { avatar: "K", name: "Kevin Stowers", streakLevel: 422 },
    { avatar: "M", name: "Michele Lundin", streakLevel: 38 },
    { avatar: "B", name: "Blake Petit", streakLevel: 27 },
    { avatar: "D", name: "Dodi Gauthier", streakLevel: 25 },
    { avatar: "Y", name: "Yehia Bakour", streakLevel: 23 },
    { avatar: "J", name: "Jackson", streakLevel: 20 },
    { avatar: "H", name: "Hyperion Pyxidis", streakLevel: 17 },
    { avatar: "K", name: "Kyle Ginzburg", streakLevel: 12 },
    { avatar: "Y", name: "Yehia Bakour", streakLevel: 9 },
    { avatar: "D", name: "David Hutchinson", streakLevel: 8 },
    { avatar: "T", name: "ThatDoodNathan", streakLevel: 8 },
    { avatar: "Y", name: "Yehia Bakour", streakLevel: 9 },
    { avatar: "D", name: "David Hutchinson", streakLevel: 8 },
    { avatar: "T", name: "ThatDoodNathan", streakLevel: 8 },
  ];

  const newWriters = [
    { avatar: "J", name: "James Amarante", joined: "11 hours ago" },
    { avatar: "T", name: "Tomas Ramoska", joined: "17 hours ago" },
    { avatar: "J", name: "Jennifer", joined: "a day ago" },
    { avatar: "S", name: "sean", joined: "2 days ago" },
    { avatar: "L", name: "Le Bim", joined: "2 days ago" },
    { avatar: "A", name: "Axel Guillama", joined: "3 days ago" },
    { avatar: "M", name: "Mefew", joined: "4 days ago" },
    { avatar: "L", name: "Lebron", joined: "6 days ago" },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        {/* Left Column: Main Profile Content */}
        <div className="flex-1">
          <ProfileHeader
            username={user.username}
            joinedDate={user.joinedDate}
          />
          <ProfileStats
            currentStreak={user.currentStreak}
            longestStreak={user.longestStreak}
            earnedBadges={user.earnedBadges}
          />
          <FunFacts overall={funFactsOverall} month={funFactsMonth} />
        </div>
        {/* Right Column: Leaderboard (hidden on mobile) */}
        <div className="hidden lg:block lg:w-1/4">
          <Leaderboard leaders={leaders} />
          <NewWriters newWriters={newWriters} />
        </div>
      </div>
    </div>
  );
}
