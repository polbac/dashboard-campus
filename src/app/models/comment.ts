import { User } from "app/models/user";

export type Comment = {
    id: number;
    text: string;
    date: Date;
    parent: number;
    user: User;
}