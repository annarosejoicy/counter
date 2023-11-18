
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
    // reducer can only update value of state in store 
    // reducer is pre defined (its an object which can hold more than one reducer)
    
    reducer:{
        // reducer is coming from CounterSlice since we are export reducer as export default
        counter:counterSlice
    }
})