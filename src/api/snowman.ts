import axios from 'axios';

import { API_BASE_URL } from './index';

export async function readSnowman(id: number) {
  const response = await axios.get(`${API_BASE_URL}/snowman/${id}`);
  return response;
}