import { api } from './index';
import { ISnowmanGetResponse } from './types';

export async function readSnowman(id: string) {
  const response = await api.get(`/snowman/${id}`);
  return response.data;
}