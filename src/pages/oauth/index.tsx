import type { NextPage } from 'next';

import Container from '@components/Container';
import { Loading } from '@components/Question';
import { useRouter } from 'next/router';
import { usePostAuthCode } from '@hooks/api/useAuth';
import { useEffect } from 'react';

const Oauth: NextPage = () => {
  const {
    isReady,
    query: { code },
  } = useRouter();
  const { mutate } = usePostAuthCode();

  useEffect(() => {
    if (isReady && code && typeof code === 'string') {
      mutate({ provider: 'kakao', code });
    }
  }, [mutate, code, isReady]);

  return (
    <Container bgColor="bg-primary-100">
      <Loading type="loading" text="사용자 확인 중" />
    </Container>
  );
};

export default Oauth;
