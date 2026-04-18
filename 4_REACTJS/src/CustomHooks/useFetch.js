import { useEffect } from "react";
import { useState } from "react"

const useFetch = (url)=>{
    const [data , setData] = useState([]);
    const [isLoading ,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await fetch(url);
                if(!res.ok) throw new Error ("failed to fetch data..!!");
                const result= await res.json();
                setData(result);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
            }finally{
                setIsLoading(false);
            }
        }
        fetchData();
    },[url])

    return {data , isLoading ,error};
}
export default useFetch;