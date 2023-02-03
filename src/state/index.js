import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    mode: "light",
    response:[],
};
export const authSlice = createSlice({
    name:"auth",initialState,
    reducers:{
        setMode:(state)=>{
            state.mode = state.mode ==="light"?"dark":"light";
        },
        setResult:(state,action)=>{
            state.response =action.payload.response ;
        },
        unsetResult:(state)=>{
            state.response= null;
        }
    }
})

export const {setMode,setResult,unsetResult} = authSlice.actions;
export default authSlice.reducer;