import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState:{
        showForm : false,
    },
    reducers:{
        // show form
        toggleForm(state){
            state.showForm = !state.showForm
        },
        setShowForm(state, action){
            state.showForm = action.payload
        },
    }

})

export const formReducer = formSlice.reducer
export const {toggleForm, setShowForm} = formSlice.actions