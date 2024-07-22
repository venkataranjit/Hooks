import React, { useState } from "react";

const BgChange = () => {
  const [color, setColor] = useState("");
  const changeHandler = (e) => {
    setColor((document.body.style.backgroundColor = e.target.value));
  };
  return (
    <>
      <h5>Background Change</h5>
      <input type="color" value={color} onChange={changeHandler} />
    </>
  );
};

export default BgChange;
