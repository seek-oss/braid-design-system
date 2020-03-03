import React, { forwardRef } from 'react';
import { IconButton, IconButtonProps } from '../IconButton';
import { IconClear } from '../..';

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
  ) => {
    return (
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
        {iconProps => <IconClear {...iconProps} />}
      </IconButton>
    );
  },
);
