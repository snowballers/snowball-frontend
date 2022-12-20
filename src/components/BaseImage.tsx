import Image from 'next/image';
import { BLUR_DATA_URL } from 'src/constants/img';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

function BaseImage(props: Props) {
  const { src, alt, width, height, fill } = props;
  return <Image {...{ src, alt, width, height, fill }} placeholder="blur" blurDataURL={BLUR_DATA_URL} />;
}
export default BaseImage;
