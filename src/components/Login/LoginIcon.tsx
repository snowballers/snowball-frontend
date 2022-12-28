import Image from 'next/image';

type Props = {
  img: string;
  apiUrl: string;
};

const LoginIcon = ({ img, apiUrl }: Props) => {
  return (
    <>
      <a href={apiUrl}>
        <Image className="inline mx-4 rounded" src={img} alt="" width={360} height={80} />
      </a>
    </>
  );
};

export default LoginIcon;
