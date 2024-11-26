import assert from 'assert';
import React, {
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type Ref,
  Children,
  useRef,
  useReducer,
  useEffect,
} from 'react';
import flattenChildren from '../../utils/flattenChildren';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { MenuItemDivider } from '../MenuItemDivider/MenuItemDivider';
import { normalizeKey } from '../private/normalizeKey';
import { getNextIndex } from '../private/getNextIndex';
import { Overlay } from '../private/Overlay/Overlay';
import { type Action, actionTypes } from './MenuRenderer.actions';
import { MenuRendererContext } from './MenuRendererContext';
import { MenuRendererItemContext } from './MenuRendererItemContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './MenuRenderer.css';
import { triggerVars } from './MenuRenderer.css';
import { BraidPortal } from '../BraidPortal/BraidPortal';
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface TriggerProps {
  'aria-haspopup': boolean;
  'aria-expanded': boolean;
  ref: Ref<HTMLButtonElement>;
  onKeyUp: (event: KeyboardEvent<HTMLButtonElement>) => void;
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
type CloseReason = CloseReasonSelection | CloseReasonExit;
export interface MenuRendererProps {
  trigger: (props: TriggerProps, state: TriggerState) => ReactNode;
  align?: 'left' | 'right';
  offsetSpace?: ResponsiveSpace;
  width?: keyof typeof styles.width | 'content';
  placement?: 'top' | 'bottom';
  onOpen?: () => void;
  onClose?: (closeReason: CloseReason) => void;
  data?: DataAttributeMap;
  reserveIconSpace?: boolean;
  children: ReactNode;
}

const {
  CLIENT_ENVIRONMENT,
  MENU_TRIGGER_UP,
  MENU_ITEM_UP,
  MENU_TRIGGER_DOWN,
  MENU_ITEM_DOWN,
  MENU_ITEM_ESCAPE,
  MENU_ITEM_TAB,
  MENU_ITEM_ENTER,
  MENU_ITEM_SPACE,
  MENU_ITEM_CLICK,
  MENU_ITEM_HOVER,
  MENU_TRIGGER_ENTER,
  MENU_TRIGGER_SPACE,
  MENU_TRIGGER_CLICK,
  MENU_TRIGGER_TAB,
  MENU_TRIGGER_ESCAPE,
  BACKDROP_CLICK,
  WINDOW_RESIZE,
} = actionTypes;

type position = { top: number; bottom: number; left: number; right: number };

const getPosition = (element: HTMLElement | null): position | undefined => {
  if (!element) {
    return undefined;
  }

  const { top, bottom, left, right } = element.getBoundingClientRect();
  const { scrollX, scrollY, innerWidth, innerHeight } = window;

  return {
    top: innerHeight - top - scrollY,
    bottom: bottom + scrollY,
    left: left + scrollX,
    right: innerWidth - right - scrollX,
  };
};

interface State {
  onClient: boolean;
  open: boolean;
  highlightIndex: number;
  closeReason: CloseReason;
  triggerPosition?: position;
}

const CLOSED_INDEX = -1;
const CLOSE_REASON_EXIT: CloseReasonExit = { reason: 'exit' };
const initialState: State = {
  onClient: false,
  open: false,
  highlightIndex: CLOSED_INDEX,
  closeReason: CLOSE_REASON_EXIT,
  triggerPosition: undefined,
};

export const MenuRenderer = ({
  onOpen,
  onClose,
  trigger,
  width = 'content',
  align = 'left',
  offsetSpace = 'none',
  reserveIconSpace = false,
  placement = 'bottom',
  children,
  data,
  ...restProps
}: MenuRendererProps) => {
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

  const [
    {
      onClient: hasRenderedOnClient,
      open,
      highlightIndex,
      closeReason,
      triggerPosition,
    },
    dispatch,
  ] = useReducer((state: State, action: Action): State => {
    switch (action.type) {
      case CLIENT_ENVIRONMENT: {
        return { ...state, onClient: true };
      }
      case MENU_TRIGGER_UP:
      case MENU_ITEM_UP: {
        return {
          ...state,
          open: true,
          closeReason: CLOSE_REASON_EXIT,
          highlightIndex: getNextIndex(-1, state.highlightIndex, itemCount),
          triggerPosition: buttonRef && getPosition(buttonRef.current),
        };
      }
      case MENU_TRIGGER_DOWN:
      case MENU_ITEM_DOWN: {
        return {
          ...state,
          open: true,
          closeReason: CLOSE_REASON_EXIT,
          highlightIndex: getNextIndex(1, state.highlightIndex, itemCount),
          triggerPosition: buttonRef && getPosition(buttonRef.current),
        };
      }
      case BACKDROP_CLICK:
      case MENU_TRIGGER_ESCAPE:
      case MENU_TRIGGER_TAB:
      case MENU_ITEM_ESCAPE:
      case MENU_ITEM_TAB: {
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
          triggerPosition: buttonRef && getPosition(buttonRef.current),
        };
      }
      case MENU_TRIGGER_CLICK: {
        const nextOpen = !state.open;

        return {
          ...state,
          open: nextOpen,
          closeReason: CLOSE_REASON_EXIT,
          triggerPosition: buttonRef && getPosition(buttonRef.current),
        };
      }
      case WINDOW_RESIZE: {
        return {
          ...state,
          triggerPosition: buttonRef && getPosition(buttonRef.current),
        };
      }
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    dispatch({ type: CLIENT_ENVIRONMENT });
  }, []);

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

  const onTriggerKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    const targetKey = normalizeKey(event);

    // Space key in keyup/keydown handler in Firefox triggers a click event.
    // This means the menu never opens, by returning early for Firefox the
    // menu is opened by firing the click handler. Only trade off is the
    // first menu item is not highlighted automatically, but considering
    // space keyboard interactions are optional this is acceptable.
    //   See Firefox bug details: https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    //   See WAI-ARIA keyboard iteractions: https://www.w3.org/WAI/ARIA/apg/patterns/menu/#keyboard-interaction-12
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
      Enter: { type: MENU_TRIGGER_ENTER },
      ' ': { type: MENU_TRIGGER_SPACE },
      Escape: { type: MENU_TRIGGER_ESCAPE },
    };

    if (action[targetKey]) {
      dispatch(action[targetKey]);
    }
  };

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
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

  const triggerProps = {
    'aria-haspopup': true,
    'aria-expanded': open,
    role: 'button',
    tabIndex: 0,
    ref: buttonRef,
    onKeyUp: onTriggerKeyUp,
    onKeyDown: onTriggerKeyDown,
    onClick: (event: MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
      dispatch({ type: MENU_TRIGGER_CLICK });
    },
  };

  return (
    <Box {...buildDataAttributes({ data, validateRestProps: restProps })}>
      <Box position="relative">
        {trigger(triggerProps, { open })}

        {hasRenderedOnClient && (
          <BraidPortal>
            <Menu
              open={open}
              align={align}
              width={width}
              placement={placement}
              offsetSpace={offsetSpace}
              highlightIndex={highlightIndex}
              reserveIconSpace={reserveIconSpace}
              focusTrigger={focusTrigger}
              dispatch={dispatch}
              triggerPosition={triggerPosition}
            >
              {items}
            </Menu>
          </BraidPortal>
        )}
      </Box>

      {open ? (
        <Box
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            dispatch({ type: BACKDROP_CLICK });
          }}
          position="fixed"
          zIndex="dropdownBackdrop"
          top={0}
          left={0}
          className={styles.backdrop}
        />
      ) : null}
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
  offsetSpace: NonNullable<MenuRendererProps['offsetSpace']>;
  align: NonNullable<MenuRendererProps['align']>;
  width: NonNullable<MenuRendererProps['width']>;
  placement: NonNullable<MenuRendererProps['placement']>;
  reserveIconSpace: NonNullable<MenuRendererProps['reserveIconSpace']>;
  dispatch: (action: Action) => void;
  focusTrigger: () => void;
  highlightIndex: number;
  open: boolean;
  children: ReactNode[];
  triggerPosition?: position;
}

export function Menu({
  offsetSpace,
  align,
  width,
  placement,
  children,
  open,
  dispatch,
  focusTrigger,
  highlightIndex,
  reserveIconSpace,
  triggerPosition,
}: MenuProps) {
  let dividerCount = 0;

  const inlineVars =
    triggerPosition &&
    assignInlineVars({
      [triggerVars[placement]]: `${triggerPosition[placement]}px`,
      [triggerVars[align]]: `${triggerPosition[align]}px`,
    });

  return (
    <MenuRendererContext.Provider value={{ reserveIconSpace }}>
      <Box
        role="menu"
        position="absolute"
        style={inlineVars}
        zIndex="dropdown"
        boxShadow={placement === 'top' ? 'small' : 'medium'}
        borderRadius={borderRadius}
        background="surface"
        marginTop={placement === 'bottom' ? offsetSpace : undefined}
        marginBottom={placement === 'top' ? offsetSpace : undefined}
        transition="fast"
        opacity={!open ? 0 : undefined}
        overflow="hidden"
        className={[
          styles.menuPosition,
          !open && styles.menuIsClosed,
          width !== 'content' && styles.width[width],
        ]}
      >
        <Box paddingY={styles.menuYPadding} className={styles.menuHeightLimit}>
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
        <Overlay
          boxShadow="borderNeutralLight"
          borderRadius={borderRadius}
          visible
        />
      </Box>
    </MenuRendererContext.Provider>
  );
}
