import {useState} from 'react'

export default function useCounterCustomeHooks(initialValue, addby) {
    const [value, setValue] = useState(initialValue);

    const increment = () => {
        setValue(value + addby);
    }
    const decrement = () => {
        setValue(value - addby);
    } 
    const reset = () => {
        setValue(initialValue);
    }
  return (
   [value, increment, decrement, reset]
  )
}
