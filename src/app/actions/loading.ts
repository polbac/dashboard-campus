export const LOADING_START: string = 'LOADING_START'
export const LOADING_COMPLETE: string = 'LOADING_COMPLETE'

export function fetchStart() {
    return { type: LOADING_START };
  }

  export function fetchComplete() {
    return { type: LOADING_COMPLETE };
  }
  