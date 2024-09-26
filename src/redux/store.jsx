import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import taskEditReducer from "./reducers/taskEditReducer";
import idEditReducer from "./reducers/idEditReducer";

export const store = configureStore({
    reducer: {
        todos: todoSlice ,
        taskEditReducer: taskEditReducer,
        idEditReducer: idEditReducer,
    }
})