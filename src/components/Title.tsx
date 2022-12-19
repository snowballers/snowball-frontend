type Props = {
  text: string;
  className?: string;
};

function Title(props: Props) {
  const { text, className } = props;
  return <h1 className={className}>{text}</h1>;
}
export default Title;
