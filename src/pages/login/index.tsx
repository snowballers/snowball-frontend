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
      <div className="absolute inset-x-0 pt-16 z-50">
        <h1 className="text-3xl text-center text-primary-100">눈사람 마을 만들기!</h1>
        <h1 className="text-base text-center text-primary-400">친구들이 만들어주는 날 닮은 눈사람들</h1>
      </div>
      <div className="relative z-0 w-full h-screen">
        <BaseImage src="/image/logintown.png" alt="마을 배경 이미지" fill />
      </div>
      <div className="absolute inset-x-0 bottom-[10vh] z-50">
        <div className="flex justify-center">
          <LoginIcon img={'/kakao_login_large_wide.png'} apiUrl={KAKAO_AUTH_URL!} />
          {/* <LoginIcon img={'/ico_google.png'} apiUrl={GOOGLE_AUTH_URL!} /> */}
        </div>
      </div>
    </Container>
  );
};

export default Login;
