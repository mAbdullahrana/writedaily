// import { auth } from "@/lib/auth";
// import Image from "next/image";

// async function ProfileHeader({ username, joinedDate }) {
//   const session = await auth();

//   console.log(session)
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-secondary p-4 rounded-xl shadow mb-6">
//       <div>
//         <span>
//           <img
//             className="h-8 rounded-full"
//             src={session.user.image}
//             alt={session.user.name}
//           />
//         </span>

//         <h1 className="text-3xl font-bold text-white">{username}</h1>
//         <p className="text-mediumDark">Joined {joinedDate}</p>
//       </div>
//       <button className="mt-4 md:mt-0 px-4 py-2 bg-primaryButton hover:bg-primaryButtonHover text-white rounded transition-colors">
//         Edit Profile
//       </button>
//     </div>
//   );
// }

// export default ProfileHeader;

import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

async function ProfileHeader({ username, joinedDate }) {
  const session = await auth();

  return (
    <div className="flex flex-col items-center md:flex-row sm:items-start sm:justify-between bg-secondary p-4 rounded-xl shadow mb-6">
      <div className="flex flex-col items-center sm:items-start ">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 ">
          <Image
            className="rounded-full object-cover"
            src={session.user.image}
            alt={session.user.name}
            fill
          />
        </div>
        <h1 className="text-3xl font-bold mt-4 text-white">{username}</h1>
        <p className="text-mediumDark">Joined {joinedDate}</p>
      </div>
      <Link
        href="/settings"
        className="mt-4 md:mt-0 px-4 py-2 bg-primaryButton hover:bg-primaryButtonHover text-white rounded transition-colors"
      >
        Edit Profile
      </Link>
    </div>
  );
}

export default ProfileHeader;
