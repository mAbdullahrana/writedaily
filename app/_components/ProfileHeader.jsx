function ProfileHeader({ username, joinedDate }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-secondary p-4 rounded-xl shadow mb-6">
      <div>
        <h1 className="text-3xl font-bold text-white">{username}</h1>
        <p className="text-mediumDark">Joined {joinedDate}</p>
      </div>
      <button className="mt-4 md:mt-0 px-4 py-2 bg-primaryButton hover:bg-primaryButtonHover text-white rounded transition-colors">
        Edit Profile
      </button>
    </div>
  );
}


export default ProfileHeader
