import React from 'react';
import { Modal, ModalProps } from '../private/Modal/Modal';

export { AllowCloseContext } from '../private/Modal/Modal';

export interface DialogProps
  extends Omit<ModalProps, 'position' | 'headingLevel'> {}

export const Dialog = ({ width = 'small', ...restProps }: DialogProps) => (
  <Modal width={width} {...restProps} position="center" headingLevel="3" />
);
