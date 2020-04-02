import React, {
  KeyboardEvent,
  createContext,
  Children,
  useRef,
  useReducer,
  useEffect,
  MouseEvent,
  ReactNode,
  Ref,
} from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../Box/Box';
import { normalizeKey } from '../private/normalizeKey';
import { getNextIndex } from '../private/getNextIndex';
import { Overlay } from '../private/Overlay/Overlay';
import { actionTypes, Action } from './MenuRenderer.actions';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styleRefs from './MenuRenderer.treat';

interface MenuContextValues {
  isHighlighted: boolean;
  index: number;
  dispatch: (action: Action) => void;
  focusTrigger: () => void;
}

export const MenuContext = createContext<MenuContextValues | null>(null);

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
export interface MenuRendererProps {
  trigger: (props: TriggerProps, state: TriggerState) => ReactNode;
  align?: 'left' | 'right';
  offsetSpace?: BoxProps['marginTop'];
  onOpen?: () => void;
  onClose?: () => void;
  data?: DataAttributeMap;
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
  MENU_MOUSE_LEAVE,
} = actionTypes;

interface State {
  open: boolean;
  highlightIndex: number;
}

const CLOSED_INDEX = -1;
const initialState: State = {
  open: false,
  highlightIndex: CLOSED_INDEX,
};
export const MenuRenderer = ({
  onOpen,
  onClose,
  trigger,
  align = 'left',
  offsetSpace = 'none',
  children,
  data,
}: MenuRendererProps) => {
  const styles = useStyles(styleRefs);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hasOpened = useRef<boolean>(false);
  const items = Children.toArray(children);

  const [{ open, highlightIndex }, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case MENU_TRIGGER_UP:
        case MENU_ITEM_UP: {
          return {
            ...state,
            open: true,
            highlightIndex: getNextIndex(
              -1,
              state.highlightIndex,
              items.length,
            ),
          };
        }
        case MENU_TRIGGER_DOWN:
        case MENU_ITEM_DOWN: {
          return {
            ...state,
            open: true,
            highlightIndex: getNextIndex(1, state.highlightIndex, items.length),
          };
        }
        case BACKDROP_CLICK:
        case MENU_TRIGGER_ESCAPE:
        case MENU_TRIGGER_TAB:
        case MENU_ITEM_ESCAPE:
        case MENU_ITEM_TAB:
        case MENU_ITEM_ENTER:
        case MENU_ITEM_SPACE:
        case MENU_ITEM_CLICK: {
          return { ...state, open: false, highlightIndex: CLOSED_INDEX };
        }
        case MENU_ITEM_HOVER: {
          return { ...state, highlightIndex: action.value };
        }
        case MENU_TRIGGER_ENTER:
        case MENU_TRIGGER_SPACE: {
          return {
            ...state,
            open: !state.open,
            highlightIndex: state.open ? CLOSED_INDEX : 0,
          };
        }
        case MENU_MOUSE_LEAVE: {
          return {
            ...state,
            highlightIndex: CLOSED_INDEX,
          };
        }
        case MENU_TRIGGER_CLICK: {
          return { ...state, open: !state.open };
        }
        default:
          return state;
      }
    },
    initialState,
  );

  useEffect(() => {
    if (open) {
      hasOpened.current = true;

      if (typeof onOpen === 'function') {
        onOpen();
      }
    } else if (typeof onClose === 'function' && hasOpened.current) {
      onClose();
    }
  }, [onClose, onOpen, open]);

  const focusTrigger = () => {
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  const onTriggerKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    const targetKey = normalizeKey(event);

    // Space key in keyup/keydown handler in Firefox triggers a click event.
    // This means the menu never opens, by returning early for Firefox the
    // menu is opened by firing the click handler. Only trade off is the
    // first menu item is not highlighted automatically, but considering
    // space keyboard interactions are optional this is acceptable.
    //   See Firefox bug details: https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    //   See WAI-ARIA keyboard iteractions: https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-12
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
    <Box className={styles.root} {...buildDataAttributes(data)}>
      <Box display="inlineBlock" position="relative">
        {trigger(triggerProps, { open })}

        <Box
          role="menu"
          position="absolute"
          onMouseLeave={() => {
            dispatch({ type: MENU_MOUSE_LEAVE });
            focusTrigger();
          }}
          boxShadow="medium"
          borderRadius="standard"
          background="card"
          marginTop={offsetSpace}
          transition="fast"
          right={align === 'right' ? 0 : undefined}
          className={[styles.menu, !open && styles.menuIsClosed]}
        >
          <Box paddingY="xxsmall">
            {items.map((item, index) => (
              <MenuContext.Provider
                key={index}
                value={{
                  isHighlighted: index === highlightIndex,
                  index,
                  dispatch,
                  focusTrigger,
                }}
              >
                {item}
              </MenuContext.Provider>
            ))}
          </Box>
          <Overlay
            boxShadow="borderStandard"
            borderRadius="standard"
            className={styles.showOverlay}
          />
        </Box>
      </Box>

      {open ? (
        <Box
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            dispatch({ type: BACKDROP_CLICK });
          }}
          position="fixed"
          top={0}
          left={0}
          className={styles.backdrop}
        />
      ) : null}
    </Box>
  );
};
