<<<<<<< HEAD
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout : (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})
export const {login, logout} = authSlice.actions; 
=======
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout : (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})
export const {login, logout} = authSlice.actions; 
>>>>>>> 0b42a430be9d6fef8d718d6e162fcd55bf825e56
export default authSlice.reducer;