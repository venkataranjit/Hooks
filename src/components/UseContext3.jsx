import React, { useContext } from 'react';
import UseContext4 from './UseContext4';
import { CounterContext } from './CounterContext'; 

const UseContext3 = () => {
  const { counter, decrementCounter } = useContext(CounterContext);
  
  return (
    <>
        <h3>Use context 3</h3>
        <div>{counter}</div>
        <button onClick={decrementCounter} >decrease</button>
        <hr />
        <UseContext4 />
    </>
  )
}

export default UseContext3;
