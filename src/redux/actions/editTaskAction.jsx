export const EDIT_TASK = 'EDIT_TASK';

export const editTask = task => {
    return {
        type: EDIT_TASK,
        payload: task
    }
}