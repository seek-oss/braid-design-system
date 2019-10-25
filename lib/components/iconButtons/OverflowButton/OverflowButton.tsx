import React, { forwardRef } from 'react';
import { IconButton, IconButtonProps } from '../IconButton';
import { IconOverflow } from '../..';

export type OverflowButtonProps = Pick<
  IconButtonProps,
  | 'onClick'
  | 'onMouseDown'
  | 'onKeyDown'
  | 'label'
  | 'keyboardAccessible'
  | 'aria-haspopup'
  | 'aria-expanded'
>;

export const OverflowButton = forwardRef<
  HTMLButtonElement,
  OverflowButtonProps
>(
  (
    {
      label = 'Options',
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
        {iconProps => <IconOverflow {...iconProps} />}
      </IconButton>
    );
  },
);
