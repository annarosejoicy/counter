import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
     // actions are createdinside this reducers key as objects
    reducers:{
        // logics to update state

        // logic to increment a number
        increment:(state,action)=>{
            state.value+=action.payload
        },
         // logic to decrement a number
         decrement:(state,action)=>{
            state.value-=action.payload
         },
          //  function to reset
          reset:(state)=>{
            state.value=0
          }
       

    }

})
// action is required by component in order to update state

export const{increment,decrement,reset}=counterSlice.actions
// reducer is required to store to change the stste value
export default counterSlice.reducer