import { Suspense } from "react";
import AddNoteBook from "../_components/AddNoteBook";
import CreateNewFolder from "../_components/CreateNewFolder";
import Library from "../_components/Library";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Library / DailyWrite",
  description: "Build Your Daily writing habbit with DailyWrite",
};

export default async function Page() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl font-bold ">Your Library</h2>
          <p className="text-mediumDark font-light text-sm">
            Drag and drop to organize your notebooks and folders
          </p>
        </div>
        <div className="flex gap-2 items-start">
          <CreateNewFolder />
          <AddNoteBook as="button" />
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
      <Library />
      </Suspense>
    </>
  );
}
