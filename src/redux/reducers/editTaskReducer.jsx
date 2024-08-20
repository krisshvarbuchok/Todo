import { EDIT_TASK } from "../actions/editTaskAction";

const initialState = {
    edit: ''
}

const editTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_TASK:
            return {
                ...state,
                edit: action.payload
            };
        default:
            return state;
    }
}
export default editTaskReducer;