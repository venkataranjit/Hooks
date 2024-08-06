import React, { useState } from "react";

const UseMemo1 = () => {
  const [todo, setTodo] = useState([]);
  const [counter, setCounter] = useState(0);
  const calculation = heavyoperation(counter);
  const todoList = () => {
    setTodo((pv) => [...pv, "Todo"]);
  };
  const counterHandler = () => {
    setCounter((pc) => pc + 1);
  };

  return (
    <>
      <h5>Use Memo 1 (without UseMemo)</h5>
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
const heavyoperation = (c) => {
  for (let i = 0; i < 1000000000; i++) {
    c += 1;
  }
  return c;
};
export default UseMemo1;
