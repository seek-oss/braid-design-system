import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { IconInfo, IconCritical, IconPositive, IconPromote } from '../icons';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Box } from '../Box/Box';
import { textAlignedToIcon } from '../../atoms/textAlignedToIcon.css';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import buildDataAttributes from '../private/buildDataAttributes';
var icons = {
  positive: IconPositive,
  info: IconInfo,
  promote: IconPromote,
  critical: IconCritical
};
export var Notice = function Notice(_ref) {
  var _ref$tone = _ref.tone,
      tone = _ref$tone === void 0 ? 'info' : _ref$tone,
      data = _ref.data,
      children = _ref.children;
  var Icon = icons[tone];
  return /*#__PURE__*/React.createElement(Box, _extends({
    role: "alert",
    "aria-live": "polite"
  }, data ? buildDataAttributes(data) : undefined), /*#__PURE__*/_jsx(Columns, {
    space: "xsmall"
  }, void 0, /*#__PURE__*/_jsx(Column, {
    width: "content"
  }, void 0, /*#__PURE__*/_jsx(Icon, {
    tone: tone
  })), /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Box, {
    className: textAlignedToIcon.standard
  }, void 0, /*#__PURE__*/_jsx(DefaultTextPropsProvider, {
    tone: tone
  }, void 0, children)))));
};
Notice.displayName = "Notice";