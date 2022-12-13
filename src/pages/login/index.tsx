import type { NextPage } from 'next';

import Container from '@components/Container';
import Snowflake from '@components/Snowflake';

const Login: NextPage = () => {
  return (
    <Container bgColor="bg-primary-900">
      <Snowflake />
      <div className="absolute inset-x-0 pt-8 z-50">
        <h1 className="text-4xl text-center text-primary-100">로그인 페이지</h1>
      </div>
    </Container>
  );
};

export default Login;
