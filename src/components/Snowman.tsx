import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MBTI } from 'src/types/town';
import BaseImage from './BaseImage';

type Props = {
  id: number;
  type: MBTI;
  seen: boolean;
  url: string;
  isMine: boolean;
};

function Snowman(props: Props) {
  const router = useRouter();
  const { id, type, seen, url, isMine } = props;
  const src = `/snowman/${type.toLowerCase()}.png`;

  function seeDetail() {
    router.push({ pathname: '/detail', query: { url: url, snowmanId: id } }, '/detail');
  }

  return (
    <div className={`relative max-w-[360px] max-h-[400px] aspect-[3/4]`} onClick={isMine ? seeDetail : () => {}}>
      <BaseImage src={src} alt={`${type} 눈사람`} fill />
    </div>
  );
}
export default Snowman;
