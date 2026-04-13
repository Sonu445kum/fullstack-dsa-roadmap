
// // import React from 'react'
// // import { useEffect } from 'react';
// // import { useState } from 'react'

// // const App = () => {
// //   const [posts,setPosts] =useState([]);
// //   const [loading,setLoading] =useState(true);
// //   const [error,setError] =useState(null);

// //   // useEffect
// // useEffect(()=>{
// //   fetch("https://jsonplaceholder.typicode.com/posts")
// //   .then((res)=>res.json())
// //   .then(data=>{
// //     setPosts(data);
// //     setLoading(false)
// //   }).catch((error)=>{
// //     setError(error);
// //     setLoading(false);
// //   })
// // },[]);

// //   if(loading) return <h1>loading...!!!</h1>
// //   if(error) return <h1>{error}</h1>
// //   return (
// //   <div>
// //       {posts.map(post => (
// //         <div key={post.id}>
// //           <h4>{post.title}</h4>
// //           <p>{post.body}</p>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react'
// import Questions from './Practices/Questions.jsx'
// import DisplayData from './Practices/DisplayData.jsx'
// import TodoApp from './Practices/TodoApp.jsx'
// import ControlledForm from './Practices/ControlledForm.jsx'
// import UncontrolledForm from './Practices/UncontrolledForm.jsx'

// const App = () => {
//   return (
//     <div>
//       {/* <Questions/> */}
//       {/* <h1>Display Data</h1> */}
//       {/* <DisplayData/> */}
//       {/* <TodoApp/> */}
//       {/* <ControlledForm/> */}
//       <UncontrolledForm/>
      
//     </div>
//   )
// }

// export default App

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(res.data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default App;

function withLoading(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) return <h2>Loading...</h2>;
    return <Component {...props} />;
  };
}

// Usage
const UserListWithLoading = withLoading(UserList);


function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      {render(pos)}
    </div>
  );
}

// Usage
<MouseTracker render={(pos) => (
  <h1>Mouse: {pos.x}, {pos.y}</h1>
)} />


const TabsContext = React.createContext();

function Tabs({ children }) {
  const [active, setActive] = useState(0);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
}

function Tab({ index, children }) {
  const { setActive } = useContext(TabsContext);
  return <button onClick={() => setActive(index)}>{children}</button>;
}

function TabPanel({ index, children }) {
  const { active } = useContext(TabsContext);
  return active === index ? <div>{children}</div> : null;
}

import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
}

