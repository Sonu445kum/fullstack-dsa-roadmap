
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [posts,setPosts] =useState([]);
  const [loading,setLoading] =useState(true);
  const [error,setError] =useState(null);

  // useEffect
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>res.json())
  .then(data=>{
    setPosts(data);
    setLoading(false)
  }).catch((error)=>{
    setError(error);
    setLoading(false);
  })
},[]);

  if(loading) return <h1>loading...!!!</h1>
  if(error) return <h1>{error}</h1>
  return (
  <div>
      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App
