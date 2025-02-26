import { getAllEntrie, getAllFolder } from "@/lib/actions";
import { DND } from "./DND";

async function DragNDrop() {
  const [folders, entries] = await Promise.all([
    getAllFolder(),
    getAllEntrie(),
  ]);
  return <DND entries={entries} folders={folders} />;
}

export default DragNDrop;
