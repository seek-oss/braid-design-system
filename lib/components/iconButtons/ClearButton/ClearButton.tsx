import React from 'react';
import { IconButton, IconButtonProps } from '../IconButton';
import { IconClear } from '../..';

export type ClearButtonProps = Pick<
  IconButtonProps,
  'onClick' | 'onMouseDown' | 'label' | 'keyboardAccessible'
>;

export const ClearButton = ({
  label = 'Clear',
  onClick,
  onMouseDown,
  keyboardAccessible,
}: ClearButtonProps) => {
  return (
    <IconButton
      label={label}
      onClick={onClick}
      onMouseDown={onMouseDown}
      keyboardAccessible={keyboardAccessible}
    >
      {iconProps => <IconClear {...iconProps} />}
    </IconButton>
  );
};
