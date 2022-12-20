import { useRouter } from 'next/router';
import Container from '@components/Container';
import BaseImage from '@components/BaseImage';
import FlexBox from '@components/FlexBox';
import Arrow from '@components/icons/Arrow';
import TownTitleBox from '@components/Town/TownTitleBox';
import Gear from '@components/icons/Gear';

type Props = {
  isMe?: boolean;
};

const TownTemplate = (props: Props) => {
  const { isMe } = props;

  const router = useRouter();

  function onClick() {
    router.push('/setting');
  }

  return (
    <>
      <Container className="absolute z-0">
        <BaseImage src="/image/hometown.png" alt="마을 배경 이미지" fill />
        {isMe ? <Gear className="absolute z-20 top-4 right-4" fill="#e8eff6" onClick={onClick} /> : ''}
      </Container>

      <TownTitleBox isMe={isMe} />

      <FlexBox position="absolute" direction="flex-row" className="w-full sm:w-6/12 top-[50%] -translate-y-[50%] justify-between">
        <Arrow fill="#55b8ff" className="relative w-[24px] h-[48px] left-[33.66px]" />
        <Arrow fill="#55b8ff" className="relative w-[24px] h-[48px] rotate-180 right-[33.66px]" />
      </FlexBox>
    </>
  );
};

export default TownTemplate;
