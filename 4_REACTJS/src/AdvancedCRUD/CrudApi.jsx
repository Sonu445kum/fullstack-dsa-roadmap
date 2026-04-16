// import { useEffect } from "react";
// import { useState } from "react"

// const CrudApi = ()=>{
//     const [data , setData] = useState([]);
//     const [title , setTitle] = useState("");
//     const [editId ,setEditId] = useState(null);

//     const api = "https://jsonplaceholder.typicode.com/posts";

//     // useEffect
//     useEffect(()=>{
//         fetch(api)
//         .then((res)=>res.json())
//         .then((data)=>setData(data.slice(0,5)));
//     },[]);

//     // addData
//     const handleAddData = async (e)=>{
//         e.preventDefault();
//         // check the input filed is empty or not
//         if(!title.trim()) return;

//         const res = await fetch(api,{
//             method :"POST",
//             body:JSON.stringify({
//                 title,
//                 body:"demo",
//                 userId:1
//             }),
//             headers:{
//                 "Content-Type" :"application/json"
//             }
//         });
//         const newData = await res.json();
//         // save the data
//         setData((prev)=>[...prev, newData]);
//         setTitle("");
//     }

//     // update data
//     const handleUpdate = async () => {
//     if (!editId) return;

//     const res = await fetch(`${api}/${editId}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: editId,
//             title, 
//             body: "Update",
//             userId: 1
//         }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     const update = await res.json();

//     setData((prev) =>
//         prev.map((item) =>
//             item.id === editId ? update : item
//         )
//     );

//     setEditId(null);
//     setTitle("");
// };

//     // handle delete
//     const handleDelete = async(id)=>{
//         await fetch(`${api}/${id}`,{
//             method:"DELETE"
//         })
//         setData((prev)=>prev.filter((item)=>item.id !== id));
//     }

//     // delete
//     const handleEdit = (item)=>{
//         setTitle(item.title);
//         setEditId(item.id)
//     }

//     return (
//         <div style={{margin:"20px"}}>
//             <div>
//                 <label>Title:</label>
//                 <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Title here:"/>
//                 {editId ? (<button onClick={handleUpdate}>Update</button>) : (<button onClick={handleAddData}>Add</button>)}
//             </div>
//             {/* display the data */}
//             <ul>
//                 {
//                     data.map((item)=>(
//                         <li key={item.id}>
//                             {item.title}
//                             <button onClick={()=>handleEdit(item)}>edit</button>
//                             <button onClick={()=>handleDelete(item.id)}>Delete</button>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }
// export default CrudApi;

