import React from 'react';

type Props = {
  bgColor: string;
  children: React.ReactNode;
};

const Container = ({ bgColor, children }: Props) => {
  return <div className={`container bg-${bgColor} min-h-screen w-full sm:w-6/12`}>{children}</div>;
};

export default Container;
