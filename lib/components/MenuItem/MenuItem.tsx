import assert from 'assert';
import React, {
  KeyboardEvent,
  useContext,
  useRef,
  useEffect,
  ReactNode,
} from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, Text, Link, Divider, IconTick } from '../';
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
import { BackgroundProvider } from '../Box/BackgroundContext';

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
  formElement?: boolean;
  data?: DataAttributeMap;
  displayName?: string;
}
function useMenuItem<MenuItemElement extends HTMLElement>({
  displayName = 'MenuItem',
  formElement = false,
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
      Enter: { type: MENU_ITEM_ENTER, formElement },
      ' ': { type: MENU_ITEM_SPACE, formElement },
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

    if (
      (!formElement && closeActionKeys.indexOf(targetKey) > -1) ||
      (formElement && targetKey === 'Escape')
    ) {
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
      dispatch({ type: MENU_ITEM_CLICK, formElement });

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
        borderRadius: 'standard',
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
  <Box userSelect="none">
    <Text size={menuItemChildrenSize} baseline={false}>
      {children}
    </Text>
  </Box>
);

interface MenuItemProps extends Pick<UseMenuItemProps, 'onClick' | 'data'> {
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

interface MenuItemCheckboxProps extends Omit<MenuItemProps, 'onClick'> {
  children: ReactNode;
  onChange: (checked: boolean) => void;
  checked: boolean;
}
export const MenuItemCheckbox = ({
  children,
  onChange,
  checked,
  data,
}: MenuItemCheckboxProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      {...useMenuItem<HTMLButtonElement>({
        onClick: () => onChange(!checked),
        formElement: true,
        data,
      })}
      aria-checked={checked}
      role="menuitemcheckbox"
      component="button"
      type="button"
      display="flex"
    >
      <Box
        paddingRight="xsmall"
        display="flex"
        alignItems="center"
        className={styles.checkboxRoot}
      >
        <Box
          borderRadius="standard"
          boxShadow="borderField"
          position="relative"
          className={styles.checkboxBorder}
          background="card"
        >
          <Box
            opacity={checked ? undefined : 0}
            transition="fast"
            width="full"
            height="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ padding: 2 }}
            position="relative"
            zIndex={1}
          >
            <BackgroundProvider value="formAccent">
              <IconTick size="fill" />
            </BackgroundProvider>
          </Box>
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            background="formAccent"
            borderRadius="standard"
            opacity={checked ? undefined : 0}
            transition="fast"
          />
        </Box>
      </Box>
      <Box paddingRight="xsmall">
        <MenuItemChildren>{children}</MenuItemChildren>
      </Box>
    </Box>
  );
};

export const MenuItemDivider = () => (
  <Box paddingX="xxsmall" paddingY="xxsmall">
    <Divider />
  </Box>
);
