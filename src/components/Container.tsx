import React, {  LegacyRef,  forwardRef } from 'react';

type Props = {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
};

const Container = ({ bgColor, children, className }: Props, ref: LegacyRef<HTMLDivElement> | null) => {
  return (
    <div ref={ref} className={`container ${bgColor} min-h-screen w-full sm:w-6/12 ${className}`}>
      {children}
    </div>
  );
};

export default forwardRef(Container);
