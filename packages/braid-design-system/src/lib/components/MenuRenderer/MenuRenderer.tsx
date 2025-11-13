import assert from 'assert';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  type FC,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type Ref,
  Children,
  useRef,
  useReducer,
  useEffect,
} from 'react';

import type { ResponsiveSpace } from '../../css/atoms/atoms';
import flattenChildren from '../../utils/flattenChildren';
import { Box } from '../Box/Box';
import { MenuItemDivider } from '../MenuItemDivider/MenuItemDivider';
import { Overlay } from '../private/Overlay/Overlay';
import { Popover, type PopoverProps } from '../private/Popover/Popover';
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

interface TriggerProps {
  'aria-haspopup': boolean;
  'aria-expanded': boolean;
  ref: Ref<HTMLButtonElement>;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
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
  placement?: Extract<PopoverProps['placement'], 'top' | 'bottom'>;
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
  MENU_ITEM_ENTER,
  MENU_ITEM_SPACE,
  MENU_ITEM_CLICK,
  MENU_ITEM_HOVER,
  MENU_TRIGGER_ENTER,
  MENU_TRIGGER_SPACE,
  MENU_TRIGGER_CLICK,
  MENU_CLOSE,
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

export const MenuRenderer: FC<MenuRendererProps> = ({
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
}) => {
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
        case MENU_CLOSE: {
          return {
            ...state,
            open: false,
            closeReason: CLOSE_REASON_EXIT,
            highlightIndex: CLOSED_INDEX,
          };
        }
        case MENU_ITEM_ENTER:
        case MENU_ITEM_SPACE:
        case MENU_ITEM_CLICK: {
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
        case MENU_TRIGGER_ENTER:
        case MENU_TRIGGER_SPACE: {
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

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
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

    // Prevent arrow keys scrolling the document while navigating the menu
    const isArrowPress = targetKey.indexOf('Arrow') === 0;
    // Prevent enter or space press from triggering the click handler
    const isActionKeyPress = targetKey === 'Enter' || targetKey === ' ';

    if (isArrowPress || isActionKeyPress) {
      event.preventDefault();
    }

    const action: Record<string, Action> = {
      ArrowDown: { type: MENU_TRIGGER_DOWN },
      ArrowUp: { type: MENU_TRIGGER_UP },
      Enter: { type: MENU_TRIGGER_ENTER },
      ' ': { type: MENU_TRIGGER_SPACE },
    };

    if (action[targetKey]) {
      dispatch(action[targetKey]);
    }
  };

  const triggerProps = {
    'aria-haspopup': true,
    'aria-expanded': open,
    role: 'button',
    tabIndex: 0,
    ref: buttonRef,
    onKeyDown,
    onClick: (event: MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
      dispatch({ type: MENU_TRIGGER_CLICK });
    },
  };

  return (
    <Box {...buildDataAttributes({ data, validateRestProps: restProps })}>
      {trigger(triggerProps, { open })}

      <Popover
        open={open}
        onClose={() => dispatch({ type: MENU_CLOSE })}
        triggerRef={triggerProps.ref}
        align={align === 'left' ? 'start' : 'end'}
        placement={placement}
        offsetSpace={offsetSpace}
        role={false}
      >
        <Menu
          align={align}
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
    </Box>
  );
};

const isDivider = (node: ReactNode) =>
  typeof node === 'object' &&
  node !== null &&
  'type' in node &&
  node.type === MenuItemDivider;

const borderRadius = 'large';

interface MenuProps {
  align: NonNullable<MenuRendererProps['align']>;
  size: NonNullable<MenuRendererProps['size']>;
  width: NonNullable<MenuRendererProps['width']>;
  placement: NonNullable<MenuRendererProps['placement']>;
  reserveIconSpace: NonNullable<MenuRendererProps['reserveIconSpace']>;
  dispatch: (action: Action) => void;
  focusTrigger: () => void;
  highlightIndex: number;
  children: ReactNode[];
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
}: MenuProps) {
  let dividerCount = 0;

  const menuYPadding = 'xxsmall';

  const inlineVars = assignInlineVars({
    [styles.menuYPadding]: vars.space[menuYPadding],
  });

  return (
    <MenuRendererContext.Provider value={{ size, reserveIconSpace }}>
      <Box
        role="menu"
        position="relative"
        boxShadow={placement === 'top' ? 'small' : 'medium'}
        borderRadius={borderRadius}
        background="surface"
        transition="fast"
        overflow="hidden"
        style={inlineVars}
        className={width !== 'content' && styles.width[width]}
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
