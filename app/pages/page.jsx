import { Button } from "@/components/ui/button";

function page() {
  return (
    <div>
      <h2 className="text-2xl font-bold ">
        Recent Writings
        <Button variant="outline">Hello</Button>
      </h2>
      <div className=" bg-secondary mt-4  p-4 rounded-xl shadow">Pages</div>
    </div>
  );
}

export default page;
