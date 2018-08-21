import { combineReducers } from 'redux';
import { wall } from './wall';
import { session } from './session';

export default combineReducers({
    wall,
    session,
});