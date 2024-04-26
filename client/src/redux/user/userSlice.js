import {createSlice} from "@reduxjs/toolkit"


const initialState = {
  currentUser:null,
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
        }
    }
})

export const {loginStart,loginSuccess,loginError} = userSlice.actions
export default userSlice.reducer