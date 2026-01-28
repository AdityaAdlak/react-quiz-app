import { useEffect, useState } from "react";

function Timer({ duration, onTimeUp, questionIndex }) {
  const [time, setTime] = useState(duration);

  // Reset timer on question change
  useEffect(() => {
    setTime(duration);
  }, [questionIndex, duration]);

  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return <h3 className="timer">Time Left: {time}s</h3>;
}

export default Timer;
