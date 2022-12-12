import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container bg-primary-100 min-h-screen w-full sm:w-6/12">{children}</div>;
};

export default Container;
