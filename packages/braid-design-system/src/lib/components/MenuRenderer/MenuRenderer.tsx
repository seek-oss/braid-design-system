import assert from 'assert';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  type MouseEvent,
  type ReactNode,
  Children,
  useRef,
  useReducer,
  useEffect,
} from 'react';

import type { ResponsiveSpace } from '../../css/atoms/atoms';
import flattenChildren from '../../utils/flattenChildren';
import { Box, type BoxProps } from '../Box/Box';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { MenuItemDivider } from '../MenuItemDivider/MenuItemDivider';
import {
  Popover,
  type TriggerProps as BaseTriggerProps,
} from '../Popover/Popover';
import { Overlay } from '../private/Overlay/Overlay';
import { ScrollContainer } from '../private/ScrollContainer/ScrollContainer';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { getNextIndex } from '../private/getNextIndex';
import { normalizeKey } from '../private/normalizeKey';

import { type Action, actionTypes } from './MenuRenderer.actions';
import { MenuRendererContext } from './MenuRendererContext';
import { MenuRendererItemContext } from './MenuRendererItemContext';

import * as styles from './MenuRenderer.css';
import { vars } from '../../themes/vars.css';

interface TriggerProps extends BaseTriggerProps {
  component: BoxProps['component'];
  onClick: (event: MouseEvent) => void;
}
interface TriggerState {
  open: boolean;
}
interface CloseReasonExit {
  reason: 'exit';
}
interface CloseReasonSelection {
  reason: 'selection';
  index: number;
  id?: string;
}
export type MenuSize = 'standard' | 'small';
type CloseReason = CloseReasonSelection | CloseReasonExit;
export interface MenuRendererProps {
  trigger: (props: TriggerProps, state: TriggerState) => ReactNode;
  align?: 'left' | 'right';
  offsetSpace?: ResponsiveSpace;
  size?: MenuSize;
  width?: keyof typeof styles.width | 'content';
  placement?: 'top' | 'bottom';
  onOpen?: () => void;
  onClose?: (closeReason: CloseReason) => void;
  data?: DataAttributeMap;
  reserveIconSpace?: boolean;
  children: ReactNode;
}

const {
  MENU_TRIGGER_UP,
  MENU_ITEM_UP,
  MENU_TRIGGER_DOWN,
  MENU_ITEM_DOWN,
  MENU_ITEM_ESCAPE,
  MENU_ITEM_TAB,
  MENU_ITEM_TRIGGER_KEYBOARD,
  MENU_ITEM_SPACE,
  MENU_ITEM_TRIGGER_CLICK,
  MENU_ITEM_HOVER,
  MENU_TRIGGER_KEYBOARD,
  MENU_TRIGGER_CLICK,
  POPOVER_CLOSE,
  WINDOW_RESIZE,
} = actionTypes;

interface State {
  open: boolean;
  highlightIndex: number;
  closeReason: CloseReason;
}

const CLOSED_INDEX = -1;
const CLOSE_REASON_EXIT: CloseReasonExit = { reason: 'exit' };
const initialState: State = {
  open: false,
  highlightIndex: CLOSED_INDEX,
  closeReason: CLOSE_REASON_EXIT,
};

export const MenuRenderer = ({
  onOpen,
  onClose,
  trigger,
  size = 'standard',
  width = 'content',
  align = 'left',
  offsetSpace = 'none',
  reserveIconSpace = false,
  placement = 'bottom',
  children,
  data,
  ...restProps
}: MenuRendererProps) => {
  // Todo - Fix this. it is not hooked up to anything
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lastOpen = useRef(false);
  const items = flattenChildren(children);
  const itemCount = items.filter((item) => !isDivider(item)).length;

  assert(
    items.every(
      (item) =>
        typeof item === 'object' &&
        'type' in item &&
        // @ts-expect-error
        item.type.__isMenuItem__,
    ),
    'All child nodes within a menu component must be a MenuItem, MenuItemLink, MenuItemCheckbox or MenuItemDivider: https://seek-oss.github.io/braid-design-system/components/MenuRenderer',
  );

  const [{ open, highlightIndex, closeReason }, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case MENU_TRIGGER_UP:
        case MENU_ITEM_UP: {
          return {
            ...state,
            open: true,
            closeReason: CLOSE_REASON_EXIT,
            highlightIndex: getNextIndex(-1, state.highlightIndex, itemCount),
          };
        }
        case MENU_TRIGGER_DOWN:
        case MENU_ITEM_DOWN: {
          return {
            ...state,
            open: true,
            closeReason: CLOSE_REASON_EXIT,
            highlightIndex: getNextIndex(1, state.highlightIndex, itemCount),
          };
        }
        case MENU_ITEM_ESCAPE:
        case POPOVER_CLOSE:
        case MENU_ITEM_TAB: {
          return {
            ...state,
            open: false,
            closeReason: CLOSE_REASON_EXIT,
            highlightIndex: CLOSED_INDEX,
          };
        }
        case MENU_ITEM_SPACE:
        case MENU_ITEM_TRIGGER_KEYBOARD:
        case MENU_ITEM_TRIGGER_CLICK: {
          // Don't close the menu if the user clicked a "form element" item, e.g. checkbox
          if ('formElement' in action && action.formElement) {
            return state;
          }

          return {
            ...state,
            open: false,
            closeReason: {
              reason: 'selection',
              index: action.index,
              id: action.id,
            },
            highlightIndex: CLOSED_INDEX,
          };
        }
        case MENU_ITEM_HOVER: {
          return { ...state, highlightIndex: action.value };
        }
        case MENU_TRIGGER_KEYBOARD: {
          const nextOpen = !state.open;
          return {
            ...state,
            open: nextOpen,
            closeReason: CLOSE_REASON_EXIT,
            highlightIndex: nextOpen ? 0 : CLOSED_INDEX,
          };
        }
        case MENU_TRIGGER_CLICK: {
          const nextOpen = !state.open;

          return {
            ...state,
            open: nextOpen,
            closeReason: CLOSE_REASON_EXIT,
          };
        }
        case WINDOW_RESIZE: {
          return {
            ...state,
          };
        }
        default:
          return state;
      }
    },
    initialState,
  );

  useEffect(() => {
    if (lastOpen.current === open) {
      return;
    }

    if (open && typeof onOpen === 'function') {
      onOpen();
    } else if (!open && typeof onClose === 'function') {
      onClose(closeReason);
    }

    lastOpen.current = open;
  }, [onOpen, onClose, open, closeReason]);

  const focusTrigger = () => {
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: WINDOW_RESIZE });
    };

    if (open) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  return (
    <Popover
      align={align}
      placement={placement}
      offsetSpace={offsetSpace}
      open={open}
      onClose={() => dispatch({ type: POPOVER_CLOSE })}
      onKeyDown={(event) => {
        const targetKey = normalizeKey(event);

        // Space key in keyup/keydown handler in Firefox triggers a click event.
        // This means the menu never opens, by returning early for Firefox the
        // menu is opened by firing the click handler. Only trade off is the
        // first menu item is not highlighted automatically, but considering
        // space keyboard interactions are optional this is acceptable.
        //   See Firefox bug details: https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
        //   See WAI-ARIA keyboard interactions: https://www.w3.org/WAI/ARIA/apg/patterns/menu/#keyboard-interaction-12
        //
        // Firefox useragent check taken from the `bowser` package:
        // https://github.com/lancedikson/bowser/blob/ea8d9c54271d7b52fecd507ae8b1ba495842bc68/src/parser-browsers.js#L520
        if (
          targetKey === ' ' &&
          /firefox|iceweasel|fxios/i.test(navigator.userAgent)
        ) {
          return;
        }

        const action: Record<string, Action> = {
          ArrowDown: { type: MENU_TRIGGER_DOWN },
          ArrowUp: { type: MENU_TRIGGER_UP },
        };

        if (action[targetKey]) {
          dispatch(action[targetKey]);
        }
      }}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
      trigger={(props) =>
        trigger(
          {
            ...props,
            component: 'button',
            onClick: (event: MouseEvent) => {
              event.stopPropagation();
              event.preventDefault();

              if (event.detail === 0) {
                dispatch({ type: MENU_TRIGGER_KEYBOARD });
              } else {
                dispatch({ type: MENU_TRIGGER_CLICK });
              }
            },
          },
          { open },
        )
      }
    >
      <Menu
        size={size}
        width={width}
        placement={placement}
        highlightIndex={highlightIndex}
        reserveIconSpace={reserveIconSpace}
        focusTrigger={focusTrigger}
        dispatch={dispatch}
      >
        {items}
      </Menu>
    </Popover>
  );
};

const isDivider = (node: ReactNode) =>
  typeof node === 'object' &&
  node !== null &&
  'type' in node &&
  node.type === MenuItemDivider;

const borderRadius = 'large';

interface MenuProps {
  size: NonNullable<MenuRendererProps['size']>;
  width: NonNullable<MenuRendererProps['width']>;
  placement: NonNullable<MenuRendererProps['placement']>;
  reserveIconSpace: NonNullable<MenuRendererProps['reserveIconSpace']>;
  dispatch: (action: Action) => void;
  focusTrigger: () => void;
  highlightIndex: number;
  children: ReactNode[];
  position?: undefined | 'relative'; // 'relative' is used for screenshot testing
}

export function Menu({
  size,
  width,
  placement,
  children,
  dispatch,
  focusTrigger,
  highlightIndex,
  reserveIconSpace,
  position,
}: MenuProps) {
  let dividerCount = 0;

  const menuYPadding =
    useBraidTheme().legacy && size === 'small' ? 'xsmall' : 'xxsmall';

  return (
    <MenuRendererContext.Provider value={{ size, reserveIconSpace }}>
      <Box
        role="menu"
        position={position}
        boxShadow={placement === 'top' ? 'small' : 'medium'}
        borderRadius={borderRadius}
        background="surface"
        transition="fast"
        overflow="hidden"
        style={assignInlineVars({
          [styles.menuYPadding]: vars.space[menuYPadding],
        })}
        className={[
          styles.animation,
          width !== 'content' && styles.width[width],
        ]}
      >
        <ScrollContainer
          direction="vertical"
          fadeSize={size === 'standard' ? 'medium' : 'small'}
        >
          <Box paddingY={menuYPadding} className={styles.menuHeightLimit}>
            {Children.map(children, (item, i) => {
              if (isDivider(item)) {
                dividerCount++;
                return item;
              }

              const menuItemIndex = i - dividerCount;

              return (
                <MenuRendererItemContext.Provider
                  key={menuItemIndex}
                  value={{
                    isHighlighted: menuItemIndex === highlightIndex,
                    index: menuItemIndex,
                    dispatch,
                    focusTrigger,
                  }}
                >
                  {item}
                </MenuRendererItemContext.Provider>
              );
            })}
          </Box>
        </ScrollContainer>
        <Overlay
          boxShadow="borderNeutralLight"
          borderRadius={borderRadius}
          visible
        />
      </Box>
    </MenuRendererContext.Provider>
  );
}
