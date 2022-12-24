import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';

import Container from '@components/Container';
import Link from 'next/link';

type Props = {
  type: string;
  text: string;
};

const Loading = ({ type, text }: Props) => {
  const router = useRouter();

  return (
    <Container bgColor="bg-primary-100">
      <Image src="/roll-full.gif" alt="roll" fill objectFit="cover" />

      <div className="pt-8">
        <p className="absolute inset-x-0 bottom-52 text-2xl text-center text-primary-600">{text}</p>
      </div>
      {type === 'error' ? (
        <Link href="/login">
          <p className="absolute inset-x-0 bottom-40 text-base text-center text-primary-400">홈으로 돌아가기</p>
        </Link>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Loading;
