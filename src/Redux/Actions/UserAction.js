import { createAsyncThunk } from "@reduxjs/toolkit";
import { addUserApi, fetchUserApi } from "../Services/fetchUsersApi";

export const fetchUsers = createAsyncThunk('user/fetchuser', async(params, thunkAPI)=>{
    try{
        const response = await fetchUserApi({url: "users"})
        return response.data
    }
    catch(err){
        console.log(err)
       return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const addUsers = createAsyncThunk('user/adduser', async(params, thunkAPI)=>{
    try{
        const response = await addUserApi({
            url: `users`,
            method: "POST",
            data:JSON.stringify(params)
        
        })
        return response.data
    }
    catch(error){
        console.log(error.response)
       return thunkAPI.rejectWithValue(error.response.data)
    }
})


export const editUsers = createAsyncThunk('user/edituser', async(params, thunkAPI)=>{
    try{
        const response = await addUserApi({
            url: `users/${params.id}`,
            method: "PUT",
            data:JSON.stringify(params.data)
        
        })
        return response.data
    }
    catch(error){
      return  thunkAPI.rejectWithValue(error.response.data)
    }
})

export const deleteUsers = createAsyncThunk('user/deleteUser', async(params, thunkAPI)=>{
    try{
        const response = await addUserApi({
            url: `users/${params.id}`,
            method: "DELETE",
        
        })
        return response.data
    }
    catch(error){
       return thunkAPI.rejectWithValue(error.response.data)
    }
})