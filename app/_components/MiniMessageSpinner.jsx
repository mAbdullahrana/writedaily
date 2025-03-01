import { SyncLoader } from "react-spinners";

function MiniMessageSpinner() {
  return (
    <SyncLoader
      color="#966BCA"
      size={8}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default MiniMessageSpinner;
