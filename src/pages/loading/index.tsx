import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Image from 'next/image';

import Container from '@components/Container';
import { useEffect } from 'react';

const Loading: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (!router.query.questions) return;
      if (typeof router.query.questions !== 'string') return;

      const questions = JSON.parse(router.query.questions);
      router.query = { ...router.query, questions: questions };

      router.push('/result');
    }, 3000);
  }, [router, router.query]);

  return (
    <Container bgColor="bg-primary-100">
      <Image src="/roll-full.gif" alt="roll" fill objectFit="cover" />

      <div className="pt-8">
        <p className="absolute inset-x-0 bottom-52 text-2xl text-center text-primary-600">눈사람을 완성하는 중입니다...</p>
      </div>
    </Container>
  );
};

export default Loading;
