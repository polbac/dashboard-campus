import { WALL_POPULATE } from 'app/actions/wall';
import { Wall } from './../models/wall';
import { Action } from '../models/action';

const INITIAL_STATE_WALL: Wall[] = [];

export const wall = (state: any = INITIAL_STATE_WALL, action: Action) => {

    if (typeof state === 'undefined') {
        return INITIAL_STATE_WALL;
    };

    if (action.type === WALL_POPULATE) {
        return action.payload.posts;
    };

    return state;
};