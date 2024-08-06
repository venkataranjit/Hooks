import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    let timer;
    if (running === true) {
      timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [count, running]);

  const stopHandler = () => {
    setRunning(false);
  };
  return (
    <>
      <h3>Use Effect 1</h3>
      <hr />
      <h6>I am Rendered {count} Times</h6>
      <button onClick={stopHandler}>
        {running === false ? "Stoped" : "Stop Rendering"}
      </button>
    </>
  );
};

export default UseEffect1;
