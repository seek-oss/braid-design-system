import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";

var _IconTick;

import React from 'react';
import { Box } from '../Box/Box';
import { IconTick } from '../icons/IconTick/IconTick';
import { useMenuItem } from '../MenuItem/useMenuItem';
import * as styles from './MenuItemCheckbox.css';
export var MenuItemCheckbox = function MenuItemCheckbox(_ref) {
  var children = _ref.children,
      onChange = _ref.onChange,
      checked = _ref.checked,
      data = _ref.data;

  var _useMenuItem = useMenuItem({
    onClick: function onClick() {
      return onChange(!checked);
    },
    formElement: true,
    data: data
  }),
      menuItemProps = _useMenuItem.menuItemProps,
      MenuItemChildren = _useMenuItem.MenuItemChildren;

  return /*#__PURE__*/React.createElement(Box, _extends({}, menuItemProps, {
    "aria-checked": checked,
    role: "menuitemcheckbox",
    component: "button",
    type: "button",
    display: "flex"
  }), /*#__PURE__*/_jsx(Box, {
    borderRadius: "standard",
    boxShadow: "borderField",
    position: "relative",
    background: "card",
    marginRight: "xsmall",
    className: styles.checkboxBorder
  }, void 0, /*#__PURE__*/_jsx(Box, {
    position: "absolute",
    width: "full",
    height: "full",
    background: "formAccent",
    borderRadius: "standard",
    transition: "fast",
    opacity: checked ? undefined : 0,
    className: styles.checkboxPadding
  }, void 0, _IconTick || (_IconTick = /*#__PURE__*/_jsx(IconTick, {
    size: "fill"
  })))), /*#__PURE__*/_jsx(MenuItemChildren, {
    tone: undefined
  }, void 0, children));
};
MenuItemCheckbox.displayName = "MenuItemCheckbox";