import _extends from "@babel/runtime/helpers/extends";
import React, { useContext } from 'react';
import { Box } from '../Box/Box';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './HiddenVisually.css';
export var HiddenVisually = function HiddenVisually(_ref) {
  var id = _ref.id,
      data = _ref.data,
      children = _ref.children;
  var inText = Boolean(useContext(TextContext));
  var inHeading = Boolean(useContext(HeadingContext));
  var component = inText || inHeading ? 'span' : 'div';
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: component,
    id: id,
    position: "absolute",
    overflow: "hidden",
    className: styles.root
  }, data ? buildDataAttributes(data) : undefined), children);
};
HiddenVisually.displayName = "HiddenVisually";