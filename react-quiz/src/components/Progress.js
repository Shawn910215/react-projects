function Progress({ index, numQuestions, points, possibleMaxPoints, answer }) {
  return (
    <header className="progress">
      {/* answer !== null means the moment user click the option. Number() will
      return 1. */}
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {possibleMaxPoints}
      </p>
    </header>
  );
}

export default Progress;
