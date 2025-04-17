import { useId } from 'react';

import { type ModalProps, Modal } from '../private/Modal/Modal';
import {
  type ModalContentProps,
  ModalContent,
} from '../private/Modal/ModalContent';

export { AllowCloseContext } from '../private/Modal/Modal';

const defaultWidth = 'small';
const modalStyle = {
  position: 'center',
  headingLevel: '3',
} as const;

export interface DialogProps
  extends Omit<ModalProps, keyof typeof modalStyle | 'id' | 'width'> {
  id?: ModalProps['id'];
  width?: ModalProps['width'];
}

export const Dialog = ({
  id,
  width = defaultWidth,
  ...restProps
}: DialogProps) => {
  const fallbackId = useId();
  const resolvedId = id || fallbackId;

  return <Modal id={resolvedId} width={width} {...restProps} {...modalStyle} />;
};

interface DialogContentProps
  extends Omit<ModalContentProps, keyof typeof modalStyle | 'id' | 'width'> {
  id?: ModalContentProps['id'];
  width?: ModalContentProps['width'];
}

export const DialogContent = ({
  id,
  width = defaultWidth,
  ...restProps
}: DialogContentProps) => {
  const fallbackId = useId();
  const resolvedId = id || fallbackId;

  return (
    <ModalContent
      id={resolvedId}
      width={width}
      {...restProps}
      {...modalStyle}
    />
  );
};
