"use client";

import { updateUser } from "@/lib/actions";
import { useTransition } from "react";
import toast from "react-hot-toast";

function Configuration({ user }) {
  const [isUpdating, startTransition] = useTransition();
  async function handleUpdate(e) {
    const { value, id, defaultValue } = e.target;
    if (!value || !id || defaultValue === value) return;

    try {
      startTransition(() => {
        updateUser({ [id]: +value });
        toast.success(`${id} Updated Successfully`);
      });
    } catch (error) {
      console.error("Error during confirmation:", error);
      toast.error(error.message);
    }
  }
  return (
    <div className="bg-secondary p-6 rounded-xl shadow mb-6 border-[1px] border-slate-600">
      <h2 className="text-xl font-bold text-white mb-4">Configuration</h2>
      <div className="space-y-4 text-white sm:flex sm:items-center sm:space-x-96 ">
        <p className="font-semibold text-mediumDark">Daily Writing Goal</p>
        <input
          type="number"
          id="dailyWordGoal"
          onBlur={handleUpdate}
          disabled={isUpdating}
          defaultValue={user.dailyWordGoal}
          className="bg-secondary text-white border-2 border-lightgray p-2 rounded-xl disabled:cursor-not-allowed disabled:bg-mediumDark disabled:text-tertiary"
        />
      </div>
    </div>
  );
}

export default Configuration;
