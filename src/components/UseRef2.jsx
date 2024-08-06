import React, { useState, useRef, useEffect } from "react";

const UseRef2 = () => {
  const [value, setValue] = useState("");
  const prevRefValue = useRef(null);
  const randomNumberGenerator = () => {
    setValue(Math.ceil(Math.random() * 100));
  };
  useEffect(() => {
    if (value !== "") {
      prevRefValue.current = value;
    }
  }, [value]);
  return (
    <>
      <h5>Store Previous State using UseRef Hook</h5>
      <button onClick={randomNumberGenerator}>Generate</button>
      <h6>Random Number is : {value} </h6>
      {prevRefValue.current !== null && (
        <p>Previous Number was : {prevRefValue.current}</p>
      )}
    </>
  );
};

export default UseRef2;
