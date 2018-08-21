import { createStore } from 'redux';
import allReducers from 'app/reducers';

export default createStore(
    allReducers
);