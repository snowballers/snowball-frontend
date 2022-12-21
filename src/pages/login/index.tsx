import type { NextPage } from 'next';

import Container from '@components/Container';
import Snowflake from '@components/Snowflake';
import LoginIcon from './components/LoginIcon';
import BaseImage from '@components/BaseImage';

const Login: NextPage = () => {
  return (
    <Container>
      <Snowflake />
      <div className="absolute inset-x-0 pt-8 z-50">
        <h1 className="text-4xl text-center text-primary-100">로그인</h1>
      </div>
      <BaseImage src="/image/hometown.png" alt="마을 배경 이미지" fill />
      <div className="absolute inset-x-0 bottom-[20vh] z-50">
        <div className="flex justify-center">
          <LoginIcon img={'/ico_kakao.png'} apiUrl={''} />
          <LoginIcon img={'/ico_google.png'} apiUrl={''} />
        </div>
      </div>
    </Container>
  );
};

export default Login;
