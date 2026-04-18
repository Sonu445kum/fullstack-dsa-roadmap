import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const StorePrevious = ()=>{
    const [ count , setCount] = useState(0);
    const prevRef = useRef();

    // useEffects
    useEffect(()=>{
        prevRef.current = count;
    },[count]);

    return (
        <div style={{margin:"20px"}}>
            <h1>CurrentValue:{count}</h1>
            <h1>PrevoiusValue:{prevRef.current}</h1>
            <button onClick={()=>setCount(count+1)}>Increment(+)</button>
        </div>
    )
}
export default  StorePrevious;