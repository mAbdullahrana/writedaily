import Button from "./_components/Button";

export const metadata = {
  title: "DailyWrite",
  description: "Build Your Daily writing habbit with DailyWrite",
};
export default async function Home() {
return (
    <div className="mx-auto flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Welcome to WriteDaily</h1>
      <p>Your creative journey starts here.</p>
      <Button as='primaryLink' to='/login'>Login</Button>
    </div>
  );
}
