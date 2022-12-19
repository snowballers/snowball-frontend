import { NextPage } from 'next';

import Container from '@components/Container';
import BaseImage from '@components/BaseImage';
import Title from '../../components/Title';
import Span from '../../components/Span';
import FlexBox from '@components/FlexBox';

const TITLE_MOCK = "동용's 눈사람 마을";
const SNOWMAN_NUM_MOCK = 7;
const SNOWMAN_NUM_TEXT = '명의 눈사람이 살고 있어요';

const Home: NextPage = () => {
  const snowmanText = SNOWMAN_NUM_MOCK + SNOWMAN_NUM_TEXT;

  return (
    <Container bgColor="bg-primary-100">
      <Container className="absolute z-0">
        <BaseImage src="/image/hometown.png" alt="마을 배경 이미지" fill />
      </Container>

      <FlexBox className="z-10 justify-center items-center pt-[133px]" direction="flex-col">
        <Title text={TITLE_MOCK} className="text-primary-50 text-3xl pb-[6px]" />
        <Span text={snowmanText} className="text-[20px] text-primary-450" />
      </FlexBox>
    </Container>
  );
};

export default Home;
