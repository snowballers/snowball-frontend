import { api } from './index';
import { ILetterPostRequest } from './types';

export async function createLetter(url: string, data: ILetterPostRequest) {
  const response = await api.post(`/${url}/letter`, data);
  return response;
}