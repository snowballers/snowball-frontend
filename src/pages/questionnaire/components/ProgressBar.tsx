import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Props = {
  question: number;
  totalQuestions: number;
};

const ProgressBar = ({ question, totalQuestions }: Props) => {
  const [percentage, setPercentage] = useState<string>(`${getPercentage(question, totalQuestions)}%`);
  const [left, setLeft] = useState<number>();
  const currentProgressRef = useRef<HTMLDivElement>(null);

  function getPercentage(question: number, totalQuestions: number): number {
    return Math.floor(((question + 1) / totalQuestions) * 100);
  }

  function handleResize() {
    if (currentProgressRef.current === null) return;
    setLeft(currentProgressRef.current.clientWidth - 32);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  return (
    <>
      <div className="flex justify-between mb-1">
        <span></span>
        <span className="text-base font-medium text-primary-700 dark:text-white">{percentage}</span>
      </div>
      <div className="relative w-full bg-primary-200 rounded-full h-2.5 dark:bg-gray-700">
        <div ref={currentProgressRef} className="bg-primary-700 h-2.5 rounded-full" style={{ width: percentage }}></div>
        <div className="absolute -top-[18px]" style={{ left: left }}>
          <Image src="/roll-cropped.gif" alt="roll" width="32" height="32" />
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
