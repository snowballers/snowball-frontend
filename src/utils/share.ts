import {  toastSuccess,  toastError } from 'src/utils/toaster';

type onCopyFn = (text: string) => void;

function getCurrentUrl() {
  if (typeof window !== 'undefined') return `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  return '';
}

function copyClipBoard(): onCopyFn {
  return async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toastSuccess({ message: '클립보드에 복사되었습니다.' });
    } catch (error) {
      toastError({ message: '클립보드 복사에 실패했습니다.' });
    }
  };
}

function sharePage(props: { title: string; url: string }): () => void {
  return async () => {
    try {
      navigator.share({
        title: props.title,
        url: props.url,
      });
    } catch (err) {
      copyClipBoard()(props.url);
    }
  };
}

export { getCurrentUrl, copyClipBoard, sharePage };
