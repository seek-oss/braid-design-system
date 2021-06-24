import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _typeof from '@babel/runtime/helpers/typeof';

let _Overlay;

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

import assert from 'assert';
import React, { useRef, useReducer, useEffect } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { Box } from '../Box/Box';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuItemCheckbox } from '../MenuItemCheckbox/MenuItemCheckbox';
import { MenuItemLink } from '../MenuItem/MenuItemLink';
import { MenuItemDivider } from '../MenuItemDivider/MenuItemDivider';
import { normalizeKey } from '../private/normalizeKey';
import { getNextIndex } from '../private/getNextIndex';
import { Overlay } from '../private/Overlay/Overlay';
import { actionTypes } from './MenuRenderer.actions';
import { MenuRendererContext } from './MenuRendererContext';
import { MenuRendererItemContext } from './MenuRendererItemContext';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './MenuRenderer.css';
const MENU_TRIGGER_UP = actionTypes.MENU_TRIGGER_UP,
  MENU_ITEM_UP = actionTypes.MENU_ITEM_UP,
  MENU_TRIGGER_DOWN = actionTypes.MENU_TRIGGER_DOWN,
  MENU_ITEM_DOWN = actionTypes.MENU_ITEM_DOWN,
  MENU_ITEM_ESCAPE = actionTypes.MENU_ITEM_ESCAPE,
  MENU_ITEM_TAB = actionTypes.MENU_ITEM_TAB,
  MENU_ITEM_ENTER = actionTypes.MENU_ITEM_ENTER,
  MENU_ITEM_SPACE = actionTypes.MENU_ITEM_SPACE,
  MENU_ITEM_CLICK = actionTypes.MENU_ITEM_CLICK,
  MENU_ITEM_HOVER = actionTypes.MENU_ITEM_HOVER,
  MENU_TRIGGER_ENTER = actionTypes.MENU_TRIGGER_ENTER,
  MENU_TRIGGER_SPACE = actionTypes.MENU_TRIGGER_SPACE,
  MENU_TRIGGER_CLICK = actionTypes.MENU_TRIGGER_CLICK,
  MENU_TRIGGER_TAB = actionTypes.MENU_TRIGGER_TAB,
  MENU_TRIGGER_ESCAPE = actionTypes.MENU_TRIGGER_ESCAPE,
  BACKDROP_CLICK = actionTypes.BACKDROP_CLICK,
  MENU_MOUSE_LEAVE = actionTypes.MENU_MOUSE_LEAVE;
const CLOSED_INDEX = -1;
const initialState = {
  open: false,
  highlightIndex: CLOSED_INDEX,
};

const isDivider = function isDivider(node) {
  return (
    _typeof(node) === 'object' &&
    node !== null &&
    'type' in node &&
    node.type === MenuItemDivider
  );
};

export var MenuRenderer = function MenuRenderer(_ref) {
  const onOpen = _ref.onOpen,
    onClose = _ref.onClose,
    trigger = _ref.trigger,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? 'left' : _ref$align,
    _ref$offsetSpace = _ref.offsetSpace,
    offsetSpace = _ref$offsetSpace === void 0 ? 'none' : _ref$offsetSpace,
    children = _ref.children,
    data = _ref.data;
  const buttonRef = useRef(null);
  const hasOpened = useRef(false);
  const items = flattenChildren(children);
  const itemCount = items.filter(function (item) {
    return !isDivider(item);
  }).length;
  assert(
    items.every(function (item) {
      return (
        _typeof(item) === 'object' &&
        'type' in item &&
        (item.type === MenuItem ||
          item.type === MenuItemCheckbox ||
          item.type === MenuItemLink ||
          item.type === MenuItemDivider)
      );
    }),
    'All child nodes within a menu component must be a MenuItem, MenuItemLink, MenuItemCheckbox or MenuItemDivider: https://seek-oss.github.io/braid-design-system/components/MenuRenderer',
  );

  const _useReducer = useReducer(function (state, action) {
      switch (action.type) {
        case MENU_TRIGGER_UP:
        case MENU_ITEM_UP: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              open: true,
              highlightIndex: getNextIndex(-1, state.highlightIndex, itemCount),
            },
          );
        }

        case MENU_TRIGGER_DOWN:
        case MENU_ITEM_DOWN: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              open: true,
              highlightIndex: getNextIndex(1, state.highlightIndex, itemCount),
            },
          );
        }

        case BACKDROP_CLICK:
        case MENU_TRIGGER_ESCAPE:
        case MENU_TRIGGER_TAB:
        case MENU_ITEM_ESCAPE:
        case MENU_ITEM_TAB:
        case MENU_ITEM_ENTER:
        case MENU_ITEM_SPACE:
        case MENU_ITEM_CLICK: {
          // Don't close the menu if the user clicked a "form element" item, e.g. checkbox
          if ('formElement' in action && action.formElement) {
            return state;
          }

          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              open: false,
              highlightIndex: CLOSED_INDEX,
            },
          );
        }

        case MENU_ITEM_HOVER: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              highlightIndex: action.value,
            },
          );
        }

        case MENU_TRIGGER_ENTER:
        case MENU_TRIGGER_SPACE: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              open: !state.open,
              highlightIndex: state.open ? CLOSED_INDEX : 0,
            },
          );
        }

        case MENU_MOUSE_LEAVE: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              highlightIndex: CLOSED_INDEX,
            },
          );
        }

        case MENU_TRIGGER_CLICK: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              open: !state.open,
            },
          );
        }

        default:
          return state;
      }
    }, initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    _useReducer2$ = _useReducer2[0],
    open = _useReducer2$.open,
    highlightIndex = _useReducer2$.highlightIndex,
    dispatch = _useReducer2[1];

  useEffect(
    function () {
      if (open) {
        hasOpened.current = true;

        if (typeof onOpen === 'function') {
          onOpen();
        }
      } else if (typeof onClose === 'function' && hasOpened.current) {
        onClose();
      }
    },
    [onClose, onOpen, open],
  );

  const focusTrigger = function focusTrigger() {
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  const onTriggerKeyUp = function onTriggerKeyUp(event) {
    const targetKey = normalizeKey(event); // Space key in keyup/keydown handler in Firefox triggers a click event.
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

    const action = {
      ArrowDown: {
        type: MENU_TRIGGER_DOWN,
      },
      ArrowUp: {
        type: MENU_TRIGGER_UP,
      },
      Enter: {
        type: MENU_TRIGGER_ENTER,
      },
      ' ': {
        type: MENU_TRIGGER_SPACE,
      },
      Escape: {
        type: MENU_TRIGGER_ESCAPE,
      },
    };

    if (action[targetKey]) {
      dispatch(action[targetKey]);
    }
  };

  const onTriggerKeyDown = function onTriggerKeyDown(event) {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab') {
      dispatch({
        type: MENU_ITEM_TAB,
      });
    } // Prevent arrow keys scrolling the document while navigating the menu

    const isArrowPress = targetKey.indexOf('Arrow') === 0; // Prevent enter or space press from triggering the click handler

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
    onClick: function onClick(event) {
      event.stopPropagation();
      event.preventDefault();
      dispatch({
        type: MENU_TRIGGER_CLICK,
      });
    },
  };
  let dividerCount = 0;
  return /* #__PURE__*/ _jsx(
    MenuRendererContext.Provider,
    {
      value: true,
    },
    void 0,
    /* #__PURE__*/ React.createElement(
      Box,
      _extends(
        {
          className: styles.root,
        },
        data ? buildDataAttributes(data) : undefined,
      ),
      /* #__PURE__*/ _jsx(
        Box,
        {
          display: 'inlineBlock',
          position: 'relative',
        },
        void 0,
        trigger(triggerProps, {
          open,
        }),
        /* #__PURE__*/ _jsx(
          Box,
          {
            role: 'menu',
            position: 'absolute',
            zIndex: 'dropdown',
            onMouseLeave: function onMouseLeave() {
              dispatch({
                type: MENU_MOUSE_LEAVE,
              });
              focusTrigger();
            },
            boxShadow: 'medium',
            borderRadius: 'standard',
            background: 'card',
            marginTop: offsetSpace,
            transition: 'fast',
            right: align === 'right' ? 0 : undefined,
            opacity: !open ? 0 : undefined,
            className: !open && styles.menuIsClosed,
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Box,
            {
              paddingY: 'xxsmall',
            },
            void 0,
            items.map(function (item, i) {
              if (isDivider(item)) {
                dividerCount++;
                return item;
              }

              const menuItemIndex = i - dividerCount;
              return /* #__PURE__*/ _jsx(
                MenuRendererItemContext.Provider,
                {
                  value: {
                    isHighlighted: menuItemIndex === highlightIndex,
                    index: menuItemIndex,
                    dispatch,
                    focusTrigger,
                  },
                },
                menuItemIndex,
                item,
              );
            }),
          ),
          _Overlay ||
            (_Overlay = /* #__PURE__*/ _jsx(Overlay, {
              boxShadow: 'borderStandard',
              borderRadius: 'standard',
              visible: true,
            })),
        ),
      ),
      open
        ? /* #__PURE__*/ _jsx(Box, {
            onClick: function onClick(event) {
              event.stopPropagation();
              event.preventDefault();
              dispatch({
                type: BACKDROP_CLICK,
              });
            },
            position: 'fixed',
            zIndex: 'dropdownBackdrop',
            top: 0,
            left: 0,
            className: styles.backdrop,
          })
        : null,
    ),
  );
};
MenuRenderer.displayName = 'MenuRenderer';
