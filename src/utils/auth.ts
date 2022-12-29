import { AUTHORIZATION } from 'src/constants/oauth';

export const setAccessToken = (token: string | null) => {
  localStorage.setItem(AUTHORIZATION, token || '');
};

export const getAccessToken = () => {
  return localStorage.getItem(AUTHORIZATION);
};

export const deleteAccessToken = () => {
  localStorage.setItem(AUTHORIZATION, '');
};
