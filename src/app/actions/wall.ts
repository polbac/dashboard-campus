import { apiEndpoint } from 'app/utils/api'
import { Filter, Post } from 'app/models';

export const WALL_FETCH: string = 'WALL_FETCH'
export const WALL_POPULATE: string = 'WALL_POPULATE'

export function wallPopulate(posts: Post[]): any {
  return { 
    type: WALL_POPULATE,
    payload: {
      posts,
    },
  };
}


export const wallFetch = (filters: Filter[] = []): any => async (dispatch: Function) => {
  try {
    const wallResponse: any  = await fetch(apiEndpoint('wall'));
    const wallObject: any  = await wallResponse.json();
    dispatch( wallPopulate(wallObject as Post[]) );
  } catch (error) {

  }
  
}
