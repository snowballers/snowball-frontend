import { api } from './index';

export async function readSnowman(id: number) {
  const response = await api.get(`/snowman/${id}`);
  return response;
}