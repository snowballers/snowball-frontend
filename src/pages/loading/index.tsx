import type { NextPage } from 'next';

import Container from '@components/Container';

const Loading: NextPage = () => {
  return (
    <Container bgColor="bg-primary-100">
      <div className="pt-8">
        <h1 className="text-4xl text-center text-primary-900">로딩 페이지</h1>
      </div>
    </Container>
  );
};

export default Loading;
