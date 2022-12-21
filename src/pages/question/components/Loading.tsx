import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';

import Container from '@components/Container';

type Props = {
  type: string;
  text: string;
};

const Loading = ({ type, text }: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (type === 'snowman') {
      setTimeout(() => {
        router.push('/result');
      }, 3000);
    }
  }, [type, router]);

  return (
    <Container bgColor="bg-primary-100">
      <Image src="/roll-full.gif" alt="roll" fill objectFit="cover" />

      <div className="pt-8">
        <p className="absolute inset-x-0 bottom-52 text-2xl text-center text-primary-600">{text}</p>
      </div>
    </Container>
  );
};

export default Loading;
