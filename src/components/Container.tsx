import React from 'react';

type Props = {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
};

const Container = ({ bgColor, children, className }: Props) => {
  return <div className={`container ${bgColor} min-h-screen w-full sm:w-6/12 ${className}`}>{children}</div>;
};

export default Container;
