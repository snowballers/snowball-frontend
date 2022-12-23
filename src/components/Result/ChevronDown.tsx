type Props = {
  fill?: string;
  className?: string;
};

function ChevronDown(props: Props) {
  const { fill, className } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" className="bi bi-chevron-down" viewBox="0 0 16 16">
      <path
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        fill={fill || 'black'}
        stroke={fill || 'black'}
        strokeWidth="1.5px"
      />
    </svg>
  );
}
export default ChevronDown;
