import { Action } from '../models/action';
import { Session } from 'app/models';


const INITIAL_STATE_SESSION: Session = <Session>{
    id: 0,
    username: 'polbac',
    fullName: 'Pablo Bacchetta',
    avatar: 'https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg',
};

export const session = (state: any = INITIAL_STATE_SESSION, action: Action) => {

    if (typeof state === 'undefined') {
        return INITIAL_STATE_SESSION;
    };

    return state;
};