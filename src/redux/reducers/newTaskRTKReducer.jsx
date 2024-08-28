import { createAction, createReducer } from "@reduxjs/toolkit";

export const taskText = createAction ('task/taskText');

const initialState = '';

const newTaskRTKReducer = createReducer (initialState, builder => {
    builder
        .addCase(taskText, (state, action) =>{
            return state = action.payload;
        })
})
export default newTaskRTKReducer;