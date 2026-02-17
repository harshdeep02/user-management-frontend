import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./Slices/UserSlice";
import { formReducer } from "./Slices/FormSlice";

export const store= configureStore({
    reducer:{
        user: userSliceReducer,
        form: formReducer
    }
})