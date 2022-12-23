import { NextPage } from 'next';

import TownTemplate from '@components/Template/TownTemplate';
import Container from '@components/Container';

const Town: NextPage = () => {
  return (
    <Container>
      <TownTemplate title="눈사람 마을보기" />
    </Container>
  );
};

export default Town;
