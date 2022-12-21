import { toast, ToastBar, Toaster } from 'react-hot-toast';

import $ from './style.module.scss';
import { Close } from '../icons/Close';

function Toast() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      containerClassName={$['toast-msg']}
      containerStyle={{
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== 'loading' && (
                <button type="button" aria-label="토스트 메시지 닫기 버튼" onClick={() => toast.dismiss(t.id)}>
                  <Close stroke="#fff" size={10} />
                </button>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}

export default Toast;
