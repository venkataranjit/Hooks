import React from 'react'
import PropsC5 from './PropsC5';

const PropsC4 = ({callBackData}) => {
  return (
   <>
    <h5>Props 4</h5>
    <PropsC5 callBackData={callBackData} />
   </>
  )
}

export default PropsC4;
