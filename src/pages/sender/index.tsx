import { NextPage } from 'next';

import SenderWrapper from './components/SenderWrapper';
import Container from '@components/Container';

const Sender: NextPage = () => {
  return (
    <Container bgColor="bg-primary-100">
      <SenderWrapper />
    </Container>
  );
};

export default Sender;
