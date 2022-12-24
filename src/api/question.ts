import { api } from './index';
import { IQuestionGetResponse, IQuestionPostRequest, IQuestionPostResponse } from './types';

export async function readQuestion(url: string): Promise<IQuestionGetResponse> {
  const response = await api.get(`/${url}/question`);
  return response.data.data;
}

export async function createSnowman(url: string, data: IQuestionPostRequest): Promise<IQuestionPostResponse> {
  const response = await api.post(`/${url}/question`, data);
  return response.data.data;
}