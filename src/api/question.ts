import axios from 'axios';

import { API_BASE_URL } from './index';
import { IQuestionPostRequest } from './types';

export async function readQuestion(url: string) {
  const response = await axios.get(`${API_BASE_URL}/${url}/question`);
  return response;
}

export async function createSnowman(url: string, data: IQuestionPostRequest) {
  const response = await axios.post(`${API_BASE_URL}/${url}/question`, data);
  return response;
}