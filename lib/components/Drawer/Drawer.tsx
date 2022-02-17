import assert from 'assert';
import React from 'react';
import { Modal, ModalProps } from '../private/Modal/Modal';
import { ModalContent, ModalContentProps } from '../private/Modal/ModalContent';
export { AllowCloseContext } from '../private/Modal/Modal';

const validWidths = ['small', 'medium', 'large'] as const;
const validPositions = ['left', 'right'] as const;

const defaultWidth = 'medium';
const defaultPosition = 'right';
const modalStyle = {
  headingLevel: '2',
  illustration: undefined,
} as const;

export interface DrawerProps
  extends Omit<ModalProps, keyof typeof modalStyle | 'width' | 'position'> {
  width?: typeof validWidths[number];
  position?: typeof validPositions[number];
}

export const Drawer = ({
  width = defaultWidth,
  position = defaultPosition,
  ...restProps
}: DrawerProps) => {
  assert(validWidths.indexOf(width) >= 0, `Invalid width: ${width}`);
  assert(
    validPositions.indexOf(position) >= 0,
    `Invalid position: ${position}`,
  );

  return (
    <Modal width={width} position={position} {...restProps} {...modalStyle} />
  );
};

interface DrawerContentProps
  extends Omit<
    ModalContentProps,
    keyof typeof modalStyle | 'width' | 'position'
  > {
  width?: typeof validWidths[number];
  position?: typeof validPositions[number];
}

export const DrawerContent = ({
  width = defaultWidth,
  position = defaultPosition,
  ...restProps
}: DrawerContentProps) => {
  assert(validWidths.indexOf(width) >= 0, `Invalid width: ${width}`);
  assert(
    validPositions.indexOf(position) >= 0,
    `Invalid position: ${position}`,
  );

  return (
    <ModalContent
      width={width}
      position={position}
      {...restProps}
      {...modalStyle}
    />
  );
};
