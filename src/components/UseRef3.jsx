import React, { useRef } from "react";
import './useRef3.css';

const UseRef3 = () => {
    const array = new Array(10).fill("this is normal text");

    let li = useRef([]);
    const lifun = (e) => {
        for (let ele of li.current){
            ele.classList.remove("bg");
            ele.innerText = 'this is normal text'
        }
        e.target.classList.add("bg")
         e.target.innerText = 'this is changed text'

    }
  return (
    <>
        <ul>
            {/* {array.map((lis, index)=><li ref={li[index]} onClick={lifun} className="list">List{index}</li>)} */}
            {array.map((e, i)=><li ref={(el)=> li.current[i] = el} onClick={(e)=>lifun(e)}>{e}</li>)}
        </ul>
        
    </>
  );
};

export default UseRef3;
