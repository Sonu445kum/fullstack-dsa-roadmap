import React from 'react'
import { useState } from 'react'

const Questions = () => {
    // create a state
// const [count , setCount] = useState(0);
// const [toggle , setToggle] = useState(false);
consst [charCount , setCharCount] = useState(0);


    // InCrement Value;
// const handleInecrement =()=>{
//     setCount((prev)=>prev + 1);
// }

// const handleDecrement =()=>{
//     setCount((prev)=>prev - 1);
// }

// const handleReset =()=>{
//     setCount(0);
// }

// const handleToggle = ()=>{
//     setToggle((prev) => !prev);
// }

const handleCharacterCount = ()=>{

}

  return (
    <div>
    {/* 1: Counter App */}
    {/* <h1>Count App:{count}</h1>
        <button onClick={handleInecrement}>Incrment(+)</button>
        <button onClick={handleDecrement}>Decrement(-)</button>
        <button onClick={handleReset}>Reset(0)</button> */
    }
    {/* Toggle Button */}
    {/* <h1>Toogle:{toggle}</h1>
    <button onClick={handleToggle}>ToggleMe</button> */}

    {/* Build a live character counter input. */}
    <div>
        <h1>Live Character Count Input:</h1>
        <input  id='inputFiled' onChange={handleCharacterCount} type="text"  placeholder='Enter here Something'/>
    </div>

    
    </div>
  )
}

export default Questions
