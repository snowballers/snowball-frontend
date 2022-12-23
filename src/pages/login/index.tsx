import type { NextPage } from 'next';

import Container from '@components/Container';
import Snowflake from '@components/Snowflake';
import LoginIcon from '@components/Login/LoginIcon';
import BaseImage from '@components/BaseImage';

const Login: NextPage = () => {
  const KAKAO_AUTH_URL = process.env.KAKAO_AUTH_URL;
  const GOOGLE_AUTH_URL = process.env.GOOGLE_AUTH_URL;

  return (
    <Container>
      <Snowflake />
      <div className="absolute inset-x-0 pt-8 z-50">
        <h1 className="text-4xl text-center text-primary-100">로그인</h1>
      </div>
      <BaseImage src="/image/hometown.png" alt="마을 배경 이미지" fill />
      <div className="absolute inset-x-0 bottom-[20vh] z-50">
        <div className="flex justify-center">
          <LoginIcon img={'/ico_kakao.png'} apiUrl={KAKAO_AUTH_URL!} />
          <LoginIcon img={'/ico_google.png'} apiUrl={GOOGLE_AUTH_URL!} />
        </div>
      </div>
    </Container>
  );
};

export default Login;
