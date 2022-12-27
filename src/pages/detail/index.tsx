import type { NextPage } from 'next';

import Container from '@components/Container';
import { useRouter } from 'next/router';
import DetailTemplate from '@components/Template/DetailTemplate';

const Detail: NextPage = () => {
  const router = useRouter();
  const { url, snowmanId } = router.query;

  return (
    <Container bgColor="bg-primary-50">
      <DetailTemplate url={url as string} snowmanId={snowmanId as string} />
    </Container>
  );
};

export default Detail;
