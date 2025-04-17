import assert from 'assert';

import { useId } from 'react';

import { type ModalProps, Modal } from '../private/Modal/Modal';
import {
  type ModalContentProps,
  ModalContent,
} from '../private/Modal/ModalContent';
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
  extends Omit<
    ModalProps,
    keyof typeof modalStyle | 'id' | 'width' | 'position'
  > {
  id?: ModalProps['id'];
  width?: (typeof validWidths)[number];
  position?: (typeof validPositions)[number];
}

export const Drawer = ({
  id,
  width = defaultWidth,
  position = defaultPosition,
  ...restProps
}: DrawerProps) => {
  assert(validWidths.indexOf(width) >= 0, `Invalid width: ${width}`);
  assert(
    validPositions.indexOf(position) >= 0,
    `Invalid position: ${position}`,
  );

  const fallbackId = useId();
  const resolvedId = id || fallbackId;

  return (
    <Modal
      id={resolvedId}
      width={width}
      position={position}
      {...restProps}
      {...modalStyle}
    />
  );
};

interface DrawerContentProps
  extends Omit<
    ModalContentProps,
    keyof typeof modalStyle | 'id' | 'width' | 'position'
  > {
  id?: ModalContentProps['id'];
  width?: (typeof validWidths)[number];
  position?: (typeof validPositions)[number];
}

export const DrawerContent = ({
  id,
  width = defaultWidth,
  position = defaultPosition,
  ...restProps
}: DrawerContentProps) => {
  assert(validWidths.indexOf(width) >= 0, `Invalid width: ${width}`);
  assert(
    validPositions.indexOf(position) >= 0,
    `Invalid position: ${position}`,
  );

  const fallbackId = useId();
  const resolvedId = id || fallbackId;

  return (
    <ModalContent
      id={resolvedId}
      width={width}
      position={position}
      {...restProps}
      {...modalStyle}
    />
  );
};
