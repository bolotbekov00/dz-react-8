import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { todosReducer } from "./todoSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        todos: todosReducer,
    }
})