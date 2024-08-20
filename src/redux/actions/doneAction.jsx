export const DONE_TASK = 'DONE_TASK';

export const doneTask = task => {
    return {
        type: DONE_TASK,
        payload: task
    }
}