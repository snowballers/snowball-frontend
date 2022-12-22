import axios from 'axios';

import { API_BASE_URL } from './index';

export async function getTown(url: string) {
  const response = await axios.get(`${API_BASE_URL}/${url}/town`);
  return response;
}

export async function updateTownName(url: string, townName: string) {
    const response = await axios.patch(`${API_BASE_URL}/${url}/town/name`, {townName});
    return response;
}