import { getAllEntrie } from "@/lib/actions";
import EntrieCard from "../_components/EntrieCard";
import AddNoteBook from "../_components/AddNoteBook";

async function page() {
  const entries = await getAllEntrie("1c6e20b5-8e3a-433b-a50c-3e2071d57c09");

  return (
    <>
      <h2 className="text-2xl font-bold ">Recent Writings</h2>
      <div className="">
        <div className="mt-4 shadow ">
          <p className="bg-lightgray rounded-tl-lg rounded-tr-lg py-2 px-6 text-mediumDark font-semibold text-sm">
            Name
          </p>
          {entries?.map((entrie) => (
            <EntrieCard key={entrie.id} entrie={entrie} />
          ))}
        </div>

        <AddNoteBook />
      </div>
    </>
  );
}

export default page;
