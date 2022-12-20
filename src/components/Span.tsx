type Props = {
  text: string;
  className?: string;
};

function Span(props: Props) {
  const { text, className } = props;
  return <span className={className}>{text}</span>;
}
export default Span;
