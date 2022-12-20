import { NextPage } from 'next';

import Container from '@components/Container';
import BaseImage from '@components/BaseImage';
import Title from '../../components/Title';
import Span from '../../components/Span';
import FlexBox from '@components/FlexBox';
import Arrow from '@components/icons/Arrow';

const TITLE_MOCK = "동용's 눈사람 마을";
const SNOWMAN_NUM_MOCK = 7;
const SNOWMAN_NUM_TEXT = '명의 눈사람이 살고 있어요';

const Town: NextPage = () => {
  const snowmanText = SNOWMAN_NUM_MOCK + SNOWMAN_NUM_TEXT;

  return (
    <Container>
      <Container className="absolute z-0">
        <BaseImage src="/image/hometown.png" alt="마을 배경 이미지" fill />
      </Container>

      <FlexBox className="z-10 justify-center items-center pt-[133px]" direction="flex-col" position="relative">
        <Title text={TITLE_MOCK} className="text-primary-50 text-3xl pb-[6px]" />
        <Span text={snowmanText} className="text-[20px] text-primary-450" />
      </FlexBox>

      <FlexBox position="absolute" direction="flex-row" className="w-full sm:w-6/12 top-[50%] -translate-y-[50%] justify-between">
        <Arrow fill="#55b8ff" className="relative w-[24px] h-[48px] left-[33.66px]" />
        <Arrow fill="#55b8ff" className="relative w-[24px] h-[48px] rotate-180 right-[33.66px]" />
      </FlexBox>
    </Container>
  );
};

export default Town;
