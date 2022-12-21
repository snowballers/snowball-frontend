import { getCurrentUrl, sharePage } from "src/utils/share";

type Props = {
  title: string;
};

function ShareBtn(props: Props) {
  const { title } = props;

  const currentUrl = getCurrentUrl();
  const handleShare = sharePage({
    title: `snowballers | ${title}`,
    url: currentUrl,
  });
  
  return (
    <button type="button" className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-[22px] text-primary-900" onClick={handleShare}>
      내 마을 링크 공유하기
    </button>
  );
}
export default ShareBtn;
