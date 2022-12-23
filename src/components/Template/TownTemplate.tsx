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

type Props = {
  title: string;
  isMine?: boolean;
};

const TITLE_MOCK = "동용's 눈사람 마을";
const SNOWMAN_NUM_MOCK = 7;

const TownTemplate = (props: Props) => {
  const { title, isMine } = props;
  const direction = isMine ? 'flex-row' : 'flex-col';
  const pageRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  function onClick() {
    router.push('/setting');
  }

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
        <FlexBox position="fixed" direction={direction} className="z-20 w-full sm:w-6/12 bottom-[50px] pr-[21px] pl-[21px]">
          <button type="button" className="bg-primary-350 h-[50px] rounded-[20px] text-[22px] text-[#fff]">
            눈사람 만들어주기
          </button>
          <button type="button" className="h-[50px] text-[22px] text-primary-350">
            내 눈사람 마을 만들기
          </button>
        </FlexBox>
      )}
    </div>
  );
};

export default TownTemplate;
