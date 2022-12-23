import { snowmanlist } from '__mocks__/snowmanlist';
import Snowman from './Snowman';
import FlexBox from './FlexBox';
import Arrow from './icons/Arrow';

function SnowmanList() {
  return (
    <>
      <FlexBox position="absolute" direction="flex-row" className="w-full top-[50%] -translate-y-[50%] justify-between">
        <Arrow fill="#55b8ff" className="relative w-[24px] h-[48px] left-[33.66px]" />
        <Arrow fill="#55b8ff" className="relative w-[24px] h-[48px] rotate-180 right-[33.66px]" />
      </FlexBox>

      <FlexBox position="absolute" direction="flex-row" className="z-30 w-full top-[50%] -translate-y-[50%] justify-between">
        {snowmanlist.map(({ id, type, seen }) => (
          <Snowman key={id} {...{ type, seen }} />
        ))}
      </FlexBox>
    </>
  );
}
export default SnowmanList;
