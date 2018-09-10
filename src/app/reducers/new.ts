import { NEW_CHANGE_TYPE } from './../actions/post';
import { Action } from '../models/action';
import { Post, PostType } from 'app/models';


const INITIAL_STATE_POST: Post = {
    type: PostType.TEXT,
};

export const newPost= (state: any = INITIAL_STATE_POST, action: Action) => {

    if (typeof state === 'undefined') {
        return INITIAL_STATE_POST;
    };

    if (action.type === NEW_CHANGE_TYPE) {
        return {
            ...state,
            type: action.payload.type,
        }
    }

    return state;
};