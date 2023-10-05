export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type Action = {
    order: number[];
    text: string;
    id: string;
};

export enum Direction {
    Up,
    Down,
}
