import Image from 'next/image';

import Title from '@components/Title';
import { sampleResponse } from '../data';
import BaseImage from '@components/BaseImage';
import LetterInputBox from './LetterInputBox';
import Button from '@components/Button';

const sender = '쓰니';
/*
import {useRouter} from 'next/router';
const router = useRouter();
router.query.sender <- 이거로 접근
*/

const ResultImageText = () => {
  return (
    <div className="absolute inset-x-0 z-50" style={{ background: 'rgb(237, 239, 247)' }}>
      <Image className="absolute -z-[10] w-full h-100vh" src="/image/hometown.png" alt="마을 배경 이미지" width="0" height="0" sizes="100vw" />
      <Title text={`짠! ${sampleResponse.data.nickname}님을 위한`} className="text-center pt-20 text-primary-50 text-2xl inset-x-0" />
      <Title text={`눈사람이 완성되었어요!`} className="text-center text-primary-50 text-2xl inset-x-0" />
      <div className="inset-x-0">
        <Image className="mx-auto" src="/enfp.png" alt="" width={350} height={350} />
      </div>
      <p className="text-center text-xl">
        {sender}님이 만든 눈사람은
        <br /> <span className="text-primary-600">{sampleResponse.data.snowman.name}</span>이에요!
      </p>
      <p className="text-center text-sm text-gray-400 pt-8">
        <span className="text-primary-600">{sampleResponse.data.percent}%</span>의 사람들이 {sampleResponse.data.nickname}님을
      </p>
      <p className="text-center text-sm text-gray-400">{sampleResponse.data.snowman.name} 타입이라 생각했어요.</p>
      <div className="px-10 pt-8">
        <p className="text-center text-gray-600 leading-relaxed">{sampleResponse.data.snowman.description}</p>
      </div>
      <LetterInputBox />
      <div className="mx-auto w-5/6 py-8">
        <Button width="w-full" text="완성!" selected={true} />
      </div>
    </div>
  );
};

export default ResultImageText;
