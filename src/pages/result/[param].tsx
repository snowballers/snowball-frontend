import type { NextPage } from 'next';

import Container from '@components/Container';
import ResultImageText from '@components/Result/ResultImageText';
import ReadMoreButton from '@components/Result/ReadMoreButton';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';
import useResultPage from '@hooks/Result/useResultPage';
import { Loading } from '@components/Question';

const Result: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isClicked, setClicked] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { nickname, percent, snowman, letter, loading, error, setLetter, createLetter } = useResultPage();

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

  if (error) {
    return <Loading type="error" text="잘못된 접근입니다." />;
  }

  if (loading) {
    return <Loading type="" text="로딩 중입니다..." />;
  }

  return (
    <div>
      <Container bgColor="bg-primary-50">
        <ResultImageText
          scrollRef={scrollRef}
          nickname={nickname}
          percent={percent}
          snowman={snowman}
          letter={letter}
          setLetter={setLetter}
          createLetter={createLetter}
        />
        <ReadMoreButton isClicked={isClicked} onClick={onClick} />
        <div ref={ref} className="absolute -bottom-5"></div>
      </Container>
    </div>
  );
};

export default Result;
