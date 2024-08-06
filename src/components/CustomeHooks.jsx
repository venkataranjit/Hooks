import React from 'react';
import useCounterCustomeHooks from './useCounterCustomeHooks';

const CustomeHooks = () => {
  const[counter, increment, decrement, reset] = useCounterCustomeHooks(0, 5);
  return (
    <>
        <h5>CustomeHooks</h5>
        <hr />
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <h6>{counter}</h6>
    </>
  )
}

export default CustomeHooks
