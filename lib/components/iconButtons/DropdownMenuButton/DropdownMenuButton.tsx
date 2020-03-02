import React, { forwardRef, useCallback, MouseEvent } from 'react';
import { useStyles } from 'sku/treat';
import { Overlay } from '../../private/Overlay/Overlay';
import { IconButtonProps } from '../IconButton';
import { IconChevron, Text, Box } from '../..';

import * as IconButtonStyleRefs from '../IconButton.treat';
import * as DropdownMenuButtonStyleRefs from './DropdownMenuButton.treat';

export type DropdownMenuButtonProps = Pick<
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

export const DropdownMenuButton = forwardRef<
  HTMLButtonElement,
  DropdownMenuButtonProps
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
  ) => {
    const styles = useStyles({
      ...IconButtonStyleRefs,
      ...DropdownMenuButtonStyleRefs,
    });

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
        className={styles.button}
        aria-label={label}
        aria-haspopup={ariaHasPopUp}
        aria-expanded={ariaExpanded}
        title={label}
        onClick={onClick}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onMouseDown={handleMouseDown}
        // transform="touchable"
        // transition="touchable"
        tabIndex={!keyboardAccessible ? -1 : undefined}
      >
        {keyboardAccessible ? (
          <Overlay
            boxShadow="outlineFocus"
            transition="fast"
            borderRadius="full"
            className={styles.focusOverlay}
          />
        ) : null}
        <Box
          position="relative"
          display="flex"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent="center"
          pointerEvents="none"
        >
          <Box marginRight="xxsmall" flexShrink={0} flexGrow={0}>
            <Text>{label}</Text>
          </Box>
          <Box flexShrink={0} flexGrow={0}>
            <IconChevron direction={active ? 'up' : 'down'} size="small" />
          </Box>
        </Box>
      </Box>
    );
  },
);
