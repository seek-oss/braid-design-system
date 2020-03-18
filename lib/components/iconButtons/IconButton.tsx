import React, {
  useCallback,
  AllHTMLAttributes,
  ReactNode,
  MouseEvent,
  forwardRef,
} from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '..';
import { Overlay } from '../private/Overlay/Overlay';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import {
  useIconSize,
  useIconContainerSize,
  UseIconProps,
} from '../../hooks/useIcon';
import { useVirtualTouchable } from '../private/touchable/useVirtualTouchable';
import {
  useBackground,
  useBackgroundLightness,
} from '../Box/BackgroundContext';
import * as styleRefs from './IconButton.treat';

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
    const styles = useStyles(styleRefs);
    const iconContainerStyles = useIconContainerSize();
    const iconStyles = useIconSize();
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
        className={[styles.button, useVirtualTouchable()]}
        aria-label={label}
        aria-haspopup={ariaHasPopUp}
        aria-expanded={ariaExpanded}
        title={label}
        onClick={onClick}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onMouseDown={handleMouseDown}
        transform="touchable"
        transition="touchable"
        tabIndex={!keyboardAccessible ? -1 : undefined}
        {...buildDataAttributes(data)}
      >
        <Box
          position="relative"
          display="flex"
          className={iconContainerStyles}
          alignItems="center"
          justifyContent="center"
          pointerEvents="none"
        >
          <Overlay
            background={
              !background || background === 'card' || background === 'input'
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
          <Box position="relative" className={iconStyles}>
            {children({ size: 'fill', tone })}
          </Box>
        </Box>
      </Box>
    );
  },
);
