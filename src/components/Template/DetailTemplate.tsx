import { useRouter } from 'next/router';
import Image from 'next/image';

import LetterWrapper from '@components/Detail/LetterWrapper';
import { Loading } from '@components/Question';
import Snowflake from '@components/Snowflake';
import Title from '@components/Title';

import { useReadSnowman } from '@hooks/api/useSnowman';
import { useReadTown } from '@hooks/api/useTown';
import { useEffect } from 'react';

type Props = {
  url: string;
  snowmanId: string;
};

const DetailTemplate = (props: Props) => {
  const router = useRouter();
  const { url, snowmanId } = props;
  const { refetch } = useReadTown(url);

  const onClick = () => {
    router.push(`/town/${url}`);
    refetch();
  };

  const { data, isLoading, isError } = useReadSnowman(snowmanId);

  if (snowmanId && isLoading) return <Loading type="loading" text="눈사람 정보 불러오는 중..." />;
  if (isError || !snowmanId) return <Loading type="error" text="눈사람 정보 불러오기 실패" />;

  const { data: snowmanData } = data?.data;

  const { senderName, snowman, letter } = snowmanData;

  return (
    <div className="absolute w-full sm:w-[480px] z-50" style={{ background: 'rgb(237, 239, 247)' }}>
      <Snowflake />
      <button type="button" className="absolute text-primary-50 text-2xl p-6 text-center inline-flex items-center z-50" onClick={onClick}>
        <span>{'<'}</span>
      </button>
      <Image className="absolute -z-[10] w-full h-100vh" src="/image/hometown.png" alt="마을 배경 이미지" width="0" height="0" sizes="100vw" />
      <div className="text-center pt-20 text-primary-50 text-2xl inset-x-0">
        {senderName !== url ? (
          <>
            <span className="text-primary-300">{senderName}</span> 님이 만든
          </>
        ) : (
          <>내가 만든</>
        )}
      </div>
      <Title text={`${snowman.name}`} className="text-center text-primary-50 text-3xl inset-x-0 pt-4" />
      <div className="inset-x-0">
        <Image className="mx-auto" src={`/snowman/${snowman.type.toLowerCase()}.png`} alt="" width={350} height={350} />
      </div>
      <div className="px-10">
        <p className="text-center text-gray-600 leading-relaxed">{snowman.description}</p>
      </div>
      {senderName !== url && <LetterWrapper letter={letter} />}
    </div>
  );
};

export default DetailTemplate;
