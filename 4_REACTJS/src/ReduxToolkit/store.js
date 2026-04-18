import { configureStore } from "@reduxjs/toolkit";
import {counnterReducer} from "./counterSlice.js"
export const  store = configureStore({
    reducer:{
        counter :counterReducers
    }
})