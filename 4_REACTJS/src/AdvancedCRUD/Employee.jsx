// 11. Employee Management System
// Add employee (name, role, salary)
// Edit employee
// Delete employee
// Filter by role

import { useState } from "react";

const Employee = ()=>{
    const [employeeData , setEmployeeData] = useState({
        employeeName :"",
        employeeRole :"",
        employeeSalary : "",
    });
    const [employeeList , setEmployeeList] = useState([]);
    const [editId ,setEditId] = useState(null);
    // add state for the Filter
    const [filterRole , setFilterRole] = useState("All");

    // handleOnChange;
    const handleOnChange = (e)=>{
        e.preventDefault();
        const {name , value} = e.target;
        setEmployeeData((prev)=>({
            ...prev,
            [name]: name === "employeeSalary" ? value : value
        }))
    };

    // addUpdateEmployee
    const addUppdatedEmp = (e)=>{
        e.preventDefault();
        // check the input field is empty
        if(!employeeData.employeeName.trim() || !employeeData.employeeRole.trim() || !employeeData.employeeSalary.trim()) return;
        // if the EmployeeId is not null
        if(editId !== null){
            setEmployeeList((prev)=>prev.map((el)=>el.id === editId ? {...el , ...employeeData} :el));
            setEditId(null);
            setEmployeeData({
                employeeName:"",
                employeeRole:"",
                employeeSalary:"",
            });
        }else{
            const newEmployee = {
                id:Date.now(),
                ...employeeData,
            }
            setEmployeeList((prev)=>[...prev , newEmployee]);
            setEmployeeData({
                employeeName:"",
                employeeRole:"",
                employeeSalary:"",
            })
        }
    };

    // deleteEmployee
    const deleteEmployee =(id)=>{
        setEmployeeList((prev)=>prev.filter((el)=>el.id !== id));
    }

    // editEmployee
    const editEmployee = (id)=>{
        const selected = employeeList.find((el) =>el.id === id);
        setEmployeeData({
            employeeName:selected.employeeName,
            employeeRole:selected.employeeRole,
            employeeSalary:selected.employeeSalary,
        });
        setEditId(id);
    }

    // add logic for the Filter
    const filteredEmp = filterRole === "All" ? employeeList : employeeList.filter((emp)=>emp.employeeRole.toLowerCase() === filterRole.toLocaleLowerCase());
    return(
        <div style={{margin:"30px"}}>
            <form onSubmit={addUppdatedEmp}>
                <div>
                    <label>EmployeeName:</label>
                    <input type="text" name="employeeName" value={employeeData.employeeName} onChange={handleOnChange}  placeholder="Enter Employee Name:"/>
                </div>
                <div>
                    <label>EmployeeRole:</label>
                    <input type="text" name="employeeRole" value={employeeData.employeeRole} onChange={handleOnChange} placeholder="Enter Employee Role:"/>
                </div>
                <div>
                    <label>EmployeeSalary:</label>
                    <input type="number" name="employeeSalary"  value={employeeData.employeeSalary} onChange={handleOnChange} placeholder="Enter Employee Salary:"/>
                </div>
                <div>
                    <h1>Filter by Role</h1>
                    <select value={filterRole} onChange={(e)=>setFilterRole(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Hr">Hr</option>
                        <option value="Developer">Developer</option>
                        <option value="Manager">Manager</option>
                    </select>
                </div>
                <button type="submit">{editId !== null ? "Update" :"Add"}</button>
            </form>
            {/* display EmployeeDetails */}
            <ul>
                {
                 filteredEmp.map((el)=>(
                     <li key={el.id}>
                            <p>EmployeeName:{el.employeeName}</p>
                            <p>EmployeeRole:{el.employeeRole}</p>
                            <p>EmployeeSalary:{el.employeeSalary}</p>
                            <button onClick={()=>editEmployee(el.id)}>Edit</button>
                            <button onClick={()=>deleteEmployee(el.id)}>Delete</button>
                    </li>
                 ))
                }
            </ul>
        </div>
    )
}
export default Employee;