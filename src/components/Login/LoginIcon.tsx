import Image from 'next/image';

type Props = {
  img: string;
  apiUrl: string;
};

const LoginIcon = ({ img, apiUrl }: Props) => {
  return (
    <>
      <a href={apiUrl}>
        <Image className="inline mx-4 rounded-full" src={img} alt="" width={56} height={56} />
      </a>
    </>
  );
};

export default LoginIcon;
