import React, { useState, useEffect } from "react";

const UseMemo3Child = () => {
  const [timer, setTimer] = useState(new Date().toLocaleString());
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimer(new Date().toLocaleString());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);
  const stopHandler = () => {
    setRunning(false);
  };

  const startHandler = () => {
    setRunning(true);
  };
  return (
    <div>
      {timer}
      <button onClick={stopHandler}>Stop</button>
      <button onClick={startHandler}>start</button>
    </div>
  );
};

export default UseMemo3Child;
