type Props = {
  width: string;
  text: string;
  selected?: boolean;
  onClick?: (...args: any) => void;
};

const Button = ({ width, text, selected = false, onClick }: Props) => {
  const commonButtonStyle = `border-solid border-2 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 ${width}`;
  const normalButtonStyle = 'text-primary-600 border-primary-600 bg-primary-100';
  const selectedButtonStyle = 'text-primary-100 border-primary-600 bg-primary-600';

  return (
    <>
      <button type="button" className={commonButtonStyle + ' ' + (selected ? selectedButtonStyle : normalButtonStyle)} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
