export type MBTI =
  | 'ENFJ'
  | 'ENFP'
  | 'ENTJ'
  | 'ENTP'
  | 'ESFJ'
  | 'ESFP'
  | 'ESTJ'
  | 'ESTP'
  | 'INFJ'
  | 'INFP'
  | 'INTJ'
  | 'INTP'
  | 'ISFJ'
  | 'ISFP'
  | 'ISTJ'
  | 'ISTP';

export type snowman = { id: number; type: MBTI; seen: boolean };
