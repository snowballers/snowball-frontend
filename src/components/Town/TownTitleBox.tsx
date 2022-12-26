import Title from '../../components/Title';
import Span from '../../components/Span';
import FlexBox from '@components/FlexBox';
import Pencil from '@components/icons/Pencil';
import { useState } from 'react';
import { useUpdateTown } from '@hooks/api/useTown';

const SNOWMAN_NUM_TEXT = '명의 눈사람이 살고 있어요';

type Props = {
  townName: string;
  url: string;
  isMine?: boolean;
  totalSnowman?: number;
};

const TownTitleBox = (props: Props) => {
  const { url, isMine, totalSnowman, townName } = props;
  const snowmanText = totalSnowman + SNOWMAN_NUM_TEXT;
  const [isEdit, setEdit] = useState(false);
  const [townValue, setTownValue] = useState(townName);
  const { mutate } = useUpdateTown();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTownValue(e.target.value);
  };
  const onEdit = () => {
    mutate(
      { url: url, townName: townValue },
      {
        onSuccess: () => {
          setEdit((prev) => !prev);
        },
      },
    );
  };

  return (
    <FlexBox className="z-10 justify-center items-center pt-[133px]" direction="flex-col" position="relative">
      <FlexBox position="reletive" direction="flex-row" className="w-full justify-center items-center pb-[6px] pr-[50px] pl-[50px]">
        {isEdit ? (
          <input
            placeholder="이름을 입력해주세요."
            className="w-[100%] text-primary-50 text-2xl pr-[13px] bg-transparent placeholder:text-xl"
            value={townValue}
            onChange={onChange}
          />
        ) : (
          <Title text={`${townName}'s 눈사람 마을` || ''} className="text-primary-50 text-3xl pr-[13px]" />
        )}
        {isMine && <Pencil onClick={onEdit} fill={isEdit ? '#55b8ff' : undefined} />}
      </FlexBox>
      <Span text={snowmanText} className="text-[20px] text-primary-450" />
    </FlexBox>
  );
};

export default TownTitleBox;
