import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Box } from '../../Box/Box';
import * as styles from './Truncate.css';
export var Truncate = function Truncate(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsx(Box, {
    component: "span",
    display: "block",
    overflow: "hidden",
    className: styles.truncate
  }, void 0, children);
};
Truncate.displayName = "Truncate";