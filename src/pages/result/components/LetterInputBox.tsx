const LetterInputBox = () => {
  return (
    <>
      <p className="text-center text-xl pt-16">친구에게 한마디</p>
      <div className="flex place-content-center inset-x-0 pt-4">
        <p className="text-center text-base pr-1">내 이름:</p>
        <input
          className="text-base text-primary-600 bg-transparent placeholder:text-base placeholder:text-gray-300 placeholder:overflow-visible"
          placeholder="이름 입력"
        />
      </div>
      <div className="flex place-content-center inset-x-0 justify-center pt-3">
        <textarea className="h-80 w-5/6 bg-primary-200 border-transparent focus:border-transparent focus:ring-0 rounded-lg"></textarea>
      </div>
    </>
  );
};

export default LetterInputBox;
