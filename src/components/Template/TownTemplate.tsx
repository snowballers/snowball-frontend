import { useRouter } from 'next/router';
import BaseImage from '@components/BaseImage';
import FlexBox from '@components/FlexBox';
import TownTitleBox from '@components/Town/TownTitleBox';
import CameraBtn from '@components/Town/CameraBtn';
import ShareBtn from '@components/Town/ShareBtn';
import { useRef } from 'react';
import Gear from '@components/icons/Gear';
import SnowmanList from '@components/SnowmanList';
import Snowflake from '@components/Snowflake';
import TownFooterBtn from '@components/Town/TownFooterBtn';
import { useReadTown } from '@hooks/api/useTown';
import { Loading } from '@components/Question';

type Props = {
  title: string;
  url: string;
};

const TownTemplate = (props: Props) => {
  const { title, url } = props;
  const { data, isLoading, isError } = useReadTown(url);
  const pageRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  if (isLoading) return <Loading type="loading" text="눈사람 마을 불러오는 중" />;
  if (isError) return <Loading type="error" text="눈사람 마을 불러오기 실패" />;

  const { data: townData } = data?.data;
  const { isMine, townName, totalSnowman, snowmans } = townData;

  const direction = isMine ? 'flex-row' : 'flex-col';
  const onClick = () => router.push('/setting');

  return (
    <div ref={pageRef} className="relative w-full h-[100vh]">
      <Snowflake />
      <div className="absolute z-0 w-full h-full">
        <BaseImage src="/image/hometown.png" alt="마을 배경 이미지" fill />
      </div>

      {isMine ? <Gear className="absolute z-20 top-4 right-4" fill="#e8eff6" onClick={onClick} /> : ''}
      <TownTitleBox isMine={isMine} totalSnowman={totalSnowman} townName={townName} url={url} />
      <SnowmanList snowmans={snowmans} url={url} isMine={isMine} />

      {isMine ? (
        <FlexBox position="fixed" direction={direction} className="z-20 w-full sm:w-[480px] bottom-[50px] pr-[21px] pl-[21px]">
          <CameraBtn pageRef={pageRef} />
          <ShareBtn title={title} />
        </FlexBox>
      ) : (
        <TownFooterBtn direction={direction} url={url} />
      )}
    </div>
  );
};

export default TownTemplate;
