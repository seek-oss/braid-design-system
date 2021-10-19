import assert from 'assert';
import React from 'react';
import type { ModalProps } from '../private/Modal/Modal';
import { Modal } from '../private/Modal/Modal';
import type { ModalContentProps } from '../private/Modal/ModalContent';
import { ModalContent } from '../private/Modal/ModalContent';
export { AllowCloseContext } from '../private/Modal/Modal';

const validWidths = ['small', 'medium', 'large'] as const;

const defaultWidth = 'medium';
const modalStyle = {
  position: 'right',
  headingLevel: '2',
  illustration: undefined,
} as const;

export interface DrawerProps
  extends Omit<ModalProps, keyof typeof modalStyle | 'width'> {
  width?: typeof validWidths[number];
}

export const Drawer = ({ width = defaultWidth, ...restProps }: DrawerProps) => {
  assert(validWidths.indexOf(width) >= 0, `Invalid width: ${width}`);

  return <Modal width={width} {...restProps} {...modalStyle} />;
};

interface DrawerContentProps
  extends Omit<ModalContentProps, keyof typeof modalStyle | 'width'> {
  width?: typeof validWidths[number];
}

export const DrawerContent = ({
  width = defaultWidth,
  ...restProps
}: DrawerContentProps) => {
  assert(validWidths.indexOf(width) >= 0, `Invalid width: ${width}`);

  return <ModalContent width={width} {...restProps} {...modalStyle} />;
};
