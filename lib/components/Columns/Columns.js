import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React, { createContext } from 'react';
import { Box } from '../Box/Box';
import { negativeMarginLeft } from '../../atoms/negativeMargin/negativeMargin';
import { resolveCollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';
import { normalizeResponsiveValue } from '../../atoms/sprinkles.css';
import buildDataAttributes from '../private/buildDataAttributes';
export var ColumnsContext = /*#__PURE__*/createContext({
  collapseMobile: false,
  collapseTablet: false,
  mobileSpace: 'none',
  tabletSpace: 'none',
  desktopSpace: 'none',
  collapsibleAlignmentChildProps: null
});
export var Columns = function Columns(_ref) {
  var children = _ref.children,
      collapseBelow = _ref.collapseBelow,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 'none' : _ref$space,
      align = _ref.align,
      alignY = _ref.alignY,
      data = _ref.data;
  var normalizedSpace = normalizeResponsiveValue(space);
  var _normalizedSpace$mobi = normalizedSpace.mobile,
      mobileSpace = _normalizedSpace$mobi === void 0 ? 'none' : _normalizedSpace$mobi,
      _normalizedSpace$tabl = normalizedSpace.tablet,
      tabletSpace = _normalizedSpace$tabl === void 0 ? mobileSpace : _normalizedSpace$tabl,
      _normalizedSpace$desk = normalizedSpace.desktop,
      desktopSpace = _normalizedSpace$desk === void 0 ? tabletSpace : _normalizedSpace$desk;

  var _resolveCollapsibleAl = resolveCollapsibleAlignmentProps({
    collapseBelow: collapseBelow,
    align: align,
    alignY: alignY,
    reverse: reverse
  }),
      collapsibleAlignmentProps = _resolveCollapsibleAl.collapsibleAlignmentProps,
      collapsibleAlignmentChildProps = _resolveCollapsibleAl.collapsibleAlignmentChildProps,
      collapseMobile = _resolveCollapsibleAl.collapseMobile,
      collapseTablet = _resolveCollapsibleAl.collapseTablet,
      orderChildren = _resolveCollapsibleAl.orderChildren;

  return /*#__PURE__*/React.createElement(Box, _extends({}, collapsibleAlignmentProps, {
    className: negativeMarginLeft({
      mobile: collapseMobile ? 'none' : mobileSpace,
      tablet: collapseTablet ? 'none' : tabletSpace,
      desktop: desktopSpace
    })
  }, data ? buildDataAttributes(data) : undefined), /*#__PURE__*/_jsx(ColumnsContext.Provider, {
    value: {
      collapseMobile: collapseMobile,
      collapseTablet: collapseTablet,
      mobileSpace: mobileSpace,
      tabletSpace: tabletSpace,
      desktopSpace: desktopSpace,
      collapsibleAlignmentChildProps: collapsibleAlignmentChildProps
    }
  }, void 0, orderChildren(children)));
};
Columns.displayName = "Columns";