import React, {useEffect} from 'react'

const PropsC5 = ({callBackData}) => {
  const prp5 = "ranjit";
  
  useEffect(() => {
    if (typeof callBackData === 'function') {
      callBackData(prp5);
    } else {
      console.error('callBackData is not a function');
    }
  }, [callBackData, prp5]); // Dependency array
  return (
   <>
    <h5>Props 5</h5>
    <h3>This is propsC5 : {prp5}</h3>
   </>
  )
}

export default PropsC5;
