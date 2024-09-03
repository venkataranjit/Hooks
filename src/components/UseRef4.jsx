import React, { useRef, useEffect, useState, useContext } from "react";
import {CounterContext} from './CounterContext';
const UseRef4 = () => {
    const CC = useContext(CounterContext);
    console.log(CC);
  const count = useRef(0);
    const [render, setRender] = useState(0);
    const renderFunction = () => {
        setRender((pr)=>pr+1);
    }
  const plusHandler = () => {
    count.current = count.current + 1;
  };
  useEffect(() => {
    return console.log(count);
  }, []);

  return (
    <>
      <h4>UseRef 4</h4>
      <button onClick={plusHandler}>Plus</button>
      <p>{count.current}</p>
      <button onClick={renderFunction}>Render</button>
      <p>{render}</p>
      <button onClick={CC.incrementCounter}>Increament</button>
      <p>{CC.counter}</p>
    </>
  );
};

export default UseRef4;
