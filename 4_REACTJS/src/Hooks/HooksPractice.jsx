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

// const HooksPractice = ()=>{
//     const [formInput,setFormInput] = useState({
//         username  :"",
//         email :"",
//         password :"",
//     });
//     // handleOnchange
//     const handleChange = (e) =>{
//         const {name,value} = e.target;
//         setFormInput((prev)=>({
//             ...prev,
//             [name] :value
//         }))
//     }
//     // handlesubmit
//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         console.log("FormInput:",formInput)

//     }
//     return (
//         <div style={{}}>
//             <form onSubmit={handleSubmit}>
//                 <label>Name:</label>
//                 <input type="text"  value={formInput.name} onChange={handleChange} name="username" placeholder="Enter here Your Name" /> <br />
//                 <label >Email:</label>
//                 <input type="email" value={formInput.email} onChange={handleChange} name="email" placeholder="Enter here Your Name" /> <br />
//                 <label >Name:</label>
//                 <input type="password" value={formInput.password} onChange={handleChange} name="password" placeholder="Enter here Your Name" /> <br />
//                 <button type="submit">Login</button>

//             </form>
//         </div>
//     )
// }
// export default HooksPractice;

// Add items to a list dynamically.
// const HooksPractice =()=>{
//     // create here useState for adding items
//     const [items , setItems] = useState("");
//     const [list , setList] = useState([]);

//     // handleAddItems
//     const handleAddItems =(e)=>{
//         e.preventDefault();
//         // check input field is empty
//         if(!items.trim()) return;
//         setList((prev)=>[...prev,items]);
//         setItems("");
//     }

//     // handleRemoveItems
//     const handleRemoveItem =(index)=>{
//         setList((prev)=>prev.filter((_,i)=> i !== index) )

//     }


//     return(
//         <>
//         <div>
//             <form onSubmit={handleAddItems}>
//                 <label >Item Name:</label>
//                 <input type="text" value={items} name="items" onChange={(e)=>setItems(e.target.value)} placeholder="Enter here Items Name" /> <br />
//                 <button type="submit">AddItems</button>
//             </form>
//             {/* Display Items */}
//             {
//                 list.map((value,index)=>(
//                     <ul>
//                     <li key={index}>{value}</li> 
//                     <button onClick={()=>handleRemoveItem(index)}>RemoveItem</button>
//                     </ul>
//                 ))
//             }
//         </div>
//         </>
//     )
// }
// export default HooksPractice;

const HooksPractice = ()=>{
    // useState
    const [item , setItem] = useState("");
    const [list,setList] = useState([]);
    const [editId ,setEditId] = useState(null);

    const handleAddTask =(e)=>{
        e.preventDefault();
        // check inuput field is empty or not
        if(!item.trim()) return;
        // update task
        // if the editId !== null its means it has some id then we have to edit the task
        if(editId !== null){
            setList((prev)=>prev.map((el)=>el.id === editId ? {...el,text:item} :el));
            // setEdit is null
            setEditId(null);
        } // if the editId === null then task is add 
        else{
            setList((prev)=>[...prev, {id:Date.now(),text:item,completed:false}]);
            // setItem is equal to empty
            setItem("")
        }
    }

    // DeleteItem
    const handleDeleteItem = (id)=>{
        setList((prev)=>prev.filter((el)=>el.id  !== id))
    }

    // Edit item
    const handleEditItem =(id)=>{
        const selected = list.find((el)=>el.id === id);
        setItem(selected.text);
        setEditId(id);
    }
    // handleToggle Task
    const handleToggleTask =(id)=>{
        setList((prev)=>prev.map((el)=> el.id === id ? {...el ,completed : !el.completed} : el));
    }

    return (
        <div>
            <form onSubmit={handleAddTask} >
                <label>Task:</label>
                <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} placeholder="Enter The Task Here..!!"/>
                <button type="submit">{editId !==null ? "update" :"AddTask"}</button>
            </form>
            {/* display list */}
            <ul>
                {list.map((el)=>(
                    <li key={el.id}>
                        <span style={{textDecorationLine : el.completed ? "line-through" :"none", marginRight: "10px"}}>
                            {el.text}
                        </span>
                        {/*  completed */}
                    <button onClick={()=> handleToggleTask(el.id)}>{el.completed ? "Undo" :"Complete"}</button>
                    {/* Edit */}
                    <button onClick={()=>handleEditItem(el.id)}>Edit</button>

                    {/* Delete */}
                    <button onClick={()=>handleDeleteItem(el.id)}>Delete</button>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}
export default HooksPractice;