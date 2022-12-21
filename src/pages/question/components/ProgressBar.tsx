import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { ProgressBarProps } from '../types';

const ProgressBar = ({ finished, questionNo, totalQuestions }: ProgressBarProps) => {
  const [percentage, setPercentage] = useState<string>();

  const totalProgressRef = useRef<HTMLDivElement>(null);
  const currentProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getPercentage = (questionNo: number, totalQuestions: number): number => {
      return Math.floor(((finished ? questionNo : questionNo - 1) / totalQuestions) * 100);
    };

    setPercentage(`${getPercentage(questionNo, totalQuestions)}%`);
  }, [questionNo, totalQuestions, finished]);

  return (
    <>
      <div ref={totalProgressRef} className="overflow-visible relative w-full mt-6 bg-primary-200 rounded-full h-2.5">
        <div ref={currentProgressRef} className="bg-primary-600 h-2.5 rounded-full" style={{ width: percentage, transition: 'width 1s linear' }}></div>
        <Image
          className="absolute -top-[24px]"
          style={{ left: `calc(${percentage} - 48px)`, transition: '1s linear' }}
          src="/roll-cropped.gif"
          alt="roll"
          width="64"
          height="32"
        />
      </div>
      <div className="flex justify-between mt-2">
        <span></span>
        <span className="text-base font-medium text-primary-600 dark:text-white">{percentage}</span>
      </div>
    </>
  );
};

export default ProgressBar;
