import { MBTI } from 'src/types/town';
import BaseImage from './BaseImage';

type Props = {
  type: MBTI;
  seen: boolean;
};

function Snowman(props: Props) {
  const { type, seen } = props;
  const src = `/snowman/${type.toLowerCase()}.png`;
  return (
    <div className={`relative max-w-[360px] max-h-[400px] aspect-[3/4]`}>
      <BaseImage src={src} alt={`${type} 눈사람`} fill />
    </div>
  );
}
export default Snowman;
