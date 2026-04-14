

import React, { use } from 'react'
import CityManager from './NewTask/CityManager.jsx'
import Questions from './Basic/Questions.jsx'

const App = () => {
  // Pass props from parent to child.
  // const Object ={
  //   name :"Sonu",
  //   age:20,
  //   address :"Bihar"
  // }

  // Display dynamic data using props.
  const users = [
    { id: 1, name: "Sonu", age: 20 },
    { id: 2, name: "Rahul", age: 22 },
    { id: 3, name: "Amit", age: 25 }
  ];
  return (
    <div>
      {/* <CityManager/> */}
      {/* Basic */}
      {users.map((user)=>(
      <Questions key={user.id} user ={user}/>
      ))}
      
    </div>
  )
}

export default App

