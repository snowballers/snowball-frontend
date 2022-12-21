import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Camera from '@components/icons/Camera';
import { toastError, toastSuccess } from 'src/utils/toaster';
import React from 'react';

type Props = {
  pageRef: React.RefObject<HTMLDivElement> | null;
};

function CameraBtn(props: Props) {
  const { pageRef } = props;

  const captrueFilter = (node: Node) => node.nodeName !== 'svg' && node.nodeName !== 'BUTTON';

  const onCapture = async () => {
    try {
      const res = await domtoimage.toBlob(pageRef?.current as Node, { filter: captrueFilter });
      saveAs(res, 'town.png');
      toastSuccess({ message: '마을을 캡쳐하는데 성공했습니다.' });
    } catch (error) {
      toastError({ message: '마을을 캡쳐하는데 실패했습니다.' });
    }
  };

  return (
    <button type="button" className="bg-primary-900 p-[15px] rounded-full" onClick={onCapture}>
      <Camera fill="#F6E8E8" className="w-[30px] h-[30px]" />
    </button>
  );
}
export default CameraBtn;
