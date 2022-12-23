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
      <FlexBox position="absolute" direction="flex-row" className="z-30 w-full top-[50%] -translate-y-[50%] justify-between">
        <Arrow onClick={prevPage} fill="#55b8ff" className="relative w-[24px] h-[48px] left-[33.66px]" />
        <Arrow onClick={nextPage} fill="#55b8ff" className="relative w-[24px] h-[48px] rotate-180 right-[33.66px]" />
      </FlexBox>

      <FlexBox position="absolute" direction="flex-row" className="w-full top-[50%] -translate-y-[50%] justify-between">
        {datas.map(({ id, type, seen }) => (
          <Snowman key={id} {...{ type, seen }} />
        ))}
      </FlexBox>
    </>
  );
}
export default SnowmanList;
