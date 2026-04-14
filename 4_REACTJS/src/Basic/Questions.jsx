// import React from 'react'

import { useEffect, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

// const Questions = () => {
//   return (
//     <div>
//       {/* Create a simple React component that displays "Hello World". */}
//       <div>Hello World</div>
//     </div>
//   )
// }

// export default Questions

// Create a functional component vs class component.
// import React from 'react'

// const Questions = () => {
//   return (
//     <div>
//       <h1>This is a Functions Compoenents:</h1>
//     </div>
//   )
// }

// export default Questions;

// Class Components
// import React ,{Component} from "react";
// class Questions extends Component{
//     render(){
//         return (
//             <div>Hello Class Componenets</div>
//         )
//     }

// }
// export default Questions;
// import React ,{Component} from "react";
// class Questions extends Component{
//     render(){
//         return (
//             <div>Hi I m Sonu From the Class Components:</div>
//         )
//     }
// }
// export default Questions;

// Pass props from parent to child.
// When we pass data from the paraent to child components then we accept the data in the child componets with props not add curly bracket
// And When accept the data and directly with name then use the culy bracket
// const Questions = (props)=>{
//     return (
//         <div>
//             <h1>Name:{props.Object.name}</h1>
//             <h1>Age:{props.Object.age}</h1>
//             <h1>Address:{props.Object.address}</h1>
//         </div>
//     )
// }
// export default Questions;

// const Questions = ({Object})=>{
//     return (

//         <div>
//             <h1>Here we can accept the data object using curly Bracket</h1>
//             <h1>Name:{Object.name}</h1>
//             <h1>Age:{Object.age}</h1>
//             <h1>Address:{Object.address}</h1>
//         </div>
//     )
// };
// export default Questions;

// const Questions = ({user})=>{
//     return (
//         <div>
//             <h1>Name:{user.name}</h1>
//             <h1>Age:{user.age}</h1>
//         </div>
//     )
// }
// export default Questions;

// Conditional rendering using if and &&.
// const Questions = ()=>{
//     const [isCheck,setIsCheck] = useState(true);
//     return (
//        <>
//         <div>
//             {isCheck ? <Login/> :<Signup/> }
//         </div>
//        </>
//     )
// }
// export default Questions;

// Toggle text on button click.
// const Questions =()=>{
//     const [toggle,setToggle] =useState(false);
//     // handle Toogle
//     const handleToogle =()=>{
//         setToggle((prev)=>!prev)
//     }
//     return (
//         <>
//         <div>
//             <h1>Toogle:{toggle ? "Hello Sonu..!!" :"Welcome" }</h1>
//             <button onClick={handleToogle} type="submit">Click me</button>
//         </div>
//         </>
//     )
// }
// export default Questions;

// Display current date and time.
const Questions =()=>{
    const [time , setTime] = useState(new Date());
    // useEffect
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date())
        },1000);
        return ()=>clearInterval(interval);
    })
    return (
        <div>
        <h1>Date:{time.toLocaleDateString()}</h1>
        <h1>Time:{time.toLocaleTimeString()}</h1>
        </div>
    )
}
export default Questions;

