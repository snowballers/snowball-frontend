import { useRouter } from 'next/router';
import Container from '@components/Container';
import BaseImage from '@components/BaseImage';
import FlexBox from '@components/FlexBox';
import Arrow from '@components/icons/Arrow';
import TownTitleBox from '@components/Town/TownTitleBox';
import CameraBtn from '@components/Town/CameraBtn';
import ShareBtn from '@components/Town/ShareBtn';
import { useRef } from 'react';
import Gear from '@components/icons/Gear';

type Props = {
  title: string;
  isMe?: boolean;
};

const TownTemplate = (props: Props) => {
  const { title, isMe } = props;
  const direction = isMe ? 'flex-row' : 'flex-col';
  const pageRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  function onClick() {
    router.push('/setting');
  }

  return (
    <div ref={pageRef} className="relative w-full h-[100vh]">
      <div className="absolute z-0 w-full h-full">
        <BaseImage src="/image/hometown.png" alt="마을 배경 이미지" fill />
      </div>

      {isMe ? <Gear className="absolute z-20 top-4 right-4" fill="#e8eff6" onClick={onClick} /> : ''}

      <TownTitleBox isMe={isMe} />

      <FlexBox position="absolute" direction="flex-row" className="w-full top-[50%] -translate-y-[50%] justify-between">
        <Arrow fill="#55b8ff" className="relative w-[24px] h-[48px] left-[33.66px]" />
        <Arrow fill="#55b8ff" className="relative w-[24px] h-[48px] rotate-180 right-[33.66px]" />
      </FlexBox>

      <FlexBox position="fixed" direction={direction} className="w-full sm:w-6/12 bottom-[50px] pr-[21px] pl-[21px]">
        <CameraBtn pageRef={pageRef} />
        <ShareBtn title={title} />
      </FlexBox>
    </div>
  );
};

export default TownTemplate;
