import { createAction, createReducer } from "@reduxjs/toolkit";

export const idEditTask = createAction('id/idEdit');

const initialState = '';

const idEditReducer = createReducer(initialState, builder => {
    builder
        .addCase(idEditTask, (state, action) =>{
            return state = action.payload
        })
})

export default idEditReducer;