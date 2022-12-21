import type { NextPage } from 'next';

import Container from '@components/Container';
import ResultImageText from './components/ResultImageText';
import ReadMoreButton from './components/ReadMoreButton';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';

const Result: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isClicked, setClicked] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  function onClick() {
    if (!scrollRef.current) return;
    window.scrollTo({
      top: scrollRef.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
    setClicked(true);
  }

  useEffect(() => {
    if (inView) {
      setClicked(true);
    }
  }, [inView]);

  return (
    <div ref={scrollRef}>
      <Container bgColor="bg-primary-50">
        <ResultImageText />
        <ReadMoreButton isClicked={isClicked} onClick={onClick} />
        <div ref={ref} className="absolute -bottom-5"></div>
      </Container>
    </div>
  );
};

export default Result;
