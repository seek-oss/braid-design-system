import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import buildDataAttributes from '../private/buildDataAttributes';
export var Tag = function Tag(_ref) {
  var onClear = _ref.onClear,
      _ref$clearLabel = _ref.clearLabel,
      clearLabel = _ref$clearLabel === void 0 ? 'Clear' : _ref$clearLabel,
      data = _ref.data,
      children = _ref.children;
  assert(typeof children === 'undefined' || typeof children === 'string', 'Tag may only contain a string');
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex"
  }, data ? buildDataAttributes(data) : undefined), /*#__PURE__*/_jsx(Box, {
    display: "flex",
    minWidth: 0,
    alignItems: "center",
    background: "neutralLight",
    paddingY: "xxsmall",
    paddingLeft: "small",
    paddingRight: onClear ? 'xxsmall' : 'small',
    borderRadius: "full"
  }, void 0, /*#__PURE__*/_jsx(Box, {
    minWidth: 0,
    title: children
  }, void 0, /*#__PURE__*/_jsx(Text, {
    baseline: false,
    truncate: true
  }, void 0, children)), onClear ? /*#__PURE__*/_jsx(Box, {
    flexShrink: 0,
    display: "flex",
    paddingLeft: "xxsmall"
  }, void 0, /*#__PURE__*/_jsx(ClearButton, {
    label: clearLabel,
    onClick: onClear
  })) : null));
};
Tag.displayName = "Tag";