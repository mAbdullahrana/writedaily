import { useTransition } from "react";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";
import toast from "react-hot-toast";

function ConfirmDelete({ resource, onClose, onConfirm }) {

  const [isPending, startTransition] = useTransition();

  function handleOnConfirm(e) {
    e.stopPropagation();
    try {
      startTransition(() => {
        onConfirm(resource.id);
        toast.success(
          resource.title
            ? `${resource.title} Deleted Successfully`
            : `${resource.name} Deleted Successfully`
        );
        onClose();
      });
    } catch (error) {
      console.error("Error during confirmation:", error);
      toast.error(error.message);
      onClose();
    }
  }
  return (
    <div className="w-[40rem] flex flex-col gap-[1.2rem] bg-lightgray p-6">
      <h3>Delete {resource.title ? resource.title : resource.name} </h3>
      <p className="text-white mb-[1.2rem]">
        Are you sure you want to delete this{" "}
        {resource.title ? resource.title : resource.name} permanently? This
        action cannot be undone.
      </p>
      <div className="flex justify-end gap-2">
        <button
          className="bg-white text-dark hover:bg-mediumDark text-[1rem] transition py-1 px-4 rounded-lg flex gap-2 items-center justify-center"
          onClick={onClose}
        >
          Cancel
        </button>
        <Button onClick={handleOnConfirm} disabled={isPending} as="danger">
          {!isPending ? "Delete" : "Deleting..."}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
