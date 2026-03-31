import React from 'react'
import { useState } from 'react'

const Questions = () => {
    // create a state
// const [count , setCount] = useState(0);
// const [toggle , setToggle] = useState(false);
// consst [charCount , setCharCount] = useState(0);
// const [text, setText] = useState("");
// const [users, setUsers] = useState([]);

const [time, setTime] = useState(0);

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

// const handleCharacterCount = ()=>{

// }

// useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
     {/* <div>
        <h1>Live Character Count Input:</h1>
        <input  id='inputFiled' onChange={handleCharacterCount} type="text"  placeholder='Enter here Something'/>
    </div>

     <div>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div> */}

    {/* <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul> */}

    <h2>{time}</h2>
    
     </div> 

    
   
    
  )
}

export default Questions
