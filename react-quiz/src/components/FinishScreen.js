function FinishScreen({ points, possibleMaxPoints, highScore }) {
  const percentage = (points / possibleMaxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {possibleMaxPoints}(
        {Math.ceil(percentage)})
      </p>

      <p className="highscore">(Highscore :{highScore} points)</p>
    </>
  );
}

export default FinishScreen;
