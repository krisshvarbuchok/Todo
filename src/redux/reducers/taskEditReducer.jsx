import { createAction, createReducer } from "@reduxjs/toolkit";

export const taskEdit = createAction('task/taskEdit');

const initialState = '';

const taskEditReducer = createReducer(initialState, builder => {
    builder
        .addCase(taskEdit, (state, action) =>{
            return state = action.payload
        })
})

export default taskEditReducer