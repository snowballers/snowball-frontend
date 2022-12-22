import axios from 'axios';

import { API_BASE_URL } from './index';
import { ILetterPostRequest } from './types';

export async function createLetter(url: string, data: ILetterPostRequest) {
  const response = await axios.post(`${API_BASE_URL}/${url}/letter`);
  return response;
}