"use client";

import { updateUser } from "@/lib/actions";
import { useTransition } from "react";
import toast from "react-hot-toast";

function GeneralInfo({ fullName, email, timeZone }) {
  const [isUpdating, startTransition] = useTransition();
  async function handleUpdate(e) {
    const { value, id, defaultValue } = e.target;
    if (!value || !id || defaultValue === value) return;

    try {
      startTransition(() => {
        updateUser({ [id]: value });
        toast.success(`${id} Updated Successfully`);
      });
    } catch (error) {
      console.error("Error during confirmation:", error);
      toast.error(error.message);
    }
  }

  return (
    <div className="bg-secondary p-6 rounded-xl shadow mb-6 border-[1px] border-slate-600">
      <h2 className="text-xl font-bold text-white mb-4">General Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        <div>
          <p className=" text-mediumDark text-sm mb-2">Full Name</p>
          <input
            type="text"
            id="fullName"
            disabled={isUpdating}
            onBlur={handleUpdate}
            defaultValue={fullName}
            className="bg-secondary text-white border-2 border-lightgray p-2 rounded-xl disabled:cursor-not-allowed disabled:bg-mediumDark disabled:text-tertiary"
          />
        </div>
        <div>
          <p className=" text-mediumDark text-sm mb-2">Email</p>

          <input
            type="text"
            id="email"
            disabled
            defaultValue={email}
            className="bg-secondary text-white border-2 border-lightgray p-2 rounded-xl disabled:cursor-not-allowed disabled:bg-mediumDark disabled:text-tertiary"
          />
        </div>
        <div>
          <p className=" text-mediumDark text-sm">Time Zone</p>
          <p>{timeZone}</p>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
