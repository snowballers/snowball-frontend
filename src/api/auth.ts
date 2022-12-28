import { api } from '.';
import { WithDrawalResponse, OauthLoginResponse } from './types';

export async function withdraw(): Promise<WithDrawalResponse> {
  const response = await api.delete(`/withdrawal`);
  return response.data.data;
}

export async function postAuthCode({ provider, code }: { provider: string; code: string }): Promise<OauthLoginResponse> {
  const response = await api.post('/auth/login', {
    provider,
    code,
  });
  return response.data.data;
}
