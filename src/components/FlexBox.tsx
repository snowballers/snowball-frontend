type Props = {
  position: string;
  direction: 'flex-row' | 'flex-col' | 'flex-row-reverse' | 'flex-col-reverse';
  children: React.ReactNode;
  className?: string;
};

function FlexBox(props: Props) {
  const { position, direction, children, className } = props;
  return <div className={`${position} flex ${direction} ${className}`}>{children}</div>;
}
export default FlexBox;
