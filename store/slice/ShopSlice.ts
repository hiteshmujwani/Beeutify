import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name:"shops",
    initialState:[],
    reducers:{
        addShop(state,action){
            state = action.payload
            return state
        }
    }
})

export const {addShop} = shopSlice.actions
export default shopSlice.reducer;  