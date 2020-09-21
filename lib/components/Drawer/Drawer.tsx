import React from 'react';
import { Modal, ModalProps } from '../private/Modal/Modal';

export { AllowCloseContext } from '../private/Modal/Modal';

export type DrawerProps = Omit<
  ModalProps,
  'position' | 'headingLevel' | 'illustration'
>;

export const Drawer = ({ width = 'medium', ...restProps }: DrawerProps) => (
  <Modal
    width={width}
    {...restProps}
    position="right"
    headingLevel="2"
    illustration={undefined}
  />
);
