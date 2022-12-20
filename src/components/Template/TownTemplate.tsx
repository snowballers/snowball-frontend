import Container from '@components/Container';
import BaseImage from '@components/BaseImage';
import FlexBox from '@components/FlexBox';
import Arrow from '@components/icons/Arrow';
import TownTitleBox from '@components/Town/TownTitleBox';

type Props = {
  isMe?: boolean;
};

const TownTemplate = (props: Props) => {
  const { isMe } = props;
  return (
    <>
      <Container className="absolute z-0">
        <BaseImage src="/image/hometown.png" alt="마을 배경 이미지" fill />
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