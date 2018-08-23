import { combineReducers } from 'redux';
import { wall } from './wall';
import { session } from './session';
import { filters } from './filters';

export default combineReducers({
    wall,
    session,
    filters,
});