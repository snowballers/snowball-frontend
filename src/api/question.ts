import { API_BASE_URL } from './index';
import axios from 'axios';

export async function getQuestion() {
  const response = await axios.get(`${API_BASE_URL}/question`);
  return response;
}