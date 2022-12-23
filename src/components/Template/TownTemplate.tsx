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
import { snowmanlist } from '__mocks__/snowmanlist';
import TownFooterBtn from '@components/Town/TownFooterBtn';

type Props = {
  title: string;
};

const TITLE_MOCK = '동용';
const SNOWMAN_NUM_MOCK = 7;

const TownTemplate = (props: Props) => {
  const { title } = props;
  const isMine = true;
  const direction = isMine ? 'flex-row' : 'flex-col';
  const pageRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onClick = () => router.push('/setting');

  return (
    <div ref={pageRef} className="relative w-full h-[100vh]">
      <Snowflake />
      <div className="absolute z-0 w-full h-full">
        <BaseImage src="/image/hometown.png" alt="마을 배경 이미지" fill />
      </div>

      {isMine ? <Gear className="absolute z-20 top-4 right-4" fill="#e8eff6" onClick={onClick} /> : ''}
      <TownTitleBox isMine={isMine} totalSnowman={SNOWMAN_NUM_MOCK} townName={TITLE_MOCK} />
      <SnowmanList snowmans={snowmanlist} />

      {isMine ? (
        <FlexBox position="fixed" direction={direction} className="z-20 w-full sm:w-6/12 bottom-[50px] pr-[21px] pl-[21px]">
          <CameraBtn pageRef={pageRef} />
          <ShareBtn title={title} />
        </FlexBox>
      ) : (
        <TownFooterBtn direction={direction} />
      )}
    </div>
  );
};

export default TownTemplate;
