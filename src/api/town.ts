import { API_BASE_URL } from './index';
import axios from 'axios';

export async function getTown() {
  const response = await axios.get(`${API_BASE_URL}/town`);
  return response;
}

export async function changeTownName(townName: string) {
    const response = await axios.patch(`${API_BASE_URL}/town`, {townName});
    return response;
}