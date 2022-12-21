type Props = {
  size?: number;
  stroke?: string;
  fill?: string;
  style?: React.CSSProperties;
  className?: string;
};

function Close({ stroke, size, className }: Props) {
  return (
    <svg {...{ className }} width={size || '16'} height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L15 15" stroke={stroke || 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 1L1 15" stroke={stroke || 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export { Close };
