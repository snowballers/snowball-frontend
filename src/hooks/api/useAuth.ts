import { toastSuccess, toastError } from './../../utils/toaster';
import { useRouter } from 'next/router';
import { setAccessToken } from './../../utils/auth';
import { useMutation } from '@tanstack/react-query';

import { postAuthCode } from '@api/auth';

export function usePostAuthCode() {
  const router = useRouter();
  return useMutation(postAuthCode, {
    onSuccess: (data) => {
      const authData = data.data;
      toastSuccess({ message: '로그인에 성공했습니다.' });
      setAccessToken(authData.jwt);
      router.push(`/town${authData['town-url']}`);
    },
    onError: () => {
      toastError({ message: '로그인에 실패했습니다.' });
      router.replace('/login');
    },
  });
}
