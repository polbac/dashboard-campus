import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import allReducers from 'app/reducers';

export default createStore(
    allReducers,
    {},
    applyMiddleware(thunk),
);