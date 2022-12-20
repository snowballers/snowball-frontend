import Camera from '@components/icons/Camera';

type Props = {
  onClick?: () => void;
};

function CameraBtn(props: Props) {
  const { onClick } = props;
  return (
    <button type="button" className="bg-primary-900 p-[15px] rounded-full" onClick={onClick}>
      <Camera fill="#F6E8E8" className="w-[30px] h-[30px]" />
    </button>
  );
}
export default CameraBtn;
