import { API_BASE_URL } from './index';
import axios from 'axios';

export async function getSnowman(id: number) {
  const response = await axios.get(`${API_BASE_URL}/snowman/${id}`);
  return response;
}