import { NextPage } from 'next';

import Container from '@components/Container';
import TownTemplate from '@components/Template/TownTemplate';

const Town: NextPage = () => {
  return (
    <Container>
      <TownTemplate isMe title='내 마을보기' />
    </Container>
  );
};

export default Town;
