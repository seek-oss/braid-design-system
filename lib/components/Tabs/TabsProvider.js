import _jsx from "@babel/runtime/helpers/jsx";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { createContext, useReducer } from 'react';
import { getNextIndex } from '../private/getNextIndex';
import { TAB_BUTTON_LEFT, TAB_BUTTON_RIGHT, TAB_BUTTON_HOME, TAB_BUTTON_END, TAB_BUTTON_ENTER, TAB_BUTTON_SPACE, TAB_BUTTON_TAB, TAB_BUTTON_CLICK, TAB_LIST_UPDATED, TAB_LIST_FOCUSED, TAB_PANELS_UPDATED } from './Tabs.actions';
import tabA11y from './tabA11y';
export var TabsContext = /*#__PURE__*/createContext(null);
export var TabsProvider = function TabsProvider(_ref) {
  var children = _ref.children,
      onChange = _ref.onChange,
      id = _ref.id,
      selectedItem = _ref.selectedItem;

  var _useReducer = useReducer(function (state, action) {
    switch (action.type) {
      case TAB_BUTTON_LEFT:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            focusedTabIndex: getNextIndex(-1, state.focusedTabIndex, state.tabItems.length)
          });
        }

      case TAB_BUTTON_RIGHT:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            focusedTabIndex: getNextIndex(1, state.focusedTabIndex, state.tabItems.length)
          });
        }

      case TAB_BUTTON_HOME:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            focusedTabIndex: 0
          });
        }

      case TAB_BUTTON_END:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            focusedTabIndex: state.tabItems.length - 1
          });
        }

      case TAB_BUTTON_TAB:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            focusedTabIndex: null
          });
        }

      case TAB_BUTTON_ENTER:
      case TAB_BUTTON_SPACE:
      case TAB_BUTTON_CLICK:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            focusedTabIndex: action.value,
            selectedIndex: action.value
          });
        }

      case TAB_LIST_FOCUSED:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            focusedTabIndex: action.value || 0
          });
        }

      case TAB_LIST_UPDATED:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            tabItems: action.tabItems,
            selectedIndex: 0
          });
        }

      case TAB_PANELS_UPDATED:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            panels: action.panels
          });
        }

      default:
        return state;
    }
  }, {
    selectedIndex: 0,
    focusedTabIndex: null,
    tabItems: [],
    panels: []
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      tabsState = _useReducer2[0],
      dispatch = _useReducer2[1];

  return /*#__PURE__*/_jsx(TabsContext.Provider, {
    value: _objectSpread(_objectSpread({}, tabsState), {}, {
      selectedIndex: selectedItem ? tabsState.tabItems.indexOf(selectedItem) : tabsState.selectedIndex,
      selectedItem: selectedItem,
      dispatch: dispatch,
      a11y: tabA11y({
        uniqueId: id
      }),
      onChange: onChange
    })
  }, void 0, children);
};
TabsProvider.displayName = "TabsProvider";