import Snowman from './Snowman';
import FlexBox from './FlexBox';
import Arrow from './icons/Arrow';
import { useState } from 'react';
import { TownSnowman } from '@api/types';

const count = 7;

type Props = {
  snowmans: TownSnowman[];
  url: string;
  isMine: boolean;
};

function SnowmanList(props: Props) {
  const { snowmans, url, isMine } = props;
  const [pageNum, setPageNum] = useState(1);
  const maxPageNum = Math.ceil(snowmans.length / count);
  const datas = snowmans.slice((pageNum - 1) * count, pageNum * count) || [];

  const nextPage = () => {
    if (maxPageNum <= pageNum) return;
    setPageNum((prev) => prev + 1);
  };
  const prevPage = () => {
    if (pageNum <= 1) return;
    setPageNum((prev) => prev - 1);
  };

  return (
    <>
      <FlexBox position="absolute" direction="flex-row" className="z-50 w-full top-[50%] -translate-y-[50%] justify-between">
        <Arrow onClick={prevPage} fill="#55b8ff" className="relative w-[24px] h-[48px] left-[33.66px]" disabled={pageNum === 1} />
        <Arrow onClick={nextPage} fill="#55b8ff" className="relative w-[24px] h-[48px] rotate-180 right-[33.66px]" disabled={pageNum === maxPageNum} />
      </FlexBox>

      <FlexBox
        position="absolute"
        direction="flex-col"
        className="top-[50%] -translate-y-[30%] left-[50%] -translate-x-[50%] w-[90vw] h-[50vh] max-w-[400px] max-h-[480px] z-20"
      >
        <FlexBox position="relative" direction="flex-row" className="justify-center h-full">
          {datas.slice(0, 2).map(({ id, type, seen }) => (
            <Snowman key={id} url={url} isMine={isMine} {...{ id, type, seen }} />
          ))}
        </FlexBox>
        <FlexBox position="relative" direction="flex-row" className="justify-center h-full">
          {datas.slice(2, 5).map(({ id, type, seen }) => (
            <Snowman key={id} url={url} isMine={isMine} {...{ id, type, seen }} />
          ))}
        </FlexBox>
        <FlexBox position="relative" direction="flex-row" className="justify-center h-full">
          {datas.slice(5, count).map(({ id, type, seen }) => (
            <Snowman key={id} url={url} isMine={isMine} {...{ id, type, seen }} />
          ))}
        </FlexBox>
      </FlexBox>
    </>
  );
}
export default SnowmanList;
