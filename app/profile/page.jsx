import ProfileHeader from "../_components/ProfileHeader";
import ProfileStats from "../_components/ProfileStats";
import FunFacts from "../_components/FunFacts";
import NewWriters from "../_components/NewWriters";
import Leaderboard from "../_components/Leaderboard";
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/actions";
import { formatDate, formatTimestamp } from "@/lib/helpers";


export const metadata = {
  title: "Pages / DailyWrite",
  description: "Build Your Daily writing habbit with DailyWrite",
};
export default async function ProfilePage() {
 
  const session = await auth();

  const user = await getUser(session?.user.email);

  const {
    fullName,
    created_at,
    currentStreak,
    longestStreak,
    earnedBadges = 1,
  } = user;

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
   
        <div className="flex-1">
          <ProfileHeader
            username={fullName}
            joinedDate={formatDate(created_at)}
            session = {session}
          />
          <ProfileStats
            currentStreak={currentStreak}
            longestStreak={longestStreak}
            earnedBadges={earnedBadges}
          />
          <FunFacts user={user} />
        </div>
   
        <div className="hidden lg:block lg:w-1/4">
          <Leaderboard leaders={leaders} />
          <NewWriters newWriters={newWriters} />
        </div>
      </div>
    </div>
  );
}
