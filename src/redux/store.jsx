import { legacy_createStore as createStore, combineReducers } from 'redux';
import taskReducer from './reducers/taskReducer';
import listReducer from './reducers/listReducer';


const rootReducer = combineReducers({
    task: taskReducer,
    list: listReducer,
})

const store = createStore(
    rootReducer,
)

export default store;