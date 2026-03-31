import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const DisplayData = () => {
    const url ="https://jsonplaceholder.typicode.com/posts";
    const [posts , setPosts] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState(null);

    // handle useffect
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setPosts(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error);
            setLoading(false);
        })

    })
    if (loading) return <h1>Lodaing....!!!</h1>
    if (error) return <h1>{error}</h1>
  return (
    <div>
      {
        posts.map((item)=>(
            <div key={item.id}>
                <li>UserId:{item.userId}</li>
                <li>Title:{item.title}</li>
                <li>Body:{item.body}</li>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayData
