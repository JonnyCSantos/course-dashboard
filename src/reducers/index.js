import { activeReducer } from './activeReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    activeReducer: activeReducer
});