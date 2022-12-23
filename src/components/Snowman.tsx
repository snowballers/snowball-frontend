import BaseImage from './BaseImage';

export type MBTI =
  | 'ENFJ'
  | 'ENFP'
  | 'ENTJ'
  | 'ENTP'
  | 'ESFJ'
  | 'ESFP'
  | 'ESTJ'
  | 'ESTP'
  | 'INFJ'
  | 'INFP'
  | 'INTJ'
  | 'INTP'
  | 'ISFJ'
  | 'ISFP'
  | 'ISTJ'
  | 'ISTP';

type Props = {
  type: MBTI;
  seen: boolean;
};

function Snowman(props: Props) {
  const { type, seen } = props;
  const src = `/snowman/${type.toLowerCase()}.png`;
  return <BaseImage src={src} alt={`${type} 눈사람`} width={160} height={181} />;
}
export default Snowman;
