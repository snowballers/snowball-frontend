import type { NextPage } from 'next';

import Container from '@components/Container';
import { Loading } from '@components/Question';

const Oauth: NextPage = () => {
  return (
    <Container bgColor="bg-primary-100">
      <Loading type="loading" text="사용자 확인 중" />
    </Container>
  );
};

export default Oauth;
