import { api } from '.';
import { WithDrawalResponse } from './types';

export async function withdraw(): Promise<WithDrawalResponse> {
  const response = await api.delete(`/withdrawal`);
  return response.data.data;
}
