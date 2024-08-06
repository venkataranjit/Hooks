import React, { useRef } from 'react';

const UseRef1 = () => {
   const inputEle = useRef(null);
   const [isStyled, setIsStyled]=React.useState(false);
   const changeInputStyle = () =>{
    inputEle.current.classList.add("form-control");
    setIsStyled(!isStyled);
   }
  return (
    <>
    <br />
       <input ref={inputEle} className='ranjit' type='text' placeholder='Input Feild'/>
       <button onClick={changeInputStyle}>{!isStyled ? "Change Input Style" : "Remove Input Style"}</button>
    </>
  )
}

export default UseRef1;
