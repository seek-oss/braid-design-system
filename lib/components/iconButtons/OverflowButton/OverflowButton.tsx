import React, { forwardRef } from 'react';
import { IconButton, IconButtonProps } from '../IconButton';
import { IconOverflow } from '../../icons';

export type OverflowButtonProps = Pick<
  IconButtonProps,
  | 'onClick'
  | 'onMouseDown'
  | 'onKeyUp'
  | 'onKeyDown'
  | 'label'
  | 'keyboardAccessible'
  | 'active'
  | 'aria-haspopup'
  | 'aria-expanded'
>;

export const OverflowButton = forwardRef<
  HTMLButtonElement,
  OverflowButtonProps
>(
  (
    {
      label,
      onClick,
      onKeyUp,
      onKeyDown,
      onMouseDown,
      keyboardAccessible,
      active,
      'aria-haspopup': ariaHasPopUp,
      'aria-expanded': ariaExpanded,
    },
    forwardedRef,
  ) => (
    <IconButton
      label={label}
      onClick={onClick}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onMouseDown={onMouseDown}
      keyboardAccessible={keyboardAccessible}
      active={active}
      aria-haspopup={ariaHasPopUp}
      aria-expanded={ariaExpanded}
      ref={forwardedRef}
    >
      {(iconProps) => <IconOverflow {...iconProps} />}
    </IconButton>
  ),
);
