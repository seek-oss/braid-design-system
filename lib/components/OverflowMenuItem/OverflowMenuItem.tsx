import React, {
  KeyboardEvent,
  useContext,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { useTouchableSpace, useText } from '../../hooks/typography';
import { normalizeKey } from '../private/normalizeKey';
import { OverflowMenuContext } from '../OverflowMenu/OverflowMenu';
import * as styleRefs from './OverflowMenuItem.treat';

type MenuType = 'link' | 'button';

export interface OverflowMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  type?: MenuType;
}
export const OverflowMenuItem = ({
  children,
  onClick,
  type = 'button',
}: OverflowMenuItemProps) => {
  const styles = useStyles(styleRefs);

  const menuContext = useContext(OverflowMenuContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!menuContext) {
      throw new Error(
        'An OverflowMenuItem must be rendered as an immediate child of an OverflowMenu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/OverflowMenu',
      );
    }
  }

  const {
    isHighlighted,
    keyboardNavigationHandler,
    mouseNavigationHandler,
    closeMenu,
  } = menuContext;
  const menuItemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (menuItemRef.current && isHighlighted) {
      menuItemRef.current.focus();
    }
  }, [isHighlighted]);

  const clickHandler = useCallback(() => {
    closeMenu();

    if (typeof onClick === 'function') {
      onClick();
    }
  }, [closeMenu, onClick]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      const targetKey = normalizeKey(event);

      if (targetKey === 'Enter') {
        // Prevents the double trigger of `Enter` firing onKeyDown
        // and subsequently triggering the `onClick` handler.
        event.preventDefault();
        clickHandler();
      } else {
        keyboardNavigationHandler(event);
      }
    },
    [clickHandler, keyboardNavigationHandler],
  );

  const menuItemTextSize = 'standard';

  return (
    <Box
      component={type === 'button' ? 'button' : undefined}
      role={type === 'link' ? 'link' : 'menuitem'}
      tabIndex={-1}
      ref={menuItemRef}
      onKeyDown={onKeyDown}
      onMouseEnter={mouseNavigationHandler}
      onClick={clickHandler}
      display="block"
      width="full"
      paddingX="small"
      background={isHighlighted ? 'selection' : undefined}
      cursor="pointer"
      className={classnames(
        useTouchableSpace(menuItemTextSize),
        useText({ size: menuItemTextSize, baseline: false }),
        styles.menuItem,
      )}
    >
      {children}
    </Box>
  );
};
