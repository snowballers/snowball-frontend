export const queryKey = {
  town: (url: string) => ['town', url],
  snowman: (id: string) => ['snowman', id],
  question: (townUrl: string) => ['question', townUrl],
};
