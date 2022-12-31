import { useRouter } from 'next/router';
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
  const src = seen ? `/snowman/${type.toLowerCase()}.png` : '/snowman/unknown2.png';

  function seeDetail() {
    router.push({ pathname: '/detail', query: { url: url, snowmanId: id } }, '/detail');
  }

  return (
    <div className={`relative max-w-[360px] max-h-[400px] aspect-[0.9]`} onClick={isMine ? seeDetail : () => {}}>
      <img className="absolute w-full h-full" src={src} alt={`${type} 눈사람`} />
    </div>
  );
}
export default Snowman;
