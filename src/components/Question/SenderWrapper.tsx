import Container from '@components/Container';
import FlexBox from '@components/FlexBox';
import Title from '@components/Title';
import Button from '@components/Button';

type Props = {
  setSender: React.Dispatch<React.SetStateAction<string>>;
  setIsSender: React.Dispatch<React.SetStateAction<boolean>>;
};

const SenderWrapper = ({ setSender, setIsSender }: Props) => {
  return (
    <Container bgColor="bg-primary-100">
      <FlexBox className="z-10 justify-center items-center pt-[40vh]" direction="flex-col" position="relative">
        <Title text="당신의 이름은 무엇인가요?" className="text-primary-600 text-2xl mb-6" />
        <FlexBox position="relative" direction="flex-row" className="w-full justify-center items-center mb-10">
          <input
            placeholder="이름을 입력해주세요."
            className="w-2/5 text-center text-primary-600 text-base pb-1 bg-transparent placeholder:overflow-visible"
            style={{ borderBottom: '1.5px solid #386a91' }}
            onChange={(e) => setSender(e.target.value)}
          />
        </FlexBox>
        <Button
          width="w-28"
          text="시작!"
          selected
          onClick={() => {
            setIsSender(true);
          }}
        />
      </FlexBox>
    </Container>
  );
};

export default SenderWrapper;
