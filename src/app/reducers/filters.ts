import { Action } from '../models/action';
import { Filter, FilterType } from 'app/models/filter';
import { FILTERS_POPULATE } from 'app/actions';


const INITIAL_STATE_FILTERS: Filter[] = [
    {
        id: 0,
        text: '#programación',
        type: FilterType.TAG
    },
    {
        id: 1,
        text: 'taller 2',
        type: FilterType.COURSE
    },
    {
        id: 1,
        text: 'react',
        type: FilterType.TAG
    }
];

export const filters = (state: any = INITIAL_STATE_FILTERS, action: Action) => {

    if (typeof state === 'undefined') {
        return INITIAL_STATE_FILTERS;
    };

    switch (action.type) {
        case FILTERS_POPULATE : {
            return [
                ...action.payload.filters
            ]
        }
    }

    return state;
};