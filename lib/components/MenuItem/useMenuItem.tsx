import assert from 'assert';
import React, {
  KeyboardEvent,
  useContext,
  useRef,
  useEffect,
  ReactNode,
  MouseEvent,
} from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { touchableText } from '../../hooks/typography';
import { normalizeKey } from '../private/normalizeKey';
import { MenuRendererItemContext } from '../MenuRenderer/MenuRendererItemContext';
import { actionTypes, Action } from '../MenuRenderer/MenuRenderer.actions';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { atoms } from '../../css/atoms/atoms';
import * as styles from './useMenuItem.css';

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

type MenuItemTone = 'critical' | undefined;

export interface UseMenuItemProps {
  onClick?: () => void;
  formElement?: boolean;
  data?: DataAttributeMap;
  displayName?: string;
  tone?: MenuItemTone;
}
export function useMenuItem<MenuItemElement extends HTMLElement>({
  displayName = 'MenuItem',
  formElement = false,
  tone,
  onClick,
  data,
}: UseMenuItemProps) {
  const menuRendererItemContext = useContext(MenuRendererItemContext);

  assert(
    menuRendererItemContext !== null,
    `${displayName} must be rendered as an immediate child of a menu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItem`,
  );

  if (menuRendererItemContext === null) {
    throw new Error(`${displayName} element rendered outside menu context`);
  }

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

  const hoverBackground = tone === 'critical' ? 'criticalLight' : 'selection';

  return {
    MenuItemChildren,
    menuItemProps: {
      role: 'menuitem',
      tabIndex: -1,
      ref: menuItemRef,
      onKeyUp,
      onKeyDown,
      onMouseEnter: () => dispatch({ type: MENU_ITEM_HOVER, value: index }),
      onClick: (event: MouseEvent) => {
        event.stopPropagation();

        dispatch({ type: MENU_ITEM_CLICK, formElement });

        if (typeof onClick === 'function') {
          onClick();
        }
      },
      className: [
        styles.menuItem,
        touchableText[menuItemChildrenSize],
        atoms({
          display: 'flex',
          alignItems: 'center',
          width: 'full',
          paddingX: 'small',
          background: isHighlighted ? hoverBackground : undefined,
          cursor: 'pointer',
          textAlign: 'left',
          outline: 'none',
        }),
      ],
      ...buildDataAttributes(data),
    } as const,
  } as const;
}

interface MenuItemChildrenProps {
  children: ReactNode;
  tone: MenuItemTone;
}
function MenuItemChildren({ tone, children }: MenuItemChildrenProps) {
  return (
    <Box userSelect="none">
      <Text
        size={menuItemChildrenSize}
        baseline={false}
        tone={tone === 'critical' ? tone : undefined}
      >
        {children}
      </Text>
    </Box>
  );
}
