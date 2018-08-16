import { User } from "app/models/user";

export interface Comment {
    id: number;
    text: string;
    date: Date;
    parent: number;
    user: User;
}