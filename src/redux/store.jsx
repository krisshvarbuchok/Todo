import { legacy_createStore as createStore, combineReducers } from 'redux';
import taskReducer from './reducers/taskReducer';
import listReducer from './reducers/listReducer';
import doneReducer from './reducers/doneReducer';
import editIdReducer from './reducers/editIdReducer';
import editTaskReducer from './reducers/editTaskReducer';


const rootReducer = combineReducers({
    task: taskReducer,
    list: listReducer,
    done: doneReducer,
    editId: editIdReducer,
    edit: editTaskReducer,

})

const store = createStore(
    rootReducer,
)

export default store;