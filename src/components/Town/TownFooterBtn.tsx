import FlexBox from '@components/FlexBox';
import { useRouter } from 'next/router';

type Props = {
  direction: 'flex-row' | 'flex-col';
  url: string;
};

function TownFooterBtn(props: Props) {
  const { direction, url } = props;
  const router = useRouter();
  function makeSnowman() {
    router.push(`/question/${url}`);
  }
  function login() {
    router.push('/login');
  }

  return (
    <FlexBox position="fixed" direction={direction} className="z-20 w-full sm:w-6/12 bottom-[50px] pr-[21px] pl-[21px]">
      <button type="button" onClick={makeSnowman} className="bg-primary-350 h-[50px] rounded-[20px] text-[22px] text-[#fff]">
        눈사람 만들어주기
      </button>
      <button type="button" onClick={login} className="h-[50px] text-[22px] text-primary-350">
        내 눈사람 마을 만들기
      </button>
    </FlexBox>
  );
}
export default TownFooterBtn;
