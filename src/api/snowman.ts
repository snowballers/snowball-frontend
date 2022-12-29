import { api } from './index';

export async function readSnowman(id: string) {
  const response = await api.get(`/snowman/${id}`);
  return response;
}