export const ADD_EDITED_TASK = 'ADD_EDITED_TASK';

export const addEditedTask = (id, task ) => {
    return{
        type: ADD_EDITED_TASK,
        payload: {task: task, id: id},
    }
}