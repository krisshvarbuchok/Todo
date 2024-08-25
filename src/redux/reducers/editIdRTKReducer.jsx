import { createAction, createReducer } from "@reduxjs/toolkit";

export const editIdTask = createAction ('id/editIdTask');

const initialState = null;

const editIdRTKReducer = createReducer(initialState, builder =>{
    builder
        .addCase(editIdTask, (state, action)=>{
           return state = action.payload
        })
})
export default editIdRTKReducer;