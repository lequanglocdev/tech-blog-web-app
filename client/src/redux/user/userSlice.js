import {createSlice} from "@reduxjs/toolkit"


const initialState = {
  createUser:null,
  error: null,
  loading: false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginStart:(state) =>{
          state.loading = true
          state.error = null
        },
        loginSuccess:(state,action) =>{
          state.createUser = action.payload
          state.loading= false
          state.error = null
        },
        loginError:(state,action) =>{
          state.error = action.payload
          state.loading = false
        },
        updateStart: (state) => {
          state.loading = true;
          state.error = null;
        },
        updateSuccess: (state, action) => {
          state.currentUser = action.payload;
          state.loading = false;
          state.error = null;
        },
        updateFail: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        deleteUserStart: (state) => {
          state.loading = true;
          state.error = null;
        },
        deleteUserSuccess: (state) => {
          state.currentUser = null;
          state.loading = false;
          state.error = null;
        },
        deleteUserFail: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
    }
})

export const {loginStart,loginSuccess,loginError,updateStart,updateSuccess,updateFail,deleteUserStart,deleteUserSuccess,deleteUserFail} = userSlice.actions
export default userSlice.reducer