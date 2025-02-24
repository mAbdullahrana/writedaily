function FunFacts({ overall, month }) {
  return (
    <div className="bg-secondary p-6 rounded-xl shadow mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">Fun Facts</h2>
      <p className="text-mediumDark mb-4">
        Since starting to write on {overall.startDate}, Le has written{" "}
        {overall.wordsWritten} words, started writing on {overall.daysStarted}{" "}
        day(s), and completed at least 500 words on {overall.daysCompleted}{" "}
        day(s).
      </p>
      <p className="text-mediumDark">
        This month, Le has written {month.wordsWritten} words, started writing
        on {month.daysStarted} day(s), and completed at least 500 words on{" "}
        {month.daysCompleted} day(s).
      </p>
    </div>
  );
}

export default FunFacts
