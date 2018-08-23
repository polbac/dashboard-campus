export const LOADING_START: string = 'LOADING_START';
export const LOADING_COMPLETE: string = 'LOADING_COMPLETE';

export function loading(state: boolean): any {
  return { 
    type: LOADING_START,
    state,
  };
}

