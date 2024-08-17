export const ADD_NEW_TASK = 'ADD_NEW_TASK';

export const addNewTask = list =>{
    return{
        type: ADD_NEW_TASK,
        payload: list,
    }
}