import { ADD_TASK } from "../actions/taskAction";
const initialState = {
    task: ''
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: action.payload,
            };
        default:
            return state;
    }
}
export default taskReducer;