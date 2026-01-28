function Result({ score, total, restart, quit }) {
  return (
    <div className="result-card">
      <h2>{quit ? "Quiz Quit ❌" : "Quiz Completed 🎉"}</h2>

      <p>
        Your Score: <strong>{score}</strong> / {total}
      </p>

      <button onClick={restart}>Restart Quiz</button>
    </div>
  );
}

export default Result;
