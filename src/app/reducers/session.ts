import { Action } from '../models/action';
import { Session } from 'app/models';


const INITIAL_STATE_SESSION: Session = <Session>{};

export const session = (state: any = INITIAL_STATE_SESSION, action: Action) => {

    if (typeof state === 'undefined') {
        return INITIAL_STATE_SESSION;
    };

    return state;
};