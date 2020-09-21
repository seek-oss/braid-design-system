import assert from 'assert';
import React from 'react';
import { Modal, ModalProps } from '../private/Modal/Modal';

export { AllowCloseContext } from '../private/Modal/Modal';

const validWidths = ['small', 'medium', 'large'] as const;

export interface DrawerProps
  extends Omit<
    ModalProps,
    'position' | 'headingLevel' | 'illustration' | 'width'
  > {
  width?: typeof validWidths[number];
}

export const Drawer = ({ width = 'medium', ...restProps }: DrawerProps) => {
  assert(validWidths.indexOf(width) >= 0, `Invalid width: ${width}`);

  return (
    <Modal
      width={width}
      {...restProps}
      position="right"
      headingLevel="2"
      illustration={undefined}
    />
  );
};
