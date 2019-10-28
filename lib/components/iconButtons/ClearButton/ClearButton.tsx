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
  | 'active'
  | 'aria-haspopup'
  | 'aria-expanded'
>;

export const ClearButton = forwardRef<HTMLButtonElement, ClearButtonProps>(
  (
    {
      label,
      onClick,
      onKeyDown,
      onMouseDown,
      keyboardAccessible,
      active,
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
        active={active}
        aria-haspopup={ariaHasPopUp}
        aria-expanded={ariaExpanded}
        ref={forwardedRef}
      >
        {iconProps => <IconClear {...iconProps} />}
      </IconButton>
    );
  },
);
