import { ADD_NEW_TASK } from "../actions/listAction";

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
        default: 
        return state;
    }
}
export default listReducer;