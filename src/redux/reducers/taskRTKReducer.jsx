import { createAction, createReducer } from '@reduxjs/toolkit';
//import { v4 as uuidv4 } from 'uuid';

export const addTask = createAction('task/addTask');
export const deleteTask = createAction('id/deleteTask');
export const addEditedTask = createAction('tasks/addEditedTask');

const initialState = [
    { id: 1, task: 'купить хлеб' },
    { id: 2, task: 'вычесать кота' },
    { id: 3, task: 'принять душ' },
];


const taskRTKReducer = createReducer(initialState, builder => {
    builder
        .addCase(addTask, (state, action) => {
            state.push({ id: crypto.randomUUID(), task: action.payload })
        })
        .addCase(deleteTask, (state, action) => {
            return state.filter(item => item.id !== action.payload)
        })
        .addCase(addEditedTask, (state, action)=>{
            const { id, task } = action.payload;
            return state.map(item => item.id === id ? { ...item, task: task } : item)
        })
})
export default taskRTKReducer;