import React, { useState } from "react";

const UseState3 = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  //   const updateColor = () => {
  //     setCar(() => {
  //       return { color: "blue" };
  //     });
  //   };          It will Replace Existing Object so, we have to use prevState

  const updateColor = () => {
    setCar((p) => {
      return {...p, color: "blue" };  // Here p holds prev states of the object
    });
  };
  return (
    <>
      <h3>Use State 3</h3>
      <hr />
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </>
  );
};

export default UseState3;
