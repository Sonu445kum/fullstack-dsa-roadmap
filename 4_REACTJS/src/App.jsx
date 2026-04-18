

import React, { use, useState } from 'react'
import Users from './CustomHooks/Users'
import Parent from './UseCallback/Parent'
import Optimizes from './UseCallback/Optimizes'
import InputFocus from './UseRef/InputFocus'
import StorePrevious from './UseRef/StorePrevoius'
import { ThemeContext } from './UseContext/ThemeContext.jsx'
import Home from './UseContext/Home.jsx'
import { AuthContext } from './UseContext/AuthContext.jsx'
import Navbar from './UseContext/Navbar.jsx'
import Dashboard from './AllHooks/Dashboard.jsx'
import Counter from './UseReducers/Counter.jsx'
// import CityManager from './NewTask/CityManager.jsx'
// import Questions from './Basic/Questions.jsx'
// import HooksPractice from './Hooks/HooksPractice.jsx'
// import CounterCrud from './Hooks/CounterCrud.jsx'
// import NotesApp from './Hooks/NotesApp.jsx'
// import UserManagement from './Hooks/UserManagement.jsx'
// import ProductList from './Hooks/ProductList.jsx'
// import BlogPost from './Hooks/BlogPost.jsx'
// import MoviesWatchList from './Hooks/MoviesWatchList.jsx'
// import Employee from './AdvancedCRUD/Employee.jsx'
// import ExpenseTracker from './AdvancedCRUD/ExpenseTracker.jsx'
// import CrudApi from './AdvancedCRUD/CrudApi.jsx'
// import BasicExamples from './UseEffect/BasicExamples.jsx'

const App = () => {
  // Pass props from parent to child.
  // const Object ={
  //   name :"Sonu",
  //   age:20,
  //   address :"Bihar"
  // }

  // Display dynamic data using props.
  // const users = [
  //   { id: 1, name: "Sonu", age: 20 },
  //   { id: 2, name: "Rahul", age: 22 },
  //   { id: 3, name: "Amit", age: 25 }
  // ];

  // useContext Example
  // const [theme , setTheme] = useState("light");

  // Authentications System
  const [user ,setUser]  = useState(null);
  // login
  const login = ()=>{
    setUser({name:"Sonu"});
  }
  // logout
  const logout = ()=>{
    setUser(null);
  }
  return (
    <div>
      {/* <CityManager/> */}
      {/* Basic */}
      {/* {users.map((user)=>(
      <Questions key={user.id} user ={user}/>
      ))} */}

      {/* <Questions/> */}
      {/* <HooksPractice/> */}
      {/* <CounterCrud/> */}
      {/* <NotesApp/> */}
      {/* User Managemnt */}
      {/* <UserManagement/> */}
      {/* <ProductList/> */}
      {/* <BlogPost/> */}
      {/* <MoviesWatchList/> */}
      {/* <Employee/> */}
      {/* <ExpenseTracker/> */}
      {/* <CrudApi/> */}
      {/* <BasicExamples/> */}
      {/* customs Hooks */}
      {/* <Users/> */}

      {/* UseCallback */}
      {/* <Parent/> */}
      {/* <Optimizes/> */}

      {/* useRef */}
      {/* <InputFocus/> */}
      {/* <StorePrevious/> */}

      {/* UseContext */}
      {/* <ThemeContext.Provider value={{theme ,setTheme}}>
        <Home/>
      </ThemeContext.Provider> */}

      {/* Authentication */}
      {/* <AuthContext.Provider value={{value , login , logout}}>
        <Navbar/>
      </AuthContext.Provider> */}

      {/* All Hooks */}
      {/* <Dashboard/> */}
      {/* <Counter/> */}
      <Counter/>
    </div>
  )
}

export default App

