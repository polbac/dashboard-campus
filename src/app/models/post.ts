
export interface Post {
    id: number;
    text: string;
    comments?: Comment[];
    date: Date;

}