import { Plus } from "lucide-react";
import AddNoteBook from "./AddNoteBook"; // Ensure the correct path to your AddNoteBook component

function CreateFirstNoteBook() {
  
  return (
    <div className="flex flex-col items-center  min-h-screen">
      <img
        className="w-56 h-58 object-contain"
        src="CreateFirstNotebook1.png"
        alt="CreateFirstNoteBook"
      />
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-white text-3xl font-bold ">
          Ready to get started?
        </h1>
        <p className="text-lg text-mediumDark">
          Create your first notebook to start writing.
        </p>
      </div>

      <div className="mt-2">
        <AddNoteBook as="button">
          <span>
            <Plus />
          </span>
          <span>New Notebook</span>
        </AddNoteBook>
      </div>
    </div>
  );
}

export default CreateFirstNoteBook;
