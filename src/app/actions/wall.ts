export const WALL_FETCH: string = 'WALL_FETCH'

import { Filter } from 'app/models';


export const wallFetch = (filters: Filter[] = []): any => {
  return { 
    type: WALL_FETCH,
    payload: filters,
  }
}

