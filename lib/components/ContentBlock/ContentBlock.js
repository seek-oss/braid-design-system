import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../Box/Box';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './ContentBlock.css';
export var ContentBlock = function ContentBlock(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'medium' : _ref$width,
      data = _ref.data,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Box, _extends({
    width: "full",
    maxWidth: width,
    className: styles.marginAuto
  }, data ? buildDataAttributes(data) : undefined), children);
};
ContentBlock.displayName = "ContentBlock";