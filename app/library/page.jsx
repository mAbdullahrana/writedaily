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
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-2">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl font-bold">My Library</h2>
          <p className="text-mediumDark font-light text-sm">
            Drag and drop to organize your notebooks and folders
          </p>
        </div>

        <div className="flex gap-2 items-center w-full md:w-auto justify-center md:justify-end">
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
