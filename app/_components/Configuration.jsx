function Configuration({ writingGoal, defaultPrompts }) {
  return (
    <div className="bg-secondary p-6 rounded-xl shadow mb-6 border-[1px] border-slate-600">
      <h2 className="text-xl font-bold text-white mb-4">Configuration</h2>
      <div className="space-y-4 text-white ">
        <div>
          <p className="font-semibold text-mediumDark">Daily Writing Goal</p>
        </div>

        <div className=" ">
          <p className="font-semibold text-mediumDark">
            Default Writing Prompts
          </p>
        </div>
      </div>
    </div>
  );
}

export default Configuration;
