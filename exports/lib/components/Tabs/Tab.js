import _jsx from '@babel/runtime/helpers/jsx';
import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';

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

import React, { useRef, useContext, useEffect, cloneElement } from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { normalizeKey } from '../private/normalizeKey';
import { TabsContext } from './TabsProvider';
import {
  TAB_BUTTON_LEFT,
  TAB_BUTTON_RIGHT,
  TAB_BUTTON_HOME,
  TAB_BUTTON_END,
  TAB_BUTTON_ENTER,
  TAB_BUTTON_SPACE,
  TAB_BUTTON_TAB,
  TAB_LIST_FOCUSED,
  TAB_BUTTON_CLICK,
} from './Tabs.actions';
import { Text } from '../Text/Text';
import buildDataAttributes from '../private/buildDataAttributes';
import { TabListContext } from './TabListContext';
import { Overlay } from '../private/Overlay/Overlay';
import { Badge } from '../Badge/Badge';
import { useBreakpoint } from '../useBreakpoint/useBreakpoint';
import { smoothScroll, smoothScrollIntoView } from '../private/smoothScroll';
import { useSpace } from '../useSpace/useSpace';
import * as styles from './Tabs.css';
export var Tab = function Tab(_ref) {
  const children = _ref.children,
    data = _ref.data,
    badge = _ref.badge,
    item = _ref.item;
  const tabsContext = useContext(TabsContext);
  const tabListContext = useContext(TabListContext);
  const tabRef = useRef(null);
  assert(
    tabListContext !== null,
    'A Tab must be rendered as a child of Tabs. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tab',
  );
  assert(
    !badge || badge.type === Badge,
    'Tab badge prop can only be an instance of Badge. e.g. <Tab badge={<Badge>New</Badge>}>',
  );
  assert(
    !badge || badge.props.bleedY === undefined,
    "Badge elements cannot set the 'bleedY' prop when passed to a Tab component",
  );

  if (!tabListContext) {
    throw new Error('Tab rendered outside Tabs context');
  }

  if (!tabsContext) {
    throw new Error('Tab rendered outside TabsProvider');
  }

  const focusedTabIndex = tabsContext.focusedTabIndex,
    selectedIndex = tabsContext.selectedIndex,
    selectedItem = tabsContext.selectedItem,
    dispatch = tabsContext.dispatch,
    a11y = tabsContext.a11y,
    onChange = tabsContext.onChange;
  const tabListItemIndex = tabListContext.tabListItemIndex,
    scrollContainer = tabListContext.scrollContainer,
    divider = tabListContext.divider;
  const isSelected =
    selectedIndex > -1
      ? selectedIndex === tabListItemIndex
      : selectedItem === item;
  const isFocused = focusedTabIndex === tabListItemIndex;
  const paddingX = 'small';

  const _useSpace = useSpace(),
    grid = _useSpace.grid,
    space = _useSpace.space;

  useEffect(
    function () {
      if (tabRef.current && isFocused) {
        tabRef.current.focus();
      }
    },
    [isFocused],
  );
  const firstRenderRef = useRef(true);
  const breakpoint = useBreakpoint();
  useEffect(
    function () {
      if (!tabRef.current || !scrollContainer) {
        return;
      }

      if (isSelected || isFocused) {
        if (breakpoint === 'mobile') {
          smoothScroll(
            tabRef.current,
            _objectSpread(
              {
                scrollContainer,
                direction: 'horizontal',
                offset: space[paddingX] * grid * 3,
              },
              firstRenderRef.current
                ? {
                    duration: 0,
                  }
                : {
                    speed: 0.7,
                  },
            ),
          );
        } else {
          smoothScrollIntoView(
            tabRef.current,
            _objectSpread(
              {
                scrollContainer,
                direction: 'horizontal',
                offset: space[paddingX] * grid * 6,
              },
              firstRenderRef.current
                ? {
                    duration: 0,
                  }
                : {
                    speed: 0.7,
                  },
            ),
          );
        }
      }

      firstRenderRef.current = false;
    },
    [isSelected, isFocused, scrollContainer, space, paddingX, grid, breakpoint],
  );

  const onKeyUp = function onKeyUp(event) {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab') {
      return;
    }

    if (onChange && (targetKey === 'Enter' || targetKey === ' ')) {
      onChange(tabListItemIndex, item);
    }

    const action = {
      ArrowRight: {
        type: TAB_BUTTON_RIGHT,
      },
      ArrowLeft: {
        type: TAB_BUTTON_LEFT,
      },
      Home: {
        type: TAB_BUTTON_HOME,
      },
      End: {
        type: TAB_BUTTON_END,
      },
      Enter: {
        type: TAB_BUTTON_ENTER,
        value: tabListItemIndex,
      },
      ' ': {
        type: TAB_BUTTON_SPACE,
        value: tabListItemIndex,
      },
    };

    if (action[targetKey]) {
      dispatch(action[targetKey]);
    }
  };

  const onKeyDown = function onKeyDown(event) {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab' && focusedTabIndex !== null) {
      dispatch({
        type: TAB_BUTTON_TAB,
      });
      return;
    } // Prevent arrow keys scrolling the document while navigating the tabs

    const isArrowPress = targetKey.indexOf('Arrow') === 0; // Prevent enter or space press from triggering the click handler

    const isActionKeyPress = targetKey === 'Enter' || targetKey === ' ';

    if (isArrowPress || isActionKeyPress) {
      event.preventDefault();
    }
  };

  const tabTextSize = 'standard';
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component: 'button',
      },
      a11y.tabProps({
        tabIndex: tabListItemIndex,
        isSelected,
      }),
      {
        ref: tabRef,
        onKeyUp,
        onKeyDown,
        onClick: function onClick(event) {
          event.stopPropagation();
          event.preventDefault();

          if (onChange) {
            onChange(tabListItemIndex, item);
          }

          dispatch({
            type: TAB_BUTTON_CLICK,
            value: tabListItemIndex,
          });
        },
        onFocus: isSelected
          ? function () {
              return dispatch({
                type: TAB_LIST_FOCUSED,
                value: tabListItemIndex,
              });
            }
          : undefined,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        borderRadius: 'standard',
        cursor: 'pointer',
        outline: 'none',
        position: 'relative',
        zIndex: 1,
        paddingX,
        paddingY: 'medium',
        className: styles.tab,
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    /* #__PURE__*/ React.createElement(
      Text,
      _extends(
        {},
        a11y.tabLabelProps({
          tabIndex: tabListItemIndex,
        }),
        {
          size: tabTextSize,
          weight: 'medium',
          align: 'center',
          tone: isSelected ? 'formAccent' : 'secondary',
        },
      ),
      children,
    ),
    badge
      ? /* #__PURE__*/ _jsx(
          Box,
          {
            paddingLeft: 'xsmall',
          },
          void 0,
          /* #__PURE__*/ cloneElement(badge, {
            bleedY: true,
          }),
        )
      : null,
    /* #__PURE__*/ _jsx(
      Box,
      {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      },
      void 0,
      divider === 'minimal'
        ? /* #__PURE__*/ _jsx(Box, {
            position: 'absolute',
            zIndex: 1,
            left: 0,
            right: 0,
            bottom: 0,
            className: styles.divider,
          })
        : null,
      /* #__PURE__*/ _jsx(Box, {
        background: 'neutral',
        position: 'absolute',
        zIndex: 2,
        transition: 'fast',
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        className: [
          styles.tabUnderlineHover,
          styles.tabUnderline,
          tabListItemIndex > 0 ? styles.hairlineMarginLeft : null,
        ],
      }),
      /* #__PURE__*/ _jsx(Box, {
        background: 'formAccent',
        position: 'absolute',
        zIndex: 2,
        transition: 'fast',
        left: 0,
        right: 0,
        bottom: 0,
        className: [
          styles.tabUnderline,
          !isSelected ? styles.tabUnderlineAnimation : undefined,
          tabListItemIndex > 0 ? styles.hairlineMarginLeft : null,
        ],
      }),
    ),
    /* #__PURE__*/ _jsx(Overlay, {
      zIndex: 1,
      boxShadow: 'outlineFocus',
      borderRadius: 'standard',
      className: styles.tabFocusRing,
      visible: false,
      transition: 'fast',
      onlyVisibleForKeyboardNavigation: true,
    }),
  );
};
Tab.displayName = 'Tab';
