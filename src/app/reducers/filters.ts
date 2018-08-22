import { Action } from '../models/action';
import { Filter } from 'app/models/filter';


const INITIAL_STATE_FILTERS: Filter[] = [];

export const filter = (state: any = INITIAL_STATE_FILTERS, action: Action) => {

    if (typeof state === 'undefined') {
        return INITIAL_STATE_FILTERS;
    };

    return state;
};