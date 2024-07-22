import React from "react";
import PropsC4 from "./PropsC4";

const PropsC3 = ({callBackData}) => {
  return (
    <>
      <h5>Props 3</h5>
      <PropsC4 callBackData={callBackData} />
    </>
  );
};

export default PropsC3;
