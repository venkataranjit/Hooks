import React, { useContext } from "react";
import UseContext2 from "./UseContext2";
import { CounterContext } from "./CounterContext";

const UseContext1 = () => {
  const { counter, incrementCounter } = useContext(CounterContext);
  return (
    <>
      <h3>Use context 1</h3>

      <hr />
      <button onClick={incrementCounter}>increase</button>
      <div>{counter}</div>
      
        <UseContext2 />
    </>
  );
};

export default UseContext1;
