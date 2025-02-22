import Button from "./Button";

function ConfirmDelete({ onClose , onConfirm }) {
  return (
    <div className="w-[40rem] flex flex-col gap-[1.2rem] bg-lightgray p-6">
      <h3>Delete </h3>
      <p className="text-white mb-[1.2rem]">
        Are you sure you want to delete this permanently? This action cannot be
        undone.
      </p>
      <div className="flex justify-end gap-2">
        <button
          className="bg-white text-dark hover:bg-mediumDark text-[1rem] transition py-1 px-4 rounded-lg flex gap-2 items-center justify-center"
          onClick={onClose}
        >
          Cancel
        </button>
        <Button onClick={onConfirm} as="danger">Delete</Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
