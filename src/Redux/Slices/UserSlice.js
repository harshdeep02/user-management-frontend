import { createSlice } from "@reduxjs/toolkit";
import { addUsers, deleteUsers, editUsers, fetchUsers } from "../Actions/UserAction";

export const userSlice = createSlice({
    name: 'user', 
    initialState:{
        loading:false,
        users : [],
        deleteLoading : false,
        editLoading: false,
        error:""
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        // fetch users
        .addCase(fetchUsers.pending, (state, action)=>{
            state.loading = true
        })
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading = false
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })

        //add user
        .addCase(addUsers.pending, (state, action)=>{
            state.loading = true
        })
        .addCase(addUsers.fulfilled, (state, action)=>{
            state.loading = false
            state.users.push(action.payload)
        })
        .addCase(addUsers.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })

        //edit user
        .addCase(editUsers.pending, (state, action)=>{
            state.editLoading = true
        })
        .addCase(editUsers.fulfilled, (state, action)=>{
            state.editLoading = false
            state.users = state.users.map((user)=>{
                if(user.id == action.payload.id){
                    return {...user, ...action.payload}
                }
                return user
            })
        })
        .addCase(editUsers.rejected, (state, action)=>{
            state.editLoading = false
            state.error = action.payload
        })

        
        //delete user
        .addCase(deleteUsers.pending, (state, action)=>{
            state.deleteLoading = true
        })
        .addCase(deleteUsers.fulfilled, (state, action)=>{
            state.deleteLoading = false
             state.users = state.users.filter((user)=> user.id !== action.payload.id)
        })
        .addCase(deleteUsers.rejected, (state, action)=>{
            state.deleteLoading = false
            state.error = action.payload
        })

    }
})

export const userSliceReducer = userSlice.reducer