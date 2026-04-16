// import { useState } from "react"

// const ExpenseTracker = ()=>{
//     // create state for the Expense Tracker
//     const [expenseData , setExpenseData] = useState({
//         expenseAmount :"",
//         expenseCategory :"",
//     });
//     const [expenseList , setExpenseList] = useState([]);
//     const [editId ,setEditId] = useState(null);
//     // state for filter
//     const [filterCategory ,setFilterCategory] = useState("All");

//     // handleOnChange
//     const handleOnChange = (e)=>{
//         const {name , value} = e.target;
//         // setData
//         setExpenseData((prev)=>({
//             ...prev,
//             [name] :name === "expenseAmount" ? Number(value) : value
//         }));
//     };

//     // addUdpdateExpense
//     const addUpdateExpense = (e)=>{
//         e.preventDefault();
//         // check if the input field is empty or not
//         if(!expenseData.expenseCategory.trim()) return;
//         // check if the expense id is not equal
//         if(editId !== null){
//             setExpenseList((prev)=>prev.map((el)=>el.id === editId ? {...el , ...expenseData} : el));
//             setEditId(null);
//             setExpenseData({
//                 expenseAmount:"",
//                 expenseCategory:""
//             });
//         }else{
//             const newExpense = {
//                 id:Date.now(),
//                 ...expenseData
//             }
//             setExpenseList((prev)=>[...prev , newExpense]);
//             setExpenseData({
//                 expenseAmount:"",
//                 expenseCategory:""
//             })
//         }
//     };

//     // deleteExpense
//     const deleteExpense = (id)=>{
//         setExpenseList((prev)=>prev.filter((el)=> el.id !== id));

//     }

//     // editExpense
//     const editExpense = (id)=>{
//         const selected = expenseList.find((el)=>el.id === id);
//         setExpenseData({
//             expenseAmount:selected.expenseAmount,
//             expenseCategory:selected.expenseCategory
//         });
//         setEditId(id);
//     }

//     // filterLogic
//     const filteredExpense = filterCategory === "All" ? expenseList : expenseList.filter((expense)=>expense.expenseCategory.toLowerCase() === filterCategory.toLocaleLowerCase());

//     // find the total
//     const totalAmount =expenseList.reduce((amount , curr)=>{
//         return amount + curr.expenseAmount
//     },0);
//     return (
//         <div style={{margin:"30px"}}>
//             <h1>Expense Tracker</h1>
//             <form onSubmit={addUpdateExpense}>
//                 <div>
//                     <label>Amount:</label>
//                     <input type="text" name="expenseAmount" value={expenseData.expenseAmount}  onChange={handleOnChange} placeholder="Enter Amount:" />
//                 </div>
//                 <div>
//                     <label>Category:</label>
//                     <input type="text" name="expenseCategory" value={expenseData.expenseCategory} onChange={handleOnChange} placeholder="Enter Category:" />
//                 </div>
//                 <div>
//                     <select  value={filterCategory} onChange={(e)=>setFilterCategory(e.target.value)}>
//                         <option value="All">All</option>
//                         <option value="Foods">Foods</option>
//                         <option value="Rent">Rent</option>
//                         <option value="Fee">Fee</option>
//                     </select>
//                 </div>
//                 <button type="submit">{editId !== null ? "Update" :"Add"}</button>
//             </form>
//             <h2>Total Amount: ₹{totalAmount}</h2>
//             {/* display Expense Details */}
//             <ul>
//                 {filteredExpense.map((el)=>(
//                     <li key={el.id}>
//                         <p>ExpenseAmount:{el.expenseAmount}</p>
//                         <p>ExpenseCategory:{el.expenseCategory}</p>
//                         <button onClick={()=>editExpense(el.id)}>Edit</button>
//                         <button onClick={()=>deleteExpense(el.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default ExpenseTracker;

// add the search and LocalStorage

import { useState, useEffect } from "react";

const ExpenseTracker = () => {
  // create state for the Expense Tracker
  const [expenseData, setExpenseData] = useState({
    expenseAmount: "",
    expenseCategory: "",
  });

  const [expenseList, setExpenseList] = useState([]);
  const [editId, setEditId] = useState(null);

  // state for filter
  const [filterCategory, setFilterCategory] = useState("All");

  //  NEW: search state
  const [search, setSearch] = useState("");

  //  load data from localstoage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("expense")) || [];
    setExpenseList(storedData);
  }, []);

  // save data into local storage
  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expenseList));
  }, [expenseList]);

  // handleOnChange
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setExpenseData((prev) => ({
      ...prev,
      [name]: name === "expenseAmount" ? Number(value) : value,
    }));
  };

  // addUpdateExpense
  const addUpdateExpense = (e) => {
    e.preventDefault();

    if (!expenseData.expenseCategory.trim()) return;

    if (editId !== null) {
      setExpenseList((prev) =>
        prev.map((el) => (el.id === editId ? { ...el, ...expenseData } : el)),
      );
      setEditId(null);
    } else {
      const newExpense = {
        id: Date.now(),
        ...expenseData,
      };
      setExpenseList((prev) => [...prev, newExpense]);
    }

    setExpenseData({
      expenseAmount: "",
      expenseCategory: "",
    });
  };

  // deleteExpense
  const deleteExpense = (id) => {
    setExpenseList((prev) => prev.filter((el) => el.id !== id));
  };

  // editExpense
  const editExpense = (id) => {
    const selected = expenseList.find((el) => el.id === id);

    setExpenseData({
      expenseAmount: selected.expenseAmount,
      expenseCategory: selected.expenseCategory,
    });

    setEditId(id);
  };

  //  Filter Logic And Search logic
  const filteredExpense = expenseList
    // search
    .filter((el) =>
      el.expenseCategory.toLowerCase().includes(search.toLowerCase()),
    )
    // filter
    .filter((expense) =>
      filterCategory === "All"
        ? true
        : expense.expenseCategory.toLowerCase() ===
          filterCategory.toLowerCase(),
    );

  // total amount
  const totalAmount = expenseList.reduce((amount, curr) => {
    return amount + curr.expenseAmount;
  }, 0);

  return (
    <div style={{ margin: "30px" }}>
      <h1>Expense Tracker</h1>

      <form onSubmit={addUpdateExpense}>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            name="expenseAmount"
            value={expenseData.expenseAmount}
            onChange={handleOnChange}
            placeholder="Enter Amount:"
          />
        </div>

        <div>
          <label>Category:</label>
          <input
            type="text"
            name="expenseCategory"
            value={expenseData.expenseCategory}
            onChange={handleOnChange}
            placeholder="Enter Category:"
          />
        </div>

        {/*  Search Input */}
        <div>
          <input
            type="text"
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter */}
        <div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Foods">Foods</option>
            <option value="Rent">Rent</option>
            <option value="Fee">Fee</option>
          </select>
        </div>

        <button type="submit">{editId !== null ? "Update" : "Add"}</button>
      </form>

      <h2>Total Amount: ₹{totalAmount}</h2>

      {/* display Expense Details */}
      <ul>
        {filteredExpense.map((el) => (
          <li key={el.id}>
            <p>ExpenseAmount: {el.expenseAmount}</p>
            <p>ExpenseCategory: {el.expenseCategory}</p>

            <button onClick={() => editExpense(el.id)}>Edit</button>
            <button onClick={() => deleteExpense(el.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
