import { NextPage } from 'next';

import TownTemplate from '@components/Template/TownTemplate';
import Container from '@components/Container';
import { useRouter } from 'next/router';

const Town: NextPage = () => {
  const router = useRouter();
  const { param } = router.query;

  return (
    <Container>
      <TownTemplate title="눈사람 마을보기" url={param as string} />
    </Container>
  );
};

export default Town;
