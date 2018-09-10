import { combineReducers } from 'redux';
import { wall } from './wall';
import { session } from './session';
import { filters } from './filters';
import { newPost } from './new';

export default combineReducers({
    wall,
    session,
    filters,
    newPost
});