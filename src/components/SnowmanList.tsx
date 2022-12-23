import { snowmanlist } from '__mocks__/snowmanlist';
import Snowman from './Snowman';
import FlexBox from './FlexBox';
import Arrow from './icons/Arrow';
import { useState } from 'react';

const count = 7;

function SnowmanList() {
  const [pageNum, setPageNum] = useState(1);
  const maxPageNum = Math.ceil(snowmanlist.length / count);
  const datas = snowmanlist.slice((pageNum - 1) * count, pageNum * count) || [];

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
      <FlexBox position="absolute" direction="flex-row" className="z-20 w-full top-[50%] -translate-y-[50%] justify-between">
        <Arrow onClick={prevPage} fill="#55b8ff" className="relative w-[24px] h-[48px] left-[33.66px]" />
        <Arrow onClick={nextPage} fill="#55b8ff" className="relative w-[24px] h-[48px] rotate-180 right-[33.66px]" />
      </FlexBox>

      <FlexBox
        position="absolute"
        direction="flex-col"
        className="top-[50%] -translate-y-[30%] left-[50%] -translate-x-[50%] w-[calc(100%_-_115.32px)] h-[calc(100%_-_470px)] max-h-[1200px]"
      >
        <FlexBox position="relative" direction="flex-row" className="justify-center h-full">
          {datas.slice(0, 2).map(({ id, type, seen }) => (
            <Snowman key={id} {...{ type, seen }} />
          ))}
        </FlexBox>
        <FlexBox position="relative" direction="flex-row" className="justify-center h-full">
          {datas.slice(2, 5).map(({ id, type, seen }) => (
            <Snowman key={id} {...{ type, seen }} />
          ))}
        </FlexBox>
        <FlexBox position="relative" direction="flex-row" className="justify-center h-full">
          {datas.slice(5, count).map(({ id, type, seen }) => (
            <Snowman key={id} {...{ type, seen }} />
          ))}
        </FlexBox>
      </FlexBox>
    </>
  );
}
export default SnowmanList;
