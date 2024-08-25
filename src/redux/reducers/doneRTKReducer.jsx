import { createAction, createReducer } from '@reduxjs/toolkit';

export const doneTask = createAction ('task/doneTask');

const initialState = [];

const doneRTKReducer = createReducer(initialState, builder =>{
    builder
        .addCase(doneTask, (state, action) =>{
           return state.includes(action.payload) ? state.filter(item => item !== action.payload) : [...state, action.payload]
        })
})
export default doneRTKReducer;