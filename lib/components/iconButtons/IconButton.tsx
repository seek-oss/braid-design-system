import React, {
  useCallback,
  AllHTMLAttributes,
  ReactNode,
  MouseEvent,
  forwardRef,
} from 'react';
import { Box } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { iconContainerSize, UseIconProps } from '../../hooks/useIcon';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import { ButtonOverlays, useButtonStyles } from '../Button/Button';
import * as styles from './IconButton.css';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface IconButtonProps {
  label: string;
  children: (props: UseIconProps) => ReactNode;
  onClick?: NativeButtonProps['onClick'];
  onMouseDown?: NativeButtonProps['onMouseDown'];
  onKeyUp?: NativeButtonProps['onKeyUp'];
  onKeyDown?: NativeButtonProps['onKeyDown'];
  'aria-haspopup'?: NativeButtonProps['aria-haspopup'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  keyboardAccessible?: boolean;
  active?: boolean;
  tone?: 'neutral' | 'secondary';
  data?: DataAttributeMap;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      label,
      onClick,
      onMouseDown,
      onKeyUp,
      onKeyDown,
      'aria-haspopup': ariaHasPopUp,
      'aria-expanded': ariaExpanded,
      keyboardAccessible = true,
      active = false,
      tone = 'secondary',
      data,
      children,
    },
    forwardedRef,
  ) => {
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

    const { className, ...buttonStyles } = useButtonStyles({
      variant: 'transparent',
      tone: 'neutral',
      size: 'standard',
      radius: 'full',
    });

    return (
      <Box
        component="button"
        type="button"
        ref={forwardedRef}
        zIndex={0}
        aria-label={label}
        aria-haspopup={ariaHasPopUp}
        aria-expanded={ariaExpanded}
        title={label}
        onClick={onClick}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onMouseDown={handleMouseDown}
        tabIndex={!keyboardAccessible ? -1 : undefined}
        {...(data ? buildDataAttributes(data) : undefined)}
        {...buttonStyles}
        className={[
          className,
          styles.button,
          virtualTouchable(),
          iconContainerSize(),
        ]}
      >
        <ButtonOverlays
          variant="transparent"
          tone="neutral"
          size="standard"
          radius="full"
          keyboardFocusable={keyboardAccessible}
          labelSpacing={false}
          forceActive={active}
        >
          {children({ tone })}
        </ButtonOverlays>
      </Box>
    );
  },
);
