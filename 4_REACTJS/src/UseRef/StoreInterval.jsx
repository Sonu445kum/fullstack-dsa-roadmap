import { useEffect } from "react";
import { useRef } from "react"

const StoreInterval = ()=>{
    const intervalRef = useRef();

    // useEffect for storing
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            console.log("first mount")
        },1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[]);

    // Persist Values Without Re-render
    const isMountRef = useRef(false);
    useEffect(()=>{
        if(!isMountRef.current){
            console.log("First Value");
            isMountRef.current = true;
        }
    },[])
    return <h1>Timer Runnning...!!</h1>
}
export default StoreInterval;