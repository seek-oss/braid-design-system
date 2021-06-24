import _jsx from '@babel/runtime/helpers/jsx';
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

import assert from 'assert';
import React, { useContext, useRef, useEffect } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { touchableText } from '../../hooks/typography';
import { normalizeKey } from '../private/normalizeKey';
import { MenuRendererItemContext } from '../MenuRenderer/MenuRendererItemContext';
import { actionTypes } from '../MenuRenderer/MenuRenderer.actions';
import buildDataAttributes from '../private/buildDataAttributes';
import { atoms } from '../../atoms/atoms';
import * as styles from './useMenuItem.css';
const MENU_ITEM_UP = actionTypes.MENU_ITEM_UP,
  MENU_ITEM_DOWN = actionTypes.MENU_ITEM_DOWN,
  MENU_ITEM_ESCAPE = actionTypes.MENU_ITEM_ESCAPE,
  MENU_ITEM_TAB = actionTypes.MENU_ITEM_TAB,
  MENU_ITEM_ENTER = actionTypes.MENU_ITEM_ENTER,
  MENU_ITEM_SPACE = actionTypes.MENU_ITEM_SPACE,
  MENU_ITEM_CLICK = actionTypes.MENU_ITEM_CLICK,
  MENU_ITEM_HOVER = actionTypes.MENU_ITEM_HOVER;
const menuItemChildrenSize = 'standard';
export function useMenuItem(_ref) {
  const _ref$displayName = _ref.displayName,
    displayName = _ref$displayName === void 0 ? 'MenuItem' : _ref$displayName,
    _ref$formElement = _ref.formElement,
    formElement = _ref$formElement === void 0 ? false : _ref$formElement,
    tone = _ref.tone,
    _onClick = _ref.onClick,
    data = _ref.data;
  const menuRendererItemContext = useContext(MenuRendererItemContext);
  assert(
    menuRendererItemContext !== null,
    ''.concat(
      displayName,
      ' must be rendered as an immediate child of a menu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItem',
    ),
  );

  if (menuRendererItemContext === null) {
    throw new Error(
      ''.concat(displayName, ' element rendered outside menu context'),
    );
  }

  const isHighlighted = menuRendererItemContext.isHighlighted,
    index = menuRendererItemContext.index,
    dispatch = menuRendererItemContext.dispatch,
    focusTrigger = menuRendererItemContext.focusTrigger;
  const menuItemRef = useRef(null);
  useEffect(
    function () {
      if (isHighlighted) {
        let _menuItemRef$current;

        (_menuItemRef$current = menuItemRef.current) === null ||
        _menuItemRef$current === void 0
          ? void 0
          : _menuItemRef$current.focus();
      }
    },
    [isHighlighted],
  );

  const onKeyDown = function onKeyDown(event) {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab') {
      dispatch({
        type: MENU_ITEM_TAB,
      });
    }

    const isArrowPress = targetKey.indexOf('Arrow') === 0;
    const isActionKeyPress = targetKey === 'Enter' || targetKey === ' '; // This prevents spacebar from scrolling the document,
    // but also prevents the click event from firing so we
    // can programmatically trigger a click event in the
    // 'onKeyUp' handler. This is to normalise behaviour
    // between buttons and links, e.g. to make spacebar
    // activate links, which is not standard behaviour.

    if (isArrowPress || isActionKeyPress) {
      event.preventDefault();
    }
  };

  const onKeyUp = function onKeyUp(event) {
    const targetKey = normalizeKey(event);
    const closeActionKeys = ['Enter', ' ', 'Escape'];
    const action = {
      ArrowDown: {
        type: MENU_ITEM_DOWN,
      },
      ArrowUp: {
        type: MENU_ITEM_UP,
      },
      Enter: {
        type: MENU_ITEM_ENTER,
        formElement,
      },
      ' ': {
        type: MENU_ITEM_SPACE,
        formElement,
      },
      Escape: {
        type: MENU_ITEM_ESCAPE,
      },
    };

    if (action[targetKey]) {
      dispatch(action[targetKey]);
    } // Because we call 'preventDefault()' on enter/spacebar in
    // the 'onKeyDown' handler, we manually trigger a click here.

    if (targetKey === 'Enter' || targetKey === ' ') {
      let _menuItemRef$current2;

      (_menuItemRef$current2 = menuItemRef.current) === null ||
      _menuItemRef$current2 === void 0
        ? void 0
        : _menuItemRef$current2.click();
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
    menuItemProps: _objectSpread(
      {
        role: 'menuitem',
        tabIndex: -1,
        ref: menuItemRef,
        onKeyUp,
        onKeyDown,
        onMouseEnter: function onMouseEnter() {
          return dispatch({
            type: MENU_ITEM_HOVER,
            value: index,
          });
        },
        onClick: function onClick(event) {
          event.stopPropagation();
          dispatch({
            type: MENU_ITEM_CLICK,
            formElement,
          });

          if (typeof _onClick === 'function') {
            _onClick();
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
      },
      buildDataAttributes(data),
    ),
  };
}

function MenuItemChildren(_ref2) {
  const tone = _ref2.tone,
    children = _ref2.children;
  return /* #__PURE__*/ _jsx(
    Box,
    {
      userSelect: 'none',
    },
    void 0,
    /* #__PURE__*/ _jsx(
      Text,
      {
        size: menuItemChildrenSize,
        baseline: false,
        tone: tone === 'critical' ? tone : undefined,
      },
      void 0,
      children,
    ),
  );
}

MenuItemChildren.displayName = 'MenuItemChildren';
