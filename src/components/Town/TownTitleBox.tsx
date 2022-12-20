import Title from '../../components/Title';
import Span from '../../components/Span';
import FlexBox from '@components/FlexBox';
import Pencil from '@components/icons/Pencil';

const TITLE_MOCK = "동용's 눈사람 마을";
const SNOWMAN_NUM_MOCK = 7;
const SNOWMAN_NUM_TEXT = '명의 눈사람이 살고 있어요';

const TownTitleBox = () => {
  const snowmanText = SNOWMAN_NUM_MOCK + SNOWMAN_NUM_TEXT;

  return (
    <FlexBox className="z-10 justify-center items-center pt-[133px]" direction="flex-col" position="relative">
      <FlexBox position="reletive" direction="flex-row" className="pb-[6px]">
        <Title text={TITLE_MOCK} className="text-primary-50 text-3xl pr-[13px]" />
        <Pencil />
      </FlexBox>
      <Span text={snowmanText} className="text-[20px] text-primary-450" />
    </FlexBox>
  );
};

export default TownTitleBox;
