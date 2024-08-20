import { EDIT_ID_TASK } from "../actions/editIdAction";

const initialState = {
    editId: null
}

const editIdReducer = (state = initialState, action) =>{
    switch(action.type){
        case EDIT_ID_TASK:
            return{
                ...state,
                editId: action.payload
            };
        default:
            return state;
    }
}
export default editIdReducer;