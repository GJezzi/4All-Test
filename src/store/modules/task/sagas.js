import { Alert } from 'react-native';
import { put, call, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { taskSuccess, taskFailure } from './actions';

export function* addToTask({ payload }) {
    try {
        const id = payload;

        const response = yield call(api.get, `tarefa/${id}`);

        const content = response.data;

        yield put(taskSuccess(content));
    } catch (error) {
        Alert.alert(
            'Failure Fetching Task',
            'Connection Failed, check your network'
        );
        yield put(taskFailure());
    }
}

export default all([takeLatest('@task/TASK_REQUEST', addToTask)]);
