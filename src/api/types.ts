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

interface Question {
  id: number;
  content: string;
  totalAnswers: number;
  answers: Answer[];
}

interface Answer {
  id: number;
  content: string;
}

interface TownGetResponseData {
  isMine: boolean;
  nickname: string;
  townName: string;
  totalSnowman: number;
  snowmans: TownSnowman[];
}

interface SnowmanGetResponseData {
  senderName: string;
  letter: string;
  snowman: Snowman;
}

interface QuestionGetResponseData {
  name: string;
  totalQuestion: number;
  questions: Question[];
}

interface QuestionPostRepsonseData {
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

export interface ILetterPostResponse extends DefaultResponse {}