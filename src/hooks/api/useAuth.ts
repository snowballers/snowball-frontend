import { toastSuccess, toastError } from './../../utils/toaster';
import { useRouter } from 'next/router';
import { setAccessToken } from './../../utils/auth';
import { useMutation } from '@tanstack/react-query';

import { postAuthCode } from '@api/auth';
import { setTownURL } from 'src/utils/town';

export function usePostAuthCode() {
  const router = useRouter();
  return useMutation(postAuthCode, {
    onSuccess: (data) => {
      const { jwt, townUrl } = data.data;
      toastSuccess({ message: '로그인에 성공했습니다.' });
      setAccessToken(jwt);
      setTownURL(townUrl);
      router.replace(`/town/${townUrl}`);
    },
    onError: () => {
      toastError({ message: '로그인에 실패했습니다.' });
      router.replace('/login');
    },
  });
}
