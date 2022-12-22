import axios from 'axios';

import { API_BASE_URL } from './index';

export async function getQuestion(url: string) {
  const response = await axios.get(`${API_BASE_URL}/${url}/question`);
  return response;
}