import { createAction, createReducer } from "@reduxjs/toolkit";

export const editTask = createAction ('task/editTask');

const initialState = '';

const editTaskRTKReducer = createReducer( initialState, builder =>{
    builder
        .addCase(editTask, (state, action)=>{
           return state = action.payload
        })
})
export default editTaskRTKReducer;