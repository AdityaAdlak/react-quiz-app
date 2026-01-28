import { useEffect, useState } from "react";

function Timer({ timeLeft, onTimeUp }) {
  const [time, setTime] = useState(timeLeft);

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
