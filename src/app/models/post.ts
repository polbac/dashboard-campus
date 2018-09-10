import { User } from './user';
import { Tag } from './tag';
import { Comment } from './comment';
import { ClassGroup } from 'app/models/class-group';

export enum PostType {
    TEXT = 'text',
    IMAGE = 'image',
    VIDEO = 'video',
    FEEDBACK = 'feedback',
    CODE = 'code',
}

export type Post = {
    id?: number;
    text?: string;
    attachment?: string;
    comments?: Comment[];
    date?: Date;
    type?: PostType;
    tags?: Tag[];
    author?: User;
    group?: ClassGroup;
}