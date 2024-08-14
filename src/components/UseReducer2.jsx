import React, {useReducer} from 'react';

const counterReducer = (state, input) => {
    console.log(state, input);
    return (state + input);
}

const UseReducer2 = () => {
    const [count, dispatch] = useReducer(counterReducer, 0);
    
    const addHandler = () => {
        dispatch(+1);
    }
  return (
    <div>
      <h5>Use Reducer2</h5>
      <button onClick={()=>dispatch(-1)}>-</button>
      {count}
      <button onClick={addHandler}>+</button>
    </div>
  )
}

export default UseReducer2;
