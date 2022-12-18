export type Question = {
    id: number;
    content: string;
}

export type Answer = {
    question_id: number;
    id: number;
    content: string;
}