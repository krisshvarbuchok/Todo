import { configureStore } from '@reduxjs/toolkit';
import taskRTKReducer from './reducers/taskRTKReducer';
import doneRTKReducer from './reducers/doneRTKReducer';
import editIdRTKReducer from './reducers/editIdRTKReducer';
import editTaskRTKReducer from './reducers/editTaskRTKReducer';
const store = configureStore({
    reducer: {
        taskRTKReducer: taskRTKReducer,
        doneRTKReducer: doneRTKReducer,
        editIdRTKReducer: editIdRTKReducer,
        editTaskRTKReducer: editTaskRTKReducer
    }
})

export default store;