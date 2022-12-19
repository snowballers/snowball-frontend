type Props = {
  direction: 'flex-row' | 'flex-col' | 'flex-row-reverse' | 'flex-col-reverse';
  children: React.ReactNode;
  className: string;
};

function FlexBox(props: Props) {
  const { direction, children, className } = props;
  return <div className={`relative flex ${direction} ${className}`}>{children}</div>;
}
export default FlexBox;
