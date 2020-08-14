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
import { useBoxStyles } from '../Box/useBoxStyles';

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

const menuItemChildrenSize = 'standard';

interface UseMenuItemProps {
  onClick?: () => void;
  data?: DataAttributeMap;
  displayName?: string;
}
function useMenuItem<MenuItemElement extends HTMLElement>({
  displayName = 'MenuItem',
  onClick,
  data,
}: UseMenuItemProps) {
  const styles = useStyles(styleRefs);
  const menuContext = useContext(MenuContext);

  assert(
    menuContext !== null,
    `${displayName} must be rendered as an immediate child of a menu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItem`,
  );

  if (menuContext === null) {
    throw new Error(`${displayName} element rendered outside menu context`);
  }

  const { isHighlighted, index, dispatch, focusTrigger } = menuContext;
  const menuItemRef = useRef<MenuItemElement>(null);

  useEffect(() => {
    if (isHighlighted) {
      menuItemRef.current?.focus();
    }
  }, [isHighlighted]);

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

  return {
    role: 'menuitem',
    tabIndex: -1,
    ref: menuItemRef,
    onKeyUp,
    onKeyDown,
    onMouseEnter: () => dispatch({ type: MENU_ITEM_HOVER, value: index }),
    onClick: () => {
      dispatch({ type: MENU_ITEM_CLICK });

      if (typeof onClick === 'function') {
        onClick();
      }
    },
    className: [
      styles.menuItem,
      useTouchableSpace(menuItemChildrenSize),
      useBoxStyles({
        component: null,
        display: 'block',
        width: 'full',
        paddingX: 'small',
        background: isHighlighted ? 'selection' : undefined,
        cursor: 'pointer',
        textAlign: 'left',
        outline: 'none',
      }),
    ],
    ...buildDataAttributes(data),
  } as const;
}

interface MenuItemChildrenProps {
  children: ReactNode;
}
const MenuItemChildren = ({ children }: MenuItemChildrenProps) => (
  <Text size={menuItemChildrenSize} baseline={false}>
    {children}
  </Text>
);

interface MenuItemProps extends Omit<UseMenuItemProps, 'displayName'> {
  children: ReactNode;
}
export const MenuItem = ({ children, onClick, data }: MenuItemProps) => (
  <Box
    {...useMenuItem<HTMLButtonElement>({ onClick, data })}
    component="button"
    type="button"
  >
    <MenuItemChildren>{children}</MenuItemChildren>
  </Box>
);

interface MenuItemLinkProps
  extends MenuItemProps,
    Pick<LinkProps, 'href' | 'target' | 'rel'> {}
export const MenuItemLink = ({
  href,
  target,
  rel,
  onClick,
  data,
  children,
}: MenuItemLinkProps) => (
  <Link
    {...useMenuItem<HTMLAnchorElement>({
      displayName: 'MenuItemLink',
      onClick,
      data,
    })}
    href={href}
    target={target}
    rel={rel}
  >
    <MenuItemChildren>{children}</MenuItemChildren>
  </Link>
);
