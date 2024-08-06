import React from 'react';
import useCounterCustomeHooks2 from './useCounterCustomeHooks2';
import ScreenComponent from './ScreenComponent';
import useScreenCustomeHooks2 from './useScreenCustomeHooks2';

const CustomeHooks2 = () => {
  const[counter, increment, decrement, reset] = useCounterCustomeHooks2(0);
  const [type, size]  = useScreenCustomeHooks2();
  return (
    <>
        <h5>CustomeHooks 2</h5>
        <hr />
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <h6>{counter}</h6>
        <hr />
        <ScreenComponent type={type} size={size}/>
    </>
  )
}

export default CustomeHooks2;
