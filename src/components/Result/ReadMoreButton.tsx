import ChevronDown from './ChevronDown';

type Props = {
  isClicked: boolean;
  onClick?: () => void;
};

const ReadMoreButton = (props: Props) => {
  const { isClicked, onClick } = props;
  return (
    <div
      className={`absolute inset-x-0 bottom-0 z-50 ${isClicked ? 'invisible opacity-0' : 'visible opacity-100'}`}
      style={{
        background: 'linear-gradient(180deg, rgba(244,247,251,0) 0%, rgba(120,120,120,1) 100%)',
        transition: '0.5s',
      }}
      onClick={onClick}
    >
      <div className="flex place-content-center inset-x-0 pt-12 pb-4">
        <p className="text-center text-gray-600 text-2xl mr-1">친구에게 편지 쓰기</p>
        <ChevronDown fill="rgb(75, 85, 99)" />
      </div>
    </div>
  );
};

export default ReadMoreButton;
