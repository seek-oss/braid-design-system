import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["label", "children"];
import React from 'react';
import { MenuRenderer } from '../MenuRenderer/MenuRenderer';
import { OverflowButton } from '../iconButtons/OverflowButton/OverflowButton';
import { Box } from '../Box/Box';
import * as styles from './OverflowMenu.css';
export var OverflowMenu = function OverflowMenu(_ref) {
  var label = _ref.label,
      children = _ref.children,
      menuProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MenuRenderer, _extends({
    trigger: function trigger(triggerProps, _ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/_jsx(Box, {
        className: styles.triggerOffset
      }, void 0, /*#__PURE__*/React.createElement(OverflowButton, _extends({
        label: label,
        active: open
      }, triggerProps)));
    },
    align: "right",
    offsetSpace: "small"
  }, menuProps), children);
};
OverflowMenu.displayName = "OverflowMenu";