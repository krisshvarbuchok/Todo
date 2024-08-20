import { ADD_NEW_TASK } from "../actions/listAction";
import { DELETE_TASK } from "../actions/deleteAction";
import { ADD_EDITED_TASK } from "../actions/addEditedAction";

const initialState = {
    list: [
        { id: 1, task: 'купить хлеб' },
        { id: 2, task: 'вычесать кота' },
        { id: 3, task: 'принять душ' },
    ]
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                list:[...state.list, {...action.payload}]
            };
        case DELETE_TASK:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            };
        case ADD_EDITED_TASK:
            return{
                ...state,
                list:state.list.map(item => item.id === action.payload.id ? { ...item, task: action.payload.task } : item)
            }
        default: 
        return state;
    }
}
export default listReducer;