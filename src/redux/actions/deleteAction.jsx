export const DELETE_TASK = 'DELETE_TASK';

export const deleteTask = id =>{
    return {
        type: DELETE_TASK,
        payload: id
    }
}