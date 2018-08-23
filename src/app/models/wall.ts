import { Post } from 'app/models/post';

export type Wall {
    edit: Post;
    posts: Post[];
    viewing: number;
}