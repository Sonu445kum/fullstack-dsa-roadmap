import { useReducer } from "react";

const initialState = {count :0};

// define the login in the reducers
const reducers = (state , action)=>{
    switch(action.type){
        case "INC" :
            return {count:state.count+1};
        
        case "DEC" :
            return {count:state.count - 1};
        
        case "RESET":
            return initialState;
        default:
            return state;
    }

}

Counter = ()=>{
    const [state , dispatch] = useReducer(reducers , initialState);
    return (
        <div>
            <h1>CountValue:{state.count}</h1>
            <button onClick={()=>dispatch({type :"INC"})}>Increment</button>
            <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </div>
    )
}
export default Counter;