import { Suspense } from "react";
import Entries from "../_components/Entries";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Pages / DailyWrite",
  description: "Build Your Daily writing habbit with DailyWrite",
};
function Page() {
  return (
    <>
      <h2 className="text-2xl font-bold">Recent Writings</h2>

      <Suspense fallback={<Spinner />}>
        <Entries />
      </Suspense>
    </>
  );
}

export default Page;
