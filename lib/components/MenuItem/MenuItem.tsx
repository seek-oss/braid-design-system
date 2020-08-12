import assert from 'assert';
import React, {
  KeyboardEvent,
  useContext,
  useRef,
  useEffect,
  ReactNode,
} from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, Text, Link } from '../';
import { LinkProps } from '../Link/Link';
import { useTouchableSpace } from '../../hooks/typography';
import { normalizeKey } from '../private/normalizeKey';
import { MenuContext } from '../MenuRenderer/MenuRenderer';
import { actionTypes, Action } from '../MenuRenderer/MenuRenderer.actions';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styleRefs from './MenuItem.treat';

interface MenuItemBaseProps {
  children: ReactNode;
  onClick?: () => void;
  data?: DataAttributeMap;
}

interface MenuItemLinkProps
  extends Pick<LinkProps, 'href' | 'target' | 'rel'>,
    MenuItemBaseProps {}

interface InternalMenuItemLinkProps extends MenuItemLinkProps {
  type: 'link';
}
interface InternalMenuItemButtonProps extends MenuItemBaseProps {
  type: 'button';
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

type MenuItemElement = HTMLButtonElement | HTMLAnchorElement;

const InternalMenuItem = (
  props: InternalMenuItemLinkProps | InternalMenuItemButtonProps,
) => {
  const { children, onClick, data, type } = props;
  const styles = useStyles(styleRefs);
  const menuContext = useContext(MenuContext);
  const isButton = type === 'button';

  assert(
    isButton === !('href' in props || 'target' in props || 'rel' in props),
    'A MenuItem does not accept link properties. Please use a `MenuItemLink` instead: https://seek-oss.github.io/braid-design-system/components/MenuItem',
  );

  assert(
    menuContext !== null,
    `A ${
      isButton ? 'MenuItem' : 'MenuItemLink'
    } must be rendered as an immediate child of a menu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuRenderer`,
  );

  if (menuContext === null) {
    throw new Error(
      `${isButton ? 'MenuItem' : 'MenuItemLink'} rendered outside menu context`,
    );
  }

  const { isHighlighted, index, dispatch, focusTrigger } = menuContext;
  const menuItemRef = useRef<MenuItemElement>(null);

  useEffect(() => {
    if (isHighlighted) {
      menuItemRef.current?.focus();
    }
  }, [isHighlighted]);

  const clickHandler = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  const onKeyDown = (event: KeyboardEvent<MenuItemElement>) => {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab') {
      dispatch({ type: MENU_ITEM_TAB });
    }

    const isArrowPress = targetKey.indexOf('Arrow') === 0;
    const isActionKeyPress = targetKey === 'Enter' || targetKey === ' ';

    // This prevents spacebar from scrolling the document,
    // but also prevents the click event from firing so we
    // can programmatically trigger a click event in the
    // 'onKeyUp' handler. This is to normalise behaviour
    // between buttons and links, e.g. to make spacebar
    // activate links, which is not standard behaviour.
    if (isArrowPress || isActionKeyPress) {
      event.preventDefault();
    }
  };

  const onKeyUp = (event: KeyboardEvent<MenuItemElement>) => {
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

    // Because we call 'preventDefault()' on enter/spacebar in
    // the 'onKeyDown' handler, we manually trigger a click here.
    if (targetKey === 'Enter' || targetKey === ' ') {
      menuItemRef.current?.click();
    }

    if (closeActionKeys.indexOf(targetKey) > -1) {
      focusTrigger();
    }
  };

  const menuItemTextSize = 'standard';

  return (
    <Box
      component={isButton ? 'button' : Link}
      type={isButton ? 'button' : undefined}
      role="menuitem"
      tabIndex={-1}
      ref={menuItemRef}
      href={'href' in props ? props.href : undefined}
      target={'target' in props ? props.target : undefined}
      rel={'rel' in props ? props.rel : undefined}
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
      textAlign="left"
      outline="none"
      className={[useTouchableSpace(menuItemTextSize), styles.menuItem]}
      {...buildDataAttributes(data)}
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

export const MenuItem = (props: MenuItemBaseProps) => (
  <InternalMenuItem {...props} type="button" />
);

export const MenuItemLink = (props: MenuItemLinkProps) => (
  <InternalMenuItem {...props} type="link" />
);
