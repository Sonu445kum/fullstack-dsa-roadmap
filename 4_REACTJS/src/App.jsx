

import React, { use } from 'react'
import CityManager from './NewTask/CityManager.jsx'
import Questions from './Basic/Questions.jsx'
import HooksPractice from './Hooks/HooksPractice.jsx'
import CounterCrud from './Hooks/CounterCrud.jsx'
import NotesApp from './Hooks/NotesApp.jsx'
import UserManagement from './Hooks/UserManagement.jsx'
import ProductList from './Hooks/ProductList.jsx'
import BlogPost from './Hooks/BlogPost.jsx'
import MoviesWatchList from './Hooks/MoviesWatchList.jsx'
import Employee from './AdvancedCRUD/Employee.jsx'

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
      <Employee/>
    </div>
  )
}

export default App

