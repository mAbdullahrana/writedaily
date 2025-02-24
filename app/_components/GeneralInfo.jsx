function GeneralInfo({ fullName, email, timeZone, phone }) {
  return (
    <div className="bg-secondary p-6 rounded-xl shadow mb-6 border-[1px] border-slate-600">
      <h2 className="text-xl font-bold text-white mb-4">
        General Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        <div>
          <p className=" text-mediumDark text-sm">Full Name</p>
          <p>{fullName}</p>
        </div>
        <div>
          <p className=" text-mediumDark text-sm">Email</p>
          <p>{email}</p>
        </div>
        <div>
          <p className=" text-mediumDark text-sm">Time Zone</p>
          <p>{timeZone}</p>
        </div>
        <div>
          <p className=" text-mediumDark text-sm">Phone Number</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
