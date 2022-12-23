import Title from '../../components/Title';
import Span from '../../components/Span';
import FlexBox from '@components/FlexBox';
import Pencil from '@components/icons/Pencil';
import { useState } from 'react';

const TITLE_MOCK = "동용's 눈사람 마을";
const SNOWMAN_NUM_MOCK = 7;
const SNOWMAN_NUM_TEXT = '명의 눈사람이 살고 있어요';

type Props = {
  isMine?: boolean;
};

const TownTitleBox = (props: Props) => {
  const snowmanText = SNOWMAN_NUM_MOCK + SNOWMAN_NUM_TEXT;
  const { isMine } = props;
  const [isEdit, setEdit] = useState(false);

  return (
    <FlexBox className="z-10 justify-center items-center pt-[133px]" direction="flex-col" position="relative">
      <FlexBox position="reletive" direction="flex-row" className="w-full justify-center items-center pb-[6px] pr-[50px] pl-[50px]">
        {isEdit ? (
          <input
            placeholder="마을 이름을 입력해주세요."
            className="w-[100%] text-primary-50 text-2xl pr-[13px] bg-transparent placeholder:text-xl"
            defaultValue={TITLE_MOCK}
          />
        ) : (
          <Title text={TITLE_MOCK} className="text-primary-50 text-3xl pr-[13px]" />
        )}
        {isMine && <Pencil onClick={() => setEdit((prev) => !prev)} fill={isEdit ? '#55b8ff' : undefined} />}
      </FlexBox>
      <Span text={snowmanText} className="text-[20px] text-primary-450" />
    </FlexBox>
  );
};

export default TownTitleBox;
