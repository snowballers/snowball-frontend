import { NextPage } from 'next';

import Container from '@components/Container';
import TownTemplate from '@components/Template/TownTemplate';

const Town: NextPage = () => {
  return (
    <Container>
      <TownTemplate isMe />
    </Container>
  );
};

export default Town;
