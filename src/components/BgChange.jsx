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
      <pre>
        <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change CSS Variable</title>
  <link rel="stylesheet" href="style2.css">

</head>
<body>
  <input type="color" oninput="changeColor(event)" value="">
  <input type="color" id="colorPicker2">

  <script>
    function changeColor(e) {
      const root = document.documentElement;
      // Update the CSS variable with the selected color
      root.style.setProperty('--red', e.target.value);
    }

    function changeColor2(e) {
      const root = document.documentElement;
      // Update the CSS variable with the selected color
      root.style.setProperty('--red', e.target.value);
    }

    document.getElementById('colorPicker2').addEventListener('input', changeColor2);
  </script>
</body>
</html>`}</code>
      </pre>
    </>
  );
};

export default BgChange;
