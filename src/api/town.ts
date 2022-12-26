import { api } from './index';

export async function readTown(url: string) {
  const response = await api.get(`/${url}/town`);
  return response;
}

export async function updateTownName({ url, townName }: { url: string; townName: string }) {
  const response = await api.patch(`/${url}/town/name`, { townName });
  return response;
}
