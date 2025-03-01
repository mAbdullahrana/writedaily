import { setNoteBookGoal } from "@/lib/actions";
import { Check } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SetGoal({ entrie }) {
  const initialGoal = entrie?.goal;
  const [goal, setGoal] = useState(initialGoal);
  const [isToggle, setIsToggle] = useState(false);

  function handleSetGoal(e) {
    e.preventDefault();

    if (goal === "") {
      setGoal(initialGoal);
      return;
    }

    setNoteBookGoal({ goal, entrieID: entrie?.id });
    toast.success("Goal set successfully");

    setIsToggle(false);
  }

  function handleSetName(e) {
   
    setGoal(Number(e.target.value));
  }

  function handleToggle(e) {
    e.preventDefault();
    setIsToggle((toggle) => !toggle);
  }

  return (
    <>
      {!isToggle ? (
        <button
          type="button"
          className="text-mediumDark hover:text-white"
          onClick={handleToggle}
        >
          {initialGoal === 500
            ? "Set your target"
            : `Word Target: ${goal} `}
        </button>
      ) : (
        <div className="flex gap-1">
          <input
            className="bg-[#000] text-sm text-white px-3 py-[0.25rem] rounded-[0.2rem] outline-none"
            type="number"
            value={goal}
            onChange={handleSetName}
          />
          <button
            className="text-mediumDark hover:text-white bg-[#000] hover:bg-lightgray transition px-2 rounded-[0.6rem]"
            type="button"
            onClick={handleSetGoal}
          >
            <Check />
          </button>
        </div>
      )}
    </>
  );
}
