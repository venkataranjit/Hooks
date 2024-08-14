import React, { useReducer } from "react";

const initialValue = 0;
const countReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      if (state > 0) return state + action.payload;
      return state;
    case "RESET":
      return initialValue;
    default:
      throw new Error();
  }
};


const UseReducer3 = () => {
  const [count, dispatch] = useReducer(countReducer, initialValue);
  const resetHandler = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <h5>UseReducer 3</h5>
      <button onClick={() => dispatch({ type: "INC", payload: 1 })}>+</button>
      {count}
      <button onClick={() => dispatch({ type: "DEC", payload: -1 })}>-</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default UseReducer3;
