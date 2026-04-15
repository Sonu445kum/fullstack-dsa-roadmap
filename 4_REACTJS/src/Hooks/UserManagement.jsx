import { useState } from "react";

const UserManagement = ()=>{
    const [formData , setFormData] = useState({
        name:"",
        email:"",
        role : "",
    });
    const [list , setList] = useState([]);
    const [editId , setEditId] = useState(null);

    // handleOnChange
    const handleOnChange =(e)=>{
        const {name,value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name] :value ,
        }))
    }

    // HandleAddUser
    const handleAddUser = (e)=>{
        e.preventDefault();
        // check the filds is empty
        if(!formData.name.trim() || !formData.email.trim() || !formData.role.trim()) return;
        // if the editId is not equal to null
        if(editId !== null){
            setList((prev)=>prev.map((el)=> el.id === editId ? {...el , ...formData} : el));
            setEditId(null);
            setFormData({
                name:"",
                email:"",
                role:""
            });
        }else{
            const newuser = {
                id:Date.now(),
                ...formData
            }
            setList((prev)=>[...prev , newuser]);
            setFormData({
                name:"",
                email:"",
                role:""
            });
        }
    }

    // handleDleteUser
    const handleDeleteUser = (id)=>{
        setList((prev)=>prev.filter((el)=> el.id !== id));
    }

    // handleEditUser
    const handleEditUser = (id)=>{
        const select = list.find((el)=> el.id === id);
        setFormData({
            name:select.name,
            email:select.email,
            role:select.role,
        });
        setEditId(id);
    }
    return (
        <div style={{margin:"20px",borderRadius:"20px solid black"}}>
            <form onSubmit={handleAddUser}>
                <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name}  onChange = {handleOnChange}placeholder="Enter Name Here..!!" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleOnChange} placeholder="Enter The Email:" />
                </div>

                <div>
                    <label>Role:</label>
                    <input type="text" name="role" value={formData.role} onChange={handleOnChange} placeholder="Enter the Role" />
                </div>
                <button type="submit">{editId !== null ? "UpdateUser" :"AddUser"}</button>
            </form>
            <hr />

            {/* display the user */}
            <ul>
                {list.map((el)=>(
                    <li key={el.id}>
                        <p>Name:{el.name}</p>
                        <p>Email:{el.email}</p>
                        <p>Role:{el.role}</p>
                        <button onClick={()=>handleEditUser(el.id)}>EditUser</button>
                        <button onClick={()=>handleDeleteUser(el.id)}>Deleteuser</button>
                        <hr />
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default UserManagement;