import { useRouter } from 'next/router';
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
      <div className="absolute w-full sm:w-[480px] max-h-screen z-50" style={{ background: 'rgb(237, 239, 247)' }}>
        <Image className="w-full max-h-screen" src="/roll-full.gif" alt="roll" width="0" height="0" sizes="100vw" />

        <div className="z-50">
          <p className="absolute inset-x-0 bottom-52 text-2xl text-center text-primary-600">{text}</p>
        </div>
        {type === 'error' ? (
          <Link href="/login">
            <p className="absolute inset-x-0 bottom-40 text-base text-center text-primary-400">홈으로 돌아가기</p>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};

export default Loading;
