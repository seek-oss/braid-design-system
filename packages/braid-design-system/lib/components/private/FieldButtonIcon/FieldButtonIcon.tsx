import React, { useCallback, MouseEvent, forwardRef } from 'react';
import { ButtonIcon, ButtonIconProps } from '../../ButtonIcon/ButtonIcon';

export const FieldButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ label, onClick, onMouseDown, ...restProps }, forwardedRef) => {
    const handleMouseDown = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        if (typeof onMouseDown !== 'function') {
          return;
        }

        if (!onClick) {
          // Ensure that the mousedown event doesn't trigger
          // a blur on the currently focused element if there
          // isn't any click behaviour attached to this button.
          // If we don't do this, the currently focused element
          // will lose its visible focus state which may not be
          // desired in some scenarios — most notably when we're
          // using icon buttons within form fields, e.g. the
          // clear icon in TextField. In this case, from a user's
          // perspective, they haven't left the field, so losing
          // visible focus looks strange.
          event.preventDefault();
        }

        onMouseDown(event);
      },
      [onClick, onMouseDown],
    );

    return (
      <ButtonIcon
        ref={forwardedRef}
        label={label}
        tone="secondary"
        variant="transparent"
        onClick={onClick}
        onMouseDown={handleMouseDown}
        tabIndex={-1}
        {...restProps}
      />
    );
  },
);
