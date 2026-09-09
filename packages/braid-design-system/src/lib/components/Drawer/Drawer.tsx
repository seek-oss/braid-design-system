import assert from 'assert';

import type { FC } from 'react';

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

type DrawerHeaderProps =
  | {
      title: string;
      description?: ModalContentProps['description'];
      'aria-label'?: never;
      'aria-description'?: never;
    }
  | {
      title?: never;
      description?: never;
      'aria-label': string;
      'aria-description'?: string;
    };

const assertAccessibleName = ({
  title,
  description,
  'aria-label': ariaLabel,
  'aria-description': ariaDescription,
}: {
  title?: string;
  description?: ModalContentProps['description'];
  'aria-label'?: string;
  'aria-description'?: string;
}) => {
  assert(
    (typeof title === 'string') !== (typeof ariaLabel === 'string'),
    'Drawer requires either a title or an aria-label',
  );
  assert(
    description === undefined || typeof title === 'string',
    'Drawer description can only be used with a title',
  );
  assert(
    ariaDescription === undefined || typeof ariaLabel === 'string',
    'Drawer aria-description can only be used with an aria-label',
  );
};

export type DrawerProps = Omit<
  ModalProps,
  | keyof typeof modalStyle
  | 'width'
  | 'position'
  | 'coverImage'
  | keyof DrawerHeaderProps
> &
  DrawerHeaderProps & {
    width?: (typeof validWidths)[number];
    position?: (typeof validPositions)[number];
    footer?: ModalContentProps['footer'];
  };

export const Drawer: FC<DrawerProps> = ({
  width = defaultWidth,
  position = defaultPosition,
  footer,
  ...restProps
}) => {
  assert(validWidths.indexOf(width) >= 0, `Invalid width: ${width}`);
  assert(
    validPositions.indexOf(position) >= 0,
    `Invalid position: ${position}`,
  );
  assertAccessibleName(restProps);

  return (
    <Modal
      width={width}
      position={position}
      footer={footer}
      {...restProps}
      {...modalStyle}
    />
  );
};

type DrawerContentProps = Omit<
  ModalContentProps,
  | keyof typeof modalStyle
  | 'width'
  | 'position'
  | 'coverImage'
  | keyof DrawerHeaderProps
> &
  DrawerHeaderProps & {
    width?: (typeof validWidths)[number];
    position?: (typeof validPositions)[number];
    footer?: ModalContentProps['footer'];
  };

export const DrawerContent = ({
  width = defaultWidth,
  position = defaultPosition,
  footer,
  ...restProps
}: DrawerContentProps) => {
  assert(validWidths.indexOf(width) >= 0, `Invalid width: ${width}`);
  assert(
    validPositions.indexOf(position) >= 0,
    `Invalid position: ${position}`,
  );
  assertAccessibleName(restProps);

  return (
    <ModalContent
      width={width}
      position={position}
      footer={footer}
      {...restProps}
      {...modalStyle}
    />
  );
};
