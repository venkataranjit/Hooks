import React from "react";
import PropsC3 from "./PropsC3";

const PropsC2 = ({callBackData}) => {

  return (
    <>
      <h5>Props 2</h5>
      <PropsC3 callBackData={callBackData}/>
    </>
  );
};

export default PropsC2;
