import React, { useState } from 'react';
import PropsC2 from './PropsC2';

const PropsC1 = () => {
  const [p1, setP1] = useState("");
  const callBackData = (data) =>{
    setP1(data)
  }
  return (
   <>
    <h5>Props 1</h5>
    <PropsC2 callBackData={callBackData}/>
    <h3>This is propsC1 : {p1}</h3>
   </>
  )
}

export default PropsC1;
