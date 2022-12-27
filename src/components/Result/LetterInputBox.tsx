import Image from 'next/image';

const LetterInputBox = ({ setLetter }: any) => {
  return (
    <>
      <Image src="/image/letter_ornament_top.png" alt="" width="0" height="0" sizes="33vw" className="w-1/3 h-auto mx-auto pt-24" />
      <p className="text-center text-xl">친구에게 한마디</p>
      <div className="place-content-center h-96 min-[415px]:px-4 min-[435px]:px-0 bg-contain bg-no-repeat bg-center bg-letter-background inset-x-0 justify-center pt-3">
        <textarea
          className="block h-72 w-full px-16 mt-8 min-[435px]:px-24 min-[480px]:px-28 resize-none overflow-hidden leading-[1.95rem] bg-transparent  border-transparent focus:border-transparent focus:ring-0 rounded-lg"
          maxLength={200}
          onChange={(e) => setLetter(e.target.value)}
        ></textarea>
      </div>
      <Image src="/image/letter_ornament_bottom.png" alt="" width="0" height="0" sizes="100vw" className="w-full h-auto" />
    </>
  );
};

export default LetterInputBox;
