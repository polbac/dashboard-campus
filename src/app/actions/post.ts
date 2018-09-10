import { PostType } from './../models/post';

export const NEW_CHANGE_TYPE: string = 'NEW_CHANGE_TYPE'

export function newChangeType(type: PostType): any {
  return { 
    type: NEW_CHANGE_TYPE,
    new: {
        type,
    }
  };
}