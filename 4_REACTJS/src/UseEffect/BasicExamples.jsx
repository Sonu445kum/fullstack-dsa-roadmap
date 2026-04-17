import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";

const BasicExamples = () => {
  // state
//   const [count, setCount] = useState(0);
  // Run on every render
  // useEffect(()=>{
  //     console.log("Runs on Every Render...!!")
  // })

  // Run only once (on mount)
  // when to use-> Apicall, inital Setup

  // useEffect(()=>{
  //     console.log("Runs only When Components Mount...!!");
  // },[])

  // Run when specific value changes
  // useEffect(()=>{
  //     console.log("Run When Specifices Values are Chnaged..!!");
  //     // setCount(count+1); ->its give me inifinites loops
  // },[count]);

  // is there any solutions to stop the inifinites loops in the useEffects
  // yes we have lots of solutions
  // use check conditons to stop the infinite loops
  // pass the empty dependency array
  // useEffect(()=>{
  //     if (count < 5){
  //         setCount((prev)=> prev+1);
  //     }
  // },[count])

  //  useEffect(()=>{
  //     setCount((prev)=> prev+1);
  // },[])

  // useMemo / useCallback:
  // const obj = useMemo(()=>{},[]);
  // useEffect(()=>{
  //     console.log("Runs Onces")
  // },[obj]);

  // useCallback()
  // const fetchData = useCallback(()=>{},[]);
  // useEffect(()=>{
  //     fetchData();
  // },[fetchData])
  // Never update a dependency inside useEffect without a condition

  // Real-Life Examples
  // API Fetching
  // useEffect(()=>{
  //     fetch(api).
  //     then((res)=>res.json())
  //     .then((data)=>setData(data));
  // },[]);

  // Updating Document Title
  // useEffect(()=>{
  //     document.title = `Count:${count}`
  // },[count])

  // Event Listener
  // useEffect(()=>{
  //     const handleResize = ()=>{
  //         console.log(window.innerWidth);
  //     }
  //     // addEvents Listens
  //     window.addEventListener("resize",handleResize);
  //     // cleanUp Functions
  //     return ()=>{
  //         window.removeEventListener("resize",handleResize);
  //     }
  // },[]);

  // Multiple UseEffects
    // useEffect(() => {
    //     console.log("Effect 1");
    // }, []);

    // useEffect(() => {
    //     console.log("Effect 2");
    // }, [count]);

    // Conditional Effect
    // useEffect(()=>{
    //     if(count > 5){
    //         console.log("Greater than 5");
    //     }
    // },[count])

    // Create a counter and update document title using useEffect
    // const [counter , setCounter] = useState(0);
    // // useEffects
    // useEffect(()=>{
    //     document.title = `Counter: ${counter}`
    //     console.log("Counter update:",counter)
    // },[counter])

    // Fetch data from API and display it
    // const [data , setData] = useState([]);

    // const api = "https://jsonplaceholder.typicode.com/users"
    // // useEffects
    // useEffect(()=>{
    //     fetch(api).
    //     then((res)=>res.json())
    //     .then((data)=>setData(data));
    // },[])

    // Fetch data from API and display it using try catch
  
    const [data , setData] = useState([]);
    const [loading ,setLoading]  = useState(true);
    const [error , setError] = useState(null);
    useEffect(()=>{
        const api = "https://jsonplaceholder.typicode.com/users";
        const fetchData = async()=>{
            try {
                const res = await fetch(api);
                if(!res.ok) throw new Error("Failed toi fetch data..!!")
                const result = await res.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[]);

    if(loading) return <h1>Loading....!!</h1>
    if(error) return <h1>{error}</h1>

  return (
    // <div style={{ margin: "20px" }}>
    //   This is a Simple Example of the UseEffect
    //   <h1>CountValue:{count}</h1>
    // </div>

    // counterApp
    // <div style={{margin:"20px",alignContent:"center"}}>
    //     <h1>Counter App</h1>
    //     <h2>Counter Value:{counter}</h2>
    //     <div>
    //         <button onClick={()=>setCounter(counter+1)}>Increment(+)</button>
    //         <button onClick={()=>setCounter(counter - 1)}>Decrement(-)</button>
    //     </div>
    // </div>

    // Fetch data from API and display it
    <div style={{margin:"20px"}}>
        <h1>Fetch data from API and display it </h1>
        {
            data.map((user)=>(
                <li key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </li>
            ))
        }
    </div>
  );
};
export default BasicExamples;
