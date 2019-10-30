import React, {
  KeyboardEvent,
  useContext,
  useRef,
  useEffect,
  ReactNode,
} from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { useTouchableSpace } from '../../hooks/typography';
import { normalizeKey } from '../private/normalizeKey';
import { OverflowMenuContext } from '../OverflowMenu/OverflowMenu';
import { actionTypes, Action } from '../OverflowMenu/OverflowMenu.actions';
import * as styleRefs from './OverflowMenuItem.treat';
import { Text } from '../Text/Text';

type MenuType = 'link' | 'button';

export interface OverflowMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  type?: MenuType;
}

const {
  MENU_ITEM_UP,
  MENU_ITEM_DOWN,
  MENU_ITEM_ESCAPE,
  MENU_ITEM_TAB,
  MENU_ITEM_ENTER,
  MENU_ITEM_SPACE,
  MENU_ITEM_CLICK,
  MENU_ITEM_HOVER,
} = actionTypes;

export const OverflowMenuItem = ({
  children,
  onClick,
  type = 'button',
}: OverflowMenuItemProps) => {
  const styles = useStyles(styleRefs);
  const menuContext = useContext(OverflowMenuContext);

  if (!menuContext) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(
        'An OverflowMenuItem must be rendered as an immediate child of an OverflowMenu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/OverflowMenu',
      );
    } else {
      throw new Error('OverflowMenuItem rendered outside menu context');
    }
  }

  const { isHighlighted, index, dispatch, focusTrigger } = menuContext;
  const menuItemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (menuItemRef.current && isHighlighted) {
      menuItemRef.current.focus();
    }
  }, [isHighlighted]);

  const clickHandler = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  const onKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    const targetKey = normalizeKey(event);
    const closeActionKeys = ['Enter', ' ', 'Escape'];

    const action: Record<string, Action> = {
      ArrowDown: { type: MENU_ITEM_DOWN },
      ArrowUp: { type: MENU_ITEM_UP },
      Enter: { type: MENU_ITEM_ENTER },
      ' ': { type: MENU_ITEM_SPACE },
      Escape: { type: MENU_ITEM_ESCAPE },
    };

    if (action[targetKey]) {
      dispatch(action[targetKey]);
    }

    if (targetKey === 'Enter' || targetKey === ' ') {
      clickHandler();
    }

    if (closeActionKeys.indexOf(targetKey) > -1) {
      focusTrigger();
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab') {
      dispatch({ type: MENU_ITEM_TAB });
    }

    // Prevent arrow keys scrolling the document while navigating the menu
    const isArrowPress = targetKey.indexOf('Arrow') === 0;
    // Prevent enter or space press from triggering the click handler
    const isActionKeyPress = targetKey === 'Enter' || targetKey === ' ';

    if (isArrowPress || isActionKeyPress) {
      event.preventDefault();
    }
  };

  const menuItemTextSize = 'standard';

  return (
    <Box
      component={type === 'button' ? 'button' : undefined}
      role={type === 'link' ? 'link' : 'menuitem'}
      tabIndex={-1}
      ref={menuItemRef}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onMouseEnter={() => dispatch({ type: MENU_ITEM_HOVER, value: index })}
      onClick={() => {
        dispatch({ type: MENU_ITEM_CLICK });
        clickHandler();
      }}
      display="block"
      width="full"
      paddingX="small"
      background={isHighlighted ? 'selection' : undefined}
      cursor="pointer"
      className={classnames(
        useTouchableSpace(menuItemTextSize),
        styles.menuItem,
      )}
    >
      {/*
        Rendering Text component to provide rendering context
        for both icons and text labels
      */}
      <Text size={menuItemTextSize} baseline={false}>
        {children}
      </Text>
    </Box>
  );
};
