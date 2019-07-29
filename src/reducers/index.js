import { activeReducer } from './activeReducer';
import { dataReducer } from './dataReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    activeReducer: activeReducer,
    dataReducer: dataReducer
});