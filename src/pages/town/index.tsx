import { NextPage } from 'next';

import TownTemplate from '@components/Template/TownTemplate';
import Container from '@components/Container';

const Town: NextPage = () => {
  return (
    <Container>
      <TownTemplate isMe title="내 마을보기" />
    </Container>
  );
};

export default Town;
