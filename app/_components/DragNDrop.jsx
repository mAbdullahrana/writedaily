import { getAllEntrie, getAllFolder } from "@/lib/actions";
import { DND } from "./DND";

async function DragNDrop({ entries, folders }) {
  return <DND entries={entries} folders={folders} />;
}

export default DragNDrop;
