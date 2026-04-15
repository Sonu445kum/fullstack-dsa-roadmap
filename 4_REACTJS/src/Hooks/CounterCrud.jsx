import { useState } from "react";

const CounterCrud = ()=>{
    // useState
    const [number,setNumber] = useState("");
    const [list,setList] = useState([]);
    const [editId,setEditId] = useState(null);

    // handleAddNumber
    const handleNumber = (e)=>{
        e.preventDefault();
        // check the filed is empty or not
        if(!number.trim()) return;

        // if the EditId is not equal to null then update
        if(editId !== null){
            setList((prev)=>prev.map((el) => el.id === editId ? {...el , number:number} : el));
            setEditId(null)
        }else{
            setList((prev)=>[...prev , {id:Date.now(),number:number}]);
            setNumber("");
        }
    }
    // delete
    const handleDeleteNum = (id)=>{
        setList((prev)=>prev.filter((el)=>el.id !== id));
    }

    // edit
    const handleEditNumber =(id)=>{
        const select = list.find((el)=>el.id === id);
        setNumber(select.number);
        setEditId(id)
    }
    return (
        <div>
            <form onSubmit={handleNumber}>
                <label>Number:</label>
                <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="Enter Number herer..!!" />
                <button type="submit">{editId !== null ? "update":"Add Number"}</button>
            </form>
            {/* display number */}
            <ul>
                {list.map((el)=>(
                    <li key={el.id}>
                        {el.number}
                        <button onClick={()=>handleEditNumber(el.id)}>edit</button>
                        <button onClick={()=>handleDeleteNum(el.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}
// export
export default CounterCrud;