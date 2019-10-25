import React, { forwardRef } from 'react';
import { IconButton, IconButtonProps } from '../IconButton';
import { IconClear } from '../..';

export type ClearButtonProps = Pick<
  IconButtonProps,
  | 'onClick'
  | 'onMouseDown'
  | 'onKeyDown'
  | 'label'
  | 'keyboardAccessible'
  | 'aria-haspopup'
  | 'aria-expanded'
>;

export const ClearButton = forwardRef<HTMLButtonElement, ClearButtonProps>(
  (
    {
      label = 'Clear',
      onClick,
      onKeyDown,
      onMouseDown,
      keyboardAccessible,
      'aria-haspopup': ariaHasPopUp,
      'aria-expanded': ariaExpanded,
    },
    forwardedRef,
  ) => {
    return (
      <IconButton
        label={label}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseDown={onMouseDown}
        keyboardAccessible={keyboardAccessible}
        aria-haspopup={ariaHasPopUp}
        aria-expanded={ariaExpanded}
        ref={forwardedRef}
      >
        {iconProps => <IconClear {...iconProps} />}
      </IconButton>
    );
  },
);
