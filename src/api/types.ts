type QuestionAnswerPair = {
    id: number;
    answerId: number;
}

type Snowman = {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
}

type TownSnowman = {
    id: number;
    imageUrl: string;
    seen: boolean;
}

type Question = {
    id: number;
    content: string;
    totalAnswers: number;
    answers: Answer[];
}

type Answer = {
    id: number;
    content: string;
}

type TownGetResponseData = {
    isMine: boolean;
    nickname: string;
    townName: string;
    totalSnowman: number;
    snowmans: TownSnowman[];
}

type SnowmanGetResponseData = {
    senderName: string;
    letter: string;
    snowman: Snowman;
}

type QuestionGetResponseData = {
    name: string;
    totalQuestion: number;
    questions: Question[];
}

type QuestionPostRepsonseData = {
    nickname: string;
    percent: number;
    snowman: Snowman;
}

interface DefaultResponse {
    success: boolean;
    error?: string | null;
}

export interface ITownGetResponse extends DefaultResponse {
    data: TownGetResponseData;
}

export interface ISnowmanGetResponse extends DefaultResponse {
    data: SnowmanGetResponseData;
}

export interface IQuestionGetResponse extends DefaultResponse {
    data: QuestionGetResponseData;
}

export interface IQuestionPostRequest {
    totalQuestion: number;
    questions: QuestionAnswerPair[];
}

export interface IQuestionPostResponse extends DefaultResponse {
    data: QuestionPostRepsonseData;
}

export interface ILetterPostRequest {
    snowmanId: number;
    sender: string;
    letter?: string;
}

export interface ILetterPostResponse extends DefaultResponse {

}