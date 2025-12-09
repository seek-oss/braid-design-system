import type { FC } from 'react';

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
  extends Omit<ModalProps, keyof typeof modalStyle | 'width'> {
  width?: ModalProps['width'];
}

export const Dialog: FC<DialogProps> = ({
  width = defaultWidth,
  ...restProps
}) => <Modal width={width} {...restProps} {...modalStyle} />;

interface DialogContentProps
  extends Omit<ModalContentProps, keyof typeof modalStyle | 'width'> {
  width?: ModalContentProps['width'];
}

export const DialogContent = ({
  width = defaultWidth,
  ...restProps
}: DialogContentProps) => (
  <ModalContent width={width} {...restProps} {...modalStyle} />
);
