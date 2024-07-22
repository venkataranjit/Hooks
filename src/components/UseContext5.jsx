import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
const UseContext5 = () => {
  const { counter, incrementCounter } = useContext(CounterContext);

  return (
    <>
      <h3>Use context 5</h3>
      <div>{counter}</div>
      <button onClick={incrementCounter}>increase</button>
      <hr />
    </>
  );
};
export default UseContext5;
