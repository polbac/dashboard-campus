
export enum FilterType {
    TAG = 'tag',
    COURSE = 'course',
}

export type Filter = {
    id: number;
    text: string;
    type: FilterType;
}