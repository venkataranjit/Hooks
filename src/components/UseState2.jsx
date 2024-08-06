import React, { useState } from "react";

const UseState2 = () => {
  const [color, setColor] = useState("white");

  return (
    <>
      <h3>Use State 2</h3>
      <hr />
      <h5 style={{ background: color }}>Change Background For Me</h5>
      <button className="btn btn-primary mx-1" type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button className="btn btn-danger mx-1" type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button className="btn btn-warning mx-1" type="button" onClick={() => setColor("orange")}>
        Orange
      </button>
      <button className="btn btn-success mx-1" type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </>
  );
};

export default UseState2;
