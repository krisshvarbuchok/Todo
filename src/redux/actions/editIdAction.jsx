export const EDIT_ID_TASK = 'EDIT_ID_TASK';

export const editIdTask = id =>{
    return {
        type:EDIT_ID_TASK,
        payload: id
    }
}