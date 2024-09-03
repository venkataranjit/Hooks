import React from "react";
import PropsC3 from "./PropsC3";


const PropsC2 = ({callBackData}) => {

  return (
    <>
      <h5>Props 2</h5>
      <PropsC3 callBackData={callBackData} firstName="ranjit"/>
      <PropsC3 firstName=""/>
    </>
  );
};

export default PropsC2;
