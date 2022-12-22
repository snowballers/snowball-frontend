import { api } from './index';
import { IQuestionPostRequest } from './types';

export async function readQuestion(url: string) {
  const response = await api.get(`/${url}/question`);
  return response;
}

export async function createSnowman(url: string, data: IQuestionPostRequest) {
  const response = await api.post(`/${url}/question`, data);
  return response;
}