import { createFolder } from "@/lib/actions";
import SubmitButton from "./SubmitButton";

function CreateFolderForm({ onClose }) {
  return (
    <div className="p-6 flex flex-col rounded-lg  bg-lightgray text-white gap-2 h-[17rem] w-[30rem]">
      <h3 className="text-xl font-semibold">Create Collection</h3>
      <p className="text-sm">
        Group your pages logically into folders or chapters.
      </p>
      <form
        action={createFolder}
        className="mt-2 flex flex-col justify-between h-[100%]"
      >
        <div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              className="bg-lightgray border border-mediumDark text-[0.9rem] text-white px-3 py-4 rounded-[0.8rem] focus:border-2 outline-none "
              placeholder="e.g. Poems Galore..."
              type="text"
              name="name"
              required
            />
          </div>
        </div>

        <div className="flex gap-2 justify-end ">
          <button
            className="bg-white text-dark hover:bg-mediumDark text-[1rem] transition py-1 px-4 rounded-lg flex gap-2 items-center justify-center"
            onClick={onClose}
          >
            Cancel
          </button>
          <SubmitButton close={onClose} pendingLabel={"Creating..."}>
            Create
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default CreateFolderForm;


