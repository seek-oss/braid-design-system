import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Box } from '../Box/Box';
import { useMenuItem } from './useMenuItem';
export var MenuItem = function MenuItem(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      data = _ref.data,
      tone = _ref.tone;

  var _useMenuItem = useMenuItem({
    tone: tone,
    onClick: onClick,
    data: data
  }),
      menuItemProps = _useMenuItem.menuItemProps,
      MenuItemChildren = _useMenuItem.MenuItemChildren;

  return /*#__PURE__*/React.createElement(Box, _extends({}, menuItemProps, {
    component: "button",
    type: "button"
  }), /*#__PURE__*/_jsx(MenuItemChildren, {
    tone: tone
  }, void 0, children));
};
MenuItem.displayName = "MenuItem";