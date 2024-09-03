import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.payload;
    case "Decrement":
      if (state > 0) {
        return state - action.payload;
      } else return state;
    case "Reset":
      return action.payload;
  }
  return state;
};
const UseReducer4 = () => {
  const initialState = 0;
  const [count, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({
      type: "Increment",
      payload: 1,
    });
  };

  const decrement = () => {
    dispatch({
      type: "Decrement",
      payload: 1,
    });
  };

  const reset = () => {
    dispatch({
      type: "Reset",
      payload: initialState,
    });
  };
  return (
    <div>
      <h4>UseReducer 4 </h4>

      <div className="row">
        <div className="col-sm-12">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          {count}
        </div>
      </div>
    </div>
  );
};

export default UseReducer4;
