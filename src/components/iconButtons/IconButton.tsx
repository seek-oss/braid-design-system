import React, {
  useCallback,
  AllHTMLAttributes,
  ReactNode,
  MouseEvent,
  forwardRef,
} from 'react';
import { Box } from '../Box/Box';
import { Overlay } from '../private/Overlay/Overlay';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { iconSize, iconContainerSize, UseIconProps } from '../../hooks/useIcon';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import {
  useBackground,
  useBackgroundLightness,
} from '../Box/BackgroundContext';
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
    const background = useBackground();
    const backgroundLightness = useBackgroundLightness();

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
      <Box
        component="button"
        type="button"
        ref={forwardedRef}
        cursor="pointer"
        outline="none"
        className={[styles.button, virtualTouchable()]}
        zIndex={0}
        aria-label={label}
        aria-haspopup={ariaHasPopUp}
        aria-expanded={ariaExpanded}
        title={label}
        onClick={onClick}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onMouseDown={handleMouseDown}
        transform={{ active: 'touchable' }}
        transition="touchable"
        tabIndex={!keyboardAccessible ? -1 : undefined}
        {...(data ? buildDataAttributes(data) : undefined)}
      >
        <Box
          position="relative"
          display="flex"
          className={iconContainerSize()}
          alignItems="center"
          justifyContent="center"
          pointerEvents="none"
        >
          <Overlay
            background={
              background === 'body' ||
              background === 'card' ||
              background === 'input'
                ? 'neutralLight'
                : 'card'
            }
            transition="fast"
            borderRadius="full"
            className={[
              styles.hoverOverlay,
              active && styles.forceActive,
              backgroundLightness === 'dark' && styles.darkBackground,
            ]}
          />
          {keyboardAccessible ? (
            <Overlay
              boxShadow="outlineFocus"
              transition="fast"
              borderRadius="full"
              className={styles.focusOverlay}
              onlyVisibleForKeyboardNavigation
            />
          ) : null}
          <Box position="relative" className={iconSize()}>
            {children({ size: 'fill', tone })}
          </Box>
        </Box>
      </Box>
    );
  },
);
