import { redirect } from "next/navigation";

function Entrie({ entrie }) {
  const { title, wordCount, id } = entrie;

  function handleClick() {
    redirect(`/write/${id}`);
  }
  return (
    <li
      onClick={handleClick}
      className="bg-lightgray cursor-pointer hover:bg-secondary flex flex-col p-3 rounded-sm h-full"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[0.7rem] text-mediumDark font-light">
          {wordCount} Words
        </p>
      </div>
    </li>
  );
}

export default Entrie;
