import toast from 'react-hot-toast';

type Props = {
  message: string;
  className: string;
  style: React.CSSProperties;
};

export const toastSuccess = ({ message, style }: Props) => {
  toast.success(message, {
    id: message,
    duration: 2000,
    icon: null,
    style: { background: '#000000b3', color: '#fff', ...style },
  });
};

export const toastError = ({ message, style }: Props) => {
  toast.error(message, {
    id: message,
    duration: 2000,
    icon: null,
    style: { background: '#000000b3', color: '#fff', ...style },
  });
};
