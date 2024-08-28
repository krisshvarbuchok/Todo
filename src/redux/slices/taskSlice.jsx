import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [
        { id: 1, task: 'купить хлеб' },
        { id: 2, task: 'вычесать кота' },
        { id: 3, task: 'принять душ' },
    ],
    reducers: {
        addTask: (state, action)=>{
            state.push({ id: crypto.randomUUID(), task: action.payload })
        },
        deleteTask: (state, action)=>{
            return state.filter(item => item.id !== action.payload)
        },
        addEditedTask: (state, action)=>{
            const { id, task } = action.payload;
            return state.map(item => item.id === id ? { ...item, task: task } : item)
        }
    }
})

export const { addTask, deleteTask, addEditedTask} = taskSlice.actions;
export default taskSlice.reducer;