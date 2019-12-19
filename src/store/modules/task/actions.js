export function taskRequest(data) {
    return {
        type: '@task/TASK_REQUEST',
        payload: data,
    };
}

export function taskSuccess(task) {
    return {
        type: '@task/TASK_SUCCESS',
        payload: task,
    };
}

export function taskFailure() {
    return {
        type: '@task/TASK_FAILURE',
    };
}
