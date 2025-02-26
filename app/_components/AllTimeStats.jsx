import { Suspense } from "react";
import Stats from "./Stats";
import Spinner from "./Spinner";

function AllTimeStats() {
  return (
    <div className="p-6 bg-secondary rounded-xl shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        All Time Stats
      </h2>
      <p className="text-mediumDark mb-6">Your progress over time.</p>
      <Suspense fallback={<Spinner />}>
        <Stats />
      </Suspense>
    </div>
  );
}

export default AllTimeStats;
