import React, {
  useCallback,
  AllHTMLAttributes,
  ReactNode,
  MouseEvent,
} from 'react';
import { useStyles } from 'sku/treat';
import { Box } from '..';
import { Overlay } from '../private/Overlay/Overlay';
import {
  useIconSize,
  useIconContainerSize,
  UseIconProps,
} from '../../hooks/useIcon';
import { useBackground } from '../Box/BackgroundContext';
import * as styleRefs from './IconButton.treat';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface IconButtonProps {
  label?: string;
  children: (props: UseIconProps) => ReactNode;
  onClick?: NativeButtonProps['onClick'];
  onMouseDown?: NativeButtonProps['onMouseDown'];
  keyboardAccessible?: boolean;
}

export const IconButton = ({
  label,
  onClick,
  onMouseDown,
  keyboardAccessible = true,
  children,
}: IconButtonProps) => {
  const styles = useStyles(styleRefs);
  const iconContainerStyles = useIconContainerSize();
  const iconStyles = useIconSize();
  const background = useBackground();

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
      cursor="pointer"
      className={styles.button}
      aria-label={label}
      title={label}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="touchable"
      height="touchable"
      transform="touchable"
      transition="touchable"
      tabIndex={!keyboardAccessible ? -1 : undefined}
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
          background={background === 'selection' ? 'card' : 'neutralLight'}
          transition="fast"
          borderRadius="full"
          className={styles.hoverOverlay}
        />
        {keyboardAccessible ? (
          <Overlay
            boxShadow="outlineFocus"
            transition="fast"
            borderRadius="full"
            className={styles.focusOverlay}
          />
        ) : null}
        <Box position="relative" className={iconStyles}>
          {children({ size: 'fill', tone: 'secondary' })}
        </Box>
      </Box>
    </Box>
  );
};
