import React, { forwardRef } from 'react';
import type { IconButtonProps } from '../IconButton';
import { IconButton } from '../IconButton';
import { IconClear } from '../../icons';

export type ClearButtonProps = Pick<
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
  | 'tone'
  | 'data'
>;

export const ClearButton = forwardRef<HTMLButtonElement, ClearButtonProps>(
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
      tone,
      data,
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
      tone={tone}
      ref={forwardedRef}
      data={data}
    >
      {(iconProps) => <IconClear {...iconProps} />}
    </IconButton>
  ),
);
