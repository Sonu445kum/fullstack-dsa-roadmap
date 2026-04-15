// import { useState } from "react";

import { useState } from "react";

// // Counter with increment/decrement
// const HooksPractice = ()=>{
//     const [value , setValue] = useState(0);

//     // handleIncrement
//     const handleIncrement = ()=>{
//         setValue((prev)=> prev + 1);
//     }
//     // handleDecrement
//     const handleDecrement = ()=>{
//         setValue((prev)=> prev - 1);
//     }
//     // Reset Value
//     const handleReset = ()=>{
//         setValue(0);
//     }
//     return (
//         <div>
//             <h1>Value:{value}</h1>
//             <button onClick={handleIncrement}>Increment:</button> <br />
//             <button onClick={handleDecrement}>Decrement:</button> <br />
//             <button onClick={handleReset}>Reset</button>
//         </div>
//     )
// }
// export default HooksPractice;

// Toggle boolean state.
// import React, { useState } from "react";

// // Counter with increment/decrement
// const HooksPractice = ()=>{
//     const [toggle , setToggle] = useState(false);

//     // handle toggle
//     const handleToggle = ()=>{
//         setToggle((prev)=>!prev)
//     }
//     return (
//         <div>
//             <form action="">
//                 <label>Name</label>
//                 <input type="text" name="username" placeholder="Enter here Name" />
//                 <br />
//                 <label>Password:</label>
//                 <input type={toggle ? "text" : "password"} name="password" placeholder="Enter here Password" />
//                 <button type="button" onClick={handleToggle}>{toggle ? "Hide" :"show"}</button>

//             </form>
//         </div>
//     )
// }
// export default HooksPractice;

const HooksPractice = ()=>{
    const [formInput,setFormInput] = useState({
        username  :"",
        useremail :"",
        userPassword :"",
    });
    // handleOnchange
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormInput((prev)=>({
            ...prev,
            [name] :value
        }))
    }
    // handlesubmit
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("FormInput:",formInput)

    }
    return (
        <div style={{}}>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text"  value={formInput.name} onChange={handleChange} name="username" placeholder="Enter here Your Name" /> <br />
                <label >Email:</label>
                <input type="email" value={formInput.email} onChange={handleChange} name="email" placeholder="Enter here Your Name" /> <br />
                <label >Name:</label>
                <input type="password" value={formInput.password} onChange={handleChange} name="password" placeholder="Enter here Your Name" /> <br />
                <button type="submit">Login</button>

            </form>
        </div>
    )
}
export default HooksPractice;