import React from "react";
import PropsC4 from "./PropsC4";

const PropsC3 = ({callBackData, firstName}) => {
  return (
    <>
      <h5>Props 3</h5>
      <p>{firstName || "sample text"}</p>
      <PropsC4 callBackData={callBackData} />
    </>
  );
};

export default PropsC3;
