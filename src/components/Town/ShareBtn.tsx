type Props = {
  onClick?: () => void;
};

function ShareBtn(props: Props) {
  const { onClick } = props;
  return (
    <button type="button" className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-[22px] text-primary-900" onClick={onClick}>
      내 마을 링크 공유하기
    </button>
  );
}
export default ShareBtn;
