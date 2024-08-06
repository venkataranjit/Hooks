import React, { useState } from "react";
import PropsChild from "./PropsChild";

const PropsParent = () => {
  const [data, setData] = useState([]);

  const handleDataFromChild = (dataFromChild) => {
    if (JSON.stringify(dataFromChild) !== JSON.stringify(data)) {
      setData(dataFromChild);
    }
};

  return (
    <>
      <h6>This is Props Parent Component</h6>
      <ul>
        {data.map((item,index) => (
          <li key={index}>{item.menu}</li>
        ))}
      </ul>
      <PropsChild onDataSend={handleDataFromChild} />
    </>
  );
};

export default PropsParent;
