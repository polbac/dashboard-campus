import { Post } from 'app/models/post';

export interface Wall {
    edit: Post;
    posts: Post[];
    viewing: number;
}