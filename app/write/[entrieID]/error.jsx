"use client";

import Button from "@/app/_components/Button";

function NotFound() {
  return (
    <div className="text-center space-y-6 mt-4 mx-auto flex flex-col justify-center items-center h-dvh">
      <h1 className="text-3xl font-semibold">
        This Entrie could not be found :(
      </h1>
      <Button
        as="primaryLink"
        to="/pages"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Back to all Entries
      </Button>
    </div>
  );
}

export default NotFound;
