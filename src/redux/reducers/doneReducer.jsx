import { DONE_TASK } from "../actions/doneAction";

const initialState = {
    done: []
}

const doneReducer = (state = initialState, action) => {
    switch (action.type) {
        case DONE_TASK:
            return {
                ...state,
                done: state.done.includes(action.payload) ? state.done.filter(item => item !== action.payload) : [...state.done, action.payload]
            };
        default:
            return state;
    }
}
export default doneReducer;