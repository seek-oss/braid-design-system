import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _Divider2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';
import { Hidden } from '../Hidden/Hidden';
import * as hiddenStyles from '../Hidden/Hidden.css';
import { alignToFlexAlign } from '../../utils/align';
import { resolveResponsiveRangeProps } from '../../utils/responsiveRangeProps';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import { negativeMarginTop } from '../../atoms/negativeMargin/negativeMargin';
import { mapResponsiveValue, normalizeResponsiveValue } from '../../atoms/sprinkles.css';
import buildDataAttributes from '../private/buildDataAttributes';
var alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex'
};

var useStackItem = function useStackItem(_ref) {
  var align = _ref.align,
      space = _ref.space;
  return _objectSpread({
    paddingTop: space
  }, align === 'left' ? null : {
    display: mapResponsiveValue(align, function (value) {
      return alignToDisplay[value];
    }),
    flexDirection: 'column',
    alignItems: alignToFlexAlign(align)
  });
};

export var validStackComponents = ['div', 'ol', 'ul'];

var extractHiddenPropsFromChild = function extractHiddenPropsFromChild(child) {
  return child && _typeof(child) === 'object' && 'type' in child && child.type === Hidden ? child.props : null;
};

var resolveHiddenProps = function resolveHiddenProps(_ref2) {
  var screen = _ref2.screen,
      above = _ref2.above,
      below = _ref2.below;
  return screen ? [true, true, true] : resolveResponsiveRangeProps({
    above: above,
    below: below
  });
};

var calculateHiddenStackItemProps = function calculateHiddenStackItemProps(stackItemProps, _ref3) {
  var _ref4 = _slicedToArray(_ref3, 3),
      hiddenOnMobile = _ref4[0],
      hiddenOnTablet = _ref4[1],
      hiddenOnDesktop = _ref4[2];

  var normalizedValue = normalizeResponsiveValue(stackItemProps.display !== undefined ? stackItemProps.display : 'block');
  var _normalizedValue$mobi = normalizedValue.mobile,
      displayMobile = _normalizedValue$mobi === void 0 ? 'block' : _normalizedValue$mobi,
      _normalizedValue$tabl = normalizedValue.tablet,
      displayTablet = _normalizedValue$tabl === void 0 ? displayMobile : _normalizedValue$tabl,
      _normalizedValue$desk = normalizedValue.desktop,
      displayDesktop = _normalizedValue$desk === void 0 ? displayTablet : _normalizedValue$desk;
  return _objectSpread(_objectSpread({}, stackItemProps), {}, {
    display: optimizeResponsiveArray([hiddenOnMobile ? 'none' : displayMobile, hiddenOnTablet ? 'none' : displayTablet, hiddenOnDesktop ? 'none' : displayDesktop])
  });
};

export var Stack = function Stack(_ref5) {
  var _Divider;

  var _ref5$component = _ref5.component,
      component = _ref5$component === void 0 ? 'div' : _ref5$component,
      children = _ref5.children,
      _ref5$space = _ref5.space,
      space = _ref5$space === void 0 ? 'none' : _ref5$space,
      _ref5$align = _ref5.align,
      align = _ref5$align === void 0 ? 'left' : _ref5$align,
      _ref5$dividers = _ref5.dividers,
      dividers = _ref5$dividers === void 0 ? false : _ref5$dividers,
      data = _ref5.data;
  assert(validStackComponents.includes(component), "Invalid Stack component: '".concat(component, "'. Should be one of [").concat(validStackComponents.map(function (c) {
    return "'".concat(c, "'");
  }).join(', '), "]"));
  var stackItemProps = useStackItem({
    space: space,
    align: align
  });
  var stackItems = flattenChildren(children);
  var isList = component === 'ol' || component === 'ul';
  var stackItemComponent = isList ? 'li' : 'div';
  var firstItemOnMobile = null;
  var firstItemOnTablet = null;
  var firstItemOnDesktop = null;
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: component,
    className: negativeMarginTop(space)
  }, data ? buildDataAttributes(data) : undefined), Children.map(stackItems, function (child, index) {
    assert(!(_typeof(child) === 'object' && child.type === Hidden && child.props.inline !== undefined), 'The "inline" prop is invalid on Hidden elements within a Stack');
    var hiddenProps = extractHiddenPropsFromChild(child);
    var hidden = hiddenProps ? resolveHiddenProps(hiddenProps) : [false, false, false];

    var _hidden = _slicedToArray(hidden, 3),
        hiddenOnMobile = _hidden[0],
        hiddenOnTablet = _hidden[1],
        hiddenOnDesktop = _hidden[2];

    if (firstItemOnMobile === null && !hiddenOnMobile) {
      firstItemOnMobile = index;
    }

    if (firstItemOnTablet === null && !hiddenOnTablet) {
      firstItemOnTablet = index;
    }

    if (firstItemOnDesktop === null && !hiddenOnDesktop) {
      firstItemOnDesktop = index;
    }

    return /*#__PURE__*/React.createElement(Box, _extends({
      component: stackItemComponent,
      className: [hiddenProps && hiddenProps.print ? hiddenStyles.hiddenOnPrint : null]
    }, hiddenOnMobile || hiddenOnTablet || hiddenOnDesktop ? calculateHiddenStackItemProps(stackItemProps, hidden) : stackItemProps), dividers && index > 0 ? /*#__PURE__*/_jsx(Box, {
      width: "full",
      paddingBottom: space,
      display: optimizeResponsiveArray([index === firstItemOnMobile ? 'none' : 'block', index === firstItemOnTablet ? 'none' : 'block', index === firstItemOnDesktop ? 'none' : 'block'])
    }, void 0, typeof dividers === 'string' ? _Divider || (_Divider = /*#__PURE__*/_jsx(Divider, {
      weight: dividers
    })) : _Divider2 || (_Divider2 = /*#__PURE__*/_jsx(Divider, {}))) : null, hiddenProps ? hiddenProps.children : child);
  }));
};
Stack.displayName = "Stack";