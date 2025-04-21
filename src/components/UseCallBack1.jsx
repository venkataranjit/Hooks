import React, { useState, useCallback } from "react";

const UseCallBack1 = () => {
  const [todo, setTodo] = useState([]);
  const [counter, setCounter] = useState(0);

  const todoList = () => {
    setTodo((pv) => [...pv, "Todo"]);
  };
  const counterHandler = () => {
    setCounter((pc) => pc + 1);
  };

  const heavyoperation = useCallback((c) => {
    for (let i = 0; i < 1000000000; i++) {
      c += 1;
    }
    return c;
  }, [counter]);
  const calculation = heavyoperation(counter);
  return (
    <>
      <h5>Use CallBack 1 </h5>
      <hr />
      <div className="row">
        <div className="col-sm-6">
          <h6>Todo</h6>
          <button onClick={todoList}>Add Todo</button>
          <ul>
            {todo.map((item, index) => (
              <li key={index}>
                {item} {index + 1}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-6">
          <h6>Counter</h6>
          <button onClick={counterHandler}>Counter</button>
          <p>{counter}</p>
          <hr />
          <h6>Heavy Operation</h6>
          {calculation}
        </div>
      </div>
    </>
  );
};

export default UseCallBack1;
