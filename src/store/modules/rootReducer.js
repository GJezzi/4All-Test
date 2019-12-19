import { combineReducers } from 'redux';
import task from './task/reducer';

const reducers = combineReducers({
    task,
});

export default reducers;
