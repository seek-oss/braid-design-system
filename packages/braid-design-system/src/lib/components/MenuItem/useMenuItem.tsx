import assert from 'assert';
import React, {
  type KeyboardEvent,
  type ReactNode,
  type MouseEvent,
  type ReactElement,
  useContext,
  useRef,
  useEffect,
} from 'react';
import type { BadgeProps } from '../Badge/Badge';
import { type BoxProps, Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { normalizeKey } from '../private/normalizeKey';
import { MenuRendererItemContext } from '../MenuRenderer/MenuRendererItemContext';
import { type Action, actionTypes } from '../MenuRenderer/MenuRenderer.actions';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { atoms } from '../../css/atoms/atoms';
import { iconSize } from '../../hooks/useIcon';
import * as styles from './useMenuItem.css';
import { MenuRendererContext } from '../MenuRenderer/MenuRendererContext';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { iconSlotSpace } from '../private/iconSlotSpace';
import { badgeSlotSpace } from '../private/badgeSlotSpace';
import { virtualTouchable } from '../private/touchable/virtualTouchable.css';
import { DefaultBadgePropsProvider } from '../Badge/defaultBadgeProps';

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

type MenuItemTone = 'critical' | undefined;

export interface UseMenuItemProps {
  onClick?: () => void;
  formElement?: boolean;
  data?: DataAttributeMap;
  displayName?: string;
  tone?: MenuItemTone;
  id?: string;
}
export function useMenuItem<MenuItemElement extends HTMLElement>({
  displayName = 'MenuItem',
  formElement = false,
  tone,
  onClick,
  data,
  id,
  ...restProps
}: UseMenuItemProps) {
  const menuRendererContext = useContext(MenuRendererContext);
  const menuRendererItemContext = useContext(MenuRendererItemContext);

  assert(
    menuRendererContext !== null && menuRendererItemContext !== null,
    `${displayName} must be rendered as an immediate child of a menu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItem`,
  );

  if (menuRendererItemContext === null) {
    throw new Error(`${displayName} element rendered outside menu context`);
  }

  const { size } = menuRendererContext;
  const { isHighlighted, index, dispatch, focusTrigger } =
    menuRendererItemContext;
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
      Enter: { type: MENU_ITEM_ENTER, formElement, index, id },
      ' ': { type: MENU_ITEM_SPACE, formElement, index, id },
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

  const hoverBackground =
    tone === 'critical' ? 'criticalLight' : 'formAccentSoft';

  return {
    MenuItemChildren,
    menuItemProps: {
      role: 'menuitem',
      tabIndex: -1,
      ref: menuItemRef,
      id,
      onKeyUp,
      onKeyDown,
      onMouseEnter: () => dispatch({ type: MENU_ITEM_HOVER, value: index }),
      onClick: (event: MouseEvent) => {
        event.stopPropagation();

        dispatch({ type: MENU_ITEM_CLICK, formElement, index, id });

        if (typeof onClick === 'function') {
          onClick();
        }
      },
      background: isHighlighted ? hoverBackground : undefined,
      className: [
        styles.menuItem,
        size === 'small' ? virtualTouchable : undefined,
        atoms({
          display: 'flex',
          alignItems: 'center',
          width: 'full',
          paddingX: size === 'standard' ? 'small' : 'small',
          paddingY: size === 'standard' ? undefined : 'xsmall',
          height: size === 'standard' ? 'touchable' : undefined,
          cursor: 'pointer',
          textAlign: 'left',
          outline: 'none',
        }),
      ],
      ...buildDataAttributes({ data, validateRestProps: restProps }),
    } as BoxProps,
  } as const;
}

export function MenuItemLeftSlot({ children }: { children?: ReactNode }) {
  const menuRendererContext = useContext(MenuRendererContext);

  assert(
    menuRendererContext !== null,
    `MenuItem must be rendered as an immediate child of a menu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItem`,
  );

  const { size } = menuRendererContext;
  const iconSpace = useBraidTheme().legacy ? 'small' : iconSlotSpace;
  return (
    <Box
      component="span"
      paddingRight={iconSpace}
      flexShrink={0}
      minWidth={0}
      position="relative"
      display="flex"
      alignItems="center"
      className={styles.menuItemLeftSlot}
    >
      <Box component="span" display="block" className={iconSize({ size })}>
        &nbsp;
      </Box>
      {children ? (
        <Box position="absolute" display="flex">
          {children}
        </Box>
      ) : null}
    </Box>
  );
}

export interface MenuItemChildrenProps {
  children: ReactNode;
  tone: MenuItemTone;
  badge: ReactElement<BadgeProps> | undefined;
  icon: ReactNode | undefined;
  formElement?: boolean;
}
function MenuItemChildren({
  icon,
  tone,
  children,
  badge,
  formElement = false,
}: MenuItemChildrenProps) {
  const menuRendererContext = useContext(MenuRendererContext);
  const badgeSpace = useBraidTheme().legacy ? 'small' : badgeSlotSpace;

  assert(
    menuRendererContext !== null,
    `MenuItem must be rendered as an immediate child of a menu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItem`,
  );

  assert(
    // @ts-expect-error
    !badge || badge.type.__isBadge__,
    `MenuItem badge prop can only be an instance of Badge. e.g. <MenuItem badge={<Badge>New</Badge>}>`,
  );

  const { size, reserveIconSpace } = menuRendererContext;

  return (
    <Box component="span" display="flex" alignItems="center" minWidth={0}>
      {!formElement && (icon || reserveIconSpace) ? (
        <MenuItemLeftSlot>
          <Text
            size={size}
            tone={tone && tone === 'critical' ? tone : undefined}
          >
            {icon}
          </Text>
        </MenuItemLeftSlot>
      ) : null}
      <Box component="span" minWidth={0}>
        <Text
          size={size}
          tone={tone === 'critical' ? tone : undefined}
          maxLines={1}
        >
          {children}
        </Text>
      </Box>
      {badge ? (
        <Box
          component="span"
          paddingLeft={badgeSpace}
          flexShrink={0}
          minWidth={0}
        >
          <DefaultBadgePropsProvider bleedY>{badge}</DefaultBadgePropsProvider>
        </Box>
      ) : null}
    </Box>
  );
}
