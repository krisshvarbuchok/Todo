import { configureStore } from '@reduxjs/toolkit';
import taskRTKReducer from './reducers/taskRTKReducer';
import doneRTKReducer from './reducers/doneRTKReducer';
import editIdRTKReducer from './reducers/editIdRTKReducer';
import editTaskRTKReducer from './reducers/editTaskRTKReducer';
import newTaskRTKReducer from './reducers/newTaskRTKReducer';
import taskSlice from './slices/taskSlice';
const store = configureStore({
    reducer: {
        newTaskRTKReducer: newTaskRTKReducer,
        //taskRTKReducer: taskRTKReducer,
        doneRTKReducer: doneRTKReducer,
        editIdRTKReducer: editIdRTKReducer,
        editTaskRTKReducer: editTaskRTKReducer,
        taskSlice: taskSlice,
    }
})

export default store;