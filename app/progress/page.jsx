import AllTimeStats from "../_components/AllTimeStats";
import Chat from "../_components/Chat";

export const metadata = {
  title: "Progress / DailyWrite",
  description: "Build Your Daily writing habbit with DailyWrite",
};
function page() {
  return (
    <div>
      <AllTimeStats  />
      {/* <Chat /> */}
    </div>
  );
}

export default page;
