import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";


const Counter = ()=>{
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())}>Increment(+)</button>
            <button onClick={()=>dispatch(decrement())}>Decrement(-)</button>
        </div>
    )
}
export default Counter;