import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"shops",
    initialState:
        {
            token:"",
            user:"",
            deviceToken:""
        }
    ,
    reducers:{
        setUserData(state:any,action){
            state = {...state,...action.payload}
            return state
        },
        logoutUser(state:any){
            state = {
                token:"",
                user:"",
                deviceToken:""
            }
            AsyncStorage.removeItem('beeutify_token')
            return state
        }
    }
})

export const {setUserData,logoutUser} = userSlice.actions
export default userSlice.reducer;  