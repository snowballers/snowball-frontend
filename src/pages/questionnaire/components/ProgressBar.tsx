import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { ProgressBarProps } from '../types';

const ProgressBar = ({ finished, question, totalQuestions }: ProgressBarProps) => {
  const [percentage, setPercentage] = useState<string>();
  const [left, setLeft] = useState<number>();

  const currentProgressRef = useRef<HTMLDivElement>(null);

  function handleResize() {
    if (currentProgressRef.current === null) return;
    setLeft(currentProgressRef.current.clientWidth - 48);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    const getPercentage = (question: number, totalQuestions: number): number => {
      return Math.floor(((finished ? question : question - 1) / totalQuestions) * 100);
    };

    setPercentage(`${getPercentage(question, totalQuestions)}%`);
  }, [question, totalQuestions, finished]);

  useEffect(() => {
    handleResize();
  }, [percentage]);

  return (
    <>
      <div className="overflow-visible relative w-full mt-6 bg-primary-200 rounded-full h-2.5">
        <div ref={currentProgressRef} className="bg-primary-600 h-2.5 rounded-full" style={{ width: percentage }}></div>
        <Image className="absolute -top-[24px]" style={{ left: left }} src="/roll-cropped.gif" alt="roll" width="64" height="32" />
      </div>
      <div className="flex justify-between mt-2">
        <span></span>
        <span className="text-base font-medium text-primary-600 dark:text-white">{percentage}</span>
      </div>
    </>
  );
};

export default ProgressBar;
