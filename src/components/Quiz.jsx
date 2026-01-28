import { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import Timer from "./Timer";
import Result from "./Result";
import ProgressBar from "./ProgressBar";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quit, setQuit] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[current].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const quitQuiz = () => {
    const confirmQuit = window.confirm(
      "Are you sure you want to quit the quiz?"
    );
    if (confirmQuit) {
      setQuit(true);
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setQuit(false);
  };

  if (showResult) {
    return (
      <Result
        score={score}
        total={questions.length}
        quit={quit}
        restart={restartQuiz}
      />
    );
  }

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <Timer timeLeft={60} onTimeUp={() => setShowResult(true)} />
        <button className="quit-btn" onClick={quitQuiz}>
          Quit
        </button>
      </div>

      <ProgressBar current={current} total={questions.length} />

      <p className="counter">
        Question {current + 1} of {questions.length}
      </p>

      <Question data={questions[current]} onAnswer={handleAnswer} />
    </div>
  );
}

export default Quiz;
