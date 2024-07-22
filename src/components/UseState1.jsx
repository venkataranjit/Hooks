import React, { useState } from "react";

const UseState1 = () => {
  const [name, setName] = useState("ranjit");
  const [flag, setFlag] = useState(false);
  const [step, setStep] = useState(0);
  const [name2, setName2] = useState("");
  const [arrName, setArrName] = useState([]);
  console.log(setName); // to ignore error
  const clickHandler = () => {
    setFlag(!flag);
  };

  const increment = () => {
    setStep((prevState) => prevState + 1);
    console.log("clicked");
  };

  const decreament = () => {
    if (step > 0) {
      setStep((prevState) => prevState - 1);
      setStep((prevState) => prevState - 1);
      console.log("clicked");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setArrName([...arrName, {id: arrName.length, name:name2}]);
    setName2("");
  } 

  return (
    <>
      <h3>Use State 1</h3>
      <hr />
      <h5>My Name is {!flag ? name : ""}</h5>
      <button onClick={clickHandler}>{!flag ? "hide" : "show"}</button>
      <hr />
      <div className="d-flex">
        <button onClick={decreament}>-</button>
        <div>{step}</div>
        <button onClick={increment}>+</button>
      </div>
      <hr />
      <form onSubmit={submitHandler}>
        <input type="text" value={name2} onChange={(e)=>setName2(e.target.value)} />
        <button type="submit">Add Names</button>
      </form>
      {
        arrName.map((item, index)=>(
          <li key={index}>
            {item.name}
          </li>
        ))
      }
    </>
  );
};

export default UseState1;
