import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { Data } from './Data'



const UserSlice = createSlice({
    name:'userslice',
    initialState: Data,
    reducers:{
        addUser:(state,action)=>{
                state.push(action.payload)
        },
        updateUser:(state,action) =>{
            
        }
        
    }
})

export default UserSlice.reducer;
export const {addUser} = UserSlice.actions