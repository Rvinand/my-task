import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITodo} from "../../types";

interface TodoSliceState {
    todos: ITodo[],
    status: string | null,
    error: string | null
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null
    } as TodoSliceState,
    reducers: {
        setTodos(state, action: PayloadAction<ITodo[]>) {
            state.todos = action.payload
        },
        addTodo(state, action: PayloadAction<ITodo>) {
            state.todos = [action.payload].concat(state.todos)
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo(state, action: PayloadAction<number>) {
            const toggledTodo = state.todos.filter(todo => todo.id === action.payload)

            toggledTodo[0].isCompleted = !toggledTodo[0].isCompleted
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload
        }
    }
})

export default todoSlice.reducer
export const {removeTodo, toggleTodo, addTodo, setTodos} = todoSlice.actions