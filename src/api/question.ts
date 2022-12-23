import { api } from './index';
import { IQuestionGetResponse, IQuestionPostRequest, IQuestionPostResponse } from './types';

export async function readQuestion(url: string): Promise<IQuestionGetResponse> {
  const response = await api.get(`/${url}/question`);
  return response.data;
}

export async function createSnowman(url: string, data: IQuestionPostRequest): Promise<IQuestionPostResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await api.post(`/${url}/question`, data);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}