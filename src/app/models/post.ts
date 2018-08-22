
export interface Post {
    id: number;
    text: string;
    attachment: string;
    comments?: Comment[];
    date: Date;

}