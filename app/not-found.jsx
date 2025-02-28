import Button from "./_components/Button";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh w-full text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Button as="primaryLink" to="/pages">
        Go back home
      </Button>
    </div>
  );
}

export default NotFound;
