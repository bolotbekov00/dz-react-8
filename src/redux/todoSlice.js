import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addTodo = createAsyncThunk(
    'todos/createTodoWithAuth',
    async (todo) => {
        const response = await axios.post("https://dummyjson.com/auth/todos/add",
            todo,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
        console.log(response.data);
    }
)

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodosWithAuth',
    async () => {
        const response = await axios.get("https://dummyjson.com/auth/todos", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        console.log(response.data)
        return response.data
    }
)



const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        loading: false,
        error: null,
        items: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTodo.pending, (state) => {
            state.loading = true
            state.error = null
        })
            .addCase(addTodo.fulfilled, (state) => {
                state.error = null
                state.loading = false
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.error = action.error.message
                state.loading = false
            })
            .addCase(fetchTodos.pending, (state)=> {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.error = null
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.error = action.error.message
                state.loading = false
            })
    }
})

export const todosReducer = todosSlice.reducer