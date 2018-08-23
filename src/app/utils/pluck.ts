
export const  pluck = (props: string[]|string) => (state: any) => {

    if (typeof props === 'string') {
        return {
            [props]: state[props]
        }
    }

    if (typeof props === 'object') {
        const newState: any = {};
        props.forEach(key => {
            newState[key] = state[key];
        });
        return newState;
    }
    
    return state;
}