interface QuestionAnswerPair {
  id: number;
  answerId: number;
}

interface Snowman {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

interface TownSnowman {
  id: number;
  imageUrl: string;
  seen: boolean;
}

export interface Question {
  id: number;
  content: string;
  totalAnswers: number;
  answers: Answer[];
}

export interface Answer {
  id: number;
  content: string;
}

export interface ITownGetResponse {
  isMine: boolean;
  nickname: string;
  townName: string;
  totalSnowman: number;
  snowmans: TownSnowman[];
}

export interface ISnowmanGetResponse {
  senderName: string;
  letter: string;
  snowman: Snowman;
}

export interface IQuestionGetResponse {
  name: string;
  totalQuestion: number;
  questions: Question[];
}

export interface IQuestionPostRequest {
  sender: string;
  totalQuestion: number;
  questions: QuestionAnswerPair[];
}

export interface IQuestionPostResponse {
  nickname: string;
  percent: number;
  snowman: Snowman;
}

export interface ILetterPostRequest {
  snowmanId: number;
  letter: string;
}

