import assert from 'assert';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
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
import { BraidPortal } from '../BraidPortal/BraidPortal';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { MenuItemDivider } from '../MenuItemDivider/MenuItemDivider';
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

type Position = { top: number; bottom: number; left: number; right: number };

const getPosition = (element: HTMLElement | null): Position | undefined => {
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
  open: boolean;
  highlightIndex: number;
  closeReason: CloseReason;
  triggerPosition?: Position;
}

const CLOSED_INDEX = -1;
const CLOSE_REASON_EXIT: CloseReasonExit = { reason: 'exit' };
const initialState: State = {
  open: false,
  highlightIndex: CLOSED_INDEX,
  closeReason: CLOSE_REASON_EXIT,
  triggerPosition: undefined,
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
  const menuContainerRef = useRef<HTMLButtonElement>(null);
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

  const [{ open, highlightIndex, closeReason, triggerPosition }, dispatch] =
    useReducer((state: State, action: Action): State => {
      switch (action.type) {
        case MENU_TRIGGER_UP:
        case MENU_ITEM_UP: {
          return {
            ...state,
            open: true,
            closeReason: CLOSE_REASON_EXIT,
            highlightIndex: getNextIndex(-1, state.highlightIndex, itemCount),
            triggerPosition: getPosition(menuContainerRef.current),
          };
        }
        case MENU_TRIGGER_DOWN:
        case MENU_ITEM_DOWN: {
          return {
            ...state,
            open: true,
            closeReason: CLOSE_REASON_EXIT,
            highlightIndex: getNextIndex(1, state.highlightIndex, itemCount),
            triggerPosition: getPosition(menuContainerRef.current),
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
            triggerPosition: getPosition(menuContainerRef.current),
          };
        }
        case MENU_TRIGGER_CLICK: {
          const nextOpen = !state.open;

          return {
            ...state,
            open: nextOpen,
            closeReason: CLOSE_REASON_EXIT,
            triggerPosition: getPosition(menuContainerRef.current),
          };
        }
        case WINDOW_RESIZE: {
          return {
            ...state,
            triggerPosition: getPosition(menuContainerRef.current),
          };
        }
        default:
          return state;
      }
    }, initialState);

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
    <Box
      {...buildDataAttributes({ data, validateRestProps: restProps })}
      ref={menuContainerRef}
    >
      {trigger(triggerProps, { open })}

      {open ? (
        <>
          <BraidPortal>
            <Menu
              align={align}
              size={size}
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
          <Box
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              dispatch({ type: BACKDROP_CLICK });
            }}
            position="fixed"
            zIndex="modal"
            top={0}
            left={0}
            className={styles.backdrop}
          />
        </>
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
  size: NonNullable<MenuRendererProps['size']>;
  width: NonNullable<MenuRendererProps['width']>;
  placement: NonNullable<MenuRendererProps['placement']>;
  reserveIconSpace: NonNullable<MenuRendererProps['reserveIconSpace']>;
  dispatch: (action: Action) => void;
  focusTrigger: () => void;
  highlightIndex: number;
  children: ReactNode[];
  triggerPosition?: Position;
  position?: 'absolute' | 'relative'; // 'relative' is used for screenshot testing
}

export function Menu({
  offsetSpace,
  align,
  size,
  width,
  placement,
  children,
  dispatch,
  focusTrigger,
  highlightIndex,
  reserveIconSpace,
  triggerPosition,
  position = 'absolute',
}: MenuProps) {
  let dividerCount = 0;

  const menuYPadding =
    useBraidTheme().legacy && size === 'small' ? 'xsmall' : 'xxsmall';

  const inlineVars = assignInlineVars({
    ...(triggerPosition && {
      [styles.triggerVars[placement]]: `${triggerPosition[placement]}px`,
      [styles.triggerVars[align]]: `${triggerPosition[align]}px`,
    }),
    [styles.menuYPadding]: vars.space[menuYPadding],
  });

  return (
    <MenuRendererContext.Provider value={{ size, reserveIconSpace }}>
      <Box
        role="menu"
        position={position}
        zIndex="modal"
        boxShadow={placement === 'top' ? 'small' : 'medium'}
        borderRadius={borderRadius}
        background="surface"
        marginTop={placement === 'bottom' ? offsetSpace : undefined}
        marginBottom={placement === 'top' ? offsetSpace : undefined}
        transition="fast"
        overflow="hidden"
        style={inlineVars}
        className={[
          styles.menuPosition,
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
