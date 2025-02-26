"use client";

const { useFormStatus } = require("react-dom");

export default function SubmitButton({ children, pendingLabel, close }) {
  const { pending } = useFormStatus();

  if (pending) {
    setTimeout(() => {
      close();
    }, 2000);
  }
  return (
    <button
      className="bg-primaryButton text-white hover:bg-primaryButtonHover text-[1rem] transition py-2 px-4 rounded-lg flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-300"
      disabled={pending}
    >
      {!pending ? children : pendingLabel}
    </button>
  );
}
