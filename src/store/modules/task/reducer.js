import produce from 'immer';

const INITIAL_STATE = {};

export default function task(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@task/TASK_SUCCESS': {
                draft.task = action.payload.task;
                break;
            }
            case '@task/TASK_FAILURE': {
                break;
            }
            default:
        }
    });
}
