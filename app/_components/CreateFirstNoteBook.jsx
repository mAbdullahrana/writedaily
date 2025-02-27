// import { NotepadText, Plus } from "lucide-react";
// import AddNoteBook from "./AddNoteBook";

// function CreateFirstNoteBook() {
//   return (
//     <div className="flex flex-col items-center max-w-screen-xl  justify-center min-h-screen">
//       {/* <img
//         className="w-56 h-58 object-contain"
//         src="CreateFirstNotebook1.png"
//         alt="CreateFirstNoteBook"
//       /> */}
//       <NotepadText className="text-primaryButton mb-5" size={200} />
//       <div className="flex flex-col items-center justify-center gap-1">
//         <h1 className="text-white text-3xl font-bold ">
//           Create your first notebook
//         </h1>
//         <p className="text-lg text-mediumDark">
//           A notebook is a digital folder for organizing and storing related
//           notes. Let’s create your first one!
//         </p>

//       </div>

//       <div className="mt-2 flex flex-col items-center">
//         <AddNoteBook as="button">
//           <span>
//             <Plus />
//           </span>
//           <span>New Notebook</span>
//         </AddNoteBook>
//         <p className="text-sm text-mediumDark mt-2">
//           Not sure where to start? Try creating a notebook for an important part
//           of your life, like "Work", "School", or "Recipes".
//         </p>
//       </div>
//     </div>
//   );
// }

// export default CreateFirstNoteBook;
import { NotepadText, Plus } from "lucide-react";
import AddNoteBook from "./AddNoteBook";

function CreateFirstNoteBook() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      {/* Icon Placeholder */}
      <NotepadText className="text-primaryButton mb-6" size={150} />

      {/* Title and Description */}
      <div className="text-center">
        <h1 className="text-white text-3xl font-extrabold">
          Create Your First Notebook
        </h1>
        <p className="text-lg text-mediumDark mt-2 max-w-lg">
          Keep your thoughts in one place! Create a notebook to organize your
          ideas, tasks, or anything important
        </p>
      </div>

      {/* New Notebook Button */}
      <div className="mt-4 flex flex-col items-center">
        <AddNoteBook
          as="button"
          className="flex items-center gap-2 bg-primaryButton text-white px-6 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium text-lg">New Notebook</span>
        </AddNoteBook>

        {/* Suggestion Text */}
        <p className="text-sm text-mediumDark mt-3 max-w-sm text-center">
          Jot down anything that comes to mind <span className="font-semibold">"ideas"</span>,
          <span className="font-semibold"> "reminders"</span>,
          <span className="font-semibold"> "to-dos"</span>. This space is
          yours!
        </p>
      </div>
    </div>
  );
}

export default CreateFirstNoteBook;
